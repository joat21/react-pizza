import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { SHA1 } from 'crypto-js';

import Categories from '../../components/Categories';
import Sort from '../../components/Sort';
import PizzaBlock from '../../components/PizzaBlock';
import Skeleton from '../../components/PizzaBlock/Skeleton';

import styles from './Home.module.scss';

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const activeCategoryId = useSelector((state) => state.filter.categoryId);
  const activeSort = useSelector((state) => state.filter.sort);

  useEffect(() => {
    const category = activeCategoryId > 0 ? `&category=${activeCategoryId}` : '';
    const search = searchValue ? `&title=*${searchValue}` : '';
    setIsLoading(true);
    axios
      .get(
        `https://1fa97bb2e797534b.mokky.dev/pizzas?sortBy=${activeSort.sortBy}${category}${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [activeSort, activeCategoryId, searchValue]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className={styles.top}>
        <Categories />
        <Sort />
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
