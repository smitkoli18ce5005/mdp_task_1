//Calculate the sum of numbers in an array of numbers

let array = [1,2,3,4,5,6,7,8,9,10];

let sum = 0;
for(let i=0;i<array.length;i++){
    sum += array[i];
}
console.log("Sum of numbers in array = " +sum);