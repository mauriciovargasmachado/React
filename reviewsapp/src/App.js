//import logo from './logo.svg';
import './App.css';
import Review from './components/review';

function App() {
  return (
    <div className="App">

      <h1 className='titulo'> Estos son algunas reviews de nuestros clientes:</h1>
      
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
