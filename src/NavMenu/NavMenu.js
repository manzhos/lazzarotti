import React, {Component} from "react"

import './navmenu.css';

class NavMenu extends Component {
  render(){
    return (
      <div className="a-nav"> 
        <div className="nav-menu"> 
          {/* <svg viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: translate(0px, 0px);"> 
            <path d="M3.8 4L0.2 0L0 0.1L2.5 4L0 8L0.2 8.1L3.8 4Z" fill="#C19A5B"></path> 
            <path d="M6.9 4L3.2 0L3 0.1L5.5 4L3 8L3.2 8.1L6.9 4Z" fill="#C19A5B"></path> 
          </svg> */}
          <ul> 
            <li><a href="https://lazzarotti.com/" aria-current="page" data-transition="menu" className="is-active">Home</a></li> 
            <li><a href="https://lazzarotti.com/studio/" data-transition="menu">Studio</a></li> 
            {/* <li><a href="https://lazzarotti.com/aebele/" data-transition="menu">Æbele</a></li>  */}
            <li><a href="https://lazzarotti.com/work/" data-transition="menu">Work</a></li> 
            <li><a href="https://lazzarotti.com/contact/" data-transition="menu">Contact</a></li> 
            <li><a target="_blank" rel="noreferrer" href="https://www.webshop.lazzarotti.com/" data-transition="menu">Webshop</a></li> 
          </ul> 
        </div>
      </div>
    )}
}  

export default NavMenu;
