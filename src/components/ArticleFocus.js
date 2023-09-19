import './ArticleFocus.css'
import { NavLink } from 'react-router-dom'

 const ArticleFocus = ({title, description, date, img, content, clear}) => {

    return (
        <div className="focus-card">
            <NavLink to={"/"}>
            <button className="back-button" onClick={clear}>BACK</button>
            </NavLink>
            <h3>{title}</h3>
                <p>{description}</p>
                <p>{content}</p>
                <p>{date}</p>
                <img className="focus-image" src={img}/>
        </div>
    )
}

export default ArticleFocus