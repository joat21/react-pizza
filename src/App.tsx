import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PizzaPage from './pages/PizzaPage';
import NotFound from './pages/NotFound';

import './scss/app.scss';

const App: FC = () => {
  return (
    <div className='wrapper'>
      <div className='content'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/pizza/:id' element={<PizzaPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
