// Destruction , Spread Operator and Reset parameter

    //Destruction is to store the value from Object and array

const Me  = {
    name  : "Mg Toe Naing Win" ,
    age : 18 ,
    city : "Wundwin",
    work : "Cu Students",
    relation :"Single"
}

// old way

const nmae = Me.name ;
const age1 =Me.age ;
const city1 =Me.city ;

// Now ES6

const {name,age,city,work,relation} = Me ;

const num = [1,2,3,4,5,6,7,8,9,];


//Old way

const num1 = num[0];//1
const num2 = num[4];//5

const [num3,num4,num5,num6] = num ;//1,2,3,4
const [num7,num8, ,, ,, ,num9] =num;
//The value of num7 is 1
//The value of num9 is 8

//Spread Operator(...)
//Spread Operator is to copy the value from Array and Object

 //Old Way

 const copyObject = Object.assign({},Me);
 console.log(copyObject);

 const copyArray = [].concat(num);
 console.log(copyArray);

 //SE6

 const copyObject6 = {...Me}
 console.log(copyObject6) ;

 const copyArray6 = [...num] ;
 console.log(copyArray6);

 //Reset Paratmeter
 // Reset Parametre is to get the value from parameter

 const Sum = (...param) =>
 {
    let total = 0 ;
    for (let i = 0 ; i<param.length ; i++)
    {
        total += param[i] ;
    }
    console.log("The total is",total) ;
    return total ;
 }
 Sum (1,2,34,5,66,757,12) ;