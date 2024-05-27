//--------------------Question No : 01----------------------------
let fruits : string[] = ["apple","banana","mango","orange"]
console.log(fruits,"Fruit")

//-------------------Question No : 02------------------------------
let number : number[] = [10,20,30,40];
console.log(number,"Number")

//-------------------Question No : 03-----------------------------
let thirdFruit : string = fruits[2]
console.log(thirdFruit,"Third Fruit")

//-------------------Question No : 04-----------------------------
number[1] = 25;
console.log(number,"change the second element of the number to 25")

//--------------------Question No : 05---------------------------
fruits.push("grapes")
console.log(fruits,"Add the element grapes to the end of the fruit array")

//---------------------Question No : 06------------------------
let lastfruits = fruits.pop()
console.log(fruits,"Remove the last element from the fruit array")

//--------------------Question No : 07---------------------------
let firstfruits = fruits.shift()
console.log(fruits,"Remove the first element from the fruit array")

//-------------------Quuestion No : 08----------------------------
fruits.unshift("Kiwi")
console.log(fruits , "Add the element to the begning of the fruits array")

//------------------Question No : 09-------------------------------
fruits.splice(1,2)
console.log(fruits);

//-----------------Question No : 10--------------------------------
fruits.splice(2,0,"pinapple","pear")
console.log(fruits);

//-----------------Question No :11---------------------------------
let citrusFruits = fruits.slice(0,2)
console.log(citrusFruits);

//------------------Question No : 12-------------------------------
let lastTwoFruits = fruits.splice(2,2)
console.log(lastTwoFruits);