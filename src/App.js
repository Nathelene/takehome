
import { Router } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import './ArticleMockData'

function App() {

// const articleCards = 


  return (
    <div className="App">
     <Nav />
    <Routes>
      <Route path="/" element={ <div className="home"> Articles Here </div>}/>
    </Routes>
    
    </div>
  );
}

export default App;
