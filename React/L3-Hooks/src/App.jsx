import { useEffect, useState, useRef } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'

// React Hooks are functions that let you use state and other React features without writing a class.
// They are a way to use state and lifecycle methods in functional components.
function App() {
  const [count, setCount] = useState(0) // hook to manage state -> useState(initialValue)
  const [color, setColor] = useState("blue") // state variable for color
  let a = useRef(0) // useRef to keep track of a variable without causing re-renders;
  const btnRef = useRef() // useRef to access the button element directly

  // Case1 - useEffect runs after every render
  useEffect(() => {
    a.current = a.current + 1;
    console.log(`Rendering value of a = ${a.current}`) // This will log the current value of 'a' after every render;
  })

  // Case2 - useEffect runs only once when the component mounts
  useEffect(() => {
    console.log("Hey, Welcome to the my page!") // This will run only once when the component mounts
    btnRef.current.style.color = "red"; // Change the color of the button to red
    btnRef.current.style.backgroundColor = "black"; // Change the background color of the button
    btnRef.current.style.border = "2px solid red"; // Add a red border to
    console.log("Button color changed to red")
  }, [])

  // Case3 - useEffect runs when specific state variables change
  useEffect(() => {
    console.log(`Count has been updated to ${count}`)
    setColor(count % 2 === 0 ? "blue" : "red") // Change color based on count
  }, [count]) // This effect runs whenever 'count' changes

  return (
    <>
      <Navbar color={color} />
      <div>The count is {count}</div>
      <button ref={btnRef} onClick={() => setCount(count+1)}>Update Count</button>
    </>
  )
}

export default App

//State Hooks
//State lets a component “remember” information like user input.
// 1.useState declares a state variable that you can update directly.
// 2.useReducer declares a state variable with the update logic inside a reducer function.

//Context Hooks 
// 3.useContext lets you access state from a parent component without passing it down as props.

//Ref Hooks
// 4.useRef lets you access a DOM element directly without re-rendering the component.

//Effect Hooks
// 5.useEffect connects a component to an external system.
// 6.useLayoutEffect lets you run effects synchronously after all DOM mutations.

//Performance Hooks
// 7.useMemo lets you memoize(cache the result) expensive calculations.
// 8.useCallback lets you memoize(cache a function definition) functions to avoid unnecessary re-renders.

//Custom Hooks
// 9.Custom hooks are functions that start with "use" and can call other hooks.
// They allow you to extract and reuse stateful logic across components.