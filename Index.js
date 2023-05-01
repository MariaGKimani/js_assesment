// 1.function that takes in a string and returns it when reversed
function name(color){
    let newColor = color.split("").reverse().join("");
    return newColor
    }
    let color = "green"
    console.log(name(color))
// 2.a function that takes in the following array and consoles the target if it is found else null
function merge(array){
    if(array.length <=1){
        return array
    }
    let middle= Math.floor(array.length/2)
    let left = array.slice(0,middle)
    let right =array.slice(middle)
    return mergeSort(merge(left),merge(right))
}
function mergeSort(left,right){
    let empty=[]
    while(left.length && right.length){
        if(left[0]<right[0]){
        empty.push(left.shift())
        }
        else{
            empty.push(right.shift())
        }
    }return[...empty,...left,...right]
}
let num = [2,8,0,23,5,45,76]
console.log(merge(num))
function Bsearch(num,target){
    let leftIndex =0;
    let rightIndex =num.length-1;
while(leftIndex<=rightIndex){
    let middle = Math.floor(leftIndex+rightIndex/2)
    if(num[middle]===target){
        return middle
    }
    else if(num[middle]> target){
        right=middle-1
    }
  else{
    left=middle+1
  }
  return null;
}
}
let num1 = [0,2,5,8,23,45,76]
let target= 23
console.log(Bsearch(num,target));
// 3. Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
for(let i = 1000; i <= 2023; i++){
    if(i%4 == 0 || i%100 ==0 || i%400 == 0){
        console.log(`${i} is leap year`)
    }
    else{
        console.log(`${i} not leap year`)
    }
}
// 4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
for(let i = 0; i<= 100; i++){
    if(i%3 == 0){
        console.log("Fizz")
    }
    else if(i%5 == 0){
        console.log("Buzz")
    }
    if(i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz")
    }
    else{
        console.log(i)
    }
}
// 5. Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
function ArrayNumbers(numArray){
    for(i =0; i < numArray.length; i++){
        console.log(numArray[i] * 4)
    }
}
numArray = [12,87,45,75,23,64,73]
ArrayNumbers(numArray);
// 6. Write a function that takes in an array of strings and returns an array with every element turned into a number
function arrayFunction(array){
let array2 = array.map(arr => { return parseInt(arr)
})
console.log(array2)
}
let array = ["10","24","45","56","67"];
arrayFunction(array)