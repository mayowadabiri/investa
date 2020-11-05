import feature_img from "../assets/feature.png";
const Feature = () => {
  return (
    <section className="feature">
      <div className="container">
        <div className="feature__container">
          <div className="feature__content">
            <h2 className="h2 h2-white feature__title">Is your Money Safe</h2>
            <p className="line feature__text">
              Join over 100,000 of users that use our savings feature called
              Flash Savings reach their goal reach their general/personal goals
              more quickly. We have two awesome features you can pick from Join
              over 100,000 of users that use our savings feature called Flash
              Savings reach their goal reach
            </p>
            <a href="/" className="btn btn__white feature__link mt-bg">
              Sign up for free
            </a>
          </div>
          <img src={feature_img} alt="feature" className="feature__img" />
        </div>
      </div>
    </section>
  );
};

export default Feature;
