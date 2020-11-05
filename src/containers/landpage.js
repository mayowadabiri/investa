import landing_img from "../assets/landing_img.png";

const LandingPage = () => {
  return (
    <section className="landing">
      <div className="landing__overlay-box"></div>
      <div className="landing__img-box">
        <img src={landing_img} alt="dashboard" className="landing__img" />
      </div>
      {/* <div className="background-overlay"></div> */}
    </section>
  );
};

export default LandingPage;
