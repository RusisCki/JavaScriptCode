//Eg1
try 
{
    const num = 10 ;
    num ++ ;
    console.log ("I have this error")
}catch(error){
    console.log("Your error is",error)
}

//Eg2

let users = ["MgToeNaingWin","MgToe","SayarToe","ToeGyi"];

 const firstfunction = () =>
 {
    
     for (const i = 0 ; i <users.length ; i ++)
     {
        console.log ("I am the first Winer!")
     }
 }
 
 const secondfunction = () =>
 {
    console.log("I am Second Winer!");
 }
 const thirdfunction = () =>
 {
    console.log ("I am third Winer pr -_-") ;
 }

 try 
 {
    firstfunction () ;
 }catch (error)
 {
    console.log("Your error is",error);
 }
 secondfunction () ;
 thirdfunction () ;