import React, { useState } from 'react'
// import getData from './utils/getData'
import getData from './assets/utils/getData';
import './App.css'
import People from "./components/People"

function App() {
  // var
  // const [getter, setter] = useState (init);
  const [loaded, setLoaded] = useState (false);
  const [aboutObj, setAboutObj] = useState();

  // functions
  React.useEffect (()=>{
    getData ("about/")
      .then((returnJSON)=>{
        console.log ("here", returnJSON);
        setAboutObj (returnJSON);
        setLoaded (true);
      })
  }, []);

  // People.useEffect (()=>{
  //   getData ("about/")
  //     .then((returnJSON)=>{
  //     console.log ("here", returnJSON);
  //     setAboutObj (returnJSON);
  //     setLoaded (true);
  //   })
  // }, []);

  

  // render 
  if (!loaded) return (
    <>
      <h1>Welcome to the iSchool</h1>
      <h3>Loading...</h3>
    </>
  );

  return (
    <>
      <section class="stick">
        <h1>Welcome to the iSchool</h1>
      </section>
      <section class="App">
        <section class="About">
          <h2>{aboutObj.title}</h2>
          <h3>{aboutObj.description}</h3>
          <div className="aboutQuote">
            <h5 className="quote">{aboutObj.quote}</h5> 
          </div>
        </section>
      {/* Other Components */}
      {/* <hr></hr>
      <People></People> */}
      <People></People>
      
    </section>
    </>
  )
}

export default App
