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
          {
            products.map((item, index) => {                           
              return <Card key={index} title={item.title} 
                         //description={item.description}
                         img={item.image}
                         price={item.price}
                         onClick={() => console.log('click on', index)}
                         id={item.id} /> 
              })
          };
        </div>
      </div>
    )
};

export default IndexPage; 