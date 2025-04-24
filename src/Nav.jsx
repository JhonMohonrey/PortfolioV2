import React from 'react';
import icon from './assets/mainIcon.png';
import menu from './assets/three-dot.png';
import exit from './assets/exit.png';
import exitMenu from './assets/no.png';
// import exitWhiteIcon from './assets/whiteExit.png';
import exitWhiteIcon from './assets/logout.png';
import whiteDots from './assets/dots.png';

function Nav(props) {
  console.log('bg color:', props.background);
  let [menuStatus, setMenuStatus] = React.useState(false);
  const windowsRender = () => {
    const waveAnimation = {
      animation: 'wave 2s ease-in-out infinite',
    };
    const waveKeyframes = `
    @keyframes wave {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  `;
    return (
      <div className="flex items-center justify-center">
        <div className="flex-1 flex items-center gap-2 ">
          <img
            className="w-[clamp(1rem,2.3vw,45px)] cursor-pointer"
            style={{
              animation: 'float 3s ease-in-out infinite',
            }}
            src={icon}
            alt="Icon"
          />
          {/* <style>
            {`@keyframes float 
            {0%, 100% {transform: translateY(0);}
            50% {transform: translateY(-4px);}}`}
          </style>
          <style>{waveKeyframes}</style>{' '}
          <p className="font-bold cursor-pointer active:opacity-80 select-none text-xl text-[#000d1b] hover:text-blue-400 flex justify-center items-center">
            <span style={{ ...waveAnimation, animationDelay: '0s' }}>M</span>
            <span style={{ ...waveAnimation, animationDelay: '0.2s' }}>O</span>
            <span style={{ ...waveAnimation, animationDelay: '0.4s' }}>H</span>
            <span style={{ ...waveAnimation, animationDelay: '0.6s' }}>O</span>
            <span style={{ ...waveAnimation, animationDelay: '0.8s' }}>N</span>
            <span
              className="text-blue-400"
              style={{ ...waveAnimation, animationDelay: '1s' }}
            >
              R
            </span>
            <span
              className="text-blue-400"
              style={{ ...waveAnimation, animationDelay: '1.2s' }}
            >
              E
            </span>
            <span
              className="text-blue-400"
              style={{ ...waveAnimation, animationDelay: '1.4s' }}
            >
              Y
            </span>
          </p> */}
          <p
            className={`${
              props.background ? 'text-white' : 'text-black'
            } font-bold text-[clamp(0.8rem,1.7vw,35px)] cursor-pointer select-none active:opacity-60 active:ml-2 transition-colors duration-300`}
          >
            MOHONREY
          </p>
        </div>

        <div className="flex-1 flex justify-end gap-5">
          <a
            href="#MainPage"
            className={`${
              props.background ? 'text-white' : 'text-black'
            } text-[clamp(0.8rem,1.2vw,22px)] font-bold hover:text-blue-500 active:opacity-80 transition-colors duration-300`}
          >
            Home
          </a>
          <a
            href="#AboutMe"
            className={`${
              props.background ? 'text-white' : 'text-black'
            } text-[clamp(0.8rem,1.2vw,22px)] font-bold hover:text-blue-500 active:opacity-80 transition-colors duration-300`}
          >
            About
          </a>
          <a
            href="#projects"
            className={`${
              props.background ? 'text-white' : 'text-black'
            } text-[clamp(0.8rem,1.2vw,22px)] font-bold hover:text-blue-500 active:opacity-80 transition-colors duration-300`}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`${
              props.background ? 'text-white' : 'text-black'
            } text-[clamp(0.8rem,1.2vw,22px)] font-bold hover:text-blue-500 active:opacity-80 transition-colors duration-300`}
          >
            Contact
          </a>
        </div>
      </div>
    );
  };

  const menuBtn = () => {
    setMenuStatus((prev) => !prev);
  };
  document.body.style.overflow = menuStatus ? 'hidden' : 'auto';

  let dotsIcon = props.background ? whiteDots : menu;
  const mobileRender = () => {
    return (
      // Change the bg to black
      <div
        className={`${
          props.background ? 'bg-[#28283c]' : 'bg-white'
        } p-3 flex items-center justify-between transition-colors duration-300`}
      >
        <div className="flex items-center gap-1.5">
          <img
            className="w-5 cursor-pointer active:opacity-50"
            src={icon}
            alt="menu"
          />
          <p
            className={`${
              props.background ? 'text-white' : 'text-black '
            } font-bold text-based cursor-pointer select-none active:opacity-60 active:ml-2 transition-all duration-300`}
          >
            MOHONREY
          </p>
        </div>
        {/* whiteDots */}
        <div className=" z-10">
          <img
            className="w-[8vw] cursor-pointer active:opacity-60 z-10 relative transition-colors duration-300"
            onClick={menuBtn}
            src={menuStatus ? exitMenu : dotsIcon}
            alt="menu"
          />

          <div
            className={`fixed bottom-0 left-[40%] right-0 top-0 opacity-100 transition-all duration-300 ${
              menuStatus ? 'translate-x-0' : 'translate-x-[100%]'
            } `}
          >
            <div className="p-6"></div>
            <div className="relative h-[100%]">
              <div className="shadow-xl shadow-[#00000048] absolute left-1 top-5 right-3 rounded-2xl p-3 py-10  bg-[#ffffff] flex flex-col gap-2">
                <a
                  className="font-semibold text-[clamp(1rem,6vw,25px)] active:ml-3 active:opacity-80 transition-all duration-75 "
                  href="#MainPage"
                  onClick={menuBtn}
                >
                  🏠 Home
                </a>
                <a
                  className="font-semibold text-[clamp(1rem,6vw,25px)] active:ml-3 active:opacity-80 transition-all duration-75 "
                  href="#AboutMe"
                  onClick={menuBtn}
                >
                  ℹ️ About
                </a>
                <a
                  className="font-semibold text-[clamp(1rem,6vw,25px)] active:ml-3 active:opacity-80 transition-all duration-75 "
                  href="#projects"
                  onClick={menuBtn}
                >
                  🛠️ Projects
                </a>
                <a
                  className="font-semibold text-[clamp(1rem,6vw,25px)] active:ml-3 active:opacity-80 transition-all duration-75 "
                  href="#contact"
                  onClick={menuBtn}
                >
                  📬 Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={` absolute left-0 right-0 top-0 bottom-0 bg-black opacity-40  ${
            menuStatus ? 'block' : 'hidden'
          }`}
        >
          x
        </div>
      </div>
    );
  };

  return (
    // bg-[#28283c]
    <div
      className={`flex justify-center ${
        props.background ? 'bg-[#28283c]' : 'bg-[#ffffff]'
      }`}
    >
      <div
        className={`${
          props.background ? 'bg-[#28283c]' : 'bg-white'
        } w-full max-w-screen-2xl z-20`}
      >
        <div className=" md:hidden">{mobileRender()}</div>
        <div className=" hidden md:block px-5 p-5">{windowsRender()}</div>
      </div>
    </div>
  );
}

{
  /* <a href="#projects">Projects</a> */
}
export default Nav;
