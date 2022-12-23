
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [advice, setAdvice] = useState("")

  useEffect(() => {
    console.log('component did mount');
    fetchAdvice();
    
  }, [])
  
  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((res) => {
        const {advice} = res.data.slip 
        setAdvice(advice)
        console.log(advice);
      })
      .catch((err) => {
        console.log(err);
      })
  }


  return (
    <div className="App">
       <div className="card">
        <h1 className='heading'>{advice}</h1>
        <button className='button' onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
       </div>
    </div>
  );
}

export default App;
