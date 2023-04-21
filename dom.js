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
}