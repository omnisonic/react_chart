import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [apiData, setApiData] = useState({});
  console.log('apidata set', apiData);
  // const [newData, setnewData] = useState({});


  function doFetch() {
    fetch('https://api.exchangeratesapi.io/latest?base=USD')
      .then(response => response.json())
      .then(data => {
        console.log('got data back!', data);
        setApiData(Object.entries(data.rates).filter(innerArray => innerArray[1] <= 2));
      });
  }
 
  useEffect(doFetch, []);

  return (
   <div class="container">
    <header>    
      <h1>Exchange Rate Chart</h1>
    </header>

    <div className="chart">
      <div className="chart-container">   
        {
          Object.entries(apiData).map(([, value]) => (
            <div title="Click bar for rate info" onClick={() => alert('1 USD'  + ' costs ' + value[1].toFixed(1) + ' '+ value[0])} 
            className="chart-bar" 
            style={{height: (value[1] * 20) + "%"}}> 
            {value[0]}
            </div>
          ))
        }
      </div>
    </div>
    <footer>Created by JCTECH</footer>

  </div>
  );
}

export default App;
