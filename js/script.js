
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
// Question 6
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
// Question 7
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function incNumber(num){
    let result= (isNaN(num)) ?  "invalid input": num+1;
    return result
}
incNumber(3);
// Question 8
// Write a function that takes the base and height of a triangle and return its area.
function areaTrinangle(base,height){
    return (isNaN(base) || isNaN(height)) ? "invalid input" :(base*height)/2;
}
console.log(areaTrinangle(3, 2));
// Question 9
// ● Create a function that returns the total number of legs of all the animals. In this challenge, a
// farmer is asking you to tell him how many legs can be counted among all his animals. The
// farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember: the
// farmer wants to know the total number of legs and not the total number of animals.
function animals(chickens, cows, pigs) {
    let totalLeag = chickens*2 + cows*4 + pigs*4;
    return totalLeag;
}
console.log(animals(2, 3, 5));
console.log(animals(1, 2, 3));
console.log(animals(5, 2, 8));
// Question 10
// ● Create a function that takes an array containing only TWO numbers as a parameter and returns
// a value that is 3 times the first element of the array.
function multipleArray(marray){
    return marray[0]*3;
}
// Question 11
// ● Create a function that returns true when num1 is equal to num2; otherwise return false
function isSameNum(num1,num2){
    if(isNaN(num1)||isNaN(num2)){
        return "invalid input";
    }
    else{
        if (num1===num2) {
            return "true";
        }
        else{
            return "false";
        }
    }
}
// function isSameNum(num1,num2){
//     return (isNaN(num1)||isNaN(num2)) 
//     ?"invalid input"
//     :(num1===num2 );
// }
console.log(isSameNum(4, 8));
console.log(isSameNum(4, 4));
console.log(isSameNum(2, "2"));
console.log(isSameNum("a", 5));
// Question 12
// ● Create a function that takes an integer and returns true if it's divisible by 100, otherwise
// return false.
function divisible(num3){
    return (isNaN(num3))
    ?"invalid input"
    :((num3%100==0)
    ?"true"
    :"false"
    )
}
console.log(divisible(1));
console.log(divisible(100));
console.log(divisible("a100"));
console.log(divisible(1000));
// Question 13
// ● Create a function that takes a number as an argument and returns "even" for even numbers
// and "odd" for odd numbers.
function isEvenOrOdd(num4){
    if (isNaN(num4)) {
        return "invalid input";
    }
    else{
        if(num4%2==0){
            return "Even";
        }
        else {
            return "odd";
        }

    }
}
console.log(isEvenOrOdd(3));
console.log(isEvenOrOdd(4)); 
console.log(isEvenOrOdd(7)); 
console.log(isEvenOrOdd("a"));
// Question 14
// ● Create a function that returns
// ○ “Invalid score” if score is above 100 or score is a negative number
// ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
// ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
// ○ “Grade C” for any score below 79
function gradeChecker(score){
    if (isNaN(score)){
        return "invalid input ";
    }
    if (score > 100 || score < 0) {
        return "Invalid score";
    }
    if(score>=90){
        return "Grade A";
    }
    else if(score>=80){
        return "Grade B";
    }
    else{
        return "Grade C";
    }
    
}
console.log(gradeChecker(95)); 
console.log(gradeChecker(90)); 
console.log(gradeChecker(85)); 
console.log(gradeChecker(80)); 
console.log(gradeChecker(70)); 
console.log(gradeChecker(0)); 
console.log(gradeChecker(150)); 
console.log(gradeChecker(-10)); 
console.log(gradeChecker("hi"));
// Question 15
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
function cubes(cube){
    return isNaN(cube)
    ?"invalid input"
    :cube*cube*cube;
}
console.log(cubes(3));
console.log(cubes(9));
console.log(cubes("3"));
console.log(cubes("a"));
// Question 16
//creat a function named calculateDiscount with two parameter: totalAmount,customerType
//*function calculateDiscount(totalAmount,customerType)
//creat afunction the input is valid or not 
//return "invalid input "
//otherwise creat additonal condition to geat Discount 
//customerType ==="regular" ,customerType ==="premium", customerType ==="vip"
//inside that condition creat related condition
//for Regular totalAmount>=100 get 5% discoundt  totalAmount<100 no discount
//for Premium totalAmount>=50 get 10% discoundt  totalAmount<50 5% discount
//for VIP totalAmount>=200 get 20% discoundt  totalAmount <200 15% discount
//else return "no other customerType"
// function calculateDiscount(totalAmount, customerType) {

function calculateDiscount(totalAmount, customerType) {
    if (isNaN(totalAmount) || typeof customerType !== "string" || 
        (customerType.toLowerCase() !== "regular" && 
         customerType.toLowerCase() !== "premium" && 
         customerType.toLowerCase() !== "vip")) {
        return "invalid input";
    }
    customerType = customerType.toLowerCase();
    if (totalAmount < 0) {
        return "invalid input";
    }
    if (customerType === "regular") {
        if (totalAmount >= 100) {
            return totalAmount - (totalAmount * 5) / 100; 
        } else {
            return totalAmount; 
        }
    } else if (customerType === "premium") {
        if (totalAmount >= 50) {
            return totalAmount - (totalAmount * 10) / 100; 
        } else {
            return totalAmount - (totalAmount * 5) / 100; 
        }
    } else if (customerType === "vip") {
        if (totalAmount >= 200) {
            return totalAmount - (totalAmount * 20) / 100; 
        } else {
            return totalAmount - (totalAmount * 15) / 100;
        }
    } else {
        return "no other customerType";
    }
}

console.log(calculateDiscount(150, "regular")); 
console.log(calculateDiscount(60, "premium")); 
console.log(calculateDiscount(250, "vip")); 
console.log(calculateDiscount(80, "regular")); 
console.log(calculateDiscount(30, "premium")); 
console.log(calculateDiscount(100, "vip")); 
console.log(calculateDiscount(100, "invalid"));
console.log(calculateDiscount(-50, "regular")); 
console.log(calculateDiscount(100, 123));
// Question 16
// function restrictAccess(userAge,contentRating){
//         if(isNaN(userAge) || userAge < 0){
//             return "invalid age";
//         }
//         else(typeof contentRating !== "string" || (contentRating !=="G"&&contentRating !== "PG" && contentRating !=="R"))
//         {
//             return "invalid rating";
//         }
        
//         if(isNaN(userAge) || userAge < 0|| typeof contentRating === "string"){
//              if(contentRating === "G"){

//              }
//              else if(contentRating === "PG" && userAge>=13 ){

//              }
//              else if(contentRating === "R" && userAge>=18){

//              }
//         }
        
// }
//frist creat function named restrictAccess with two parameter:userAge,contentRating;
//creat condition to checke the input is valid or not 
//checke the userAge and contentRating is number and string respectivly
//retrun invalid the parameter is not valid 
//other wise gone to the next condition 
//for contentRating "G" userAge is any number >=0
// for contentRating "PG" userAge is any number >13
//return true or false 
//for contentRating "R" userAge is any number >18 
//othrer wise return "invalid rating"
// Valid cases 
function restrictAccess(userAge, contentRating) {
  if (!isNaN(userAge) && typeof contentRating === "string" && userAge >= 0) {
    contentRating = contentRating.toLowerCase(); 
    if (userAge >= 0 && contentRating === "g") {
      return "true";
    } else if (userAge >= 13 && contentRating === "pg") {
      return "true";
    } else if (userAge >= 18 && contentRating === "r") {
      return "true";
    } else if (contentRating === "g" ||contentRating === "pg" ||contentRating === "r") {
      return "false"; 
    } else {
      return "invalid rating"; 
    }
  } else {
    if (isNaN(userAge) || userAge < 0) {
      return "invalid age";
    } else {
      return "invalid rating"; 
    }
  }
}
console.log(restrictAccess(10, "G")); // true (G allows all ages)
console.log(restrictAccess(15, "PG")); // true (PG allows age >= 13)
console.log(restrictAccess(18, "R")); // true (R allows age >= 18)
console.log(restrictAccess(12, "PG")); // false (PG requires age >= 13)
console.log(restrictAccess(17, "R")); // false (R requires age >= 18)
console.log(restrictAccess(0, "G")); // true (G allows all ages, including 0)