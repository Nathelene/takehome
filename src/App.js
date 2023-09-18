
import { Router } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import Card from './components/Card'
import { Routes, Route } from 'react-router-dom'
import  articleData from './ArticleMockData'

function App() {

const articleCards = articleData.articles.map(article => {
  return (
    <Card 
    title = {article.title}
    description={article.description}
    date={article.publishedAt}
    />
  )
})
console.log(articleData.articles)

  return (
    <div className="App">
     <Nav />
    <Routes>
      <Route path="/" element={ <div className="home">{articleCards}</div>}/>
    </Routes>
    
    </div>
  );
}

export default App;
