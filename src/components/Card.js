import './Card.css'
import { NavLink } from 'react-router-dom'

export default function Card({title, description, date, img}) {
    return (
        
        <div className="article-card">
            <h3>{title}</h3>
                <p>{description}</p>
                <p>{date}</p>
                <NavLink to='/article'>
                <img src={img}/>
                </NavLink>
        </div>
   
    )
}