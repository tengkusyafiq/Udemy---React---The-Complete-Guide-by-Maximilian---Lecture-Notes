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

```javascript
//you can use const or let based on what you want
const printMyName = (name, age) => {
  console.log(name, age);
};

printMyName("Max", 28);
```

_example 2_

```javascript
const multiply = (number) => {
return number\*2;
}

console.log(multiply(2))
//will print out 4
```

### 2.4 Exports and Imports modules

Will be used heavily in react project.

_Example 1: default export: using word default to export one function in a file_
A function called persona in person.js.
You can use `export default persona` at the end of the _person.js_ file, and import it in _app.js_ with `import prs from './person.js'`
You can rename prs with anything, or just use person, doesn't matter, because it will always refer to the thing you marked as default, which is persona.

_Example 2: named exports: exporting multiple constant/functions in a file_
2 constants called clean and baseData in utility.js. Export it like below:

```javascript
export const clean = () => {...}
export const baseData = 10;
```

You can import them in _app.js_ like below:

```javascript
import { baseData } from "./utility.js";
import { clean } from "./utility.js";
```

or to use in single line:

```javascript
import { baseData, clean } from "./utility.js";
```

or to use alias:

```javascript
import { baseData as bd } from "./utility.js";
```

_Example 3: use \* to export everything_
Like in example 2, use below:

```javascript
import \* as bundled from './utility.js'
```

and use it as bundled.baseData or bundled.clean

### 2.5 Classes basic

Class can have:

1. Properties(variables attached to classes/objects)
2. Methods(functions attached to classes/objects)

```javascript
class person{
name = 'Max' //properties
call = () => {...} //method
}
```

### 2.6 Classes, Properties, and Methods

use ES7.

1. Properties

   ES6 style:

   ```javascript
   constructor(){
   this.myProperty='value'
   }
   ```

   ES7 style:

   ```javascript
   myProperty = "value";
   ```

2. Methods

   ES6 style:

   ```javascript
   myMethod(){...}
   ```

   ES7 style: using arrow function to skip the use of constructor and super.

   ```javascript
   myMethod = () => {...}
   ```

Example of using class with ES7, with inheritance(_extends_ keyword)
using _extends_ will make the class with _extends_ can use everything from the other class. Its 'this' will include the other class' 'this'.

```javascript
class Human {
  gender = "male"; //simple properties declaration

  printMyGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Max";

  printMyName = () => {
    console.log(this.name);
  };
}
const person = new Person();
person.printMyName();
person.printMyGender();
```

Code above will print out:

```
"Max"
"male"
```

### 2.7 Spread & Rest Operators

Share one operator(3 dots): `...`

1. Spread operator
   Used to split up (or append) array elements OR object properties.

   _Example of splitting up elements properties:_

   ```javascript
   const numbers = [1, 2, 3];
   const newNumbers = [...numbers, 4];
   console.log(newNumbers);
   ```

   Output:

   ```
   [1, 2, 3, 4]
   ```

   Code above will get all elements of oldArray(by putting the 3 dots before) and add new element after it (4 etc.)

   _Example of splitting up object properties:_

   ```javascript
   const personData = {
     name: "Max"
   };
   const newPersonData = {
     ...personData,
     age: 28
   };
   console.log(newPersonData);
   ```

   Output:

   ```
   [object Object] {
       age: 28,
       name: 'Max'
   }
   ```

   Code above will get all properties of oldObject(by putting the 3 dots before) and add new properties after it (newProp:5, value:1 etc.)

   Note that is the oldObject also had a newProp, it will be overwritten by the new value of newProp in newObject.

2. Rest operator (KIV: not fully understand yet)
   Used to MERGE a list of function arguments into an array. We use it in a function argument list. Used less often.
   _Example:_

   ```javascript
   const filter = (...args) => {
     return args.filter(el => el === 1);
   };
   console.log(filter(1, 2, 3));
   ```

   Output:

   ```
   [1]
   ```

### 2.8 Destructuring

Allows you to easily extract array elements or object properties array elements or object properties and store them in variables.

_Example 1: Destructuring array elements:_

```javascript
const numbers = [1, 2, 3, 4];
// Let's get element 1 and 4 from array above.
// To do it, you can just name the elements like below:
[num1, , , num4] = numbers; //empty space = unimportant element
console.log(num1, num4);
```

_Example 2: Destructuring object properties:(KIV: not fully understand yet.)_

```javascript
{name}={name:'Max', age:28}
console.log(name) //Max
console.log(age) //undefined
```

### 2.9 Primitive and Reference Types Refresher

This is not a new generation JavaScript, but important to know.

1. Primitive types
   Numbers, strings, booleans are called primitive types.
   Things to take note is, when you put its value into another variable, it will 'copy' them.
   Example:

   ```javascript
   const num1 = 1;
   const num2 = num1;
   console.log(num2);
   ```

   Output:
   `1`

2. Reference types
   Objects and arrays are reference type. Things to take note is, when you try to 'copy' like primitive type above, it will not 'copy', but it just reference it instead. This means, if the source is changed, it will also changed.
   Example:

   ```javascript
   const person = {
     name: "Max"
   };

   const secondPerson = person;

   person.name = "Manu"; //changing to new value

   console.log(secondPerson);
   ```

   Output: It will print out new value since its reference is changed.

   ```
   [object Object] {
       name: "Manu"
       }
   ```

   So, how to 'copy'?
   Use spread like we learned for object or array.
   Example:

   ```javascript
   const person = {
     name: "Max"
   };

   const secondPerson = {
     ...person //copy person, not reference it
   };

   person.name = "Manu"; //changing to new value

   console.log(secondPerson);
   ```

   Output: It will print out new value since its reference is changed.

   ```
   [object Object] {
       name: "Max"
       }
   ```

### 2.10 Refreshing Array Functions

#### map()

To manipulate each of the elements in an array. In example below, let's double each of the numbers in an array.

```javascript
const numbers = [1, 2, 3];

//let's call the element in the array as num, you can use any name below
const doubleNumbers = numbers.map(num => {
  return num * 2;
});

console.log(numbers);
console.log(doubleNumbers);
```

Output:

```
[1, 2, 3]
[2, 4, 6]
```

## 3. React Basics

Learn all core features.

### 3.2 Build Workflow

Good workflow makes it easier to manage, optimized.
Use next gen javascript.
How?
Use npm or yarn for Dependency management.
Use bundler such as Webpack.
Use compiler such as Babel + presets
Use development server to test locally.

All of things above can be setup automatically, after this.

### 3.3 Using a create-react-app | SETUP

create-react-app is to setup and create react app automatically for us.

#### SETUP

1. install node js.
2. `npm install create-react-app -g`
3. To create a project:
   `create-react-app <app-name>`
   In this course, let's use name like below WITH same version of create-react-app, so that we use the same structure like used in this course.
   `create-react-app react-complete-guide --scripts-version 1.1.5`
4. After the process complete, `cd react-complete-guide`.
5. `npm start` to start the development server and watching your files for any edit.
6. NOTE: if you're using the folder in this git, make sure to run `npm i` in the folder for the first time to install all of the dependencies, because I excluded the node_modules folder.

### 3.4 Understanding the folder structure

#### project root folder

1. Lock files, such as _package-lock.json_ and _yarn.lock_
   You can ignore these files, they're just locking in the versions of the dependencies.

2. _package.json_
   General dependencies our project has listed here in:

   ```json
   "dependencies": {
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-scripts": "1.1.5"
   },
   ```

   These three dependencies are installed automatically by create-react-app.

   It also list scripts that you can use with npm.

   ```json
   "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
   }
   ```

   For example, you can do `npm start` to compile and run it on server.
   `npm run build` to get your optimized code stored in a folder.

#### node_module/

Holds all of the dependencies and sub-dependencies of our project. Can be generated by running `npm i` or `npm install`. create-react-app also generated this folder automatically for you for the first time. You should not edit this folder.

#### public/

It's a folder that gets served by the web server in the end, and it only holds the files we can edit. To add scripts etc, use src/.

1. _index.html_
   For single page app, you would have only one html file. To create a multi page app, use create-react-app to make it for you.
   The important line here is:

   ```html
   <div id="root"></div>
   ```

   where we actually mount our react app later.

   In this file also, you can import css libraries and metatags.

2. _manifest.json_
   Where we can define some metadatas about our application.

#### src/

Contains the files we will work in for the app.

1. _index.js_
   Gets access to the _root_ element in our DOM:

   ```javascript
   ReactDOM.render(<App />, document.getElementById("root"));
   ```

   The _root_ element we see abouve is the one we see in the _index.html_ mentioned before.
   The reference of _App_ object or element which we import from app file will be rendered.

2. _app.js_
   This is where we see our first and only react component we have for starter, like below:
   ```javascript
   render() {
    return (
      <div className="App">
      </div>
    );
   }
   ```
3. _app.css_
   Defines some styling we use in _app.js_.

4. _index.css_
   Global styling.

5. _registerServiceWorker.js_
   For registering a service worker automatically out of the box. No configuration needed.

6. _App.test.js_
   Allows us to create unit test for different units.

### 3.5 Components Basics

For starter, in _App.js_, there is one component called App like below:

```javascript
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hola!</h1>
      </div>
    );
  }
}

export default App;
```

See the `export default App`? The component is imported in _index.js_ then it is rendered directly like below:

```javascript
ReactDOM.render(<App />, document.getElementById("root"));
```

Typically, only one root component is rendered in _index.js_ like above, we render App component.
So, in the App component in _App.js_, you would nest all other components your application might need.

#### One way of defining a react component:

Example:

```javascript
import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hola!</h1>
        <h2>Name's TG.</h2>
      </div>
    );
  }
}
```

We make class then use _extends_ to inherit from Component class from the react library.
The class in the example have one method called, render method to render something to the screen. Every components need to have this render method. There are other react elements that can be used to do other functions.

Note that the render() method only return() everything in one root element, which usually in <div>. So we must put every elements in one element.

Also note that every components or elements created must have

### 3.8 Creating a Functional Component

#### Keeping good structure and importing habit

Let say we want to make a component called Person.js, make a folder named Person in scr/ and make the new file inside it.
Component is just a function which returns some jsx.

Now we're in the Person.js, you can use _function_ keyword, but let's stick to good habit which is, put it in const or let, and using arrow function.

But first, we have to import react.

```javascript
import React from "react";
```

We're not importing the _Component_ from react tho, like before because we are creating a function, not class.

Now, write simple function like below:

```javascript
const person = () => {
  return <p> I'm a person! </p>;
};
```

Then export it.

```javascript
export default person;
```

To start using this component in any file, in App.js for example:

Import it:

```javascript
import Person from "./Person/Person";
```

Note that give the component name with Uppercase character, so it wouldn't interfere with jsx format.

To call it multiple timnes:

```javascript
<Person /> // or <Person></Person>
```

### 3.11 Outputting dynamic content

Let's make some dynamic output in the component we made above.

In _Person.js_:
We actually can write javascript function in jsx by putting it in {}. We also called another function in here, so we can write advanced function somewhere else.

```javascript
return (
  <p>I'm a person and I'm {Math.floor(Math.random() * 30)} years old.</p> //Math.floor= to round up
);
```

Now it will output different random values.

### 3.12 Working with props

props = properties
Like `<div className="App">` which has _className_ attribute, we also can make our own attributes for our components.
In this example, let's make _name_ and _age_ attribute.

In _Person.js_, put _props_ (you can rename it but it's a good habit) like below:

```js
const person = props => {
  return (
    <p>
      I'm {props.name} and I'm {props.age} years old.
    </p>
  ); //Math.floor= to round up
};
```

To use the attributes in other file:

```js
<Person name="Max" age="28" />
```

Note that, when using class-based components, use _this.props_ instead of just _props_ like below:

```js
class Person extends Component {
  render() {
    return (
      <p>
        I'm {props.name} and I'm {props.age} years old.{" "}
      </p>
    );
  }
}
```
### 3.13 Children property
Children attribute property in props is reserved for anything you put between opening and closing of the components when you use it.
Example, in _Person.js_, let's get the children attribute:
```js
  return (
    <div>
      <p>
        I'm {props.name} and I'm {props.age} years old.
      </p>
      <p>{props.children}</p>
    </div>
  );
```

In other component/file, we can write something in the children property such as below:
```js
<Person name="Max" age="28">
my hobby is fishing.
</Person>
```

### Using state
Sometimes you don't want to get information from outside(with props), but you want to have it inside the component itself, and change it from inside there too.
Basically, let's use variables to store values.

In our example, the _name_ and _age_ are still hardcoded. Let's put it in 'variables'.

_class_ component that extends from _Component_ has a reserved property we can used called _state_. _state_ is managed from inside a component.

Note: in react 16.8, they introduce Hooks so we can also use state in a functional component.

Use state with care because it's hard to manage as your app grows. 

Let's learn how to use it in _App_ class component in _App.js_. 

In _state_, you can add a property or array or inside each other. In this case, property(persons) that holds arrays(each persons' data) like below:

```js
class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Elle", age: 26 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hola!</h1>
        <h2>Name's TG.</h2>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}
```
Then, in render method, use _this.to.the.variable..._ in {} to get any value in the class state.
Special thing about state is, if it changes, react will update and rerender our DOM.