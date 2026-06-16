let num = 1;

while (num < 10)
{
    console.log("The number is",num)
    num ++ ;
}

let stateus = true ;

while (stateus)
{
    let num = prompt ("Enter number between 1 and 100");
    const intnum = parseInt(num,10);
    if (intnum > 1 && intnum <100)
    {
        console.log("Your  number is",intnum);
        stateus = false;
    }
}