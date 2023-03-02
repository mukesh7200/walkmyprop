import React from 'react';
import "./css/Home.css";
import Logo from "./../assets/images/sidebar_logo_1.png"
import BgImg from "./../assets/images/banner/banner_img.png";
import SocialList from '../component/SocialList';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>

      <div className="search-wrap">
        <form className="search-inner" id="main_search" method="get">
          <input id="search_text" type="search" placeholder="Search..." autoComplete="off" />
          <button id="searchbtn" type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>


      <div className="xs-sidebar-group cart-group">
        <div className="xs-overlay xs-bg-black"></div>
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading media">
              <div className="media-body">
                <a href="#" className="close-side-widget">
                  <i className="icon icon-cross"></i>
                </a>
              </div>
            </div>
            <div className="xs-empty-content">
              <h3 className="widget-title">Shopping cart</h3>
              <h4 className="xs-title">No products in the cart.</h4>
              <p className="empty-cart-icon">
                <i className="icon icon-shopping-cart"></i>
              </p>
              <p className="xs-btn-wraper">
                <a className="btn btn-primary" href="#">Return To Shop</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="xs-sidebar-group info-group">
        <div className="xs-overlay xs-bg-black"></div>
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a href="#" className="close-side-widget">
                <i className="icon icon-cross"></i>
              </a>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-logo-wraper">
                <img src={Logo} alt="sidebar logo" />
              </div>
              <p>Far far away, behind the word moun tains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of </p>
              <ul className="sideabr-list-widget">
                <li>
                  <div className="media">
                    <div className="d-flex">
                      <i className="icon icon-placeholder2"></i>
                    </div>
                    <div className="media-body">
                      <p>759 Pinewood Avenue</p>
                      <span>Marquette, Michigan</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media">
                    <div className="d-flex">
                      <i className="icon icon-email2"></i>
                    </div>
                    <div className="media-body">
                      <a href="https://html.xpeedstudio.com/cdn-cgi/l/email-protection#660f0800092602090b070f084805090b"><span
                        className="__cf_email__"
                        data-cfemail="751c1b131a35111a18141c1b5b161a18">[email&#160;protected]</span></a>
                      <span>Online Support</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media">
                    <div className="d-flex">
                      <i className="icon icon-phone-call2"></i>
                    </div>
                    <div className="media-body">
                      <p>906-624-2565</p>
                      <span>Mon-Fri 8am-5pm</span>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="subscribe-from">
                <p>Get Subscribed!</p>
                <form action="#" method="POST" id="subscribe-form" className="subscribe-form">
                  <label for="sub-input"></label>
                  <div className="form-group">
                    <input type="email" name="email" id="sub-input" placeholder="Enter your mail here" className="form-control" />
                    <button className="sub-btn" type="submit"><i className="icon icon-arrow-right"></i></button>
                  </div>
                </form>
              </div>
              <ul className="social-list version-2">
                <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#" className="vimeo"><i className="fa fa-vimeo"></i></a></li>
              </ul>
              <div className="text-center">
                <a href="#" className="btn btn-primary">Purchase Now</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      <div id="particles-js">

        <section className="banner-sec" id="particles-js1">
          <div className="banner-item"
            // "url(assets/images/background/banner_bg.jpg) no-repeat center center /cover"
            style={{ backgroundImage: `url("./../assets/images/background/banner_bg.jpg") no-repeat center center /cover` }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="banner-content">
                    <h1 className="banner-title">Online - OnTime Home Buying Experience</h1>
                    <p>
                      Get Real with us… Connect and make it yours!
                      Real wealth, Real ownership, Real investment.
                    </p>
                    <NavLink to="/contact" className="btn btn-primary">Connect to us</NavLink>
                  </div>
                </div>
              </div>
              <div className="banner-img-item">
                {/* require("./../assets/images/banner/banner_img.png") */}
                <img className="banner-img" src={BgImg} alt="" />
                <img className="banner-ico banner-ico-1" style={{width:"60px"}} src={require("./../assets/images/3dhouse.png")} alt="" />
                <img className="banner-ico banner-ico-2" style={{width:"60px"}} src={require("./../assets/images/3dhouse.png")} alt="" />
                <img className="banner-ico banner-ico-3" style={{width:"150px"}} src={require("./../assets/images/3dhouse.png")} alt="" />
                <img className="banner-ico banner-ico-4" style={{width:"60px"}} src={require("./../assets/images/3dhouse.png")} alt="" />
                <img className="banner-ico banner-ico-5" style={{width:"60px"}} src={require("./../assets/images/3dhouse.png")} alt="" />
              </div>
            </div>
          </div>
        </section>
        <div className="featured-area">
          <div className="blockcain-and-featured-area">

            <section className="blockcain-top-sec">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 wow fadeInUp" data-wow-duration="1.5s">
                    <div className="blockcain-top">
                      <h2 className="column-title">ROOM TOUR FROM INSIDE YOUR ROOM? 3D INTERACTIVE
                        TOUR FOR REAL EXPERIENCE!</h2>
                    </div>
                  </div>
                  <div className="col-md-5 offset-md-1 wow fadeInUp" data-wow-duration="2s">
                    <div className="blockcain-top-content">
                      <p>
                        <span style={{ color: "rgb(217, 220, 223)", fontWeight: "bolduevio" }}>WolkMyProp</span> believes that such an investment must
                        be done synergically for buyers to have the best
                        experience. Virtual Reality, Artificial Intelligence and
                        Metaverse are the developing indigenous technologies
                        that will allow users and developers to powerfully express
                        their goals and aspirations for making exceptional deals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="featured-sec" id="featured">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <div className="section-title-item">
                      <small className="xs-section-title">Main Features</small>
                      <h2 className="section-title">House Features</h2>
                    </div>
                  </div>
                </div>
                <div className="main-fetured-item">
                  <div className="row">
                    <div className="col-md-4 wow fadeInUp" data-wow-duration="1.5s">
                      <div className="single-feaured-item">
                        <img style={{ width: "100px" }} src={require("./../assets/images/house.png")} alt="" />
                        <h3 className="feature-title">
                          Full Of Nature (Green)
                        </h3>
                        <p>
                          The house has been built with the express desire to live in a serene place, full of peace and silence.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 wow fadeInUp" data-wow-duration="2s">
                      <div className="single-feaured-item">
                        <img style={{ width: "100px" }} src={require("./../assets/images/model.png")} alt="" />
                        <h3 className="feature-title">
                          Lowest Cost Houses
                        </h3>
                        <p>
                          Well designed Affortable price villa is available at a prime location in Metro cities.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 wow fadeInUp" data-wow-duration="2.5s">
                      <div className="single-feaured-item">
                        <img style={{ width: "100px" }} src={require("./../assets/images/airport.png")} alt="" />
                        <h3 className="feature-title">
                          Near by Airport
                        </h3>
                        <p>
                        Buy your first home nearby Airport, making it convenient to travel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="featured-poligonal-img wow fadeInUp" data-wow-duration="1.5s">
                  <img className="poligonal-img" src={require("./../assets/images/feature/poligonal.png")} alt="" />
                </div>
              </div>
            </section>
          </div>
          <div className="blockcain-and-logo-area">

            <section className="blockcain-business-sec">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-duration="1.5s">
                    <div className="blockcain-img">
                      <img  src={require("./../assets/images/house-2.png")} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-5 offset-lg-1 wow fadeInUp" data-wow-duration="2s">
                    <div className="blockcain-content">
                      <small className="xs-section-title">REAL ESTATE</small>
                      <h3 className="column-title">Home Buying Experience!</h3>
                      <p>
                        We believe an online presentation as such will allow our
                        developers to actively serve concrete details with
                        impressive and efficient ways of communication. An
                        interface like ours is as real and organized as the real
                        estates we offer. Get along and look for the best options
                        here!

                      </p>
                      {/* <p>
                        Bitcoin Ethereum blockchains are slow and expensive. Cost of transactions is
                        a high (and getting higher) Speed of others transactions is low
                      </p> */}
                      <NavLink to="/contact" className="btn btn-primary">Connect To Us</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="client-logo-sec">
              <div className="container">
                <div className="client-logo-item">
                  <div className="row owl-carousel" id="client-slider">
                    <div className="col-sm wow fadeInUp" data-wow-duration="1.5s">
                      <div className="client-logo">
                        <img src={require("./../assets/images/client_logo/logo_style1.png")} alt="" />
                      </div>
                    </div>
                    <div className="col-sm wow fadeInUp" data-wow-duration="2s">
                      <div className="client-logo">
                        <img src={require("./../assets/images/client_logo/logo_style2.png")} alt="" />
                      </div>
                    </div>
                    <div className="col-sm wow fadeInUp" data-wow-duration="2.5s">
                      <div className="client-logo">
                        <img src={require("./../assets/images/client_logo/logo_style3.png")} alt="" />
                      </div>
                    </div>
                    <div className="col-sm wow fadeInUp" data-wow-duration="3s">
                      <div className="client-logo">
                        <img src={require("./../assets/images/client_logo/logo_style4.png")} alt="" />
                      </div>
                    </div>
                    <div className="col-sm wow fadeInUp" data-wow-duration="3.5s">
                      <div className="client-logo">
                        <img src={require("./../assets/images/client_logo/logo_style5.png")} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="document-and-team-area">
      </div>
      <SocialList />

    </div>
  )
}

export default Home