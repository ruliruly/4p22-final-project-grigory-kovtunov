import './Card.css';                   
import Button from '../Button/Button'; 

function Card(props) {     
    return (                     
      <div className="card"> 
        <img className="card__img"src={ props.img } alt={props.alt}/>
        <div className="card__container">
          <h2 className="card__title">{ props.title }</h2>
          <p className="card__description">{ props.description }</p>
          <div className="card__price">{ props.price }</div> 
        </div>
        <div className='card__button'>
          <Button>Add to Basket</Button> 
        </div>
      </div>
    )
}

export default Card;