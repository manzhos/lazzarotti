import React, { useState, useEffect } from "react";
//styles
import '../App.css';
import './welcome.css';

// images
import logo_ani from '../images/logoLazz_W.mp4';


const Welcome = () => {
  const [inactive, setInactive] = useState(true);
  useEffect(() => {
    setTimeout(() => { setInactive(false) }, 3500);
  }, []);

  return (
    <div className={inactive ? "welcome" : "welcome inactive"}> 
      <div style={{position: 'relative', width:'100vw', height:'100vh'}}>
        <div className="logo_welcome">
          <video style={{width:'400px', height:'150px'}} autoplay="autoplay" muted="muted"> 
            <source src={logo_ani} type="video/mp4" />
          </video>
        </div>      
      </div>
    </div>
  );    
};

export default Welcome;
