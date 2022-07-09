import React, { Component }  from 'react';

//images
import logo     from './images/logoLazzSign.svg';
import invLogo  from './images/logoLazz.svg';
import mainImg  from './images/work/villa_gracia/villa_grazia_56.jpg';
import main2    from './images/work/villa_gracia/villa_grazia_58.jpg';
import main3    from './images/work/villa_gracia/villa_grazia_67.jpg';
import main4    from './images/work/villa_gracia/villa_grazia_94-1.jpg';


//styles
import './App.css';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

//ad block
import AdBlock from './AdBlock/AdBlock.js'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      setAdBlockActive: false
    }
  }

  componentDidMount(){
    this.setState();
    setTimeout(() => {
      this.setState({ setAdBlockActive: true });
    }, 2000)
  }

  handleClose = () => {
    this.setState({ setAdBlockActive: false })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <a href="https://lazzarottiassociati.com/"> <img src={logo} className="App-logo" alt="logo" /> </a>
        </header>
        <div id={'invintation'} className="invintation">
          <p className="gold-c b">
            WORLDWIDE <FontAwesomeIcon icon={faGlobe} /> TURNKEY INTERIOR PROJECTS<br/>
            LAZZAROTTI &amp; ACCOSIATI ARCHITECTS IS A PREMIUM RE-SELLER OF ITALIAN LUXURY
            {/* <button onClick={ () => setAdBlockActive(true) }>ad</button> */}
          </p>
        </div>
        <div className="inv-img-container">
            <img src={invLogo} className="inv-img" alt=""/>
        </div>
        <img src={mainImg} className="main_img1" alt=""/>
        <img src={main2} className="main_img2" alt=""/>
        <img src={main3} className="main_img3" alt=""/>
        <img src={main4} className="main_img4" alt=""/>      
  
        <AdBlock active={this.state.setAdBlockActive} handleClose={this.handleClose} />
  
      </div>
    );
  }
}

export default App;
