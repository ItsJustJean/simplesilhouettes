import React from 'react'
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Placeholder 1',
    text: 'Much love.',
  },
  {
    title: 'Placeholder 2',
    text: 'No Nationality, About:blank, and AllSaints are some of my top brands btw',
  },
  {
    title: 'Placeholder 3',
    text: 'Fashion.exe',
  },
  {
    title: 'Placeholder 4',
    text: 'Shoutout to David Obadia for the idea! ',
  },
];

const Features = () => {
  return (
    <div className='simple__features section__padding' id='features'>
      <div className='simple__features-heading'>
        <h1 className='gradient__text'>Don't know what im going to type here but yeah here it is.</h1>
        <p>Join our newsletter to stay up to date.</p>
      </div>
      <div className='simple__features-container'>
        {featuresData.map((item, index) => (
          <Feature title = {item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features