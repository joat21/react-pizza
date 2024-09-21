import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { fetchItems } from '../../redux/slices/pizzaSlice';
import { selectFilter, setCurrentPage } from '../../redux/slices/filterSlice';

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
  const { categoryId, sort, searchValue, currentPage } =
    useSelector(selectFilter);
  const { meta, items, status } = useSelector(
    (state: RootState) => state.pizza
  );

  useEffect(() => {
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const search = searchValue ? `&title=*${searchValue}` : '';

    dispatch(
      fetchItems({ sortBy: sort.sortBy, category, search, currentPage })
    );
  }, [sort, categoryId, searchValue, currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onChangePage = (pageIndex: number) => {
    dispatch(setCurrentPage(pageIndex + 1));
  };

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const pizza = items.map((item) => <PizzaBlock key={item.id} {...item} />);

  return (
    <div className={`container ${styles.container}`}>
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
      {meta && meta.total_pages > 1 && (
        <ReactPaginate
          className={styles.pagination}
          previousLabel='<'
          breakLabel='...'
          nextLabel='>'
          pageCount={meta.total_pages}
          onPageChange={(e) => onChangePage(e.selected)}
        />
      )}
    </div>
  );
};

export default Home;
