import React  from 'react';
import PropTypes from 'prop-types';

import { Loading } from '../../components';

import CategoryItem from './CategoryItem';

import './Categories.scss';

const Categories = ({ data, isLoading, url }) => {

  if (isLoading){
    return <Loading/>
  }

  return (
    <div className="categories" data-testid="categories">
      <div className="container">
        <p className="categories__title">Categorias</p>
        <div className="categories__content">
          {
            data && data.items.map(item => (
              <CategoryItem 
                key={item.id}
                id={item.id}
                icon={item.icons[0].url}
                name={item.name}
                url ={item.href}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default Categories;

