import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [apiData, setApiData] = useState({});
  console.log('apidata set', apiData);
  // const [newData, setnewData] = useState({});


  function doFetch() {
    fetch('https://api.exchangeratesapi.io/latest')
      .then(response => response.json())
      .then(data => {
        console.log('got data back!', data);
        setApiData(Object.entries(data.rates).filter(innerArray => innerArray[1] <= 5));
      });
  }
 
  useEffect(doFetch, []);



  // newData = Object.keys(apiData).filter(function(value) {
  //   // Countries under 1000000000
  //   return apiData[value] <= 3;
  // });
  
  // console.log('filtered data:', newData);

  // rates = Object.keys(apiData)
  //   .filter(rate => rates[rate] <= 3)
  //   .reduce((a, c) => {a[c] = rates[c]; 
  //     return a}, {})
      
  //     console.log('filtered data:', rates);


  // const obj = apiData;
  // console.log('new obj', obj)
  // const filteredData = obj.filter(function (elem) {
  //   return elem.value >= 3

  // });
  // console.log(filteredData);

  // try this https://stackoverflow.com/questions/2722159/how-to-filter-object-array-based-on-attributes

  return (
   <div>
    {/* <div className="BarChart"> {
    apiData.map(datum => (
    <div className="BarChart-bar" style={{height: datum.percentage + "%"}}> {datum.label}
  </div>
    ))
      }
  </div> */}







    <div>
      <h2>Exchange Rate Chart</h2>
      <div className="column-chart">
        <ul className="chart-container"> 
          {
            Object.entries(apiData).map(([, value]) => (
              <li onClick={() => alert('1 EUR'  + ' costs ' + value[1] + value[0])} className="chart-column" style={{height: (value[1] * 50) + "%"}}> {value[0]}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  </div>
  );
}



export default App;
