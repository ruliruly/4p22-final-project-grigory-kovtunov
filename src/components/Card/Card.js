import './Card.css';                   
import Button from '../Button/Button';
import {useLocation, useNavigate} from "react-router-dom";

function Card({ id, img, title, description, price, cardView }) {
  const navigate = useNavigate();
  const location = useLocation();

  const routeChange = () =>{
    let path = `/products/${id}`;

    if (path !== location.pathname) {
      navigate(path);
    }
  }

  return (
      <div>
        <div className={ cardView ? 'container-product' : 'card' } onClick={routeChange}>
          { cardView ? <h2 className='container-product__title'>{ title }</h2> : null }
          <img className={ cardView ? 'container-product_img' : 'card__img' } src={ img } alt={''}/>
          <div className="card__container">
            { !cardView ? <h2 className="card__title">{ title }</h2> : null}
            <p className="card__description">{ description }</p>
            <p className="card__price">{ price }</p>
          </div>
          <div className='card__button'>
            <Button>Add to Basket</Button>
          </div>
        </div>
      </div>
    )
}

export default Card;
