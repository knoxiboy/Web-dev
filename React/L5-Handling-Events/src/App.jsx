import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Karan")
  // const [form, setForm] = useState({email: "", phone: ""})
  const [form, setForm] = useState({})

  const handleClick = ()=> {
    alert("Button clicked!");
  }

  // const handleChange = (e)=> {
  //   setName(e.target.value);
  // }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    console.log(form);
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}> Click me </button>
      </div>

      {/* <input type="text" value={name} onChange={handleChange} /> */}
      {/* <input type="text" name="email" value={form.email} onChange={handleChange}/>
      <input type="text" name="phone" value={form.phone} onChange={handleChange}/> */}
      <input type="text" name="email" value={form.email? form.email : ''} onChange={handleChange}/>
      <input type="text" name="phone" value={form.phone? form.phone : ''} onChange={handleChange}/>
      {/* above example is for handling forms */}

    </>
  )
}

export default App
