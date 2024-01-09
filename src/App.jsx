import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function btnClick() {
    setCount(count+1);
  }
  return (
   <div>
    {count}
    <button onClick={() => {btnClick()}}>Click Me</button>
   </div>
  )
}

export default App
