
function foo(){
    var cc=document.getElementById("text").Value;
console.log(cc);

async function getdata(){
    let data= await fetch(`https://cataas.com/api/cats?tags=cute/${cc}`);
    let result=await data.json();
    console.log(result);
}
getdata();
}