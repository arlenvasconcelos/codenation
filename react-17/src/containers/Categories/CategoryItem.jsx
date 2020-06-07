import React  from 'react';
import {Link} from 'react-router-dom'

const CategoryItem = ({ id, icon, name, url }) => (
  <div className="categories__item" data-testid="category">
    <a
      className="categories__item__link" 
      href={url}
    >
      <img src={icon} alt={name}/>
      <div className="categories__item__title">
        {name}
      </div>
    </a>
  </div>
);

export default CategoryItem;

