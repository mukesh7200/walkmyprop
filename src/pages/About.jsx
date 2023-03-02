import React from 'react';
import "./css/About.css";

const About = () => {
  return (
    <>

    <div className="how-work-and-token-area">

        <section className="how-work-sec section-padding" id="how_work">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="section-title-item">
                  <small className="xs-section-title">Process</small>
                  <h2 className="section-title">How Crypto Works</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 wow fadeInUp " data-wow-duration="1.5s">
                <div className="xs-count-down">
                  <h3 className="xs-single-title">ICO Ends in</h3>
                  <ul className="xs-counter-list">
                    <li>
                      <strong id="xs_days">24</strong>
                      <span>Day</span>
                    </li>
                    <li>
                      <strong id="xs_hours">24</strong>
                      <span>Hours</span>
                    </li>
                    <li>
                      <strong id="xs_minuts">24</strong>
                      <span>Minute</span>
                    </li>
                    <li>
                      <strong id="xs_second">24</strong>
                      <span>Second</span>
                    </li>
                  </ul>
                  <div className="xs-progress-bar">
                    <span className="progess-text-1">Sold: $28,985,879</span>
                    <span className="progess-text-2">$50,000</span>
                    <div className="xs-bar">
                      <div className="bar-bg"></div>
                    </div>
                  </div>
                  <div className="btn-wrapper text-center">
                    <a href="#" className="btn btn-primary">Buy Crypto</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1 col-md-6 align-self-center wow fadeInUp" data-wow-duration="2s">
                <div className="work-token-item">
                  <ul>
                    <li>
                      <strong> Pre-Sale Starts</strong>
                      <span> 05/08/2019</span>
                    </li>
                    <li>
                      <strong> Pre-Sale Terms</strong>
                      <span>First week 25% bonus and then 20% bonus</span>
                    </li>
                    <li>
                      <strong> Token Symbol</strong>
                      <span>XPEED</span>
                    </li>
                    <li>
                      <strong> Total Number of Tokens</strong>
                      <span>471,082,090</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 align-self-center col-md-12 wow fadeInUp" data-wow-duration="2.5s">
                <div className="work-video">
                  <img src={require("./../assets/images/how-works/video.jpg")} alt="" />
                  <a href="https://www.youtube.com/watch?v=2X9eJF1nLiY" className="video-btn xs-video"
                    data-effect="mfp-zoom-in">
                    <i className="icon icon-play-button2"></i>
                    <span className="btn-hover-anim"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    

   
        <div className="token-roadmap-area">

          
          <section className="roadmap-sec section-padding" >
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="section-title-item">
                    <small className="xs-section-title">Process</small>
                    <h2 className="section-title">Company Roadmap</h2>
                  </div>
                </div>
              </div>
              <div className="roadmap-timeline">
                <img src={require("./../assets/images/roadmap/timelinered.png")} alt="" />
                <div className="custom-container container">
                  <div className="row roadmap-timeline-item">
                    <div className="col-md xs-roadmap wow fadeInUp" data-wow-duration="1.5s">
                      <div className="single-roadmap-timeline">
                        <b></b>
                        <h3>April 2015</h3>
                        <p>
                          Creation of Our
                          Company
                        </p>
                      </div>
                    </div>
                    <div className="col-md xs-roadmap wow fadeInUp" data-wow-duration="2s">
                      <div className="single-roadmap-timeline">
                        <b></b>
                        <h3>April 2016</h3>
                        <p>
                          Reach $20 Million Milestone
                        </p>
                      </div>
                    </div>
                    <div className="col-md xs-roadmap wow fadeInUp" data-wow-duration="2.5s">
                      <div className="single-roadmap-timeline">
                        <b></b>
                        <h3>March 2017</h3>
                        <p>
                          Best ICO Brand
                        </p>
                      </div>
                    </div>
                    <div className="col-md xs-roadmap wow fadeInUp" data-wow-duration="3s">
                      <div className="single-roadmap-timeline">
                        <b></b>
                        <h3>May 2017</h3>
                        <p>
                          Partnership with Urban Wolfs
                        </p>
                      </div>
                    </div>
                    <div className="col-md xs-roadmap wow fadeInUp" data-wow-duration="3.5s">
                      <div className="single-roadmap-timeline">
                        <b></b>
                        <h3>June 2018</h3>
                        <p>
                          Invest in Bitcoin & Lisk
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>
          <div className="document-and-team-area">
    <section className="team-sec section-padding" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="section-title-item">
                  <small className="xs-section-title">Our experts</small>
                  <h2 className="section-title">Team Members</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="1.5s">
                <div className="single-team">
                  <div className="team-img">
                    <img src={require("./../assets/images/team/team_1.jpg")} alt="" />
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">James Carter</h3>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="2s">
                <div className="single-team">
                  <div className="team-img">
                    <img src={require("./../assets/images/team/team_2.jpg")} alt="" />
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">Jenifar Lorany</h3>
                    <p>Marketing Head</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="2.5s">
                <div className="single-team">
                  <div className="team-img">
                    <img src={require("./../assets/images/team/team_3.jpg")} alt="" />
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">Michel Ramos</h3>
                    <p>HR Head</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="3s">
                <div className="single-team">
                  <div className="team-img">
                    <img src={require("./../assets/images/team/team_4.jpg")} alt="" />
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">Lorence Katie</h3>
                    <p>Lead Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        </div>
        </>
  )
}

export default About