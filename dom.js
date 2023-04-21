let listitems=document.querySelector('.list-group');
let inputt=document.getElementById('item');
let form=document.getElementById('addForm');
form.addEventListener('submit',additem);

listitems.addEventListener('click',removeitem);

function additem(e)
{
    e.preventDefault();
    let newli=document.createElement('li');
    let textelem=inputt.value;
    newli.className="list-group-item";
    newli.append(textelem);

    let deletebtn=document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('x'));
    newli.appendChild(deletebtn);

    let editbtn=document.createElement('button');
    editbtn.className='btn btn-sm float-right edit';
    editbtn.appendChild(document.createTextNode('edit'));
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