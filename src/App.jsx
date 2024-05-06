import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

import './scss/app.scss';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <div className="content">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
