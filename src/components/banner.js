import google from "../assets/google.png";
import apple from "../assets/apple.png";

const Banner = () => {
  return (
    <div className="banner">
      <h5 className={["banner__text-sm", "mb-xm"].join(" ")}>
        Save, invest & grow your money without stress
      </h5>
      <h1 className="banner__text-bg mb-xm">
        First Digital Cooperative for Mutual Savings and Investments
      </h1>
      <h5 className="banner__text-xm">
        Earn between 10%-20% ROI <br />
        Free access low intrest loan for personal and business purposes
      </h5>
      <div className={["banner__store-container", "mt-sm"].join(" ")}>
        <a href="/" className="banner__store-link">
          <img src={apple} alt="apple playstore" className="banner__store" />
        </a>
        <a href="/" className="banner__store-link">
          <img src={google} alt="google playstore" className="banner__store" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
