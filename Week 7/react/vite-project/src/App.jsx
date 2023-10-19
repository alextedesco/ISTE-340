import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Bring in Welcome2
import Welcome2 from './components/functional_component'

// simple component
function Welcome ({name, age, newClass}) {
  return <h1 className={newClass}>Hello {name}, you are {age} years old!</h1>;
}

function App() {

  // Comments
  // in JS land
  console.log ("in thr app, not in the return");
  return (
    <>
    {/*Comment in JSX*/}
    {console.log ("In the return, so this is in JSX")}
    <h1>Alex's first attempt</h1>
    <Welcome name="freddy" age="34" newClass="myStyle"/>
    <Welcome name="Jill" age="34"newClass="otherStyle"/>
    <Welcome2 name="Bob" age="22" newClass="myStyle"/>
    </>
  )
}

export default App
