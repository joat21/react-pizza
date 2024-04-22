import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <h1 className={styles.root}>
      <icon>😕</icon>
      <br />
      Ничего не найдено
    </h1>
  );
};

export default NotFoundBlock;
