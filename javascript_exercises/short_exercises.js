//Complete the incomplete code (blanks indicated with a placeholder: /*...*/)

//1. Array item access

var arr = [1,2,3,4,5,6,7,8]; 
arr[/*...*/] // What goes between the square brackets if I want the value 6? 


//2. Object value access

var fateOfTheFurious = { //How do I get the budget from this object? 
    budget: 250000000, 
    director: "F. Gary Gray", 
    year: 2017, 
    duration: "136 minutes"
}

fateOfTheFurious/*...*/

/*3. Write a function that takes a name with the following format 
"FIRST MIDDLE_INITIAL LAST" and outputs it as "LAST, FIRST MIDDLE_INITIAL" 

HINT: You'll need to use string.split(seperator) and string concatenation ('+')
You'll also need to work with arrays
Read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
*/

function formatName(name) {
    
    /*...*/
    
    return /*...*/
}



/*4. Write a function that takes an array, and two additional values and adds 
one value to the beginning of the array and another to the end. You'll need to use two 
new array methods you haven't used before yet: arr.push and arr.unshift. 
*/

function addToEnds(array, firstItem, secondItem) {
    
    /*...*/
    
    return array; 
}