# This is an example of React app
## What I did before
`$ npx create-react-app react-example`  
This command will generate a boilerplate like the master branch.  

## How to use
### Setup
`$ git clone git@github.com:wengair/react-example.git`  
Clone this repo to your computer.  
Since we use the RESTful style to connect the frontend and backend, we need to install the library for both of them.
`$ npm install`  
Run this command to install all the necessary libraries for the frontend.  
Then enter the `backend` folder and `$ npm install` again to install all necessary libraries for the backend.  
### During the development
Since our frontend and backend are separated, you need to run `$ npm start` in both folders to make the site work properly.  
Or you could only run the command in one folder if you don't need another one.  
For frontend:  
This command will run the app and you can open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
One benefit is if you changed something, you don't need to rerun the command. Localhost will change it automatically.  
You would want to `control + c` to stop and run `npm start` again if you have some relatively important change.  
E.g. changing something in HTML's `<head>`.  

For backend:  
This command will run the server and you can open [http://localhost:8080](http://localhost:8080) to view endpoints in the browser.  
Unlike the frontend, you need to restart the server by `$ npm start` again if you make any change.

## You would want to check out these files
[src/App.js](https://github.com/wengair/react-example/blob/index-example/src/App.js)  
What happens here is I have 2 components, `Nav` and `Landing`, and I call them one by one.  
Since both of them return HTML elements, it works just like we write a static HTML file, the `Landing`'s HTML would go after `Nav`'s HTML.  
So inside here equals to
```HTML
<body>
  <div>Nav's content</div>
  <div>Landing's content</div>
</body>
```
[src/components/Nav.js](https://github.com/wengair/react-example/blob/index-example/src/components/Nav.js)  
[src/components/Landing.js](https://github.com/wengair/react-example/blob/index-example/src/components/Landing.js)  

## Something I feel important for CS 561 project
Reference: [Turotial](https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&fbclid=IwAR1N0ilYIlqKN-w0K209nCxnJ3MHTu8isboa-aMB5V6xLoUbMCpOqM8MZ9k)  
You can skip video 22 ~ 35 since they’re talking about class and I suggest not to use it in our project. (explanation is in video 7)  
You would like to follow the practice from video 44.  

### Basic concept
#### Functional Programming
 - React has 2 ways to generate a piece of HTML code: Class of Function.  
I recommend using Function since it's basically as same as what we know about a function (write the repeated part once and call it many times).  
In React, this kind of function called `component`, you can consider it as a special function that returns HTML.  
Here's how a function component looks like  
```JavaScript
import React from 'react'

function app() {
  // Here's the Logic part
  // You can write JavaScript here and even make as many function as you want
  return (
    <div>
      {/* Here's the HTML part */}
      {/* you can blend some {JavaScript} here to dynamically generate HTML, like the following line*/}
      {recipes.map(recipe => <li>{recipe.name}</li>)}
    </div>
  )
}

export default app
```
 - One important thing is one component can only return `one HTML element`.
So if you want to return 2 divs, you need to use [Fragments](https://reactjs.org/docs/fragments.html) and the code would look like this
```JavaScript
return (
  <>
    <div>First element</div>
    <div>Second element</div>
  </>
)
```
 - Since all component is a function, we can also pass parameters to components.  
 Here's the example
 ```JavaScript
// in App.js
function App() {
  return (
    <>
      <Nav login={true} userName={stateVariable} /> // ← here
      <Landing />
    </>
  )
}


// in Nav.js
function Nav({login, userName}) { // ← and here
  return (
    <div>
      {login
        ? <p>Hi! {userName}</p>
        : <button>Log in</button>}
    <div>
  )
}
 ```
#### useState
 - Because react would draw one page many times, the value defined by JS way like `let x=1` will be washed out.  
For example, if you have the following code in the logic part
```JavaScript
let x = 1
console.log(x)
x = 2
console.log(x)
```
When you open the localhost in Chrome and check dev tool, you might see something like
```
1
2
1
2
1
2
```
 - All variables declared with `useState` are called `State`.  
You can consider `useState`  as a React way to declare a variable, for example
```JavaScript
const [saving, setSaving] = useState(false)
```
`saving` is the new variable
We can only use `setSaving` to change the value of `saving`, something like `saving = true` is not allowed.
One drawback is `setSaving` can not change the value immediately.  
This is due to how React design to enhance performance.  
In order to speed up, they will update state variables together, as a result, it will delay a little bit and can't use the new value right away.
There's always a workaround like declaring a new variable and use it.

#### useEffect
 - React works like “draw something first, then change it (rerender)“, and `useEffect` is the function that triggers the rerender.   Usually, data fetching would be placed in here.  
Here's how it looks like
```JavaScript
useEffect(() => {
  // effect
  return () => {
    // cleanup
  }
}, [])
```
`effect` is where you write the logic like `fetch`
You would seldom write the `cleanup` part, it's totally fine to delete the whole return.
`[]` lists all state variables you want to listen to.  
For example, you can set it as `[refresh]`, and this useEffect would be triggered automatically once and every time when the value of `refresh` changes.

#### useContext (optional)
A hook that can replace redux, it allows us to use some values without passing them through components, a good place to store user information.

#### useInput (optional)
Getting the value from forms in React is a little bit annoying.  
Basically, we need to create a state variable to store the value.

#### userRef (optional)
Only need to use it if you want to focus on a form field when user enter a page.

### Library
#### styled-jsx
I use [styled-jsx](https://github.com/vercel/styled-jsx) to help us manage the CSS.  
 - One drawback is it's not as convenient as the `.css` file because it doesn't have auto-complete.  
But it's a great library that allows us to write CSS in the same file and only works for that single component, which means we don't need to worry about the `name collision` anymore.  
 - It can also use the state variable to set the CSS so that we could worry less about CSS when this kind of change happens.  
 - Since React can only return one element, we need to put it in the second layer.  
Here's how it looks like
```JavaScript
return (
  <div className='nav-container'>
    <img src={Logo} alt='App Logo' className='logo-img' />
    <p>Sous Chef</p>
    <button>Log in</button>
    <style jsx>
      {`
      .nav-container {
        height: 75px;
        display: flex;
      }

      .logo-img {
        height: 50px;
      }
      `}
    </style>
  </div>
)
```

## File Structure
### Backend
The root folder is the frontend folder so basically, the Backend folder is put inside the frontend folder.  
`models` contains the table settings that we'll use in MongoDB  
`receipeRecord` contains the data we get from Spoonacular  
`services` contains files that are called in `server.js`  

### Frontend
`public` contains HTML files like favicon.  
`src/components` contains small elements that can be used repeatedly in pages.  
`src/hooks` contains all custom hook files.  
`src/lib` contains util functions or config that can be used repeatedly in pages.  
`src/views` contains the components that represent the whole page.  

## Miscellaneous
- Naming convention  
  React component: camelcase starting with capital, e.g. SearchResult  
  React custom hook: starts with use..., e.g. useInput  
  JavaScript variable: camelcase, e.g. queryString  
- Eslint is used for making sure our work maintains the same code style.  
  You might find some warnings when you run `$ npm start`.  
  It doesn't really affect any performance but it would be great if you could follow the instruction and fix the style issues.  
- I included the `.env` since it's easier for us to develop, normally we shouldn't do that though.  