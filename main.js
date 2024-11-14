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

// How to create Random number in java script

var num = Math.random()
var number  = Math.floor(num*10+1)
console.log(number)

//  1. Accept a char input from the user and display it on the console.

let username = window.prompt("Enter your username") 
console.log(username)

// 2.Code of the program & screenshot of the output.

let p = parseInt(prompt("Enter the principle amount:"))

let r = parseFloat(prompt("Enter the intrest rate:"))
let y = parseFloat(prompt("Enter the number of years:"))

let si = (p*r*n)/100;
console.log(si)

// 3. Write a program to check whether a student has passed or failed in a subject after he    or she enters their mark (pass mark for a subject is 50 out of 100).

let mark = parseFloat(prompt("Enter your mark:"))

if(mark>=50){
    console.log("you are passed")
}else{
    console.log("you are failed")
}

// 4. Write a program to show the grade obtained by a student after he/she enters their total mark percentage.

let marks = parseFloat(prompt("Enter your mark:"))
if(marks>=90 && marks<=100){
    console.log("Your grade is A")
}else if(marks>=80 && marks<=89){
    console.log("Your grade is B")
}else if(marks>=70 && marks<=79){
    console.log("Your grade is C")
}else if(marks>=60 && marks<=69){
    console.log("Your grade is D")
}else if(marks>=50 && marks<=59){
    console.log("Your grade is E")
}else{
    console.log("You are failed")
}

// 5.Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows. 

let day = parseInt(prompt("Enter your choice number between 1 and 7"))

if(day == 1){
    console.log("Sunday")
}else if(day == 2){
    console.log("Monday")
}else if(day == 3){
    console.log("Tuesday")
}else if(day == 4){
    console.log("Wednesday")
}else if(day == 5){
    console.log("Thursday")
}else if(day == 6){
    console.log("Friday")
}else if(day == 7){
    console.log("Saturday")
}

// 6. Write a program to print the multiplication table of given numbers.

let num1 = parseInt(prompt("Enter a number:"))

for (i = 1; i<=10;i++){
    mul_num = i*5
    console.log(i, "x" ,num1 ,"=" , mul_num)
}

// 7. Write a program to find the sum of all the odd numbers for a given limit
// a.	Program should accept an input as limit from the user and display the sum of all the odd numbers within that limit
// For example if the input limit is 10 then the result is 1+3+5+7+9 = 25
// Output: Enter a limit
// Input: 10
// Output: Sum of odd numbers = 25 

let limit = parseInt(prompt("Enter a number: "))

let sum = 0;

for(i = 1;i<=limit; i++){
    if(i%2 == 1){
        sum+=i
    }
}
console.log("Sum of all odd numbers",sum)

// 8. Write a program to print the following pattern (hint: use nested loop)

let num2 = parseInt(prompt("Enter a number:"))

for (i = 1;i<=num2;i++){
    let row = "";
    for(j=1; j<=i; j++){
        row+=j + "";
    }
    console.log(row)
}

//9. . Write a program to interchange the values of two arrays.
//a.	Program should accept an array from the user, swap the values of two arrays and display it on the console


limit1 = parseInt(prompt("Enter the size of Array :"))

var arr1 = []
for(i = 0;i<limit1;i++){
    arr1[i]=prompt("enter the values of first array:")
}
console.log(arr1)
    

var arr2 = []
for(i=0;i<limit1;i++){
    arr2[i] = prompt("enter the values of second array:")
}

console.log("After swapping")
for(i=0;i<limit1;i++){
   var temp = arr1[i]
    arr1[i] = arr2[i]
    arr2[i] = temp
}

console.log("First array",arr1)
console.log("Second array",arr2)

//10. Write a program to find the number of even numbers in an array
// a.	Program should accept an array and display the number of even numbers contained in that array
// Eg: Output: Enter the size of an array
// Input: 5
// Output: Enter the values of array
// Input: 11, 20, 34, 50, 33
// Output: Number of even numbers in the given array is 3

limit = parseInt(prompt("Enter the size of Array :"))
count = 0
var array= []
for(i=0;i<limit;i++){
    array[i] = prompt("Enter the values:")
}

console.log(array)

for(i=0;i<limit;i++){
    if(array[i]%2==0){
        count+=1
    }
}
console.log("Number of even numbers in the given array is "+count)


//11. . Write a program to sort an array in descending order
// a.	Program should accept and array, sort the array values in descending order and display it

let limit2 = parseInt(prompt("enter the arry limit: "))

let array = []
for(i = 0;i<limit2;i++){
    array[i] = prompt("Enter the arry elements:")
}
console.log(array)

for(i=0;i<limit2;i++){
    for(j=i+1;j<limit2;j++){
        if(array[i]<array[j]){
            temp= array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
}

console.log("Array in Descending Order:", array);

