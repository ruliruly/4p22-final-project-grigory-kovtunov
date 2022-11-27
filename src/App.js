import './App.css';                                 
import { Routes, Route } from 'react-router-dom';

import IndexPage from './pages/Index/Index-page';
import ContactPage from './pages/Contacts/Contacts-page';

function App() {
     return (   
      <div className="app-container" >
        <Routes>
          <Route index path={'/'} element={<IndexPage/>}/>
          <Route path={'contacts'} element={<ContactPage/>}/>
        </Routes>
      </div>           
  );
};

export default App;