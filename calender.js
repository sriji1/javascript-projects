const mydate = new Date();
// console.log(mydate);

const showCalender= () => {
    const monthfirstday = mydate.getDay();
    // console.log(monthfirstday);
    
    const lastdate = new Date(mydate.getFullYear(),mydate.getMonth()+1,0).getDate();
    // console.log(lastdate);
    
    const prevmonthDays =  new Date(mydate.getFullYear(),mydate.getMonth(),0).getDate();
      console.log(prevmonthDays);
    
    const  monthlastday = new Date(mydate.getFullYear(),mydate.getMonth()+1,0).getDay();
    
    //  console.log(monthlastday);
    
    const nextmonthdays = 7- monthlastday -1;
    
    
    const allmonths=["January","February","March","April","May","June","July",
    "August","September","October","November","December",]
    
    const monthdays= document.querySelector(".days")
    
    document.querySelector(".date h1").innerHTML = allmonths[mydate.getMonth()];
    
    document.querySelector(".date p").innerHTML= new Date().toDateString();
    
    
    let days="";
    
    for(let x= monthfirstday;x>0;x--){
        days +=`<div class="prev-date">${prevmonthDays-x+1}</div>`
    }
    


    for(let i=1; i<=lastdate;i++){
        if(i===new Date().getDate() && mydate.getMonth()===new Date().getMonth()){
            days += `<div class="today">${i}</div>`;
        }
        else{
        days += `<div>${i}</div>`;
        }
    }
    

    
    for(let j=1;j<=nextmonthdays;j++){
        days += `<div class="next-date">${j}</div>`;
    }
      monthdays.innerHTML=days;

}


document.querySelector('.prev').addEventListener('click',()=>{
    mydate.setMonth(mydate.getMonth()-1);
    showCalender();
})

document.querySelector('.next').addEventListener('click',()=>{
    mydate.setMonth(mydate.getMonth()+1);
    showCalender();
})

showCalender();