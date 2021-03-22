// Big O Notation allows us to talk formally about how the runtime of an algorynth grows as the inputs grow
console.log("hello from the snippet");

function addUpTo(n) {
    let total = 0;
    for (let i=1; i <= n; i++){
        total += i;
    }
    return total
}
//console.log(addUpTo(89))

let t1 = performance.now();
addUpTo(100000000);
let t2 = performance.now()
console.log(`time elapse: ${(t2-t1) /100} in seconds.`)

// problems with time
// different machines will record diffferent time
// same machine will record different times
// time will always count on the number of operation a computer has to perform

function addUp(n) {
    return n* (n+1) /2;
}
console.log(addUp(22))


// countUpAndDown
function countUpAndDown(n) {
    console.log("going up")
    for (let i=0; i < n ; i++){
        console.log(i)
    }
    console.log("comming up / \ going down")
    for (let j = n-1; j >= 0; j--){
        console.log(j)
    }
    console.log("cheers")
}


// nested loops
function printAllPairs(n){
    for (var i = 0; i < n; i++){
        for (var j = 0; j < n; j++){
            console.log(i, j)
        }
    }
}

// function
function logAtLeast5(n){
    for (var i = 1; i <= Math.max(5, n); i++){
        console.log(i)
    }
}

function logAtMost5(n){
    for (var i = 1; i<= Math.min(5, n); i++){
        console.log(i)
    }
}

// space complexity 
function sum(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}

// double
function double(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(2 * arr[i])
    }
    return newArr;
}

// Lagarithms is the inverse of exponential

// BigO objects
{/*
   insertion - O(1)
   Removal - O(1) 
   Searching - O(n)
   Access - O(1)
*/}

let instructor = {
    firstName: 'John',
    lastName: 'Milo',
    isInstructor: true,
    favoriteNumber: [7,8,22,1280]
}
{/*
    BigO Methods
    Object.keys - O(N)
    Object.values - O(N)
    Object.entries - O(N)
    hasOwnProperty - O(1)
 */}