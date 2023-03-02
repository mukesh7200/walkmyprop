import React from 'react'

const Services = () => {
  return (
    <>
      <div className="blog-and-footer-area">
        <section className="blog-sec section-padding" id="blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="section-title-item">
                  <small className="xs-section-title">Media Coverage</small>
                  <h2 className="section-title">Blog and Media</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7 wow fadeInUp" data-wow-duration="1.5s">
                <div className="blog-featured-post">
                  <a href="#">
                    <div className="blog-feaured-img">
                      <img src={require("./../assets/images/blog/blog-featured-img.jpg")} alt="" />
                    </div>
                    <div className="blog-featured-content">
                      <span className="post-meta-date">20 August, 2018</span>
                      <h3 className="xs-blog-title">
                        Poor Communication Undermines the Bitcoin Ecosystem.
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-5 wow fadeInUp" data-wow-duration="2s">
                <div className="blog-post">
                  <div className="single-blog-post media">
                    <div className="d-flex post-img">
                      <img src={require("./../assets/images/blog/blog_post_1.jpg")} alt="blog post image" draggable="false" />
                    </div>
                    <div className="media-body">
                      <span className="post-meta-date">
                        21 August , 2018
                      </span>
                      <h4 className="xs-post-title">
                        <a href="blog-single.html">IBM Reimagines Proof-of-Work for
                          Blockchain IoT Devices</a>
                      </h4>
                    </div>
                  </div>
                  <div className="single-blog-post media">
                    <div className="d-flex post-img">
                      <img src={require("./../assets/images/blog/blog_post_2.jpg")} alt="blog post image" draggable="false" />
                    </div>
                    <div className="media-body">
                      <span className="post-meta-date">
                        21 August , 2018
                      </span>
                      <h4 className="xs-post-title">
                        <a href="blog-single.html">NASDAQ CEO Open Crypto NASDAQ
                          Collaborating with Gemini</a>
                      </h4>
                    </div>
                  </div>
                  <div className="single-blog-post media">
                    <div className="d-flex post-img">
                      <img src={require("./../assets/images/blog/blog_post_3.jpg")} alt="blog post image" draggable="false" />
                    </div>
                    <div className="media-body">
                      <span className="post-meta-date">
                        21 August , 2018
                      </span>
                      <h4 className="xs-post-title">
                        <a href="blog-single.html">Crypto is Back Bull Mode, What Can
                          We Learn From This?</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="token-distribution-sec section-padding" >
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="section-title-item">
                    <small className="xs-section-title">Token Details</small>
                    <h2 className="section-title">Token Distribution</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 wow fadeInUp" data-wow-duration="1.5s">
                  <div className="row chart-gap">
                    <div className="col-sm-7 ml-lg-auto">
                      <canvas className="token-chart-item" id="myChart"></canvas>
                      <h3 className="xs-single-title">Token Distribution</h3>
                    </div>
                    <div className=" col-sm-5">
                      <ul className="chart-label">
                        <li>
                          <img src={require("./../assets/images/token/label_img1.png")} alt="" />
                          <span className="chart-bg1">10 %</span> To Community
                        </li>
                        <li>
                          <img src={require("./../assets/images/token/label_img2.png")} alt="" />
                          <span className="chart-bg2">08 %</span> Reserved Fund
                        </li>
                        <li>
                          <img src={require("./../assets/images/token/label_img3.png")} alt="" />
                          <span className="chart-bg3">12 %</span> Advisor Team
                        </li>
                        <li>
                          <img src={require("./../assets/images/token/label_img4.png")} alt="" />
                          <span className="chart-bg4">70 %</span> Sold Globaly
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-duration="2s">
                  <div className="row chart-gap">
                    <div className="col-sm-7 ml-lg-auto">
                      <canvas className="token-chart-item" id="myChartTwo"></canvas>
                      <h3 className="xs-single-title">Sale Contribution</h3>
                    </div>
                    <div className="col-sm-5">
                      <ul className="chart-label">
                        <li>
                          <img src={require("./../assets/images/token/label_img1.png")} alt="" />
                          <span className="chart-bg1">10 %</span> To Community
                        </li>
                        <li>
                          <img src={require("./../assets/images/token/label_img2.png")} alt="" />
                          <span className="chart-bg2">08 %</span> Reserved Fund
                        </li>
                        <li>
                          <img src={require("./../assets/images/token/label_img3.png")} alt="" />
                          <span className="chart-bg3">12 %</span> Advisor Team
                        </li>
                        <li>
                          <img src={require("./../assets/images/token/label_img4.png")} alt="" />
                          <span className="chart-bg4">70 %</span> Sold Globaly
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="doceumnt-sec section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="section-title-item">
                  <small className="xs-section-title">Document</small>
                  <h2 className="section-title">The Documentation</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto wow fadeInUp" data-wow-duration="1.5s">
                <div className="nav xs-tabs-menu" id="v-pills-tab" role="tablist" aria-orientation="horizontal">
                  <a className="active col-md" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab"
                    aria-controls="v-pills-home" aria-selected="true">
                    <i className="icon-wallet"></i>
                    Wallet
                  </a>
                  <a className="col-md" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-paper" role="tab"
                    aria-controls="v-pills-paper" aria-selected="false">
                    <i className="icon-whitepaper"></i>
                    White Paper
                  </a>
                  <a className="col-md" id="v-pills-report-tab" data-toggle="pill" href="#v-pills-reports" role="tab"
                    aria-controls="v-pills-reports" aria-selected="false">
                    <i className="icon-report"></i>
                    Reports
                  </a>
                  <a className="col-md" id="v-pills-ico-tab" data-toggle="pill" href="#v-pills-ICO" role="tab"
                    aria-controls="v-pills-ICO" aria-selected="false">
                    <i className="icon-structure"></i>
                    ICO Structure
                  </a>
                </div>
                <div className="road-map-tab">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane tab_item_1 show active" id="v-pills-home" role="tabpanel"
                      aria-labelledby="v-pills-home-tab">
                      <div className="row">
                        <div className="col-md-6 align-self-center">
                          <div className="xs-tabs-content">
                            <h3 className="xs-single-title">Download Crypto Wallet</h3>
                            <span className="release_vertion">
                              Latest Release 1.49.0
                            </span>
                            <ul className="download-logo">
                              <li>
                                <img src={require("./../assets/images/documentation/windows_logo-1.png")} alt="" />
                              </li>
                              <li>
                                <img src={require("./../assets/images/documentation/windows_logo-2.png")} alt="" />
                              </li>
                              <li>
                                <img src={require("./../assets/images/documentation/mac_ico.png")} alt="" />
                              </li>
                              <li>
                                <img src={require("./../assets/images/documentation/linux_1.png")} alt="" />
                              </li>
                              <li>
                                <img src={require("./../assets/images/documentation/android_1.png")} alt="" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="xs-tabs-img">
                            <img src={require("./../assets/images/documentation/wallter_phones.png")} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane tab_item_2" id="v-pills-paper" role="tabpanel"
                      aria-labelledby="v-pills-profile-tab">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="xs-tabs-img text-center">
                            <img src={require("./../assets/images/documentation/whitepaper.png")} alt="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="xs-white-tabs-content">
                            <h3 className="xs-single-title">Download Whitepaper</h3>
                            <p>
                              A better way to present your money using fully featured digital currency and
                              now available on the team xpeed studio for It is the fastest and most scalable digital asset,
                            </p>
                            <a href="#" className="btn btn-primary sm-btn">Download Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane tab_item_3" id="v-pills-reports" role="tabpanel"
                      aria-labelledby="v-pills-report-tab">
                      <div className="report-table table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Price</th>
                              <th>24 hr% change</th>
                              <th>market Cap</th>
                              <th>24hr volume</th>
                              <th>price graph</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><img src={require("./../assets/images/documentation/icon1.png")} alt="" /> Bitcoin</td>
                              <td>$1097201</td>
                              <td className="change">-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td><img src={require("./../assets/images/documentation/signal.png")} alt="" /></td>
                            </tr>
                            <tr>
                              <td><img src={require("./../assets/images/documentation/icon2.png")} alt="" /> Ethereum</td>
                              <td>$1097201</td>
                              <td className="change">-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td><img src={require("./../assets/images/documentation/signal.png")} alt="" /></td>
                            </tr>
                            <tr>
                              <td><img src={require("./../assets/images/documentation/icon1.png")} alt="" /> Bitcoin Cash</td>
                              <td>$1097201</td>
                              <td className="change">-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td><img src={require("./../assets/images/documentation/signal.png")} alt="" /></td>
                            </tr>
                            <tr>
                              <td><img src={require("./../assets/images/documentation/icon3.png")} alt="" /> Ripple</td>
                              <td>$1097201</td>
                              <td className="change">-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td><img src={require("./../assets/images/documentation/signal.png")} alt="" /></td>
                            </tr>
                            <tr>
                              <td><img src={require("./../assets/images/documentation/icon4.png")} alt="" /> IOTA</td>
                              <td>$1097201</td>
                              <td className="change">-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td><img src={require("./../assets/images/documentation/signal.png")} alt="" /></td>
                            </tr>
                            <tr>
                              <td><img src={require("./../assets/images/documentation/icon1.png")} alt="" /> Bitcoin Gold</td>
                              <td>$1097201</td>
                              <td className="change">-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td><img src={require("./../assets/images/documentation/signal.png")} alt="" /></td>
                            </tr>
                            <tr>
                              <td><img src={require("./../assets/images/documentation/icon2.png")} alt="" /> Ethereum Classic</td>
                              <td>$1097201</td>
                              <td className="change">-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td><img src={require("./../assets/images/documentation/signal.png")} alt="" /></td>
                            </tr>
                            <tr>
                              <td><img src={require("./../assets/images/documentation/icon5.png")} alt="" /> OmiseGO</td>
                              <td>$1097201</td>
                              <td className="change">-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td><img src={require("./../assets/images/documentation/signal.png")} alt="" /></td>
                            </tr>
                            <tr>
                              <td><img src={require("./../assets/images/documentation/icon2.png")} alt="" /> Ethereum</td>
                              <td>$1097201</td>
                              <td className="change">-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td><img src={require("./../assets/images/documentation/signal.png")} alt="" /></td>
                            </tr>
                            <tr>
                              <td><img src={require("./../assets/images/documentation/icon1.png")} alt="" /> Bitcoin</td>
                              <td>$1097201</td>
                              <td className="change">-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td><img src={require("./../assets/images/documentation/signal.png")} alt="" /></td>
                            </tr>
                            <tr>
                              <td><img src={require("./../assets/images/documentation/icon2.png")} alt="" /> Ethereum</td>
                              <td>$1097201</td>
                              <td className="change">-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td><img src={require("./../assets/images/documentation/signal.png")} alt="" /></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="tab-pane tab_item_4" id="v-pills-ICO" role="tabpanel" aria-labelledby="v-pills-ico-tab">
                      <div className="ico-table table-responsive">
                        <table className="table">
                          <tr>
                            <td>Pre-Sale Starts</td>
                            <td>7/31/2018</td>
                          </tr>
                          <tr>
                            <td>Pre-Sale Period</td>
                            <td>7/31/2018</td>
                          </tr>
                          <tr>
                            <td>Pre-Sale Cap</td>
                            <td>7/31/2018</td>
                          </tr>
                          <tr>
                            <td>Pre-Sale Terms</td>
                            <td>7/31/2018</td>
                          </tr>
                          <tr>
                            <td>Token Sale Starts</td>
                            <td>7/31/2018</td>
                          </tr>
                          <tr>
                            <td>Token Sale Period</td>
                            <td>7/31/2018</td>
                          </tr>
                          <tr>
                            <td>Soft Cap</td>
                            <td>7/31/2018</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="documentaion-shap-img">
            <img className="d-shap-img-1 wow fadeInLeft" data-wow-duration="1.5s" id="leftglobe"
              src={require("./../assets/images/documentation/globe1.png")} alt="" />
            <img className="d-shap-img-2 wow fadeInRight" data-wow-duration="1.5s" src={require("./../assets/images/documentation/globe2.png")}
              alt="" />
          </div>
        </section>
      </div>
    </>
  )
}

export default Services