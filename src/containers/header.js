import Button from "../components/button";
import hamburger from "../assets/burger.png";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div className="header__img-box">
            <a href="/" className="header__img-link ">
              <img src={logo} alt="investa logo" className="header__img" />
            </a>
          </div>
          <a href="/" className="header__link mr-xm header__show">
            About
          </a>
          <a href="/" className="header__link mr-xm header__show">
            Cooperative
          </a>
          <Button btn_color="btn__white header__show">Go to Dashboard</Button>
          <div className="header__hamburger">
            <img
              src={hamburger}
              alt="hamburger"
              className="header__hamburger-img"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
