import React from "react";
import { FaReact, FaGraduationCap, FaDownload } from "react-icons/fa";
import Header from "../reuse compo/Header";
import Card from "../components/card/Card";

const Resume = () => {
  const education = [
    {
      title: "Bachelor's in Computer Science",
      institution: "University of Web Development",
      duration: "2014 - 2018",
      description:
        "Graduated with honors, specializing in full-stack development.",
      icon: <FaGraduationCap className="mr-2 text-white" />,
    },
    {
      title: "Certificate in React Development",
      institution: "Coding Bootcamp",
      duration: "2019",
      description:
        "Intensive course focusing on advanced React and JavaScript.",
      icon: <FaGraduationCap className="mr-2 text-white" />,
    },
  ];

  const experience = [
    {
      title: "Senior React Developer",
      company: "Tech Solutions Ltd.",
      duration: "2021 - Present",
      description:
        "Led the front-end team in building scalable applications with React.",
      icon: <FaReact className="mr-2 text-[#61DAFB]" />,
    },
    {
      title: "Front-End Developer",
      company: "Startup Inc.",
      duration: "2018 - 2021",
      description:
        "Focused on building responsive and interactive web applications.",
      icon: <FaReact className="mr-2 text-[#61DAFB]" />,
    },
  ];

  const skills = [
    { name: "Web Design", level: 65 },
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 80 },
    { name: "React JS", level: 70 },
    { name: "Angular JS", level: 60 },
    { name: "Bootstrap", level: 99 },
  ];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center py-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1636955860106-3cecd7d3dc9f?q=80&w=1887&auto=format&fit=crop')",
      }}
    >
      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-gray-900 opacity-80"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <Header title="SUMMARY" subtitle="Resume" />

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-4">
              {" "}
              {education.map((edu, index) => (
                <Card
                  key={index}
                  title={
                    <span className="flex items-center text-xl">
                      {edu.icon}
                      {edu.title}
                    </span>
                  }
                  description={
                    <>
                      <p className="text-gray-400 text-lg italic mb-1 text-left">
                        {" "}
                        {edu.institution}
                      </p>
                      <p className="text-gray-400 text-sm mb-4 text-left">
                        {" "}
                        {edu.duration}
                      </p>
                      <p className="text-gray-200 mt-2 leading-relaxed text-left">
                        {edu.description}
                      </p>
                    </>
                  }
                />
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Experience</h3>
            <div className="space-y-4">
              {" "}
              {experience.map((exp, index) => (
                <Card
                  key={index}
                  title={
                    <span className="flex items-center text-xl">
                      {" "}
                      {exp.icon}
                      {exp.title}
                    </span>
                  }
                  description={
                    <>
                      <p className="text-gray-400 text-lg italic mb-1 text-left">
                        {" "}
                        {exp.company}
                      </p>
                      <p className="text-gray-400 text-sm mb-4 text-left">
                        {" "}
                        {exp.duration}
                      </p>
                      <p className="text-gray-200 mt-2 leading-relaxed text-left">
                        {exp.description}
                      </p>
                    </>
                  }
                />
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-white mb-6">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-lg text-gray-300">{skill.name}</span>
                  <span className="text-lg text-gray-300">{skill.level}%</span>
                </div>
                <div className="bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-[#28a745] h-full rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download CV Button */}
        <div className="flex justify-center mt-12">
          <a
            href="/path/to/your/cv.pdf"
            download
            className="flex items-center bg-transparent border-2 border-[#28a745] text-[#28a745] text-lg px-6 py-3 rounded-full hover:bg-[#28a745] hover:text-white transition duration-300 relative overflow-hidden"
          >
            <FaDownload className="mr-2" />
            Download CV
            <div className="absolute inset-0 border border-[#28a745] rounded-full animate-pulse" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
