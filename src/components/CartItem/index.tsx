import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  removeItem,
  decrementItemCount,
  selectCartItemById,
} from '../../redux/slices/cartSlice';
import { CartItemType } from '../../entities/model';
import styles from './CartItem.module.scss';

const CartItem: FC<CartItemType> = (props) => {
  const { id, title, price, imageUrl, size, type, count } = props;
  const dispatch = useDispatch();
  const item = useSelector(selectCartItemById(id));

  const onClickPlus = () => {
    dispatch(addItem({ id, price } as CartItemType));
  };

  const onClickMinus = () => {
    dispatch(decrementItemCount(id));
  };

  const onClickRemove = () => {
    if (confirm('Вы уверены, что хотите удалить товар?')) {
      dispatch(removeItem(id));
    }
  };

  if (!item) {
    return <>Загрузка...</>;
  }

  return (
    <div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={imageUrl} alt='Pizza' />
        </div>
        <div className={styles.info}>
          <h3>{title}</h3>
          <p>
            {type} тесто, {size} см.
          </p>
        </div>
        <div className={styles.count}>
          <button
            onClick={onClickMinus}
            className={`button button--outline button--circle ${styles.minus}`}
            disabled={item.count === 1}
          >
            <svg
              width='10'
              height='10'
              viewBox='0 0 10 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z'
                fill='#EB5A1E'
              />
              <path
                d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z'
                fill='#EB5A1E'
              />
            </svg>
          </button>
          <b>{item.count}</b>
          <button
            onClick={onClickPlus}
            className={`button button--outline button--circle ${styles.plus}`}
          >
            <svg
              width='10'
              height='10'
              viewBox='0 0 10 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z'
                fill='#EB5A1E'
              />
              <path
                d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z'
                fill='#EB5A1E'
              />
            </svg>
          </button>
        </div>
        <div className={styles.price}>
          <b>{price * count} ₽</b>
        </div>
        <div className={styles.remove}>
          <button
            onClick={onClickRemove}
            className='button button--outline button--circle'
          >
            <svg
              width='10'
              height='10'
              viewBox='0 0 10 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z'
                fill='#EB5A1E'
              />
              <path
                d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z'
                fill='#EB5A1E'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
