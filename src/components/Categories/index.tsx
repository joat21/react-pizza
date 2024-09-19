import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { setCategoryId } from '../../redux/slices/filterSlice';
import { RootState } from '../../redux/store';
import styles from './Categories.module.scss';

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];

const Categories: FC = () => {
  const dispatch = useDispatch();
  const activeIndex = useSelector(
    (state: RootState) => state.filter.categoryId
  );

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
