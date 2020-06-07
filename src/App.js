import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [apiData, setApiData] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [date, setDate] = useState('latest');

  console.log('apidata set', apiData);

  function changeBase(event) {
    console.log('getting change back', event.target.value)
    setBaseCurrency(event.target.value)
  }

  function changeDate(event) {
    console.log('changing date', event.target.value)
    setDate(event.target.value)
  }

  function doFetch() {
    fetch(`https://api.exchangeratesapi.io/${date}?base=${baseCurrency}`)
      .then(response => response.json())
      .then(data => {
        console.log('got data back!', data);
        setApiData(Object.entries(data.rates).filter(innerArray => innerArray[1] <= 2));
      });
  }
  useEffect(doFetch, [baseCurrency, date]);

  return (
   <div className="container">
    <header>    
      <h1>Exchange Rate Chart</h1>
      <div> <label>Choose Currency </label> 
        <select value={baseCurrency} onChange={changeBase} name="rate" id="rate">
        {
          Object.entries(apiData).map(([, value]) => (
          <option value={value[0]}>{value[0]}</option>
          ))
        }
        </select>
        <label>Choose Date </label>
        <select onChange={changeDate} name="date" id="date">

          <option value="latest">Today</option>
          <option value="2019-01-12">2019-01-12</option>
          <option value="2018-01-12">2018-01-12</option>
          <option value="2017-01-12">2017-01-12</option>
          <option value="2016-01-12">2016-01-12</option>
          <option value="2015-01-12">2015-01-12</option>
          <option value="2014-01-12">2014-01-12</option>

        </select>
      </div>
    </header>

    <div className="chart">
      <div className="chart-container">   
        {
          Object.entries(apiData).map(([, value]) => (
            <div
            className="chart-bar" 
            style={{height: (value[1] * 50) + "%"}}> 
            {value[0]}
            <div>{value[1].toFixed(2)}</div>
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
