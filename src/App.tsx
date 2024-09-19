import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './layouts/Main';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PizzaPage from './pages/PizzaPage';
import NotFound from './pages/NotFound';

import './scss/app.scss';

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route path='' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='pizza/:id' element={<PizzaPage />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
