import Banner from "../components/banner";
import Header from "../layout/header";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <Header />
        <Banner />
        <div className="landing__overlay-container">
          <div className="landing__overlay-box"></div>
          <div className="landing__div">

          <div className="landing__img-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
