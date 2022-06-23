import './css/App.css';
import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import NewCheese from './components/NewCheese';
import AboutPage from './components/AboutPage';
import Past from './components/Past';

function App() {
  const [cheese, setCheeses] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/cheeses")
    .then(response => response.json())
    .then(data => setCheeses(data))
  }, [])


  return (
    <>
    <Navbar />
    <div className="App">
    <HomePage />
    <NewCheese className="new"/>
    <Past cheese={cheese} />
    <AboutPage />
    </div>
    </>
  );
}

export default App;
