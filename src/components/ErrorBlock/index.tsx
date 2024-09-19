import { FC } from 'react';
import styles from './ErrorBlock.module.scss';

const ErrorBlock: FC = () => {
  return (
    <div className={styles.error}>
      <h2>
        Что-то сломалось <span>😕</span>
      </h2>
      <p>Повторите попытку позже.</p>
    </div>
  );
};

export default ErrorBlock;
