// Continue is next to
//Break is to Stop

const EngGroup = [
    {no :1,name :"Mg Toe Naing Win",email :"19toenaingwin",age : 18 , gender :"Male"},
    {no :2,name :"Mg Thiha Tun",email : "thihatun2022",age :19 ,gender :"Male"},
    {no :3,name :"Ma SoeThander",email :"soethander102",age :19,gender :"Female"},
    {no :4,name :"Mg Pyae Sone Hein",email :"pyaephyohein122",age : 20 ,gender :"Male"},
    {no :5,name :"Ma Khin Chan Myae Zaw",email :"khinchanmayezaw2021",age :19 ,gender :"Female"}
]

for (let i = 0 ; i <EngGroup.length ; i++)
{
    let value  = EngGroup [i] ;
    if ( value.gender === 'Female')
    {
        continue;
    }
    console.log("The boy member are",value.name,".") ;
}

for (let i = 0; i<EngGroup.length ; i ++)
{
    let income = EngGroup [i] ;

    if (income.no === 4)
    {
        break ;
    }
    if (income.gender === 'Male')
    {
        console.log ("The first three member is",income.name,".He is",income.age,"and",
        "His email is",income.email) ;
    }
    else{
        console.log ("The first three member is",income.name,".He is",income.age,"and",
        "Her email is",income.email) ;
    }
  
}

let i = 0 ;

while (i <EngGroup.length)
{
    let Comer = EngGroup [i] ;
    if (i === 1)
    {
        console.log("The Error will come up") ;
        continue ;
    }
    console.log ("Once Time will run") ;
    i++ ;
}

//Above code run One time and infinity run 