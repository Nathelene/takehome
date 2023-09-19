
import { Router } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import Card from './components/Card'
import ArticleFocus from './components/ArticleFocus'
import { Routes, Route } from 'react-router-dom'
import  articleData from './ArticleMockData';
import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [date, setDate] = useState("")
  const [img, setImg] = useState("")

  //https://newsapi.org/v2/everything?q=Apple&from=2023-09-18&sortBy=popularity&apiKey=API_KEY
  //KEY = 661718b383d64c97a5b747739086a400
  
  const selectArticle = (e) => {
   
    articleData.articles.forEach(article => {
      console.log(article.title)

      if(e.target.id === article.title) {
        setTitle(article.title)
        setDescription(article.description)
        setContent(article.content)
        setDate(article.publishedAt)
        setImg(article.urlToImage)
    
      }
    })

    console.log(e.target.id, 'e.target.id')
    console.log('hey')
  }

  const clear = () => {
    setTitle("")
    setDescription("")
    setContent("")
    setDate("")
    setImg("")
  }

const articleCards = articleData.articles.map(article => {
  return (
    <Card 
    title = {article.title}
    description={article.description}
    date={article.publishedAt}
    img={article.urlToImage}
    selectArticle={(e) => selectArticle(e)}
    />
  )
})


  return (
    <div className="App">
     <Nav />
      <Routes>
        <Route path="/" element={ <div className="home">
          <p>{articleCards}</p>
          </div>}/>
        <Route path="/article/:title" element={ <ArticleFocus title={title} description={description} content={content} date={date} img={img} clear={clear}/> } />
      </Routes>
    </div>
  );
}

export default App;