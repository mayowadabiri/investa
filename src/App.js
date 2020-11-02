import Carousel from "./components/carousel";
import Feature from "./containers/feature";
import Footer from "./containers/footer";
import LandingPage from "./containers/landpage";
import Partners from "./containers/partners";
import Plans from "./containers/plans";
import Portfolio from "./containers/portfolio";
import Register from "./containers/register";
import Savings from "./containers/save";
import Testimonial from "./containers/testimonial";


function App() {
  return (
   <div>
     <LandingPage />
     <main className="main">
        <div className="main__container">
          <Partners />
          <Plans />
          <Feature />
          <Portfolio />
          <Savings />
          <Testimonial />
          <Carousel/>
          <Register />
        </div>
     </main>
     <Footer />
   </div>
  );
}

export default App;
