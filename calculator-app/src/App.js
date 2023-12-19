import Button from './components/buttons';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Calculator</h1>
        <div className="calculator">
          <div className="display">0</div>
          <div className="lines">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>*</Button>
          </div>
          <div className="lines">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>/</Button>
          </div>
          <div className="lines">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </div>
        </div>  
    </div>
  );
}

export default App;
