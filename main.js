// Exercise no 1

// 1, create a variable named "Price" and set it to a specific price value.
// 2, create a variable named "Product" and set it to a specific product name.
// 3,create a variable named "Tax" and set it to a specific tax value.
//4, print the name of the product.
//5, calculate the total price amount,including tax(total=Price+Tax),and then print it.

var Price = 78000;
var Product= "Smasung S24"
var Tax = 500;

console.log("Product name:",Product);
console.log("Total amount:",Price+Tax);

// Exercise no 2

// Declare a variable named "FruitName".
// Declare a variable named "Count".
// Declare a variable named "Price" and set it to the price of the fruit.

// Declare a variable named "total" and calculate it by multiplying the "Count" by the "Price".

//Print the name of the fruit.
//Print the total price of the fruit.

var FruitName = "Orange";
var Count = 5;
var Price = 10;

var total = Count*Price;
console.log("Name of the fruit:",FruitName)
console.log("Total Price:",total)


// function

function samsung(){
    console.log("hi there")
}

function iPhone(){
    console.log("iPhone")
}

function Redme(){
    console.log("Oppo")
}
samsung()
iPhone()
Redme()

// function excercise 1

//  create two variables a and b, create a function called add .This function should print addition of two numbers.


function Add(){
    let a = 10;
    let b = 20;
    console.log("Addition of two numbers are",a+b)
}

Add()

// function excercise 2

// create a variable called factor,fplayer,fmovie,create a function called favorite(),Every time you call this function ,
//this function should rturn favorite actor,favaorite player, favorite movie

function favorite(){
    let factor ="Mohanlal";
    let fmovie = "Narasimham"
    let fplayer="Saina Nehwal"

    console.log("Favorite actor:"+factor)
    console.log("Favorite Movie:"+fmovie)
    console.log("Favorite player:"+fplayer)
}

favorite()

// function excercise 3

// create function called area() ,This function should get 2 values as parameter(length,breadth)
//pass two values to the function and print the result

function Area(length,breadth)
{
    var area = length*breadth;
    console.log("Area",area)
}

Area(100,200)

// function excercise 4

// create a function called Add , which should take 2 parameters a ,b and it should return 
// the addition of two variable


function Add(a,b){
    return a+b;

}
var c = Add(10,20)
console.log("Add",c)


// conditional statements
var rain = true;
if(rain)
{
    console.log("It is raining")
}else{
    console.log("not raining")
}


//conditional statements 2

var color = "red"

if(color == "red"){
    console.log("stop")

}

//conditional statements 3

var score = 70;

if(score<=50){
    console.log("You need to improve")
}
else if(score>50 && score<70){
    console.log("Good job!")
}
else if(score>=70){
    console.log("Excellent performance!")

}

//conditional statements 4

var num = 10;

if(num%2 == 0){
    
    console.log("This is even number")

}

else{
    console.log("This is odd number")
}

//conditional statements 5

var charecter = "a";

if(charecter === "a" || charecter === "e"  || charecter === "i"  || charecter === "o"  || charecter === "u"  ){
    console.log("charecter is a vowel")

}else {
    console.log("charecter is Consonent")
}

// for loop 1

// print all the numbers from 1 to 10 using a "for loop".


for(i=1;i<=10;i++)
{
    console.log(i)
}

// for loop 2

// print  numbers from 1 to 10, but incremented by 2  in each step using a "for loop".

for (let i = 3; i < 10; i += 2) {
    console.log(i);
}

// print numbers from 1 to 10, in reverse order

for(i=10;i>=1;i--){
    console.log(i)
}

// print only the even number from 1 to 10

for(i=2;i<=10;i++)
{
    if(i%2 ==0 )
    {
        console.log(i)
    }
}

// print 2 tables

for(i=1;i<=3;i++)
{
    num = i*2
    console.log(i+"x"+"2"+"="+num)
}