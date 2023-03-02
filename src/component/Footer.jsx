import React from 'react'

const Footer = () => {
  return (
    <div class="blog-and-footer-area">
      <footer class="xs-footer-sec">
        <div class="container">
          <div class="footer-area">
            <div class="row">
              <div class="col-lg-3 col-sm-6">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <a href="index-2.html">
                      <img src={require("./../assets/images/walkmyprop.png")} alt="" />
                    </a>
                  </div>
                  <p>
                    To enhance your imagination, we present to you the
                    rooms in 360 view to “go around” and have a superlative
                    experience.
                  </p>
                </div>
              </div>
              <div class="col-lg-2 offset-lg-1 col-sm-6">
                <div class="footer-widget">
                  <h4 class="widget-title">Company</h4>
                  <ul>
                    <li><a href="#"> About us</a></li>
                    <li><a href="#"> Our Services</a></li>
                    <li><a href="#"> Timeline</a></li>
                    <li><a href="#"> On Media</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-sm-6">
                <div class="footer-widget support">
                  <h4 class="widget-title">Support</h4>
                  <ul>
                    <li><a href="#"> Contact Us</a></li>
                    <li><a href="#"> FAQ</a></li>
                    <li><a href="#"> Support</a></li>
                    <li><a href="#"> Token</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 offset-lg-1 col-sm-6">
                <div class="footer-widget">
                  <h4 class="widget-title">Contact</h4>
                  <form method="get" class="widget-subscibe">
                    <input type="email" name="email" class="subscribe-email" placeholder="Email" />
                    <button type="submit" class="subs-btn"><i class="fa fa-paper-plane"></i> </button>
                  </form>
                  <ul>
                    <li>Tel: 009-215-5596 ( Toll free )</li>
                    <li>Email: <a href="https://html.xpeedstudio.com/cdn-cgi/l/email-protection" class="__cf_email__"
                      data-cfemail="bad3d4dcd5fadfc2dbd7cad6df94d9d5d7">[email&#160;protected]</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-copyright">
            <p>
              Copyright © {new Date().getFullYear()} Walk My Prop
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer