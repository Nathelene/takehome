import './ArticleFocus.css'
import { NavLink } from 'react-router-dom'

 const ArticleFocus = ({title, description, date, img, content, clear}) => {

    return (
        <div className="article-card">
            <button onClick={clear}>Back</button>
            <h3>{title}</h3>
                <p>{description}</p>
                <p>{content}</p>
                <p>{date}</p>
                <img src={img}/>
        </div>
    )
}

export default ArticleFocus