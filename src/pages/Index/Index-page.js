import './Index-page.css'
import Card from '../../components/Card/Card';          
import { useState,  useEffect } from 'react';

function IndexPage() {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json ())
      .then((result) => {
        setProducts(result);
      })
  }, []);

  return (
    <div className="index-page">
      <div className="index-page__container">
        { products.map((item, index) => {
            return <Card key={index}
                         title={item.title}
                         img={item.image}
                         price={item.price}
                         index={index}
                         id={item.id}
                         cardView={false}/>
            })
        }
      </div>
    </div>
  )
}

export default IndexPage; 
