//Fuction with many Parameter

let num = 0 ;

function calculate (num1 , num2 , num3)
{
    num = num1 - num2 * num3 ;
}
calculate ( 3 , 5 , 4);

//Function with Return

function getNumber ( num)
{
    return num ;
}
const number = getNumber (23) ;

//The Arrow Function

const arrow = (num1 , num2) =>
{
   return num1 / num2 ;
}