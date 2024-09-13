import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { setCategoryId } from "../../redux/slices/filterSlice";
import styles from "./Categories.module.scss";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const activeIndex = useSelector((state) => state.filter.categoryId);
  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className={classNames({ [styles.active]: activeIndex === index })}
            onClick={() => dispatch(setCategoryId(index))}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
