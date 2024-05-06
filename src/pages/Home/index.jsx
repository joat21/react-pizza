import { useEffect, useState } from 'react';
import axios from 'axios';

import Categories from '../../components/Categories';
import Sort from '../../components/Sort';
import PizzaBlock from '../../components/PizzaBlock';
import Skeleton from '../../components/PizzaBlock/Skeleton';

import styles from './Home.module.scss';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategoryId, setActiveCategoryId] = useState(0);
  const [activeSort, setActiveSort] = useState({ name: 'популярные', sortBy: '-rating' });

  useEffect(() => {
    const category = activeCategoryId > 0 ? `&category=${activeCategoryId}` : '';
    setIsLoading(true);
    axios.get(`https://1fa97bb2e797534b.mokky.dev/pizzas?sortBy=${activeSort.sortBy}${category}`)
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [activeSort, activeCategoryId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='container'>
      <div className={styles.top}>
        <Categories activeIndex={activeCategoryId} setActiveIndex={setActiveCategoryId} />
        <Sort activeSort={activeSort} setActiveSort={setActiveSort} />
      </div>
      <h2 className={styles.title}>Вся пицца</h2>
      <div className={styles.items}>
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default Home;
