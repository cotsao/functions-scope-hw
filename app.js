/* Cody Tsao
SEI 7.06
Functions Deliverable */

// 1. Verbal questions
/* 
1. What is the difference between a parameter and an argument?
Parameters are the variables declared when creating the function. Arguments are the variables you pass into the function when calling it.
2. Within a function, what is the difference between return and console.log?
Return allows a function to output a value, console.log just prints to the console. i.e. Return statements return something tangible that can be used, console.log just prints something.
3. What are the implications of the ability of a function to return a value? 
This allows the programmer to more concisely get desired values. For instance, if a function was created to get the min number of an array, the return function would allow the programmer to use that number more easily.
*/

//2. Palindrome

function checkPalindrome(word)
{
    let lowerWord = word.toLowerCase()
    let reverseWord = lowerWord.split("").reverse().join("")
    if (reverseWord === lowerWord)
    {
        return true
    }
    else
    {
        return false
    }

}
let wordIsPaindrome = checkPalindrome("Radar");
console.log(wordIsPaindrome);
wordIsPaindrome = checkPalindrome("Cat");
console.log(wordIsPaindrome);

//3. Check a List

function checkForStudent(name, arr)
{   let x = false
    for (let i = 0; i <arr.length; i++)
    {
        if (name === arr[i])
        {
            x = true
        }
    }
    return x
}

let studentIncluded =  checkForStudent('Sally', ['Sally', 'Kyle']);
console.log(studentIncluded);
studentIncluded =  checkForStudent('Ron', ['Sally', 'Kyle']);
console.log(studentIncluded);
    
//4. Sum Array

function sumArray (arr)
{
    let total = 0
    for (let i = 0; i< arr.length; i++)
    {
        total += arr[i]
    }
    return total
}
const sum = sumArray([1, 2, 3, 4, 5, 6]);
console.log(sum);

//5. Digit Sum
function sumDigits(num)
{
    let total = 0
    let numString = num.toString().split("")
    for (let i = 0; i < numString.length; i++)   
    {

        total+=parseInt( numString[i])
    }
    return total
}
const sum1 = sumDigits(123);
console.log(sum1);

//6. Pythagoras
function calculateSide( x, y)
{
    return Math.sqrt( x*x + y*y)
}

const sideC = calculateSide(3, 4);
console.log(sideC);

//7. Prime Numbers
/* 1 */
function checkPrime(num)
{   
    let isPrime = true
    if (num < 2)
    {
        isPrime = false
    }
    else
    {
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++)
        {
            if (num % i === 0)
            {
                isPrime = false
            }
        }
    }
    return isPrime   
}
console.log(checkPrime(4))
/* 2 */
function printPrimes(num)
{
    for (let i = 0; i <= num; i++)
    {
        if (checkPrime(i))
        {
            console.log(i)
        }
    }
}
printPrimes(100)

//8. Insert Dash
function insertDash(num)
{
    let numString = num.toString().split("")
    let tempString =""  
     for (let i = 1; i < numString.length; i++)
    {
        if ( parseInt(numString[ i - 1]) % 2 != 0 && parseInt(numString[i]) % 2 != 0 )
        {
            tempString+='-'
        } 
        tempString+=numString[i]    } 
    
    return tempString
}
console.log(insertDash(454793))