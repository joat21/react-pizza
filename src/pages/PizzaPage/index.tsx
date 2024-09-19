import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { PizzaItem } from '../../entities/model';

import styles from './PizzaPage.module.scss';

const PizzaPage: FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<PizzaItem>();

  useEffect(() => {
    async function fetchItem() {
      const { data } = await axios.get<PizzaItem>(
        `https://1fa97bb2e797534b.mokky.dev/pizzas/${id}`
      );

      setData(data);
    }

    fetchItem();
  }, []);

  if (!data) {
    return <>Загрузка...</>;
  }

  const { title, price, imageUrl, ingredients } = data;

  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <img src={imageUrl} alt={title} />
        <div className={styles.info}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.ingredients}>{ingredients}</p>
          <div className={styles.bottom}>
            <div className={styles.price}>от {price} ₽</div>
            <Link
              to='/'
              className={`button button--outline button--add button--return`}
            >
              <svg
                width='8'
                height='14'
                viewBox='0 0 8 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7 13L1 6.93015L6.86175 1'
                  stroke='#D3D3D3'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <span>Вернуться назад</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaPage;
