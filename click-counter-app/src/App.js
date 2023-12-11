import './App.css';
import Boton from './components/boton';
import logo from './images/logo.jpg'; 
import './styles/boton.css';
import Counter from './components/counter';
import { useState } from 'react';

function App() {

  const clickManage = () => {
    console.log("click!");
    console.log(setClickNumber);
    setClickNumber(clickNumber + 1);
  }

  const resetManage = () => {
    console.log("reset!");
    console.log(setClickNumber);
    setClickNumber(0);
  }

  const [clickNumber, setClickNumber] = useState(0);


  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" 
             src={logo} 
             alt="logo" />
      </div>
      <div className="main-container">
      
      <Counter clickNumber={clickNumber} />

        <Boton
          text="Click me!"
          isClickButton={true}
          clickManage={clickManage}
        />
        <Boton
          text="Reset!"
          isClickButton={false}
          clickManage={resetManage}
        />
      </div>
    </div>
  );
}

export default App;
