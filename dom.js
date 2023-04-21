let listitems=document.querySelector('.list-group');
let inputt=document.getElementById('item');
let form=document.getElementById('addForm');
let filter=document.querySelector('#filter');

form.addEventListener('submit',additem);

listitems.addEventListener('click',removeitem);

filter.addEventListener('keyup',filteritem);

function additem(e)
{
    e.preventDefault();
    let newli=document.createElement('li');
    let inputdesc=document.getElementById('item-desc').value;
    let textelem=inputt.value;
    newli.className="list-group-item";
    newli.appendChild(document.createTextNode(textelem+" "));
    
    newli.appendChild(document.createTextNode(inputdesc));

    let deletebtn=document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('x'));
    newli.appendChild(deletebtn);

    let editbtn=document.createElement('button');
    editbtn.className='btn btn-sm float-right edit';
    editbtn.appendChild(document.createTextNode('EDIT'));
    newli.appendChild(editbtn);    

    listitems.appendChild(newli);
   
}
function removeitem(e)
{
    if(e.target.classList.contains('delete'))
    {
        let li=e.target.parentElement;
        listitems.removeChild(li);
    }
}
function filteritem(e)
{
    let text=e.target.value.toLowerCase();
    console.log(text);
    let items=document.querySelectorAll('.list-group-item');
    console.log(items);
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        var itemDesc=item.firstChild.nextSibling.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1||itemDesc.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block';
        }   
        else 
            item.style.display='none';       
    });
}