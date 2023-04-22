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
    childElem.textContent=myobj.name+'-'+myobj.email+" "; 
    const deletebtn=document.createElement('button');
    deletebtn.textContent='Delete';

    const editbtn=document.createElement('button');
    editbtn.textContent='Edit';
    childElem.appendChild(deletebtn);
    childElem.appendChild(editbtn);
    parentElem.appendChild(childElem);

    deletebtn.addEventListener('click',function(){
        localStorage.removeItem(myobj.email);
         parentElem.removeChild(childElem); 
    });
    editbtn.addEventListener('click',function(){
         localStorage.removeItem(myobj.email);
         parentElem.removeChild(childElem); 
         document.getElementById('name').value=myobj.name;
         document.getElementById('email').value=myobj.email;
    });
}