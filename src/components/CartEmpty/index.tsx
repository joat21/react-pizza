import { FC } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/img/empty-cart.png';
import styles from './CartEmpty.module.scss';

const CartEmpty: FC = () => {
  return (
    <div>
      <div className={`container ${styles.container}`}>
        <div className={styles.empty}>
          <h2>Корзина пустая</h2>
          <p>
            Вы еще не выбрали ни одного товара.
            <br />
            Для того, чтобы выбрать пиццу, перейдите на главную страницу.
          </p>
          <img src={image} alt='Empty cart' />
          <Link to='/' className='button button--black'>
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
