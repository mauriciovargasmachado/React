import React from 'react';
import generateRandomData from './data';
import '../styles/review.css';

function Review() {

  const randomData = generateRandomData();

  const imageOptions = [
    require('../images/Foto 1.png'),
    require('../images/foto 2.png'),
    require('../images/foto 3.png'),
  ];

  const randomIndex = Math.floor(Math.random() * imageOptions.length);
  const selectedImage = imageOptions[randomIndex];


  return (
    <div className='review-container'>
      <img
        className='review-image'
        src={selectedImage}
        alt={`Foto ${randomIndex + 1}`}
      />
      <div className='review-text-container'>
        <h1 className='review-name'>{randomData.randomName}</h1>
        <h3 className='review-occupation'>{randomData.jobTitle}</h3>
        <p className='review-text'>{randomData.review}</p>
      </div>
    </div>
  );
}

export default Review;