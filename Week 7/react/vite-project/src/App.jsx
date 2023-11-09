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

  const[count, updateCount] = useState(1);
  const[loaded, setLoaded] = useState (false);
  const[myObj, setMyObj] = useState();


  function inc () {
    updateCount(count + 1);
  }

  function getData () {


    setMyObj ({title:"React is fun", description:"lots and lots of words..."});
    setLoaded (true);
    
  }

  // Comments
  // in JS land


  // if not loaded...

  if (!loaded) return (
    <>
      <h1>Loading...</h1>
      <button onClick={getData}>Get Data</button>
    </>
  )
  
  return (
    <>
    {/*Comment in JSX*/}
    {console.log ("In the return, so this is in JSX")}
    <h1 onMouseMove={inc}>Alex's first attempt {count}</h1>
    <h3>{myObj.title}</h3>
    <h3>{myObj.description}</h3>
    <Welcome name="freddy" age="24" newClass="myStyle"/>
    <Welcome name="Jill" age="34"newClass="otherStyle"/>
    <Welcome2 name="Bob" age="22" newClass="myStyle"/>
    </>
  )
}

export default App
