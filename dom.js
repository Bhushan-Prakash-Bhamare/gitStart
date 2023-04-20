document.querySelector('#main-header').style.borderBottom="3px solid black";
    const add=document.getElementsByClassName('title');
    add[0].style.fontWeight="bold"; 
    add[0].style.color="green"; 
    const list=document.getElementsByClassName('list-group-item');
    list[2].style.backgroundColor='green';
    for(let i=0;i<list.length;i++)
    {
        list[i].style.fontWeight='bold';
    }
