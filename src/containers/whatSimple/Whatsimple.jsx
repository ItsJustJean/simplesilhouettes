import React from 'react'
import {Feature} from '../../components';
import './whatsimple.css';

const whatsimple = () => (
  <div className="simple__whatss section__margin" id="wsimple">
    <div className="simple__whatss-feature">
      <Feature title="Simple Silhouettes" text="The creation of this brand is to expand the world of fashion to an audience which was not predisposed to style. Making fashion accessible for all and doing so in a beautiful manner." />
    </div>
    <div className="simple__whatss-heading">
      <h1 className="gradient__text">Redefining an entire generation of fashion isn't easy</h1>
      <p>Explore the Catalog</p>
    </div>
    <div className="simple__whatss-container">
      <Feature title="Materials" text="Simple Silhouettes is made entirely of recylcled materials scavenged off the coast of Amalfi." />
      <Feature title="Factories" text="Clothing manufacturing will all be centered around the headquarters based in the heart of Venezia, Italy." />
      <Feature title="Vision" text="We plan to simplify the fashion experience, create subtle everyday pieces that match with anything, and create new stylish pieces to push the face of fashion forward." />
    </div>
  </div>
);

export default whatsimple;