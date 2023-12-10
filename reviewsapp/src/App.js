//import logo from './logo.svg';
import './App.css';
import Review from './components/review';

function App() {
  return (
    <div className="App">

      <div className='titulo'>
        <h1 > Estos son algunas reviews de nuestros clientes:</h1>
      </div>
      <div className='component'>
        <Review />
      </div>
      <div className='component'>
        <Review />
      </div>
      <div className='component'>
        <Review />
      </div>
      <div className='component'>
        <Review />
      </div>
      <div className='component'>
        <Review />
      </div>

     
    </div>
  );
}

export default App;
