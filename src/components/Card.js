import './Card.css'
import { NavLink } from 'react-router-dom'

 const Card = ({title, description, date, img, selectArticle}) => {

    return (
        <NavLink to={`/article/${title}`}>
            <div className="article-card">
        <button onClick={selectArticle} id={title}>
           
                <h3>{title}</h3>
                    <p>{description}</p>
                    <p>{date}</p>
                    <img src={img}/>  
          
        </button>
        </div>
       </NavLink>
    )
}

export default Card