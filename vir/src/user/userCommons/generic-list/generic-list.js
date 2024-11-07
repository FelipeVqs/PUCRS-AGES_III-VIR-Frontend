import React from 'react';
import './generic-list.css'

const List = ({ title, image, children }) => {

  
  return (
    <div class="list-item">
      <div class="item-img">
       
      </div>
      <div class="item-info">
        <div class="item-title">
          <p>{title}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default List;