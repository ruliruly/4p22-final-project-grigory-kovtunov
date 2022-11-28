import './App.css';                                 
import { Routes, Route } from 'react-router-dom';

import IndexPage from './pages/Index/Index-page';
import ContactPage from './pages/Contacts/Contacts-page';
import DefaultLayout from './layouts/DefaultLayout'
import ProductPage from './pages/Product/Product-page';

function App() {
     return (   
      <div className="app-container" >
        <Routes>
          <Route path={'/'} element={<DefaultLayout/>}>
            <Route index element={<IndexPage/>}/>
            <Route path={'contacts'} element={<ContactPage/>}/>
            <Route path={'product'} element={<ProductPage/>}/>
          </Route>
        </Routes>
      </div>           
  );
};

export default App;