import "./CakeCard.css"

const CakeCard = ({ imgSrc, description, text, id, onCardClick }) => {
    
    return (
        <div className='cake-card' onClick={(e) => onCardClick(id)} >
            <img src={imgSrc} alt={text} text={description} id={id}></img>
            <h5>{description}</h5>
        </div>
    )
}

export default CakeCard;