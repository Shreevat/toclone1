import React, { useEffect } from "react";
import { FaReact } from "react-icons/fa6";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitSquare,
  FaGithub,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const Service: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scrolled");
            observer.unobserve(entry.target); // Fixed the typo: `unobserve` is correct
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the target is visible
    );

    const startpoint = document.getElementById("startpoint");
    if (startpoint) {
      startpoint.querySelectorAll(".service-box").forEach((element) => {
        observer.observe(element);
      });
    }

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="background-to flex justify-center pb-8 skill" id="Service">
      <div className="flex flex-col">
        <h2 className="font-bold text-4xl mx-4 mb-10 flex justify-center mt-7">
          Skills
        </h2>
        <div className="grid grid-cols-3 gap-10" id="startpoint">
          <div className="service-box">
            <FaHtml5 />
          </div>
          <div className="service-box">
            <FaCss3Alt />
          </div>
          <div className="service-box">
            <TbBrandJavascript />
          </div>
          <div className="service-box">
            <FaReact />
          </div>
          <div className="service-box">
            <RiTailwindCssLine />
          </div>
          <div className="service-box">
            <FaBootstrap />
          </div>
          <div className="service-box">
            <SiTypescript />
          </div>
          <div className="service-box">
            <FaGitSquare />
          </div>
          <div className="service-box">
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
