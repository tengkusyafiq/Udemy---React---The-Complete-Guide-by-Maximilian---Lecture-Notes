# Udemy---React---The-Complete-Guide-by-Maximilian---Lecture-Notes

Udemy - React - The Complete Guide by Maximilian - Lecture Notes

All of the lecture notes and highlighted changes are saved with commit.
So, to read from each topic or changes, see the commits historically.

Lecture topic labelling:
eg: 1.3.2 = topic 1, video 3, changes/commit number 2

Some notes are written here in readme, some are in the commits or the codes files (comments)

## 1.4 Making single page app using component multiple times and simple props

https://codepen.io/tengkusyafiq/pen/vYBamwp

## 1.7. Understanding Single Page Applications and Multi Page Applications

single page= single html file, contents are rendered by clients
multi page= multiple html files, contents are rerendered by servers

## 1.8 Course Outline

1. Getting started
2. Basics
   Making components.
   Communicating between components.
   Render contents conditionally.
3. Debugging
4. Styling components
   ...into a component etc.
5. Components deep dive
   Components updates
6. HTTP requests
   Fetch and send data to a server
   AJAX
7. Routing
   Important in single page app.
   Handle different URLs and re-render different 'pages' (or changes made)
8. Forms and validations  
   Dynamic ways to get and validate user input
9. Redux
   An independent 3rd party library to manage states etc.
10. Authentication
    Making sign in pages etc.
11. Testing introduction
    how to test your app
12. Deployment
    Ship to real server
13. Bonus content
    Animations
    webpack etc.

## 2. Next Gen JavaScript (eg:ES6) to understand for beginners

### 2.2 let and cons

Old javascript use _var_, which works just like _let_.
Use _let_ for a changing variable
Use _const_ for a constant, unchanged variable

### 2.3 Arrow functions

Used when making functions, to solve 'this' keyword issues.
Add => before the function body( {yada3} ) like below:
_example 1_
'''
//you can use const or let based on what you want
const printMyName = (name, age) => {
console.log(name, age);
}

printMyName('Max', 28);
'''

_example 2_
'''
const multiply = (number) => {
return number\*2;
}

console.log(multiply(2))
//will print out 4
'''

### 2.4 Exports and Imports modules

Will be used heavily in react project.

_Example 1: default export: using word default to export one function in a file_
A function called persona in person.js.
You can use '''export default persona''' at the end of the _person.js_ file, and import it in _app.js_ with '''import prs from './person.js' '''
You can rename prs with anything, or just use person, doesn't matter, because it will always refer to the thing you marked as default, which is persona.

_Example 2: named exports: exporting multiple constant/functions in a file_
2 constants called clean and baseData in utility.js. Export it like below:
'''
export const clean = () => {...}
export const baseData = 10;
'''
You can import them in _app.js_ like below:
'''
import {baseData} from './utility.js'
import {clean} from './utility.js'
'''
or to use in single line:
'''
import {baseData, clean} from './utility.js'
'''
or to use alias:
'''
import {baseData as bd} from './utility.js'
'''

_Example 3: use \* to export everything_
Like in example 2, use below:
'''
import \* as bundled from './utility.js'
'''
and use it as bundled.baseData or bundled.clean

### 2.5 Classes basic

Class can have:

1. Properties(variables attached to classes/objects)
2. Methods(functions attached to classes/objects)

'''
class person{
name = 'Max' //properties
call = () => {...} //method
}
'''

### 2.6 Classes, Properties, and Methods

use ES7.

1. Properties
   ES6 style:
   '''
   constructor(){
   this.myProperty='value'
   }
   '''

   ES7 style:
   '''
   myProperty = 'value'
   '''

2. Methods
   ES6 style:
   '''
   myMethod(){...}
   '''

   ES7 style: using arrow function to skip the use of constructor and super.
   '''
   myMethod = () => {...}
   '''

Example of using class with ES7, with inheritance(_extends_ keyword)
using _extends_ will make the class with _extends_ can use everything from the other class. Its 'this' will include the other class' 'this'.

'''
class Human{
gender = 'male'; //simple properties declaration

    printMyGender = () => {
        console.log(this.gender);
    }

}

class Person extends Human{
name = 'Max';

    printMyName = () => {
        console.log(this.name);
    }

}
const person = new Person();
person.printMyName();
person.printMyGender();

'''
