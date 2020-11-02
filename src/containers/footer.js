import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container-box">
        <div className="footer__container">
          <div className="footer__investa-box">
            <div className="footer__investa">
              <img src={logo} alt="investa" className="footer__investa-img" />
              <div className="">
                <p className="line line-white text">
                  Investa.ng is developed and trademarked by Oceandigits
                  Technology Limited with operational license of Oceandigits
                  (IKEJA)Cooperative Multipurpose Society Limited with RN 16882.
                  Oceandigits Technology Limited is duly registered with the
                  Corporate Affairs Commission, Nigeria with RCN: 1427469.
                  Investa.ng, Oceandigits Technology Limited and Oceandigits
                  Cooperative Multipurpose Society Limited are legal entities in
                  Nigeria.
                </p>
              </div>
            </div>
            <div className="footer__social mt-bg footer__social-show">
              <a href="/">
                <img
                  src={facebook}
                  alt="facebook"
                  className="footer__social-img"
                />
              </a>
              <a href="/">
                <img
                  src={twitter}
                  alt="facebook"
                  className="footer__social-img"
                />
              </a>
              <a href="/">
                <img
                  src={instagram}
                  alt="facebook"
                  className="footer__social-img"
                />
              </a>
              <a href="/">
                <img
                  src={linkedin}
                  alt="facebook"
                  className="footer__social-img"
                />
              </a>
            </div>
          </div>
          <div className="footer__office-box">
            <div className="footer__office">
              <h5 className="footer__title">Office</h5>
              <div className="footer__content-box">
                <h5 className="footer__office-address line line-white">
                  Operational office <br />
                  No 32, Adeniyi Jones, <br />
                  Ikeja, Lagos. <br />
                  +234(0) 901 446 2443 <br />
                  Mon - Fri (9am - 5pm) <br />
                  <a
                    href="mailto:social@investa.ng?Subject=Feedback%20on%20Investa"
                    target="_top"
                    className="footer__office-link"
                  >
                    social@investa.ng
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="footer__legal-box">
            <div className="show">
              <h5 className="footer__title">Useful links</h5>
              <div className="footer__content-box">
                <h5 className="line line-white">
                  <a href="/">About</a>
                  <br />

                  <a href="/">Cooperative</a>
                  <br />

                  <a href="/">Download the app</a>
                </h5>
              </div>
            </div>
            <div className="footer__legal">
              <h5 className="footer__title">Legal</h5>
              <div className="footer__content-box">
                <h5 className="line line-white">
                  <a href="/">Terms of use</a>
                  <br />

                  <a href="/">Privacy of poliy</a>
                </h5>
              </div>
            </div>
          </div>
          <div className="footer__link-box">
            <div className="footer__link">
              <h5 className="footer__title">Useful links</h5>
              <div className="footer__content-box">
                <h5 className="line line-white">
                  <a href="/">About</a>
                  <br />

                  <a href="/">Cooperative</a>
                  <br />

                  <a href="/">Download the app</a>
                </h5>
                <div className="footer__social mt-bg">
                  <a href="/">
                    <img
                      src={facebook}
                      alt="facebook"
                      className="footer__social-img"
                    />
                  </a>
                  <a href="/">
                    <img
                      src={twitter}
                      alt="facebook"
                      className="footer__social-img"
                    />
                  </a>
                  <a href="/">
                    <img
                      src={instagram}
                      alt="facebook"
                      className="footer__social-img"
                    />
                  </a>
                  <a href="/">
                    <img
                      src={linkedin}
                      alt="facebook"
                      className="footer__social-img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
