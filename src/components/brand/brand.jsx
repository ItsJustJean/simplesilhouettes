import React from 'react';
import { place1,place2,place3,place4,place5 } from './imports';
import './brand.css';


const Brand = () => {
  return (
    <div className='simple__brand section'>
      <div>
        <img src={place1} alt='place1' width={200}/>
      </div>
      <div>
        <img src={place2} alt='place2' width={200}/>
      </div>
      <div>
        <img src={place3} alt='place3' width={200}/>
      </div>
      <div>
        <img src={place4} alt='place4' width={200}/>
      </div>
      <div>
        <img src={place5} alt='place5' width={200}/>
      </div>
      Brand</div>
  )
}

export default Brand