//Callback Function
//This is will not useful for small function

const First = (callback) =>
{
    console.log("I am the first");
    console.log("I want to go Time City");

    callback() ;
}

const second = () =>
{
    console.log("Hey I am coming to you") ;
}

First(second) ;