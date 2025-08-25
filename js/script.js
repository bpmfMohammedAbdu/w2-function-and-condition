
// Question 1
// ● Define a simple function named myFirst that prints the word "Hello" on the console
// ○ First define the function
// ○ Then call the function
function myFirst(){
    console.log("Hello");
}
// Question 2
// ● Define a function called mySecond that takes a parameter and prints the parameter on
// console
// ○ Feel free to give any value as a parameter in your function
function mySecond(name,age){
    console.log(`hi ${name} you are ${age} years old`);
}
mySecond("moh", 21);
// Question 3
// ● Define a function called myThird that takes a parameter and prints the parameter on the
// console. But, it uses mySecond function to print the parameter on the console
function myThird(day){
    console.log(day);
}
myThird("monday");
// Question 4
// ● Write a function named myFourth that takes an array as a parameter and prints only the first
// value of the array on the console.
function myFourth(array){ 
    console.log(array[0]);
}
myFourth(["one","two","three"]);
// Question 5
// ● Write a function named myFifth that takes an array with two numbers in it as a parameter and
// prints the sum of the two numbers on console
function myFifth(array2){
    console.log(array2[0]+array2[1]);
}
myFifth([2,3]);
// Write a function that takes an integer minutes and converts it to seconds.
function convert(min){
    if(!isNaN(min)){
        let sec=60*min;
        return sec;
    }
    else{
        return "invalid input";
    }
}
convert(2);
