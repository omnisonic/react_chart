import React, { useState } from 'react';
import './App.css';



function App() {

  const [data, setApiData] = useState([]);

  console.log('fetch results:', data)


  fetch("https://api.exchangeratesapi.io/latest")
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        // Check for errors:
        // if (data.message ===  "Not Found") {
        //   setResults([]);
        //   return;
        // }
       setApiData(data);
      });


  return (
   <div>
    <div class="flex-container" id="data">

    </div>
   </div>
  );
}



export default App;
