# Arrays Project

Clone the project from the [starter](https://github.com/appacademy-starters/data-structures-arrays-starter).

## Learning Goals

* Compare and contrast the properties and operations of an Array, Linked List and Hash Table
* Identify the mechanics and complexity of adding and removing elements from an Array
* Solve the memory equation to retrieve data from an array
* Describe the resizing property of Dynamic Arrays and why it's needed
* Implement a Stack data structure using an array
* Select an Array or Stack when they are the appropriate tool for solving a problem

<br><br> 

# PART 1: Implement a Dynamic Array

Now that you've gone a bit deeper into understanding how arrays work in JavaScript,
let's try to implement one on our own! Recall that the Array class includes the following: 
- push
- pop
- shift
- unshift
- search

Some starter code has been provided to you in `/implementation/array.js`. 

# Part 2: Practice Problems

### Find Minimum

Given an Array of numbers, return the smallest number in the array. Do this in
O(n) Time.

Example: 
```js 
const arr = [7, 5, 2, 3, 4, 1]; 
findMinimum(arr); // => 1
```

<br><br>

### Running Sum of Array

Given an array of numbers, return the running sum of its elements.

Example: 
```js
const arr = [1,2,3,4]; 
runningSum(arr); // => [1,3,6,10]
```

<br><br>

### Even Number of Characters

Given an array of strings, return the number of strings with an even number of
characters

Example: 
```js
const arr = ['ab', 'abc', 'a', 'abcd']; 
evenNumOfChars(arr); // => 2
```

<br><br>

### How Many numbers smaller than current number

Given an array of numbers, return a new array containing the number of elements smaller
than the current element at each position.

Example: 
```js
const arr = [8,1,2,2,3];
smallerThanCurr(arr); // => [4,0,1,1,3]
```

<br><br>

### Two Sum

Given an array of numbers and a target sum, your function should return a boolean value
(true or false) if there are two elements in the array that add up to the target
value.

Example: 
```js
const arr = [4, 2, 3, 6, 9]; 
twoSum(arr, 10); // => True

const arr2 = [4, 2, 3, 6, 9];
twoSum(arr2, 16); // => False
```

<br><br>

### Find Second Largest

Given an array of numbers, return the second largest number in the array.

Example: 
```js
const arr = [4, 2, 3, 6, 8];
secondLargest(arr); // => 6
```

<br><br>

### Maximum Sum of Subarray with length K

Given an array of positive numbers and a positive number ‘k,’ return the largest sum of 
any contiguous subarray of length ‘k’.

Note: A subarray is defined as a portion of the original array.

Example: 
```js
const arr = [2, 1, 5, 1, 3, 2];
maxSumOfSubarrayOfLength(arr, 3); // => 9 => [5, 1, 3]
```

<br><br>

### Smallest Subarray with given Sum

Given an array of positive numbers and a positive number ‘S,’ return the length of the smallest 
contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

Example: 
```js
const arr = [2, 1, 5, 2, 3, 2];
smallestSubarrayOfSum(arr, 7); // => 2 => [5, 2]
```

<br><br>

### Shuffle The Array

Given an array of numbers with 2n number of elements in the form of
```[x1, x2, x3, y1, y2, y3]```, return the array in the form of
```[x1, y1, x2, y2, x3, y3]```.

NOTE: y positions start at index n
Example: 
```js
const arr = [2, 5, 1, 3, 4, 7];
shuffle(arr, 3); // => [2, 3, 5, 4, 1, 7] 
```

<br><br>

### Largest Distribution

Given an array of numbers and 'n', which is a number to distribute, return an array containing 
boolean values stating if there is a way to distribute 'n' in a way that makes the current element 
greater than or equal to the largest element in the array.

Example: 
```js
const arr = [2,3,5,1,3];
largestDistribution(arr, 3); // => [true, true, true, false, true]
```

Explanation: 
The first element, 2, becomes 5 if distributed all of n (3). 5 is the largest number in the array, 
so its output is true. The second element, 3, becomes greater than largest number if n is added to 
it, so its output is true. The third element, 5, is already the largest number, so its output is true. 
The fourth element, 1, cannot become the largest even if given all of n, so its output is false. The 
fifth element is identical to the second element.

<br><br>

### Is Valid Parentheses

Given a string of parentheses, determine if it is valid. Parentheses are valid
if there is a closing ')' for every opening '('. Use a Stack to solve this problem.

Example: 
```js
let str = '()((())';
isValidParenthese(str); // => false
```


<br><br>

### RPN Calculator

Given an array of integers and mathematical operands, return the resulting value
from the mathematical expression using [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation). 
Use a Stack to solve this problem.

Example:  
```js
const inputs = [5, 5, '+', 3, '-', 9, '*', 2, '/'];
rpnCalculator(inputs); // => 31.5

const inputs2 = [4, 13, 5, '/', '+'];
rpnCalculator(inputs2); // => 6

const inputs3 = [10, 6, 9, 3, '+', -11, '*', '/', '*', 17, '+', 5, '+'];
rpnCalculator(inputs3); // => 22
```

Explanation: <br>
((((5 + 5) - 3) * 9) / 2) = 31.5 <br>
(4 + (13 / 5)) = 6 <br>
((10 * (6 / ((9 + 3) * -11))) + 17) + 5 <br>
