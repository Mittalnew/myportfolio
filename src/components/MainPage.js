import React, { useRef } from "react";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Sidebar from "./Sidebar";
import WhatIDo from "../Pages/WhatIDo";
import Resume from "../Pages/Resume";
import MyWorkPortfolio from "../Pages/MyWorkPorfolio";
import Footer from "../Pages/Footer";

const MainPage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const WhatIDoRef = useRef(null);
  const ResumeRef = useRef(null);
  const MyWorkPortfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case "home":
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "whatIDo":
        WhatIDoRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Resume":
        ResumeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "MyWorkPortfolio":
        MyWorkPortfolioRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar scrollToSection={scrollToSection} />
      <main className="flex-grow ml-64 overflow-auto bg-gray-100">
        {" "}
        {/* Add margin-left equal to the sidebar width */}
        <div ref={homeRef} id="home">
          <Home scrollToSection={scrollToSection} />
        </div>
        <div ref={aboutRef} id="about">
          <About scrollToSection={scrollToSection} />
        </div>
        <div ref={WhatIDoRef} id="whatIDo">
          <WhatIDo />
        </div>
        <div ref={ResumeRef} id="Resume">
          <Resume />
        </div>
        <div ref={MyWorkPortfolioRef} id="MyWorkPortfolio">
          <MyWorkPortfolio />
        </div>
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
        <div id="Footer">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default MainPage;
