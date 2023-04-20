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
    // const newli=document.getElementsByClassName("list-new");
    // newli[0].style.backgroundColor='yellow';
    // newli[0].style.fontWeight='bold';
    // newli[0].style.height='50px';
    // newli[0].style.border='1px solid grey';
    // newli[0].style.padding='13px';
    // newli[0].style.paddingLeft='20px';
    // newli[0].textContent="Item 5";
    // newli[0].style.listStyle='none';
    const tagname=document.getElementsByTagName('li');
    tagname[4].style.backgroundColor='yellow';
    tagname[4].style.fontWeight='bold';
    tagname[4].style.height='50px';
    tagname[4].style.border='1px solid grey';
    tagname[4].style.padding='13px';
    tagname[4].style.paddingLeft='20px';
    tagname[4].textContent="Item 5";
    tagname[4].style.listStyle='none';