import React from 'react';
import icon from './assets/mainIcon.png';
import menu from './assets/three-dot.png';
import exitMenu from './assets/no.png';
import whiteDots from './assets/dots.png';

function Nav(props) {
  // State to track if the menu is open or closed
  let [menuStatus, setMenuStatus] = React.useState(false);

  // Options for the regular (desktop) menu
  let [options, setOptions] = React.useState([
    { data: 'Home', link: '#MainPage' },
    { data: 'About', link: '#AboutMe' },
    { data: 'Projects', link: '#projects' },
    { data: 'Contact', link: '#projects' },
  ]);

  // Options for the mobile menu with emojis for better visual cues
  let [mobileOptions, setMobileOptions] = React.useState([
    { data: '🏠 Home', link: '#MainPage' },
    { data: 'ℹ️ About', link: '#AboutMe' },
    { data: '🛠️ Projects', link: '#projects' },
    { data: '📬 Contact', link: '#contact' },
  ]);

  // Function to render mobile menu links dynamically
  const RenderMobileOptions = () => {
    return mobileOptions.map((item) => {
      return (
        <a
          key={item.data}
          className="font-semibold text-[clamp(1rem,6vw,25px)] active:ml-3 active:opacity-80 transition-all duration-75 "
          href={item.link}
          onClick={menuBtn}
        >
          {item.data}
        </a>
      );
    });
  };

  // Function to render regular (desktop) menu links dynamically
  const RenderOptions = () => {
    return options.map((item) => {
      return (
        <a
          key={item.data}
          href={item.link}
          className={`${
            props.background ? 'text-white' : 'text-black'
          } text-[clamp(0.8rem,1.2vw,22px)] font-bold hover:text-blue-500 active:opacity-80 transition-colors duration-300`}
        >
          {item.data}
        </a>
      );
    });
  };

  const windowsRender = () => {
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

          <p
            className={`${
              props.background ? 'text-white' : 'text-black'
            } font-bold text-[clamp(0.8rem,1.7vw,35px)] cursor-pointer select-none active:opacity-60 active:ml-2 transition-colors duration-300`}
          >
            MOHONREY
          </p>
        </div>

        {/* Links */}
        <div className="flex-1 flex justify-end gap-5">{RenderOptions()}</div>
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
                {RenderMobileOptions()}
              </div>
            </div>
          </div>
        </div>

        <div
          className={` absolute left-0 right-0 top-0 bottom-0 bg-black opacity-50 ${
            menuStatus ? 'block' : 'hidden'
          }`}
        ></div>
      </div>
    );
  };

  return (
    // bg-[#28283c] default Color
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
export default Nav;
