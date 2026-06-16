//There are two kind of Scope
// Local Scope and Global Scope
let SayarGyi = "I am Sayar Gyi"
const Scope = () =>
{
    let name = "Mg Toe Naing Win" ;
    var city ="Wundwin";
    work ="Student";
    const age = "Eighteen" ;//Above are local Scope
    console.log(work);
    console.log(city);
    console.log(SayarGyi);
    const Cope = () =>
    {
        console.log(age);
    }
}
Scope().Cope;

try 
{
    console.log(name);
console.log(city);
console.log(work);
console.log(age);//Globle Output
}catch(err)
{
    console.log("The errer is",err);
}


