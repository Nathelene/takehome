import './Card.css'
import { NavLink } from 'react-router-dom'

 const Card = ({title, description, date, img, selectArticle}) => {

    return (
        <NavLink to={`/article/${title}`}>
        <button onClick={selectArticle} id={title}>
            <div className="article-card">
                <h3>{title}</h3>
                    <p>{description}</p>
                    <p>{date}</p>
                    <img src={img}/>  
            </div>
        </button>
       </NavLink>
    )
}

export default Card