import carousel_2 from "../assets/carousel_2.png";

const Carousel = () => {
  return (
    <section className="carousel">
      <div className="container carousel__container">
        <div className="carousel__user">
          <div className="carousel__img-box">
            <img src={carousel_2} alt="Yetunde" className="carousel__img" />
          </div>
          <h2 className=" h2-small carousel__say">What are our users saying</h2>
          <div className="carousel__content">
            <p className="carousel__text">
              I am so amazed at the extent to which I have been encouraged to
              save and invest with ease on the Investa platform. Investa has
              helped me to build my financial intelligence capacity. Many thanks
              to Investa!
            </p>
            <p className="carousel__name">Yetunde Maculay</p>
            <p className="carousel__title">COO, Paystack</p>
          </div>
        </div>
      </div>
      {/* <div className="carousel__buttons">
        <button className="carousel__button" type="button"></button>
        <button className="carousel__button" type="button"></button>
        <button className="carousel__button" type="button"></button>
        <button className="carousel__button active" type="button"></button>
        <button className="carousel__button" type="button"></button>
      </div> */}
    </section>
  );
};

export default Carousel;
