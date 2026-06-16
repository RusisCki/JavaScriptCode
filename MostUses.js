// The Most uses Method and Propertie

//In String
 const Str = "Hello welcome to Myanmar" ;

 let l = Str.length ;
 let Up =Str.toUpperCase() ;
 let Low=Str.toLowerCase() ;
 let ind =Str.indexOf("e") ;

 let num = "10" ;
 let pars = parseInt(num,10);
 let str = pars.toString() ;

 //In Object
 const MePr = {
    name : "Mg Toe Naing Win",
    age : 18 ,
    city : "Wundwin",
    height : 5/8,
    job : "Computer University Student ",
    walk : () =>
    {
        alert("I am walking at the Evening");
    },

    time  : "My Prime Time"
}
let keys = Object.keys(MePr) ;
let value =Object.values(MePr) ;
let Sis = MePr.hasOwnProperty("age");

//In Array

const Customer =[
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

Customer.length ;
Customer.push("BoBo") ;

let sliper  = Customer.slice(1,5); // kana u

let spler =Customer.splice(3,6);
let joiner =Customer.join("and");