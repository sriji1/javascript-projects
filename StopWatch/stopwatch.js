var min =document.querySelector('.min');
var sec =document.querySelector('.sec');
var milisec =document.querySelector('.milisec');

var startbtn= document.querySelector('#btn1'); 
var stopbtn= document.querySelector('#btn2'); 
var resetbtn= document.querySelector('#btn3'); 

     let mymin = 0;
     let mysec = 0;
     let mymilisec = 0;

let timeron=null;
function  changetimer(){
    console.log(timeron);
     mymilisec++;
     if(mymilisec==100){
        mymilisec=0;
        mysec++;
     }

     if(mysec==60){
        mysec==0;
        mymin++;
     }

     (mymilisec<10)?milisec.innerHTML=`0${mymilisec}`:milisec.innerHTML=`${mymilisec}`;
     (mysec<10)?sec.innerHTML=`0${mysec}`:sec.innerHTML=`${mysec}`;
     (mymin<10)?min.innerHTML=`0${mymin}`:min.innerHTML=`${mymin}`;

}

startbtn.addEventListener('click',function(){
    if(timeron!==null){
        clearInterval(timeron);
    }
      timeron= setInterval(changetimer,10);
    //   console.log(timeron);
});
stopbtn.addEventListener('click',function(){
      clearInterval(timeron);
    
});
resetbtn.addEventListener('click',function(){
    clearInterval(timeron);
      mymilisec=mymin=mysec=0;
      milisec.innerHTML=`00`;
      sec.innerHTML=`00`;
      min.innerHTML=`00`;

    // location.reload();
});