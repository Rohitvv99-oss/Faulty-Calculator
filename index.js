/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/
const random = Math.random()
console.log(random)
let a=parseFloat(prompt("Enter first number: "))
let c=prompt("Enter operator(+, -, *, or /): ")
let b=parseFloat(prompt("Enter second number: "))

let obj = {
"+": "-",
"*": "+",
"-": "/",
"/": "**"
}



if( (random < 0.1) ){
if(c === "+"){
   console.log(a - b)
}
else if(c === "-"){

   console.log(a/b)
}
else if(c === "*"){

   console.log(a+b)
}
else if(c === "/"){

   console.log(a**b)
}
 
}


else{
   if( (random > 0.1) ){
      if(c === "+"){
         console.log(a + b)
      }
      else if(c === "-"){
      
         console.log(a-b)
      }
      else if(c === "*"){
      
         console.log(a*b)
      }
      else if(c === "/"){
      
         console.log(a/b)
      }
       
      }
   console.log("error")

}







