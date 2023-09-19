import './Card.css'
import { NavLink } from 'react-router-dom'

 const Card = ({title, description, date, img, selectArticle}) => {

    return (
       
            <div className="article-card">

                 <NavLink to={`/article/${title}`}>
                 <button onClick={selectArticle} id={title} className="card-button">
           
                <h3>{title}</h3>
                    <p>{description}</p>
                    <p>{date}</p>
                    <img className="image" src={img}/>  
          
                    </button>
        </NavLink>
       
        </div>
      
    )
}

export default Card