import React from 'react';
import { images,data } from '../../constants';
import { SubHeading,MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu That Fits Your Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex_center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine,index)=>(
            <MenuItem key={wine.title+index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>
          {/* End of Wine Menu */}

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>
      {/* Start of Cocktail menu */}
      <div className="app__specialMenu-menu_cocktails flex_center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail,index)=>(
            <MenuItem key={cocktail.title+index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
         {/* End of Cocktail Menu    */}
    </div>
    <div style={{marginTop:"15px"}}>
          <button type='button' className='custom__button'>View More</button>
        </div>
  </div>
);

export default SpecialMenu;
