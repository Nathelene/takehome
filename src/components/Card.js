import './Card.css'

export default function Card({title, description, date, img}) {
    return (
        <div className="article-card">
            <h3>{title}</h3>
                <p>{description}</p>
                <p>{date}</p>
                <img src={img}/>
        </div>
    )
}