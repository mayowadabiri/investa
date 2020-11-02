import portfolio_1 from "../assets/portfolio_1.png";
import portfolio_2 from "../assets/portfolio_2.png";
import portfolio_3 from "../assets/portfolio_3.png";
// import Plan from "../components/plan";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio__box">
          <div className="portfolio__img-box">
            <img
              src={portfolio_1}
              alt="portfolio 1"
              className="portfolio__img portfolio__img-1"
            />
            <img
              src={portfolio_2}
              alt="portfolio 2"
              className="portfolio__img portfolio__img-2"
            />
            <img
              src={portfolio_3}
              alt="portfolio 3"
              className="portfolio__img portfolio__img-3"
            />
          </div>
          <div className="portfolio__content-box">
            <div className="portfolio__content">
              <h2 className="h2-small mb-xm">Available Investment Portfolios for you</h2>
              <p className="portfolio__text">Join over 100,000 of users that use our savings feature called Flash Savings reach their goal reach their general/personal goals more quickly. We have two awesome features"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
