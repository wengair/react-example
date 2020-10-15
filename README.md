# This is an example of React app
## What I did before
`$ npx create-react-app react-example`  
This command will generate a boilerplate like the master branch.  

## How to check your work
`$ npm install`  
Run this command to install all necessary libraries.  
`$ npm start`  
This command will run the app and you can open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
One benefit is if you changed something, you don't need to rerun the command. Localhost will change it automatically.  
You would want to `control + c` to stop and run `npm start` again if you have some relatively important change.  
E.g. changing something in HTML's `<head>`.  

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
```
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
So if you want to return 2 divs, you need to use [Fragments](https://reactjs.org/docs/fragments.html) and the code would looks like this
```
return (
  <>
    <div>First element</div>
    <div>Second element</div>
  </>
)
```

#### useState
 - Because react would draw one page many times, the value defined by JS way like `let x=1` will be washed out.  
For example, if you have the following code in the logic part
```
let x = 1
console.log(x)
x = 2
console.log(x)
```
When you open the page and check dev tool, you might see something like
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
```
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
```
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
```
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
