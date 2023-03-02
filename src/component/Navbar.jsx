import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header class="header">
        <div class="container">
          <nav id="navigation1" class="navigation">
            <div class="nav-header">
              <a class="nav-brand" href="index-2.html">
                <img style={{width:"90px"}} src={require("./../assets/images/walkmyproplogo.png")} alt="" />
                
              </a>
              <div class="nav-toggle"></div>
            </div>
            <div class="nav-menus-wrapper xs-menu">
              {/* <ul class="header-right align-to-right">
                <li class="language">
                  <a href="#modal-popup-1" class="xs-modal-popup">
                    <img src={require("./../assets/images/english.png")} alt="" />
                    EN
                  </a>

                  <div class="zoom-anim-dialog mfp-hide modal-language" id="modal-popup-1">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">
                        <div class="language-content">
                          <p>Switch The Language</p>
                          <ul class="flag-lists">
                            <li><NavLink to="/"><img src={require("./../assets/images/flags/006-united-states.svg")}
                              alt="" /><span>English</span></NavLink></li>
                            <li><NavLink to="/"><img src={require("./../assets/images/flags/002-canada.svg")} alt="" /><span>English</span></NavLink>
                            </li>
                            <li><NavLink to="/"><img src={require("./../assets/images/flags/003-vietnam.svg")}
                              alt="" /><span>Vietnamese</span></NavLink></li>
                            <li><NavLink to="/"><img src={require("./../assets/images/flags/004-france.svg")} alt="" /><span>French</span></NavLink>
                            </li>
                            <li><NavLink to="/"><img src={require("./../assets/images/flags/005-germany.svg")} alt="" /><span>German</span></NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#" class="offset-side-bar">
                    <i class="icon icon-bag"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="searchIcon">
                    <i class="icon icon-search"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="navSidebar-button">
                    <i class="icon-menu2"></i>
                  </a>
                </li>
              </ul> */}
              <ul class="nav-menu align-to-right">
                <li class="active"><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/about" class="scrolls">About Us</NavLink></li>
                <li><NavLink to="/contact" class="scrolls">Contact us</NavLink></li>
                <li><NavLink to="/Service" class="scrolls">Service</NavLink></li>
                {/* <li><NavLink to="/Faq" class="scrolls">FAQ</NavLink></li> */}
                <li><NavLink to="/PrivacyPolicy" class="scrolls">Privacy Policy</NavLink></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
  )
}

export default Navbar