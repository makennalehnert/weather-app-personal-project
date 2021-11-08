import React, {useState} from "react";
import "./App.css";
import Header from './Header'
import Nav from './Nav'
import Weather from './Weather'

function App() {
  const [location, setLocation] = useState("");



  return (
    <>
      <div>
        <Header/>
        <Nav location={location} setLocation={setLocation}/>
        <Weather location={location}/>
      </div>
    </>
  );
}

export default App;
