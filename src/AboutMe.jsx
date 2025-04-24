import React from 'react';
import aboutImage from './assets/giphy.gif';

function AboutMe(props) {
  return (
    <div
      id={props.id}
      className={`${
        props.background ? 'bg-[#28283c]' : 'bg-[#ffffff]'
      } flex items-center justify-center`}
    >
      <div
        className={`${
          props.background ? 'bg-[#28283c]' : 'bg-[#ffffff]'
        } w-full max-w-screen-2xl flex md:flex-row flex-col items-center justify-center md:py-40 py-20 gap-5`}
      >
        <div className="flex-1 flex items-center justify-end">
          <img
            className="rounded-3xl object-cover md:h-[clamp(1rem,25vw,400px)] md:w-[clamp(1rem,30vw,500px)] w-[90vw] shadow-xl shadow-[#0000009d]"
            src={aboutImage}
            alt="about Image"
          />
        </div>
        <div className=" flex-1 flex flex-col md:items-start items-center py-10 md:py-0">
          <p className="font-bold md:text-[clamp(1rem,2vw,35px)] text-blue-400 md:text-start text-center select-none">
            ABOUT ME
          </p>
          <p
            className={`${
              props.background ? 'text-white' : 'text-black'
            } font-bold md:text-[clamp(1rem,3.5vw,55px)] my-[clamp(0.2rem,0.8vw,12px)] text-[7vw] md:text-start text-center transition-colors duration-300 select-none`}
          >
            Front-End Developer 🖥️
          </p>
          <p
            className={`${
              props.background ? 'text-[#ebebeb]' : 'text-gray-700'
            } max-w-[80%] text-[clamp(1rem,1.2vw,28px] md:text-[clamp(1rem,1.2vw,28px)]  font-semibold md:text-start text-center transition-colors duration-300 select-none`}
          >
            Hi my name is Jhon Mohonrey Ramos and I am a front-end developer
            with a passion for crafting user-centric web experiences. I leverage
            my expertise in HTML, CSS, SASS, TAILWIND, JavaScript, and React.js
            to build dynamic and visually appealing web applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
