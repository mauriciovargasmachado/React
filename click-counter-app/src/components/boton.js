import React from 'react';

function Boton ({text, isClickButton, clickManage}) {
    return (
        <button className={isClickButton? "click-button" : "reset-button"} onClick={clickManage}>
            {text}
        </button>
    );
}

export default Boton;