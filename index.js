// rFactorial vs iFactorial
// Solve the Factorialize algorithm. First, find an iterative solution and then a recursive solution.

//prompt user to enter a number to calculate the factorial


// let num = prompt("What number do you want to find the factorial of?");


// let factorial = function(n) {
//     if(n === 0 || n === 1) {
//         return 1
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(3));

// condition     result    
// 3 false     3*factorial(2)
//             3*2*factorial(1)= 6


function factorialIteration(n) {
    let fac = 1;

    for (let i = 2; i <= n; i++) {
        fac*=i;     
    }
    return fac;
}

console.log(factorialIteration(3));