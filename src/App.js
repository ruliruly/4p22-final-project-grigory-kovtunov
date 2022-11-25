import './App.css';                                 
import Card from './components/Card/Card';          
import Button from './components/Button/Button';
import Input from './components/input/input';
import { useEffect, useState } from 'react';
import Counter from './components/Counter/Counter';

function App() {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json ())
      .then((result) => {
        setProducts(result);
      })                                                   
}, []);                                                  
    return (                
    <div className="App"> 
    <h1>Привет</h1>  
    <Counter/>
      <div className="App-container">
        {
          products.map((item, index) => {                           
            return <Card key={index} title={item.title} 
                         //description={item.description}
                         img={item.image}
                         price={item.price}/> 
          })
        }
      </div>
      <div className="App-newsletter">
        <h2>Подписаться на новости компании</h2>
        <Input name="email" id="email" type="email" />
        <Button>Подписаться</Button> 
      </div>
    </div>
  );
}

export default App;
