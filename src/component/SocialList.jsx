import React from 'react'

const SocialList = () => {
  return (
    <>
    <div class="blog-and-footer-area">
        <div class="blog-and-social-area">
          <section class="social-list-sec section-padding" >
            <div class="container">
              <div class="row">
                <div class="col-lg col-6 col-md-3 wow fadeInUp" data-wow-duration=".5s">
                  <div class="single-social-list facebook">
                    <i class="fa fa-facebook"></i>
                    <h3 class="xs-title sm">Facebook</h3>
                    <a href="#">
                      <span class="icon icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
                <div class="col-lg col-6 col-md-3 wow fadeInUp" data-wow-duration="1s">
                  <div class="single-social-list twitter">
                    <i class="fa fa-twitter"></i>
                    <h3 class="xs-title sm">Twitter</h3>
                    <a href="#">
                      <span class="icon icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
                <div class="col-lg col-6 col-md-3 wow fadeInUp" data-wow-duration="1.5s">
                  <div class="single-social-list github">
                    <i class="fa fa-github-alt"></i>
                    <h3 class="xs-title sm">Github</h3>
                    <a href="#">
                      <span class="icon icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
                {/* <div class="col-lg col-6 col-md-3 wow fadeInUp" data-wow-duration="2s">
                  <div class="single-social-list slack">
                    <i class="fa fa-slack"></i>
                    <h3 class="xs-title sm">Slack</h3>
                    <a href="#">
                      <span class="icon icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
                <div class="col-lg col-6 col-md-3 wow fadeInUp" data-wow-duration="2.5s">
                  <div class="single-social-list bitcoin">
                    <i class="fa fa-btc"></i>
                    <h3 class="xs-title sm">BitTalk</h3>
                    <a href="#">
                      <span class="icon icon-arrow-right"></span>
                    </a>
                  </div>
                </div> */}
                <div class="col-lg col-6 col-md-3 wow fadeInUp" data-wow-duration="3s">
                  <div class="single-social-list youtube">
                    <i class="fa fa-youtube-play"></i>
                    <h3 class="xs-title sm">Youtube</h3>
                    <a href="#">
                      <span class="icon icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
                {/* <div class="col-lg col-6 col-md-3 wow fadeInUp" data-wow-duration="3.5s">
                  <div class="single-social-list medium">
                    <i class="fa fa-medium"></i>
                    <h3 class="xs-title sm">Medium</h3>
                    <a href="#">
                      <span class="icon icon-arrow-right"></span>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default SocialList