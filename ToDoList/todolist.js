
const parentdiv = document.querySelector('.container');
const addbtn=document.querySelector('#addbtn');
const textdetails= document.querySelector('#desc');
const crossbtn = document.querySelector('#cross');
const list = [];
var removebtns;

document.querySelector('.btn').addEventListener('click',function(){
    document.querySelector('body #overlay').style.display='block';
    textdetails.value="";
});

addbtn.addEventListener('click',function(e){
    // e.preventDefault();
    if(textdetails.value!==""){
    document.querySelector('span').style.display='none';
var newdiv= document.createElement('div');
newdiv.classList.add('box');
newdiv.innerHTML=`<div class='details'></div><img class='remove' src='./images/delete.png' alt='delete'>`; 
newdiv.querySelector('.details').innerHTML=textdetails.value; 
var text = textdetails.value;
console.log(text);
// console.log(entry);
localStorage.setItem("todo1",JSON.stringify(text));
// localStorage.setItem('to-do',text);
// localStorage.getItem('to-do');
parentdiv.appendChild(newdiv); 
 removebtns = document.querySelectorAll('.remove');
document.querySelector('body #overlay').style.display='none';
textdetails.value="";
    }  
   else if(textdetails.value===""){
       document.querySelector('span').style.display='block';
    }
    
    for(let i=0;i<removebtns.length;i++){
    removebtns[i].addEventListener('click',()=>{
        removebtns[i].parentElement.remove();
});
    }

});

crossbtn.addEventListener('click',function(){
    document.querySelector('span').style.display='none'; 
    document.querySelector('body #overlay').style.display='none';
});



 