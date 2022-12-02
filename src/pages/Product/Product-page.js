import './Product-page.css';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Card from "../../components/Card/Card";

function ProductPage() {
  const [ product, setProduct ] = useState({});
  const location = useLocation()

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://fakestoreapi.com${location.pathname}`);
      setProduct(await response.json());
    }

    fetchData().then()
  }, [location])

  return (
    <div className='box'>
      { Card({
        id: product.id,
        img: product.image,
        title: product.title,
        description: product.description,
        price: product.price,
        cardView: true
      }) }
    </div>
  )
}

export default ProductPage;
