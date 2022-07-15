import React from "react";
//styles
import './AdBlock.css';

// images
import webshop from '../images/webshop.jpg';


const AdBlock = ({active, handleClose})=>{
  return (
    <div className={active ? "a-popup active" : "a-popup"}> 
      <div className="popup-wrap"> 
        <button className="popup-close" onClick={ () => { handleClose() } }> Close </button> 
        <div className="popup-image"> 
          <img className="popup-src" src={webshop} alt="lazzarotti" /> 
        </div> 
        <div className="popup-text"> 
          <h3 className="f-heading-r"> 
            <div className="f-line"> LAZZAROTTI<br/> </div> 
            <div className="f-line"> &amp; Associati<br/> </div> 
            <div className="f-line"> Arcitect </div> 
          </h3> 
          <p className="f-paragraph-m"> 
            The very first home fragrance is rich and raw, powerful and luxurious. A smell that lingers in your mind and memory. Sensual and smoky, cosmopolitan and masculine. 
          </p> 
          <a href="https://lazzarottiassociati.com/" target="_blank" rel="noreferrer" data-button=""> 
            <span>
              <div className="f-line">
                <i>
                  <div>
                    <div>&raquo; Visit out shop</div>
                  </div>
                </i> 
              </div>
            </span> 
          </a> 
        </div> 
      </div> 
      <div className="popup-background"></div> 
    </div>
  );    
};

export default AdBlock;
