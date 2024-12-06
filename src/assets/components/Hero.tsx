import { FaDownload } from "react-icons/fa6";
import Lottie from "lottie-react";
import animationData from "./Hero.json";

const Hero = () => {
  return (
    <div className="background-to  " id="Hero">
      <div className="flex justify-between items-center h-screen">
        <div className="flex flex-col ml-16">
          <h1 className="md:text-5xl font-bold  w-[30rem] md:mb-8 mt-2 sm:text-2xl mb-4  ">
            HI, I'M RUKSANA
          </h1>
          <p className=" w-full md:w-[50rem] h-auto md:h-[30vh] text-base md:text-lg lg:text-xl mb-4 md:mb-8">
            I am a passionate web developer with expertise in HTML, CSS,
            JavaScript, and React, dedicated to creating dynamic user
            interfaces. Currently, I'm expanding my skills into backend
            development to build full-stack applications. I thrive in
            collaborative environments and am committed to delivering
            high-quality solutions. Eager to embrace new challenges, I’m excited
            about the opportunities ahead!
          </p>
          <div>
            <button className="bg-teal-900    text-white w-[8rem] p-1 flex flex-wrap justify-between ">
              <FaDownload />
              Download CV
            </button>
          </div>
        </div>

        <div>
          <Lottie
            animationData={animationData}
            className="w-96 h-96 sm:hidden md:block "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
