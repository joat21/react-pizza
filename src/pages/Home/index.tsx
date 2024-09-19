import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchItems } from '../../redux/slices/pizzaSlice';
import { selectFilter } from '../../redux/slices/filterSlice';

import Categories from '../../components/Categories';
import Sort from '../../components/Sort';
import PizzaBlock from '../../components/PizzaBlock';
import Skeleton from '../../components/PizzaBlock/Skeleton';
import ErrorBlock from '../../components/ErrorBlock';

import { RootState, useAppDispatch } from '../../redux/store';
import { Status } from '../../entities/model';
import styles from './Home.module.scss';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { categoryId, sort, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector((state: RootState) => state.pizza);

  useEffect(() => {
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const search = searchValue ? `&title=*${searchValue}` : '';

    dispatch(fetchItems({ sortBy: sort.sortBy, category, search }));
  }, [sort, categoryId, searchValue]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  console.log(items);
  const pizza = items.map((item) => <PizzaBlock key={item.id} {...item} />);

  return (
    <div className='container'>
      <div className={styles.top}>
        <Categories />
        <Sort />
      </div>
      <h2 className={styles.title}>Вся пицца</h2>
      {status === Status.FAILED ? (
        <ErrorBlock />
      ) : (
        <div className={styles.items}>
          {status === Status.PENDING ? skeletons : pizza}
        </div>
      )}
    </div>
  );
};

export default Home;
