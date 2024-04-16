import { useState } from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li className={activeIndex === i ? 'active' : ''} onClick={() => onClickCategory(i)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
