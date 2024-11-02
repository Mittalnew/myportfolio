import React from "react";
// import Header from "../components/Header";
// import Stat from "../components/Stat";
import Header from "../reuse compo/Header";
import Stat from "../reuse compo/Stat";

const About = () => {
  const stats = [
    { number: "2+", text: "Years Experience" },
    { number: "2+", text: "Projects Done" },
    { number: "2", text: "Get Awards" },
  ];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center py-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1636955860106-3cecd7d3dc9f?q=80&w=1887&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-md bg-black"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <Header title="ABOUT ME" subtitle="Know Me More" />

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 text-white">
            <h3 className="text-2xl font-bold mb-4">
              I'm Mittal Singh, a Web Developer
            </h3>
            <p className="mb-4 text-gray-200">
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.{" "}
            </p>
            <p className="text-gray-200">
              Delivering work within time and budget which meets client’s
              requirements is our moto. Lorem Ipsum has been the industry's
              standard dummy text ever when an unknown printer took a galley.{" "}
            </p>
          </div>

          <div className="md:col-span-5 text-white">
            <div className="space-y-4">
              <p>
                <span className="font-bold">Name: </span>Mittal Singh
              </p>
              <p>
                <span className="font-bold">Email: </span>
                mittalchauhan56@gmail.com
              </p>
              <p>
                <span className="font-bold">Age: </span>25
              </p>
              <p>
                <span className="font-bold">From: </span>Gurugram, India
              </p>
              <button className="mt-6 px-8 py-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition duration-300 ease-in-out rounded-lg">
                Download CV
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="grid grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Stat
                key={index}
                number={stat.number}
                text={stat.text}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
