import React from 'react';
import githubIcon from './assets/githubIcon.png';
import image from './assets/106888626.jpg';
import githubWhite from './assets/githubWhite.png';

import html from './assets/svg/html.svg';
import css from './assets/svg/css.svg';
import scss from './assets/svg/scss.svg';
import vanilla from './assets/svg/vanillaJS.svg';
import ReactIcon from './assets/svg/reactjs.svg';
import tailwindIcon from './assets/svg/tailwindIcon.svg';
import ghIcon from './assets/svg/githubIcon.svg';
import gitIcon from './assets/svg/git.svg';

function MainPage(props) {
  const topContainer = () => {
    return (
      <div className=" flex items-center justify-center gap-1 flex-col md:flex-row py-5">
        <div className="flex-1 flex justify-center">
          <style>
            {`
                @keyframes exampleAnimation {
                  0%, 100% {
                      border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
                  }
                  33% {
                      border-radius: 42% 28% 48% 48% / 28% 28% 72% 72%;
                  }
                  66% {
                      border-radius: 100% 56% 56% 100% / 100% 100% 56% 56%;
                  }
                }
            `}
          </style>
          <div
            className={`${
              props.background ? 'border-white' : 'border-black'
            } border-3  w-[clamp(1rem,90vw,300px)] h-[clamp(1rem,90vw,300px)] md:w-[clamp(1rem,30.04vw,500px)] md:h-[clamp(1rem,30.04vw,500px)] bg-cover bg-center overflow-hidden mb-5 md:mb-0`}
            style={{
              animation: 'exampleAnimation 12s linear infinite',
              backgroundImage: `url(${image})`,
              borderRadius: '42% 56% 72% 28% / 42% 42% 56% 48%',
            }}
          ></div>
        </div>

        <div className="flex-1">
          {/* clamp(12vw,80px) 💻*/}
          <p
            className={`${
              props.background ? 'text-white' : 'text-black'
            } font-bold text-[12vw] md:text-left md:text-[clamp(1rem,4vw,3.75rem)] md:leading-[clamp(1rem,4vw,65px)] leading-[12vw] select-none transition-colors duration-300`}
          >
            Frontend React <br /> Developer👋
          </p>
          <p
            className={`${
              props.background ? 'text-[#d4d4d4]' : 'text-gray-700'
            } font-normal  my-[clamp(0.8rem,1vw,15px)] 
          text-[4.5vw] md:text-[clamp(0.9rem,2vw,1.875rem)] select-none transition-colors duration-300`}
          >
            Hi I'm Jhon Ramos, A passionate Frontend <br /> Developer based in
            the philippines 🗺️
          </p>
          <a
            href="https://github.com/JhonMohonrey"
            target="_blank"
            rel="noopener noreferrer"
            className=" inline-block"
          >
            <img
              src={props.background ? githubWhite : githubIcon}
              className={`${
                props.background
                  ? 'shadow-lg shadow-[#ffffff36] duration-300'
                  : 'shadow-lg shadow-[#000000dc] duration-300'
              } mt-[clamp(0.3rem,1vw,15x)] w-[clamp(2rem,3.2vw,55px)] cursor-pointer rounded-full  active:opacity-80 active:shadow-none `}
              alt="github Icon"
            />
          </a>
        </div>
      </div>
    );
  };

  let [icons, setIcon] = React.useState([
    html,
    css,
    scss,
    vanilla,
    ReactIcon,
    tailwindIcon,
    gitIcon,
    ghIcon,
  ]);

  const iconRender = () => {
    return icons.map((item) => {
      return (
        <img
          key={item}
          className={`${
            props.background
              ? 'border-2 border-white rounded-2xl '
              : 'border-none'
          } md:w-[clamp(1rem,3vw,60px)] w-15 cursor-pointer hover:-mt-4 active:opacity-80 transition-all duration-200`}
          src={item}
          alt={item}
        />
      );
    });
  };

  const techStack = () => {
    return (
      <div className=" flex items-center md:pl-25 py-5 gap-2 justify-center md:justify-start flex-col md:flex-row">
        <p
          className={`${
            props.background ? 'text-white' : 'text-black'
          } font-semibold text-2xl md:text-[clamp(1rem,2vw,40px)] transition-colors duration-300`}
        >
          Tech Stack |
        </p>
        <div className="flex flex-row gap-3 flex-wrap justify-center items-center">
          {iconRender()}
        </div>
      </div>
    );
  };
  return (
    // bg-[#28283c] Original Color
    <div
      id={props.id}
      className={`${
        props.background ? 'bg-[#242436]' : 'bg-[#f5f5f5]'
      } flex justify-center `}
    >
      <div
        className={`${
          props.background ? 'bg-[#242436]' : 'bg-[#f5f5f5]'
        } w-full max-w-screen-2xl py-10 md:py-24`}
      >
        <div>
          {topContainer()}
          <div>{techStack()}</div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
