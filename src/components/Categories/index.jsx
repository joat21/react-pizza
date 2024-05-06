import { useState } from 'react';
import classNames from 'classnames';
import styles from './Categories.module.scss';

const Categories = (props) => {
  const { activeIndex, setActiveIndex } = props;
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className={classNames({ [styles.active]: activeIndex === index })}
            onClick={() => setActiveIndex(index)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
