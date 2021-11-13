import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes , Link} from 'react-router-dom'; 
import Home from '../Home/home';
import Contact from '../contact/contact';
import Login from '../login/login';
import Register from '../register/registerform'
import './navbar.css'


class navbar extends Component {
    render() {
        return (
            <Router>
                
                <>
                {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#"><Link to='/home'>Home</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link to='/about'>About</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link to='/contact'>Contact Us</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link to='/login'>Login</Link></a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <span style={{fontFamily: "lobster", fontSize: "40px"}}>
          <Link to="/"> Eshop</Link>
          </span>
      </a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to='/home'>Home</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to='/contact'>Contact Us</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to='/login'>Login</Link></a>
        </li>
      </ul>
    </div>

    <div class="d-flex align-items-center">
      <a class="text-reset me-3" href="#">
        <i class="fas fa-shopping-cart"></i>
      </a>

      <a
        class="text-reset me-3 dropdown-toggle hidden-arrow"
        href="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="fas fa-bell"></i>
        <span class="badge rounded-pill badge-notification bg-danger"></span>
      </a>
      <ul
        class="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <li>
          <a class="dropdown-item" href="#">Some news</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">Another news</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">Something else here</a>
        </li>
      </ul>

      <a
        class="dropdown-toggle d-flex align-items-center hidden-arrow"
        href="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://mdbootstrap.com/img/new/avatars/2.jpg"
          class="rounded-circle"
          height="25"
          alt=""
          loading="lazy"
        />
      </a>
      <ul
        class="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <li>
          <a class="dropdown-item" href="#">My profile</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">Settings</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
                
                
                
                </>
                <Routes>
                    <Route path='/' element = {<Home/>}/>
                    <Route path='/home' element = {<Home/>}/>
                    {/* <Route path='/about' element = {<About/>}/> */}
                    <Route path='/contact' element = {<Contact/>}/>
                    <Route path='/login' element = {<Login/>}/>
                    <Route path='/register' element = {<Register/>}/>
                </Routes>
            </Router>
        )
    }
}

export default navbar
