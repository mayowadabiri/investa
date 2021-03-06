import Banner from "../components/banner";
import Carousel from "../components/carousel";
import Feature from "../containers/feature";
import LandingPage from "../containers/landpage";
import Partners from "../containers/partners";
import Plans from "../containers/plans";
import Portfolio from "../containers/portfolio";
import Register from "../containers/register";
import Savings from "../containers/save";
import Testimonial from "../containers/testimonial";

const Home = () => {
  return (
    <main className="main">
      <div className="main__container">
        <Banner />
        <LandingPage />
        <div className="background-overlay">
          <Partners />
          <Plans />
          <Feature />
          <Portfolio />
          <Savings />
          <Testimonial />
          <Carousel />
          <Register />
        </div>
      </div>
    </main>
  );
};

export default Home;
