# Udemy - React - The Complete Guide by Maximilian - Lecture Notes

All of the lecture notes and highlighted changes are saved with commit.
So, to read from each topic or code changes, see the commits historically.

Lecture topic labelling:
eg: 1.3.2 = topic 1, video 3, changes/commit number 2

Some notes are written here in readme, some are in the commits or the codes files (comments)

## 1.4 Making single page app using component multiple times and simple props

https://codepen.io/tengkusyafiq/pen/vYBamwp

## 1.7. Understanding Single Page Applications and Multi Page Applications

Single page= single html file, contents are rendered by clients.
Multi page= multiple html files, contents are rerendered by servers.

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

Note that the render() method only return() everything in one root element, which usually in `<div>`. So we must put every elements in one element.

Also note that every components or elements created must have

### 3.8 Creating a Functional Component

#### Keeping good structure and importing habit

Let say we want to make a component called Person.js, make a folder named Person in scr/ and make the new file inside it.
Component is just a function which returns some jsx.

Now we're in the Person.js, you can use _function_ keyword, but let's stick to good habit which is, put it in const or let, and using arrow function.

Note that functional component doesnt have render() method, it just return somthing. While class-based component must have render() method.

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

### 3.14 Using state in class-based component
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

### 3.16 Handling events with methods
Functions in a class is called method.
In this example, we try to handle click events with method we write.
Write button like below in render.
```js
<button onClick={this.switchNameHandler}>Switch me!</button>
```
Note that above, we are not putting () after switchNameHandler. If we out it, the method will be run as soon as react renders it, not after the button click.

In the same class, write _switchNameHandler_ method as below.
```js
switchNameHandler = () => {
  console.log("was clicked."); //just to print in console
};
```

### 3.18 Manipulating the state
Let's manipulate the state with click event.
To change a state, use _setState_ so react can pickup the change. What _setState_ does is it will change the value you want to change.

For example, We want to change Max's name and Elle's age on click. Let's edit _switchNameHandler_ method we wrote before.
```js
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Elle", age: 26 }
    ],
    otherState: 'other value'
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Maxima", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Elle", age: 27 }
      ]
    });
  };
```
Note that _state_ and _setState_ in _switchNameHandler_ method have the same structure, just different value. This habit is good so you don't mess up the state structure. Of course, you don't have to copy and paste the whole thing. Just take ones you want to change, and react will compare it.

### 3.20 Manipulating the state in functional component
This is only available in react 16.8 and should be okay for the version above that. Since functional component doesn't have _state_, they introduce hooks which has multiple hooks we can use, such as in this case, _useState_(every hooks start with _use_).
So, we can use it same as in class-based component? No. Unlike _setState_ which only update the changed value, _useState_ will completely neglect everything and only use the updated values. Meaning, you also have to write all of the unchanged states if you only one to change a bit, since it will neglect the whole, old ones. It will be messy. But the good thing is we can use _useState_ multiple times in a functional component. So to handle this disadvantage efficiently, put state you don't want to change in other _useState_, or group states or values in the right _useState_s.

That's the difference. Now how to use it? Make sure that you already understand how to use state in class-based component so you could see the difference in this functional component. 

First, let's use functional component instead of class-based component in _App.js_. So, we just edit the previous code and do some big changes.

Note: You can use function inside a function in react(nested functions).

Change from class-based to functional component will be easy if you understand their difference, such as below:

1. Import _useState_ instead of _Component_. Of course, keep the _Component_ if you want to use it in other class-based component.
```js
import React, {useState} from 'react';
```


2. Change the class-based header to functional header.
Before(class-based):
```js
class App extends Component {
  render(){
    ...
  }
}
```

After: Also remove render(){} since functional doesn't have render method, just return and functions.
```js
const App = (props) => {
  ...
//(don't forget to remove one extra } at the end from render(){})
}
```

3. Write initial state. To use a state, it's a little bit different. Put state in `useState({})` like below.
Before(class-based uses state):
```js
state = {
  persons: [
    { name: "Max", age: 28 },
    { name: "Manu", age: 29 },
    { name: "Elle", age: 26 }
  ],
  otherState: "other value"
};
```

After(functional use useState from hooks): put this function anywhere before _return_.
```js
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Elle", age: 26 }
    ],
    otherState: "other value"
  });
```
What _useState_ does is it returns an array with exactly two elements. The first element will hold the initial state(_personState_), the second element will be the function to change the state(_setPersonState_).

4. Link into the attributes. Now let's change the js in the attributes in _return_.
Before(class-based uses _this_):
```js
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
      />
```

After(functional uses the element with initial state):
```js
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
```

5. Handle the changing state with function.
Before(class-based uses _this_):
```js
  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Maxima", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Elle", age: 27 }
      ]
    });
  };
```

After(functional uses the function to change state, which is _setPersonState_. Oh, and change the formatby putting _const_ on the front.):
```js
  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: "Maxima", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Elle", age: 27 }
      ]
    });
  };

```
One more thing, as you know, we don't use _this_ in functional component. So in button click line, you can just remove _this._.
Before(class-based uses _this_):
```js
      <button onClick={this.switchNameHandler}>Switch me!</button>
```

After(functional doesn't use _this_):
```js
      <button onClick={switchNameHandler}>Switch me!</button>
```

Additionally, let's print out personState in the console to see the state before and after changing the state:
```js
console.log(personState);
```

Now, if you run it, everything should works. But if you look in the console before and after click, state `otherState: "other value"` is missing after updating the state, because we don't put it in the _setPersonState_ function. It is because  _useState_ overwriting all of the initial state(I mentioned the disadvantage above). This could be a problem if the state is large. Now let say we want to make multiple state we don't want to change, we can use _useState_ multiple times. This way, we can only change _useState_ we want to change.

Example, we make extra _setState_ to exclude state we don't want to change, or just want to put it in different state 'group':
```js
  const [otherState, setOtherState] = useState({
    otherState: "other value"
  });
```
Now you can remove `otherState: "other value"` in the original _useState_. 
Use console.log to see if the otherState is still there after click with code below:
```js
  console.log(personState, otherState);
```
Even after click, `otherState: "other value"` should still be there.

### 3.21 Stateless vs Stateful components

Stateful/smart/container component: Component that manages states, using hooks(useState) or state.

Stateless/dumb/presentational component:
Component that doesn't manage state.

Good practice: create as many as stateless components, and a few stateful components. It will make the data easier to manage, to reuse etc. So, when you want to change something in your app, it's clear where to change it.

### 3.22 Passing method reference between components
This is no fancy hack. You can pass a method as props. You learned before that props use to share attributes between components. So the trick is, we put the method in an attribute.

Example 1, let say we want to share or run _switchNameHandler_ (in App.js) from other component like Person in Person.js, with a click event. The _switchNameHandler_ will be run whenever the user click on the paragraph. We can make a new prop like below. Let's name the new props, 'click'.
In Person.js, use onClick event and put in _props.click_.
```js
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old.
      </p>
```
In App.js, use attribute 'click' to link with _switchNameHandler_ like below.
```js
        <Person
          click={this.switchNameHandler}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
```

Example 2, you want to pass a value to our _switchNameHandler_ function. We still use the same way as example 1, plus we use bind() and argument in _switchNameHandler_.
Same changes we made on Person.js like below. 
```js
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old.
      </p>
```

But in App.js, we want to change Max's name in the _switchNameHandler_ function using argument we named _newName_.
```js
  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Elle", age: 27 }
      ]
    });
  };
```

Then, we use bind() to get the argument value. bind() contains 2 elements, first is _this_, second one is the new value for the argument like below.
```js
        <Person
          click={this.switchNameHandler.bind(this, "Max!!!!!!")}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
```
To check if it works, click on the related paragraph.

### 3.23 Adding two way binding
Let say we want user to change the name. So we use `<input>` and _onChange_ so we get the change every time the user change input.
To do this, let's add line below the Person.js in `<div>` like below.
```js
      <input type="text" onChange={props.change}>
```
We use attribute we named _change_ to link a method from App.js. Add attribute _change_ and link it with a new method called _userNameHandler_.
```js
        <Person
          click={this.switchNameHandler}
          change={this.userNameHandler}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
```

Make a new method to handle the state change instead of using the old one, just to make it easy to understand.
```js
  userNameHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Elle", age: 27 }
      ]
    });
  };
```
We use a reserved argument called _event_ because we only expect to get an event when using this method. In this example, we only want to change the second name (Manu). So we set the name to _event.target.value_.
Basically, the text input from Person.js will pass to userNameHandler, then the input will be put into the "Manu" name state.

Additionally, to put the name "Manu" in the text input before we changed it, we can use reserved attribute named _value_ in `<input>` in Person.js
```js
      <input type="text" onChange={props.change} value={props.name}>
```
_props.name_ is referring to related name properties, in this case, "Manu". Now if you run it, word "Manu" is already in the text box, and you can change it. This is called, two way binding.

### 3.24 Adding styling and stylesheets
For good habit, if you want to make a css for a component file, make it the same name as the component file. 
Let say we want to make a css file for Person.js, make a new file named Person.css. In this case, we want to apply a box styling.

In Person.css, use code below:
```js
.Person {
  width: 60%;
  margin: auto;
  border: 1px solid #eeeeee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
}
```

Now, in Person.js, import it using line below.
```js
import "./Person.css";
```

`.Person{}` in Person.css is the class we named. To use this class in Person.js, add it with _className_.
```js
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
```

It should pickup the styling and put the div in like a box.

### 3.25 Working with inline style, without external css file.
You can also just write the styling in the js file itself, if you only want to make a small styling.

You can use backgroundColor(camel case style) or "background-color"(put in " ") for the styles name.
Make sure to wrap their value in quotation mark(' '). Let's see the example below, we want to style the button in App.js.

In _render()_, make a const and named it, for example buttonStyle.
```js
  render() {
    const buttonStyle = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };
```

Then, use a reserved attribute named _style_ on the button to use the style like below.
```js
        <button style={buttonStyle} onClick={this.switchNameHandler}>
```

The button style should change now.

### 3.26 Assignment
_Skipped._

## 4. Working with Lists and Conditionals
Learn to output contents conditionally. For example, you want to render conditionally.

### 4.1 Rendering Content Conditionally
In this topic, let's try hide/show the person lists we made before with button clicks, to demonstrate that we can render conditionally.

Firstly, in App.js, put the persons list in one `<div>` so we can control them at once.

```js
        <div>
          <Person
            click={this.switchNameHandler.bind(this, "Max!!!!!!")}
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            click={this.switchNameHandler}
            change={this.userNameHandler}
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
          <Person
            click={this.switchNameHandler}
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
```

For the button, pass the event to a function to handle the clicking. Let's call the function _togglePersonsHandler_.
```js
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>
          Switch me!
        </button>
```

Add a property in state to hold the current(hide or show boolean), let's name it _showPersons_. To make us easy to understand, false = hide the `<div>`, true = show it.
```js
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Elle", age: 26 }
    ],
    otherState: "other value",
    showPerson: "false"
  };
```

Note that the 'html' language that we use is actually a javascript. so you can even use that 'html' in {}. So you can use ternary expression (you can't use block statement like , if(){}) to handle the condition.
```js
{this.state.showPerson === true ? <div of the persons> : null}
```
Expression explanation:
? means, if the expression in the front (showPerson=true) is true, do the `<div>`.
: means, if not, do null.

The whole script looks like below.
```js
        {this.state.showPerson === true ? (
          <div>
            <Person
              click={this.switchNameHandler.bind(this, "Max!!!!!!")}
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              click={this.switchNameHandler}
              change={this.userNameHandler}
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            />
            <Person
              click={this.switchNameHandler}
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
      </div>
```

Now let's write the _togglePersonsHandler_ to handle and toggle the click event.

```js
  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };
```
Explanation: First, we make a constant to save current value of _showPerson_ temporarily before inverting it.
Then, use ! to invert whatever boolean value _doesShow_. Use setState to update the _showPerson_.

### 4.3 Handling dynamic content better way.
If we use the previous way, things might get messy in a bigger codes. This can be done by putting the expressions outside the messy return() in render().

We now can use if() and without inside {} since we're not in jsx, but already in js part of the code.

To get started from the last part, remove the old expression but keep the `<div>` that contains persons and paste later in new expression.

Somewhere inside render(), make a variable called _persons_ and its value is _null_. _null_ should be the default value for the variable.
```js
    let persons = null;
```
How it works? We will put the persons list `<div>` inside this variable and call it in return() in {}, because it's in js, duh.
```js
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>
          Toggle me!
        </button>
        {persons}
```

Now to toggle/change the _persons_ value from null to the `<div>` and vice versa, write the expression below in render().
```js
    if (this.state.showPerson) {
      persons = (
        <div>
          <Person
            click={this.switchNameHandler.bind(this, "Max!!!!!!")}
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            click={this.switchNameHandler}
            change={this.userNameHandler}
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
          <Person
            click={this.switchNameHandler}
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }
```
Explanation: since _showPerson_ is boolean, you don't have to to `if (this.state.showPerson === true){}'. `if (this.state.showPerson){}' is enough. Same meaning. So, if _showPerson_ is true(after the click change its value with setState), the _persons_ variable will hold the persons list `<div>` instead of _null_.

Your code will be easy to manage since the expression can be put anywhere in the render().

### 4.4 Outputting Lists intro
Right now, we hard-coded our list of persons both in our state and render. We can't use this way if we want to fetch a list of persons in the server.
After this, we will learn how to output arrays, interact with them, update, change them in our state.

### 4.5 Outputting Lists
Let sat we don't know how many persons in the _persons_ property in the state and we want to render it. We can't make each element in the `<div>` since we don't know the exact numbers. We can render it by using _map()_. 

Instead of using the previous code like below,
```js
    if (this.state.showPerson) {
      persons = (
        <div>
          <Person
            click={this.switchNameHandler.bind(this, "Max!!!!!!")}
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            click={this.switchNameHandler}
            change={this.userNameHandler}
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
          <Person
            click={this.switchNameHandler}
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
```
we write js code in {} since we are in `<div>` (jsx) like below.
```js
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map(persona => {
            return <Person name={persona.name} age={persona.age} />;
          })}
        </div>
      );
    }
```
map() will go in the _this.state.persons_ one by one (we name one person in the array _persona_, you can name it whatever you want), and return it in new element called `<Person/>`. Then, we make _name_ and _age_ attribute to link with each person's name and age key in the state.

### 4.6 Lists & State (Delete an index in a list)
Let's learn how to delete a person from the array by clicking on the person element. Same concept, click event calls a function that does all the jobs.

In Person.js, add a click listener (onClick) to execute the _click_ props.
```js
    <div className="Person" onClick={props.click}>
      <p>
        I'm {props.name} and I'm {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
```

In App.js, add the _click_ above as attribute to the `<Person>` element we made in previous topic, and link it to a function that will delete the person in the state.
```js
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => { //add second argument 'index' to know which person we're looking right now.
            return (
              <Person
                click={() => this.deletePersonHandler(index)} //link to the function, pass index with arrow function instead of using bind(in older topic)
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }
```
Explanation on the edit:
First, we need to know where are we in the person array. With map(), we can use the reserved argument called _index_ as a second argument. Put them in bracket to not confuse the arrow function.
Now to pass the _index_ value to the _deletePersonHandler_ function, use blank arrow function.

Code below is the _deletePersonHandler_ function.
```js
  deletePersonHandler = personIndex => {
    //name an argument as personIndex to keep index value got.
    const persons = [...this.state.persons]; //temporarily copy the persons list
    //or to copy, you also can use the old way like below
    //const persons = this.state.persons.slice();
    //const persons = this.state.persons.; //bad way of copying data

    persons.splice(personIndex, 1); //to remove 1 element from the array. Which one? The personIndex.
    this.setState({ person: persons }); //update list
  };
```
What the code does is, when a person element is clicked, the index number from map() is passed into _personIndex_. We put the persons list from state into a const named persons. Then, we removed the clicked person(based on the index) using splice() from the const. Lastly, use setState to update the list into state. We already did the dynamic render before, so the clicked person should disappear.

### 4.8 Lists & Keys
Each elements should have attribute called _key_ to make sure everything is unique between each other.
Since we're rendering dynamically, React have a bad time of identifying each same elements rendered. To make it update efficiently, we use the default attribute called _key_. It's value, usually or should be a key named ID (or anything unique for each persons) in our database/state. Example:
```js
  state = {
    persons: [
      { id: "rgvstc2343", name: "Max", age: 28 },
      { id: "3cr24rf43r", name: "Manu", age: 29 },
      { id: "ewrc44y65y", name: "Elle", age: 26 }
    ],
    otherState: "other value",
    showPerson: "false"
  };
```

Now use this attribute on our dynamic `<Person>` element to differentiate between each other.
```js
            return (
              <Person
                click={() => this.deletePersonHandler(index)} //link to the function, pass index with arrow function instead of using bind(in older topic)
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
```

### 4.9 Flexible Lists - changing the lists in realtime
Our goal is to edit the name of any persons in the list. We did the input part in Person.js before. Let's recap the code below. Btw, please see Topic 3.22 and 3.23 if you're having a hard time catching up with this topic.
```js
      <input type="text" onChange={props.change} value={props.name} />
```
Using _onChange_ attribute, we try to execute everytime the value changes. We point the attribute to a prop we called _change_ to trigger a function later to update a state. Attribute _value_, which the value we type in, will go to _name_ props which can be used later.  

Okay now let's start. On App.js, use _change_ prop as an attribute in our `<Person>` element, and point it to function(or method in other language) to handle the update the person, named _nameChangedHandler_.
```js
            return (
              <Person
                click={() => this.deletePersonHandler(index)} //link to the function, pass index with arrow function instead of using bind(in older topic)
                name={person.name}
                age={person.age}
                key={person.id}
                change={this.nameChangedHandler}
              />
            );
```
Now everytime user type to change the name, it will point to the method. The method is almost the same like we learnt, but now, we have to add another argument since we need two pieces of information now, the _event_ (reserved argument we learnt before), and _id_ to get the ID of the person in the list.
```js
  nameChangedHandler = (event, id) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Elle", age: 27 }
      ]
    });
  };
```

Now, let's edit the `<Person>` to send the two data(event and person id). To do that, we edit the _change_ attribute we made in before in the `<Person>` element by defining an _anonymous function_ like below.
```js
change={event => this.nameChangedHandler(event, person.id)}
```

Our goal is to change the state of a person which the user choose to change. That's when the person ID comes in action.
We can use find() or findIndex() to go through the list to find the ID passed. On top inside of _nameChangedHandler_, add the const with function below.
```js
const personIndex = this.state.persons.findIndex(p => {
  return p.id === id;
})  
```

The _return_ explanation:
If the _p_'s ID is same as the ID we're looking for, it will return _true_, and vice versa. Then the result of the _return_ will be stored inside the const _personIndex_.

Now to get the person inside the persons list, add line below after line above. Line below will copy the person line with the right index from state, into a variable. This is important so you can use it whatever you want before setState.
```js
const person = {...this.state.persons[personIndex]};
```

To change the state of the person with the new name, add new lines below before the setState. 
```js
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
```
Explanation: 
The first line put the new name into the name key of the person. 
Second line, we copy the persons list from state into new const called persons before changing it.
Third line, we overwrite the new data(we get from first line) at the right position in persons. Now persons hold a new updated data, and ready to setState.
Then we setState by updating the persons variable into persons in state.

## 5. Styling React Components and Elements
### 5.2 Outlining the Problem Set
We made an inline css for the button before. Now we want to make the style changes on hover. We can only use pseudo selectors like _hover_ in a css file. We also want to change the style dynamically.

### 5.3 Change style dynamically
Just like render things dynamically by putting them into a function and link the function in render, same way is used to change the style dynamically.
For this example, let's change the button color from green to red if you hide the persons components list. Change the default color to red.
```js
  render() {
    const buttonStyle = {
      backgroundColor: "red",
      color: "white";
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };
...
```

Then, inside the "if show the persons list" condition, simply update the _backgroundColor_ to green.
```js
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            //add second argument 'index' to know which person we're looking right now.
            return (
              <Person
                click={() => this.deletePersonHandler(index)} //link to the function, pass index with arrow function instead of using bind(in older topic)
                name={person.name}
                age={person.age}
                key={person.id}
                change={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      buttonStyle.backgroundColor = "green";
    }
```