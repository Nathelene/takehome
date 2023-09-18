
import { Router } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import Card from './components/Card'
import { Routes, Route } from 'react-router-dom'
import  articleData from './ArticleMockData'

function App() {

  //https://newsapi.org/v2/everything?q=Apple&from=2023-09-18&sortBy=popularity&apiKey=API_KEY
  //KEY = 661718b383d64c97a5b747739086a400
  
const articleCards = articleData.articles.map(article => {
  return (
    <Card 
    title = {article.title}
    description={article.description}
    date={article.publishedAt}
    img={article.urlToImage}
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
