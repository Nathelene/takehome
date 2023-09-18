
import { Router } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'

function App() {

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
