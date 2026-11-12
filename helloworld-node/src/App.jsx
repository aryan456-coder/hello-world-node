import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <h2>Welcome to React</h2>
      <p>So my name is Aryan</p>
      <p>I am a third year IT student</p>
      <p>I am interested in web development and software engineering and machine learning</p>
    </>
  )
}

export default App
