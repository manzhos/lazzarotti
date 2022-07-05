import React  from 'react';
// import { Component }  from 'react';

//images
import logo from './images/logoLazzSign.svg';
import invLogo from './images/logoLazz.svg';
import mainImg from './images/work/villa_gracia/villa_grazia_56.jpg';
import main2 from './images/work/villa_gracia/villa_grazia_58.jpg';
import main3 from './images/work/villa_gracia/villa_grazia_67.jpg';
import main4 from './images/work/villa_gracia/villa_grazia_94-1.jpg';

//styles
import './App.css';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="#"> <img src={logo} className="App-logo" alt="logo" /> </a>
      </header>
      <div id={'invintation'} className="invintation">
        <p className="gold-c b">
          WORLDWIDE <FontAwesomeIcon icon={faGlobe} /> TURNKEY INTERIOR PROJECTS<br/>
          LAZZAROTTI &amp; ACCOSIATI ARCHITECTS IS A PREMIUM RE-SELLER OF ITALIAN LUXURY
        </p>
      </div>
      <div className="inv-img-container">
          <img src={invLogo} className="inv-img" alt=""/>
      </div>
      <img src={mainImg} className="main_img1" alt=""/>
      <img src={main2} className="main_img2" alt=""/>
      <img src={main3} className="main_img3" alt=""/>
      <img src={main4} className="main_img4" alt=""/>      
      {/* <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
    </div>
  );
}

export default App;
