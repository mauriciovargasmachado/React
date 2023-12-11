import React from 'react';
import '../styles/counter.css';

function Counter({clickNumber}) {
    console.log("clickNumber:", clickNumber);
    return (
        <div className='counter'>
            {clickNumber}
        </div>
    )
}

export default Counter  ;