import { useEffect, useState } from 'react';
import './Product.css';

function ProductPage() {
    const [ product, setProduct ] = useState({});

    useEffect( async () =>  {
        const response = await fench ('https://fakestoreapi.com/products/1');
        const result = await response.json();

        setProduct(result);
    }, [])

    return (
        <div className="product">
          <img className="product__img"src={ props.img } alt={props.alt}/>
          <div className="product__container">
            <h2 className="product__title">{ props.title }</h2>
            <p className="product__description">{ props.description }</p>
            <div className="product__price">{ props.price }</div> 
          </div>
        </div>
    )
  }

export default ProductPage;