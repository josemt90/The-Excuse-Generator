let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


function onLoad(array1,array2,array3) {

     
    return `${array1[Math.floor(Math.random()*who.length)]}  ${array2[Math.floor(Math.random()*what.length)]}  ${array3[Math.floor(Math.random()*when.length)]}`
    
}


 document.querySelector("#excuse").innerHTML = `<h1> ${onLoad(who,what,when)} </h1>`