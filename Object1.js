//Object is the collection of primitives data;

const Person1 = {
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

//There are two to call Object Dot way and Bakent way

Person1.name ;
Person1.age ;
Person1.walk();
Person1["age"];
Person1["city"];

//We can update and add Object

const value1= "Saw Lay ChuppyBody";
const value2 = 1500 ;

const Love = "I have " +value1 ;

Person1[Love] = value2 ;

//We can add Object to new Object ;

const goals = 
{
    first : "Better than Coding",
    second : "Better than at English",
    third : "More Happy Without another help!"
}

Person1.Dream = goals ;

//To Show Double Object

Person1.Dream.second ;