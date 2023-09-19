import './ArticleFocus.css'
import { NavLink } from 'react-router-dom'

 const ArticleFocus = ({title, description, date, img, content, clear}) => {

    return (
        <div className="article-card">
            <NavLink to={"/"}>
            <button onClick={clear}>Back</button>
            </NavLink>
            <h3>{title}</h3>
                <p>{description}</p>
                <p>{content}</p>
                <p>{date}</p>
                <img src={img}/>
        </div>
    )
}

export default ArticleFocus