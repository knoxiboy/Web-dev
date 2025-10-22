import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) // State to keep track of the count
  const [showBtn, setShowBtn] = useState(true) // State to control button visibility
  const [todos, setTodos] = useState([  // State to manage todos
    {
      title: "Todo1",
      desc: "I am a good todo"
    },
    {
      title: "Todo2",
      desc: "I am a good todo too"
    },
    {
      title: "Todo3",
      desc: "I am not a good todo"
    },

  ])

  // const Todo = ({todo}) => {
  //   return(
  //   <>
  //   <div>
  //     <div className="todo">{todo.title}</div>
  //     <div className="todo">{todo.desc}</div>
  //   </div>
  //   </>
  //   )
  // }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      { /* showBtn? <button onClick={() => setShowBtn(!showBtn)}> This is a button </button> : "Button is Hidden" */ }
      {showBtn && <button >This is a button</button>}

      {todos.map(todo => {
        // return <Todo key={todo.title} todo={todo}/>
        return( 
          <div key={todo.title}>
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
          </div>
        )
      })}

      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>
          {showBtn ? 'Hide Button' : 'Show Button'}
        </button>
        {/*
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
