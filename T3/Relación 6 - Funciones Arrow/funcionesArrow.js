
//EJERCICIO 1

/*function sum(num1, num2){
 return num1 + num2
}*/
const sum=(num1,num2)=>num1+num2;


/*function stringLength(str){
 console.log(`the length of "${str}" is:`, str.length)
}*/
const stringLength=str => console.log(`the length of "${str}" is:`, str.length)


/*function stringLength(str){
 let length = str.length
 console.log(`the length of "${str}" is:`, length)
 return str.length
}*/
const stringLength2 = (str) => {
  let length = str.length;
  console.log(`the length of "${str}" is:`, length);
  return length;
};




let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweetpotato -- and I LOOOOVE POTATOES"];
/*function showAlert(name){
 alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
}
showAlert("you ball of fluff")*/

const showAlert= name => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`);



//Ejercicio 2
const hello=(name,age)=>{return`Hello, I am ${name}, and I am ${age} years old.`};


//Ejercicio 3
const sumArray = (arr) => {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};



//Ejercicio 4
let eye = "eye";
const fire = () => `bulls-`;


//Ejercicio 9
const fibonacci = (n) => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};