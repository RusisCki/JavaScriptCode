//For Loop No =>, Yes =>;

for (let i = 1 ; i <= 5; i ++)
{
    console.log("Hello I am start Studying For Loop",i);
}

let Customer =
[
    {name : "Mg Toe Naing Win", age : 18,city : "Wundwin",email :"19toenaingwin@gmail.com"},
    {name :"Mg Thiha Tun",age : 19,city :"Nay Pyi Taw",email :"thihatun2022@gamil.com"},
    {name : "Mg Pyae Sone Hein",age :20, city :"Mekitla",email:"pyaesonehein120@gmail.com"}
]

for ( let i = 0 ; i < Customer.length ; i ++)
{
    const sendEmail = Customer[i].email ;
    console.log ("Sending email is ",sendEmail);
}

for (let i = 0 ; i < Customer.length ; i++)
{
    const name = Customer[i].name;
    const age = Customer [i].age ;
    if ( age === 18)
    {
        console.log ("My name is",name);
    }
    else
    {
        console.log ("My friend name is ",name)
    }
}

//Another way

for (let i = 0 ; i < Customer.length ; i++)
{
    const name = Customer[i].name;
    const age = Customer [i].age ;
    if ( age === 18)
    {
        myname = (name)
    }
    else
    {
        console.log ("My friend name is ",name)
    }
    const sendname = (myname) =>
    {
        console.log("My name is ",name)
    }
}