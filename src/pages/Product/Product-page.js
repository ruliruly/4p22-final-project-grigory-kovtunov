import './Product-page.css';
import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';

function ProductPage() {
    const [ product, setProduct ] = useState({});

    useEffect( async () =>  {
        const response = await fetch ('https://fakestoreapi.com/products/1');
        const result = await response.json();

        setProduct(result);
    }, [])

    return (
        <div className='box'>
        <div className='container-product'>
            <h2 className='container-product__title'>{ product.title }</h2>
            <img className='container-product_img' src={ product.image }></img>
            <p className='container-product_description'>{ product.description }</p>
            <div className='container-product__price'>{ product.price }</div> 
            <Button>Add to Basket</Button>
        </div>
        </div>
    )
  }

export default ProductPage;