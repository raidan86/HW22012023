 //1- Addition
    //Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, 
    //but not both 3 and 5. 
    //To solve this task you might want to use the modulus operator.
      
   for ( let i = 200; i <= 270 ;i++) {
   if ((i % 3 == 0 || i % 5 == 0 ) & !(i % 3 === 0 && i % 5 === 0))
   console.log(i)
   }

//2. Shift the Values
//Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front.
//When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].


const x = [2,1,6,4,-7];
const reversed = x.reverse();
console.log( reversed);




//3.FizzBuzz
//Create an algorithm that inserts the numbers from 1 to 135 into an array,
// while replacing the values that are divisible by 3 with the word "Fizz",
//  the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible
//   with 3 and 5 with the word "FizzBuzz". 
// Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...]


let arr = [];
for (let i = 1; i <= 135;i++) {
   if (i % 3 === 0) {
      arr.push("Fizz");
   } else if (i % 5 ===0) {
      arr.push("Buzz");
   }
   else if (i % 3 === 0 & i % 5 ===0 ){
      arr.push("FizzBuzz");

   }
   else {
      arr.push(i)
   }
   }
   console.log(arr)