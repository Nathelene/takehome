import './Card.css'
import { NavLink } from 'react-router-dom'

 const Card = ({title, description, date, img, selectArticle}) => {

    const handleButtonClick = () => {
        selectArticle({ target: { id: title } }); 
      }

    return (
       
            <div className="article-card">
                 <NavLink to={`/article/${title}`}>
                 <button onClick={handleButtonClick} id={title} className="card-button">
                <h2>{title}</h2>
                    <p>{description}</p>
                    <p>{date}</p>
                    <img className="image" src={img}/>  
                    </button>
        </NavLink>
       
        </div>
      
    )
}

export default Card