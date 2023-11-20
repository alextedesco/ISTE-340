// Imports
import React, { useState} from 'react'
import getData from './utils/getData'
import './App.css'

// Components
import Menu from "./components/Menu/Menu"
import About from "./components/About/About"
import Degrees from './components/Degrees/Degrees'
import Minors from './components/Minors/Minors'
import Employment from './components/Employment/Employment'
import People from './components/People/People'

function App() {
  //var
  //const [getter, setter] = useState(init);
  const [loaded, setLoaded] = useState(false);
  const [aboutObj, setAboutObj] = useState();
  const [appSection, setAppSection] = useState('about');

  // Stores the currentURL and turns it into a URL object
  const currentUrl = React.useRef(window.location.href);
  
  // Function to get the about information from the API
  React.useEffect(() => {
    getData('about/')
      .then((returnJson) => {
        setAboutObj(returnJson);
        setLoaded(true);
      })
  }, []);
  
  const handleAppSectionChange = (section) => {
    // Changes the section with the class 'App' on the click of a nav list element
    setAppSection(section);

    // Changes the URL of the browser to clicked on page
    // url.pathname = ("/" + section);
    // console.log (url)
    window.history.pushState({}, '', currentUrl.current + section);
    
  };

  // Render
  if (!loaded) return (
    <>
      <h1>Welcome to the iSchool</h1>
      <h3>Loading...</h3>
    </>
  );

  return (
    <>
      <section className="stick">
        <img src="https://people.rit.edu/act2076/ISTE340/assets/iSchool.png" style={{
          padding: "10px",
          height: "100px"
        }} />
        <Menu handleAppSectionChange={handleAppSectionChange} />
        <hr />
      </section>

      <section className="App">
        {appSection === 'about' && <About aboutObj={aboutObj} />}
        {appSection === 'degrees' && <Degrees />}
        {appSection === 'minors' && <Minors />}
        {appSection === 'employment' && <Employment />}
        {appSection === 'people' && <People />}
        <hr />
      </section>
    </>
  )
}

export default App
