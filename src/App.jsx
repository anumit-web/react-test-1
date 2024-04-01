import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import UseStateExample2  from "./UseStateExample2.jsx";
function UseStateExample1() {
  const [name, setName] = useState('Taylor');  // text variable
  const [age, setAge] = useState(42);  // integer variable

  return (
    <>
        <h3>Integer and text example</h3>
        <h4>** DEBUG code **</h4>
        <h4>** function UseStateExample1 **</h4>

      <input value={name} onChange={e => setName(e.target.value)} />

      <button onClick={() => setAge(a => a + 1)}>  Increment age  </button>

      <p>Hello, {name}. You are {age}.</p>

    </>
  );
}

function App() {


  return (
    <>
      <div>
        <h1> useState</h1>
        <UseStateExample1 />
        <hr />
        <UseStateExample2 />
      </div>
    </>
  )
}

export default App
