import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SHA1 } from "crypto-js";
import axios from "axios";

import { fetchItems } from "../../redux/slices/pizzaSlice";

import Categories from "../../components/Categories";
import Sort from "../../components/Sort";
import PizzaBlock from "../../components/PizzaBlock";
import Skeleton from "../../components/PizzaBlock/Skeleton";
import ErrorBlock from "../../components/ErrorBlock";

import styles from "./Home.module.scss";

const Home = ({ searchValue }) => {
  const dispatch = useDispatch();
  const activeCategoryId = useSelector((state) => state.filter.categoryId);
  const activeSort = useSelector((state) => state.filter.sort);
  const { items, status } = useSelector((state) => state.pizza);

  useEffect(() => {
    const category =
      activeCategoryId > 0 ? `&category=${activeCategoryId}` : "";
    const search = searchValue ? `&title=*${searchValue}` : "";

    dispatch(fetchItems({ sortBy: activeSort.sortBy, category, search }));
  }, [activeSort, activeCategoryId, searchValue]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const pizza = items.map((item) => <PizzaBlock key={item.id} {...item} />);

  return (
    <div className="container">
      <div className={styles.top}>
        <Categories />
        <Sort />
      </div>
      <h2 className={styles.title}>Вся пицца</h2>
      {status === "error" ? (
        <ErrorBlock />
      ) : (
        <div className={styles.items}>
          {status === "pending" ? skeletons : pizza}
        </div>
      )}
    </div>
  );
};

export default Home;
