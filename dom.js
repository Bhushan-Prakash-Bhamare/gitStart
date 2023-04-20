// const item2=document.querySelector('.list-group');
// console.log(item2);
// item2.children[1].style.backgroundColor='green'
// item2.children[2].style.display='none';
const list1=document.querySelectorAll('.list-group-item');
list1[1].style.color='green';
var listodd=document.querySelectorAll('.list-group-item:nth-child(odd)');
for(let i=0;i<listodd.length;i++)
{
    listodd[i].style.backgroundColor='green';
}