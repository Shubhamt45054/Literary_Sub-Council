import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
  Government_events,
  PopUp,
  Registration
} from "./components";
import Footer from "./components/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary scroll-smooth">
        {/* <StarsCanvas /> */}
        {/* <PopUp/> */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        {/* <StarsCanvas />  */}
        <About />
        <Government_events />

        {/* this is events file*/}
        <Feedbacks />
    
        <Registration/>

        {/* this is teams file*/}
        <Experience />
        
        <Works />
        <Tech />
        {/* This is merchandise file... */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
