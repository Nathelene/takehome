import './ArticleFocus.css'
import { NavLink } from 'react-router-dom'

 const ArticleFocus = ({title, description, date, img, content, clear}) => {

    return (
        <div className="focus-card">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <NavLink to={"/"}>
            <button className="back-button" onClick={clear}><span class="material-symbols-outlined">
arrow_back
</span></button>
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