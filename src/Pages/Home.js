import React, { useEffect, useState, useCallback } from "react";
import { FaAnglesDown } from "react-icons/fa6";

const Home = ({ scrollToSection }) => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "I'm a web developer.";
  const typingSpeed = 150;
  const erasingSpeed = 100;
  const pauseTime = 1000;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const typeText = useCallback(async () => {
    while (true) {
      for (let i = 0; i <= fullText.length; i++) {
        setDisplayText(fullText.slice(0, i));
        await sleep(typingSpeed);
      }
      await sleep(pauseTime);

      for (let i = fullText.length; i >= 0; i--) {
        setDisplayText(fullText.slice(0, i));
        await sleep(erasingSpeed);
      }
      await sleep(pauseTime);
    }
  }, [fullText]);

  useEffect(() => {
    const startTyping = async () => {
      await typeText();
    };

    startTyping();
  }, [typeText]);

  return (
    <div className="relative min-h-screen">
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1712825565947-fa70674a5508?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Main Content */}
        <div className="relative text-center text-white z-10">
          <h1 className="text-3xl">Welcome</h1>
          <h2 className="text-6xl mt-4 font-bold">
            {displayText}
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-[25px] mt-2">based in Delhi, India.</p>

          <button
            onClick={() => scrollToSection("contact")} // Scroll to contact section
            className="mt-6 px-8 py-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition duration-300 ease-in-out rounded-lg"
          >
            Hire Me
          </button>
        </div>

        {/* Fixed Arrow at Bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-10">
          <div
            onClick={() => scrollToSection("about")}
            className="animate-bounce cursor-pointer"
          >
            <FaAnglesDown size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
