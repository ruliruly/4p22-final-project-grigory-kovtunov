import './Card.css';                   
import Button from '../Button/Button'; 

function Card({img, title, description, price, onClick = () => {}}) {  
    return (                     
      <div className="card"> 
                  <img className="card__img" src={ img } onClick={ onClick } to={'contacts'} /> 
          <div className="card__container" onClick={ onClick } to={'contacts'} >
              <h2 className="card__title">{ title }</h2>
              <p className="card__description">{ description }</p>
              <div className="card__price">{ price }</div> 
          </div>
        <div className='card__button'>
          <Button>Add to Basket</Button> 
        </div>
      </div>
    )
}

export default Card;