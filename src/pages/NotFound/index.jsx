import { Link } from 'react-router-dom';
import NotFoundBlock from './components/NotFoundBlock';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.root}>
      <NotFoundBlock />
      <Link to="/">
        <button className="button">На главную</button>
      </Link>
    </div>
  );
};

export default NotFound;
