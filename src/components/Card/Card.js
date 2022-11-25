import './Card.css';                   
import Button from '../Button/Button'; 
import { useEffect } from 'react';

function Card(props) {   
   function documentClick() {
       console.log('click on document');
   }
   useEffect(() => {
      document.addEventListener('click', documentClick)

      return () => {
        document.removeEventListener('click', documentClick )
      }
   }, []);
   
    return (                     
      <div className="Card"> 
        <img className="Card-img"src={ props.img } alt={props.alt}/>
        <div className="Card-container">
          <h2 className="Сard-title commom-header">{ props.title }</h2>
          <p className="Card-description">{ props.description }</p>
          <div className="Card-price">{ props.price }</div> 
        </div>
          <div className='Card-button'>
            <Button>Купить</Button> 
          </div>
      </div>
    )
}

export default Card;