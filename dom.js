let forms=document.getElementById('my-form');
forms.addEventListener('submit',addData);


function addData(e)
{
    e.preventDefault();
    let nameInput=document.getElementById('name').value;
    let emailInput=document.getElementById('email').value;
    let myobj={
        name:nameInput,
        email:emailInput
    } 
    let myobj_s=JSON.stringify(myobj);
    localStorage.setItem(emailInput,myobj_s);
    showUser(myobj);
}
function showUser(myobj)
{
    var parentElem=document.getElementById('users');
    const childElem=document.createElement('li');
   // childElem.className='del-list';
    childElem.textContent=myobj.name+'-'+myobj.email+" "; 
    const deletebtn=document.createElement('button');
   // deletebtn.className='btn1';
    deletebtn.textContent='Delete';
    childElem.appendChild(deletebtn);
    parentElem.appendChild(childElem);

    deletebtn.addEventListener('click',function(){
        removeItem(event,myobj,parentElem);
    });
}

function removeItem(e,myobj,parentElem)
{
            let item=e.target.parentElement;
            parentElem.removeChild(item); 
            localStorage.removeItem(myobj.email);
}