import { FC } from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: FC = () => (
  <ContentLoader
    speed={2}
    width={250}
    height={450}
    viewBox='0 0 250 450'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle cx='125' cy='125' r='125' />
    <rect x='20' y='270' rx='10' ry='10' width='210' height='18' />
    <rect x='0' y='310' rx='10' ry='10' width='250' height='80' />
    <rect x='0' y='420' rx='10' ry='10' width='90' height='25' />
    <rect x='140' y='409' rx='20' ry='20' width='110' height='40' />
  </ContentLoader>
);

export default Skeleton;
