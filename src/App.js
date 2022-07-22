import React, { Component }  from 'react';

// images
import logo from './images/logoLazzSign.svg';

// styles
import './App.css';

// components
import Home from './Home/Home.js'
// import TestPage from './TestPage/TestPage.js'
import AdBlock from './AdBlock/AdBlock.js'
import Welcome from './Welcome/Welcome.js'
import NavMenu from './NavMenu/NavMenu.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      setAdBlockActive: false,
      setActive:false
    }
  }

  componentDidMount(){

    this.setState();
    setTimeout(() => {
      this.setState({ setAdBlockActive: true });
    }, 10500)
  }

  handleClose = () => {
    this.setState({ setAdBlockActive: false })
  }

  render(){
    return (
      <div className="App">
        <Welcome />
        <header className="App-header">
          <a href="https://lazzarottiassociati.com/" className="App-logo"> <img src={logo} alt="logo" /> </a>
        </header>
        <Home />
        {/* <TestPage /> */}
        <AdBlock active={this.state.setAdBlockActive} handleClose={this.handleClose} />
        <NavMenu />            
      </div>
    );
  }
}

export default App;
