//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello John, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

// So what I need to do, is... okay so sort through list, if element in string(i) is in list, return "Match"
// For loop and conditionals: dog_string.find, dog_string.includes?

function findWords(){
    for (let i = 0; i < dog_names.length; i++){
        if (dog_string.includes(dog_names[i])) {
            return `${dog_names[i]} is definitely in that list`
        } else return `The dog you seek is not here. I would recommend searching elsewhere, or trying a different sentence. Or going for a walk, getting some of that sweet vitamin D, and forgetting about the search entirely. You do you.`
    }
}
console.log(findWords())


//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i, 1, 'even index');
        }
    }
    return arr;
}
console.log(replaceEvens(arr))
// DON'T YOU DARE EVER FORGET TO INSERT YOUR ARGUMENT INTO YOUR FUNCTION CALL AGAIN ><



// --------------------Codewars redo
// 1. Even or odd:
function evenOrOdd(x) {
    if (x % 2 == 0){
      return "Even";
  } else {
      return "Odd";
  }
}
console.log(evenOrOdd(6))

// 2. Multiply debug: (I know, I know, this shouldn't even count, but I'm tired so please forgive me)
function multiply(a, b){
    return a * b
  }
console.log(multiply(2,4))

// 3. Find the sum of positive integers in an array
function positiveSum(new_arr) {
    let sum = 0;
    for(i =0; i < new_arr.length, i++;) {
        if (new_arr[i] > 0) {
            sum += new_arr[i]
        }
    }
    return sum
}
let new_arr = [1, 2, 5, -4, 9]
console.log(positiveSum(new_arr))

// 4. Take a positive and make it negative 
function makeNegative(num) {
    if(num > 0){
      return num * -1;
    }else {
      return num;
    }
  }
  console.log(makeNegative(7))

// 5. Reverse a string, because I feel guilty about #2
function solution(str){
    return str = str.split('').reverse().join('');     
    }
let str = "Hello world"
console.log(solution(str))