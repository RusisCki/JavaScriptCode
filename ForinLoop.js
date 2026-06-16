let YesIsMe = {
    name : "Mg Toe Naing Win" ,
    age : 18 ,
    city : " Wundwin",
    relationship : "Single",
    work : "Bla Bla"

}
//Output for Property
 for (let Property in YesIsMe)
{
    console.log(Property);
}

//Output for Values

for (let popr in YesIsMe)
{
    console.log (YesIsMe[popr]);
}

//Output for both

for (let pop in YesIsMe)
{
    console.log(pop,"is",YesIsMe[pop]);
}