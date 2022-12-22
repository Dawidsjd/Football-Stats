import React from 'react';
//import './App.css';

function App() {

const [working, setWorking] = React.useState('DZIAŁA');

//fetching the data
fetch("https://v3.football.api-sports.io/fixtures/headtohead?h2h=33-34", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "a11921fc86ef0ca55046a8565f4e22ec"
    }
})
.then(response => response.json().then(data => {
  console.log(data['response'][0]['teams']['away']['name'])
    

}))
.catch(err => {
    console.log(err);
    setWorking('NIE DZIAŁA - too many request');
});

  return (
    <>
    <div id='grid__container'>
    <div className='stats__container'>
      <div className='card'>
      <div className='stats'>
      <div id="wg-api-football-fixtures"
                    data-host="v3.football.api-sports.io"
                    data-refresh="60"
                    data-date="2022-12-22"
                    data-key="a11921fc86ef0ca55046a8565f4e22ec"
                    data-theme="dark"
                    data-show-errors="false"
                    class="api_football_loader">
        </div>
        </div>
      </div>
    </div>
    </div>
    
</>
  );
}

export default App;
