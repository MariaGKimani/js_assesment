//Write a function that takes in a string and returns it when reversed
//let food = “eating”
function foodReverse(string){
    const reverseString = string.split("").reverse().join("");
    return reverseString
}
let food = "eating"
let  reverse =foodReverse(food)
console.log(reverse)


//Write a function that takes in the following array and consoles the target if it is found else
//null


// function numbers(num){
//     if(num.length <= 1){
//         return num
//     }
//     let middle = Math.floor(num.length/2);
//     let left =num.slice(0,middle);
//     let right = num.slice(middle);
//     console.log({right})
//     console.log({left})
//      numbersSort(numbers(left),numbers(right))
// }
// function numbersSort(){
//     const newArray =[];
//     while(left.length && right.length){
//         if(left[0]< right[0]){
//             newArray.push(left.shift())
//         }else{
//             newArray.push(right.shift())
//         }
//     }
//     return [...newArray,...left,...right]
// }
// let num =[2,8,0,23,5,45,76]
// console.log(numbers(num))
// function binarySearch (num){
//     let left = 0;
//     let right = num.length -1;

// }



//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

//N.0 4
//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.


for (x = 0; x <= 100; x++) {
    if (x % 3 == 0 && x % 5 == 0) {
      console.log("FizzBuzz")
    }else if (x % 3 == 0) {
      console.log("Fizz")
    } else if (x % 5 == 0) {
      console.log("Buzz")
    } else {
      console.log(x)
    }
}
  


//N.0 5
//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.

function arrayNumbers(numbers){
    let numArray = [12,87,45,75,23,64,73]
    let num1 =numArray.map(numA => numA *4)
    console.log(num1)

}
arrayNumbers()



//N.06
//Write a function that takes in an array of strings and returns an array with every element
//turned into a number

function Arraystrings(array) {
    let nums = ["10","24","45","56","67"];
   let ints = nums.map(num => parseInt(num));
   console.log(ints)  
}
Arraystrings()