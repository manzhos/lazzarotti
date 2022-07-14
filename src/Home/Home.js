import React, {useState, useEffect} from 'react';

// styles
import '../App.css';
import './home.css';

// images
import invLogo  from '../images/logoLazz.svg';
import mainImg  from '../images/work/villa_gracia/villa_grazia_56.jpg';
import main2    from '../images/work/villa_gracia/villa_grazia_58.jpg';
import main3    from '../images/work/villa_gracia/villa_grazia_67.jpg';
import main4    from '../images/work/villa_gracia/villa_grazia_94-1.jpg';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Home = () =>{
  // scroll observer
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {setScroll(window.scrollY)};
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
  const topImg2 = (80 - scroll/75) + 'vw';
  const topImg3 = (75 - scroll/55) + 'vw';
  const topImg4 = (90 - scroll/35) + 'vw';

  const spans = document.querySelectorAll('.word span');

  spans.forEach((span, idx) => {
    // span.addEventListener('click', (e) => {
    //   e.target.classList.add('active');
    // });
    span.addEventListener('animationend', (e) => {
      e.target.classList.remove('active');
    });
    
    // Initial animation
    if(scroll>1000 && scroll<1100) {
      setTimeout(() => { span.classList.add('active'); }, 150)
    }
  });

  return(
    <>
      <div id={'invintation'} className='invintation'>
        <p className='gold-c b'>
          WORLDWIDE <FontAwesomeIcon icon={faGlobe} /> TURNKEY INTERIOR PROJECTS<br/>
          LAZZAROTTI &amp; ACCOSIATI ARCHITECTS IS A PREMIUM RE-SELLER OF ITALIAN LUXURY
        </p>
      </div>
      <div className='inv-img-container'>
          <img src={invLogo} className='inv-img' alt=''/>
      </div>
      <div className='img_block'>
        <img src={mainImg} className='main_img1' alt=''/>
        <img src={main2} className='main_img2' style={{ top: topImg2}} alt=''/>
        <img src={main3} className='main_img3' style={{ top: topImg3}} alt=''/>
        <img src={main4} className='main_img4' style={{ top: topImg4}} alt=''/>   
      </div>

      <section className='s-text layout-1' data-bg='#ffffff'> 
        <div className='s-grid'> 
          <h2 className='f-title-r'>
            <div className='line'>
              <div className='t-center'>
                <div className='subtitle'> Turnkey</div> 
              </div>
            </div>
          </h2>
          <div className='t-center f-heading-m'>
            <div className='word'>
              <span>H</span>
              <span>I</span>
              <span>G</span>
              <span>H</span>
              <span>-</span>
              <span>E</span>
              <span>N</span>
              <span>D</span>
            </div>
            <div className='word'>
              <span>I</span>
              <span>N</span>
              <span>T</span>
              <span>E</span>
              <span>R</span>
              <span>I</span>
              <span>O</span>
              <span>R</span>
              <span>S</span>
              <span>&amp;</span>
            </div>
            <div className='word'>
              <span>E</span>
              <span>X</span>
              <span>T</span>
              <span>E</span>
              <span>R</span>
              <span>I</span>
              <span>O</span>
              <span>R</span>
              <span>S</span>
            </div>
          </div> 
        </div>
        <div style={{ width:'100%', height:50}}>&nbsp;</div>
        <p className='lineUp'>
          lazzarotti &amp; Associati Arcitects offers a full range of bespoke
        </p>
        <p className='lineUp'>
          interior design services — from initial concept and
        </p>
        <p className='lineUp'>
          aesthetic counselling to coordination, execution
        </p>
        <p className='lineUp'>
          and magazine-worthy finishing touches.
        </p>
      </section>
      <div style={{ width:'100%', height:300}}>&nbsp;</div>

      {/* <div style={{ position: 'fixed', top: 50, right: 50, zIndex: 5000, background: 'aqua', padding: 20 }}>{scroll}</div> */}
    </>
  );
};

export default Home;
