import './Index-page.css'
import Card from '../../components/Card/Card';          
import Input from '../../components/input/input';
import Counter from '../../components/Counter/Counter';
import Header from '../../components/Header/Header';
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
        <Header/>
        <Counter/>
        <div className="index-page__container">
          {
            products.map((item, index) => {                           
              return <Card key={index} title={item.title} 
                         //description={item.description}
                         img={item.image}
                         price={item.price}/> 
              })
          };
        </div>
        <div className="index-page__newsletter">
          <h2>Subscribe to company news</h2>
          <Input name="email" id="email" type="email" placeholder="email"/>
          <button>Subscribe</button> 
        </div>
      </div>
    )
};

export default IndexPage; 