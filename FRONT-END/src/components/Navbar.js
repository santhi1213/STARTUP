import {Link, useNavigate} from "react-router-dom"
import React, { useEffect } from "react"
import "./Navbarstyles.css"
import { Component } from "react"
// import { useNavigate } from "react-router-dom"



class Navbar extends Component {
  state = {clicked: false};
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  
  render() {
    const auth =localStorage.getItem('user');
    // const navigate =useNavigate();
    const logout=()=>{
       localStorage.clear();
       this.props.navigate('/singnupc')
    }
      return (
        <header>
        <nav className="navbar">

          <Link to='/' style={{textDecoration:'none', marginLeft:'20px'}}><h1 className="app_title">StartHub</h1></Link>
          <div className="menu_items" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul id="items" className={this.state.clicked ? "nav_elements active" : "nav_elements"} >
          <Link to='/' className="home-btn" style={{textDecoration:'none'}}><li className="nav_items"><i id="icon" className="fa-solid fa-house-user"></i>Home</li></Link>
          </ul>

           { auth ?
            <ul id="items" className={this.state.clicked ? "nav_elements active" : "nav_elements"}>

                
                <Link to='/about' style={{textDecoration:'none'}}><li className="nav_items"><i id="icon" className="fa-solid fa-circle-info"></i>About</li></Link>
                <Link to='/chatbox' style={{textDecoration:'none'}}><li className="nav_items"><i id="icon" class="fa fa-comments" ></i>Chat</li></Link>
                <Link to='/browse' style={{textDecoration:'none'}}><li className="nav_items"><i id="icon" class="fa-solid fa-coins"></i>Browse</li></Link>
                <Link to='/contact' style={{textDecoration:'none'}}><li className="nav_items"><i id="icon" className="fa-solid fa-address-book"></i>Contact</li></Link>
                
                <Link to='/profile'><li className="nav_items"><i class="fa-solid fa-user"></i></li></Link>
                <Link onClick={logout} to='/singnupc' style={{textDecoration:'none'}}><li className="logout_nav">Logout</li></Link>
              </ul>
            :
              <ul className={this.state.clicked ? "nav_elements active" : "nav_elements"}>
                <Link to='/signupc' style={{textDecoration:'none'}}><li className="nav_items">Signup</li></Link>
              </ul>
  }
  
        </nav>
           
        </header>
    );
  }
} 
        export  function APPWithRouter(props){
          const navigate =useNavigate();
          return (<Navbar navigate={navigate}></Navbar>)
        }
export default Navbar;