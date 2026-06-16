let head = document.querySelector("#HM") ;
head.style.color = "green" ;

let MGTOE = document.querySelector(".mgtoe") ;

MGTOE.style.color ="red" ;
  
 let Person = 
 {
    name : "Mg Toe Naing Win" ,
    parents :["U Win Naing" ,"Daw Khin Soe Wai"] ,
    bro  :"Mg Thi" ,
    age : 19 
 }

 let Shower = 
 `
   <h1> Hello I am ${Person.name} </h1>
   <ul>
   <li>My Dad is ${Person.parents[0]} </li>
   <li>My Mom is ${Person.parents[1]} </li>
   <li>My bro is ${Person.bro} </li>
   <li> I am ${Person.age}
   </ul>
 `;
 document.querySelector(".para").innerHTML = Shower ;
 alert("Hello I am beginner") ;

 let stateus = true ;

while (stateus)
{
    let num = prompt ("Enter number between 1 and 100 to describe your infomation");
    const intnum = parseInt(num,10);
    if (intnum > 1 && intnum <100)
    {
        console.log("Your  number is",intnum);
        stateus = false;
    }
}