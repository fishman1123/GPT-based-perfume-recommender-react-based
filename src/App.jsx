import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Test from "./Test.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path= "/" element = {<Test/>}></Route>
              </Routes>
          </BrowserRouter>
      </div>
    </>
  )
}

export default App
