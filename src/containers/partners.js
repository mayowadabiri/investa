import google from "../assets/google_partner.png";
import manu from "../assets/manu.png";
import apple from "../assets/apple_partner.png";
import gtb from "../assets/gtb.png";
import dangote from "../assets/gtb.png";

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners__container">
        <h5 className={["mb-sm", "paragraph", "partners__text"].join(" ")}>
          Partners
        </h5>
        <div className="partners__box">
          <div className="partners__img-box">
            <img src={apple} alt="apple" className="partners__img" />
          </div>
          <div className="partners__img-box">
            <img src={gtb} alt="apple" className="partners__img" />
          </div>
          <div className="partners__img-box">
            <img src={manu} alt="apple" className="partners__img" />
          </div>
          <div className="partners__img-box">
            <img src={google} alt="apple" className="partners__img" />
          </div>
          <div className="partners__img-box">
            <img src={dangote} alt="apple" className="partners__img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
