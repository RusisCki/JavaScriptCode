const two = [[12,13,14],[15,16],[17,18,19],[1223,1233,442,566,7888]];

 for ( let i = 0 ; i < two.length; i++)
 {
    let innterarray  = two[i];

    for (let j = 0 ; j<innterarray.length ;j++)
    {
        let value = innterarray [j] ;
        console.log("The number in array is",value);
        
    }
 }

 const twoarrrayObject = [
    [
        {name : "Mg Toe Naing Win",
        email :"19toenaingwin",
        city  :"Wundwin"
    },19,"CuStudent"
    ],
    ["Dog","Cow","Ox"],
    ["Book","Table","Pen"],
    [19,12]
 ];

 for ( let i = 0 ; i < twoarrrayObject.length; i++)
 {
    let innterarrayObj  = twoarrrayObject[i];

    for (let j = 0 ; j<innterarrayObj.length ;j++)
    {
        let valueObj = innterarrayObj [j] ;
        
        console.log("The information is",valueObj);
        
    }
 }