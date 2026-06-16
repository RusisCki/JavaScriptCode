//Array fliter use callback function

const Customer =
[
    {name :"U Mya" , email : "mgmyawin@gmal.com" ,age : 47 ,city :"Wundwin"},
    {name :"Daw La Win", email : "dawlawin@gamil.com",age : 35 ,city :"Mekitla"},
    {name :"Mg Tin Win Kying", email :"thinwinkying@gmail.com",age :28 ,city :"Nay Pyi Taw"},
    {name :"Mg Myue Myue Zi La",email :"myuemyuexi@gmail.com",age :24 ,city :"Myit Gyi Na"},
    {name :"Ma Nan Khan Shwe",email :"nankhan@gmail.com",age : 17,city :"Taunngyi"},
    {name :"Mg Joe VarZu",email :"joevarzu@gmail.com",age :18 ,city :"Sis Tway"},
    {name :"Mg Virco",email :"sayarvirco@gmail.com",age : 17,city :"Wundwin"},
    {name :"Mg Aung La N Sing", email :"aungaung@gmail.com", age :19,city :"Mekitla"},
    {name :"Ma Shwe La Naw Phaw", email :"nawnaw@gmail.com",age :18 ,city :"BarAunt"}
]

const fliting1 = (arrayElement) =>
{
    return arrayElement.age>20 ;
}

let result1 = Customer.filter(fliting1) ;

const fliting2 = (arrayElement) =>
{
    let stateus = false ;
    stateus = arrayElement.age<20 && arrayElement.city==='Wundwin' ;
    return stateus ;
}

let result2 = Customer.filter(fliting2) ;
