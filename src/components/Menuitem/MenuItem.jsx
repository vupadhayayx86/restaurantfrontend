import React from 'react';
import './MenuItem.css';

const MenuItem = ({title,price,tags}) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      {/* Menu Item Name */}
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{color:'#DCCA87'}}>
        {title}
        </p>
      </div>
      {/* Menu Item Dash */}
      <div className="app__menuitem-dash" />
      {/* Menu Item Price */}
      <div className="app__menuitem-price">
        <p className="p__cormorant">
        {price}
        </p>
      </div>
    </div>
    {/* Menu Items Tags */}
    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{color:'#AAA'}}>{tags}</p>
    </div>

  </div>
);

export default MenuItem;
