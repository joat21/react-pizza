import { useEffect, useState } from 'react';
import axios from 'axios';

import Categories from '../../components/Categories';
import Sort from '../../components/Sort';
import PizzaBlock from '../../components/PizzaBlock';
import Skeleton from '../../components/PizzaBlock/Skeleton';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://1fa97bb2e797534b.mokky.dev/pizzas').then((res) => {
      setItems(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Вся пицца</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default Home;
