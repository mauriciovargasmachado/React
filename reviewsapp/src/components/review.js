import React from 'react';

function Review () {
    return (
        <div className='review-container'>
            <img 
            className='review-image' 
            src={require('../images/Foto 1.png')}
            alt='Foto 1'
            />
            <div className='review-text-container'>
                <h1 className='review-name'>Este es el titulo</h1>
                <h3 className='review-ocupation'>esta es la ocupacion</h3>
                <p className='review-text'>"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"</p>
            </div>
        </div>
    )
}

export default Review;