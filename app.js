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
    
