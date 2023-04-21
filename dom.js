let forms=document.getElementById('my-form');
forms.addEventListener('submit',addData);

function addData(e)
{
    e.preventDefault();
    let nameInput=document.getElementById('name').value;
    localStorage.setItem(nameInput,nameInput);

    let emailInput=document.getElementById('email').value;
    localStorage.setItem(emailInput,emailInput);
}