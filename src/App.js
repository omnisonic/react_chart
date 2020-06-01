import React, { useState } from 'react';
import './App.css';



function App() {

  const [data, setApiData] = useState([]);

  console.log('fetch results:', data)


  // fetch("https://api.exchangeratesapi.io/latest")
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('data', data);
  //       // Check for errors:
  //       // if (data.message ===  "Not Found") {
  //       //   setResults([]);
  //       //   return;
  //       // }
  //      setApiData(data);
  //     });


  return (
   <div>
    <div>

      <h2>Exchange Rate Chart</h2>
      <div>
          <div className="column-chart">
              <ul className="chart-container">
                  <li onclick="alert('EUR costs 1.00 EUR')" className="chart-column" style={{ height: '50.0%' }}>EUR</li>
                  <li onclick="alert('USD costs 0.926 EUR')" className="chart-column" style={{ height: '46.3%' }}>USD</li>
                  <li onclick="alert('AUD costs 0.594 EUR')" className="chart-column" style={{ height: '29.7%' }}>AUD</li>
                  <li onclick="alert('GBP costs 1.127 EUR')" className="chart-column" style={{ height: '56.36%' }}>GBP</li>
                  <li onclick="alert('BRL costs 0.16 EUR')" className="chart-column" style={{ height: '08.0%' }} >BRL</li>

              </ul>
          </div>
      </div>

</div>
   </div>
  );
}



export default App;
