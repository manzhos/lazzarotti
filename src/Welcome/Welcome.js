import React, { useState, useEffect } from "react";
//styles
import '../App.css';
import './welcome.css';

// images
import logo_ani from '../images/logoLazz.svg';


const Welcome = () => {
  const [inactive, setInactive] = useState(true);
  useEffect(() => {
    setTimeout(() => { setInactive(false) }, 2000);
  }, []);

  return (
    <div className={inactive ? "welcome" : "welcome inactive"}> 
      <div style={{position: 'relative', width:'100vw', height:'100vh'}}>
        <div className="logo_welcome">
          <img src={logo_ani} alt="lazzarotti" /> 
        </div>      
      </div>
    </div>
  );    
};

export default Welcome;
