import Lottie from "lottie-react";
import animationData from "./Animation.json";
const About = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center  background-to-alt transition duration-500 ease-in-out w-full p-4"
      id="About"
    >
      <div className="pb-7 ">
        <h1 className="font-bold text-2xl sm:text-3xl  mb-2 mx-4 sm:mx-12">
          About me
        </h1>
        <h1 className=" font-bold text-2xl sm:text-3xl mb-4 mx-4 sm:mx-12">
          Transforming<span className="text-teal-900"> Vision</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between mx-4 sm:mx-12">
          <p className=" w-full h-auto md:w-[50%] md:text-lg lg:text-xl md:pr-4">
            I am a passionate developer currently interning in React, with
            foundational skills in HTML, CSS, and TypeScript. Enthusiastic about
            exploring backend development, I am eager to expand my expertise and
            contribute to innovative projects.
          </p>
        </div>
      </div>
      {/* <div>
        <img
          className=" w-full h-auto md:w-[90rem] md:h-[40vh] pr-48 "
          src="https://cdn.engyne.ai/pomtu80bc39.jpg?w=3840&q=75"
          alt="Profile"
        />
      </div> */}
      <div>
        <Lottie animationData={animationData} className="w-96 h-96" />
      </div>
    </div>
  );
};

export default About;
