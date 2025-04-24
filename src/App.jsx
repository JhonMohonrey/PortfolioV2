import React from 'react';
import Nav from './Nav';
import Projects from './Projects';
import MainPage from './MainPage';
import AboutMe from './AboutMe';

import darkIcon from './darkMode/moon.png';
import whiteIcon from './darkMode/sun.png';
import ContactPage from './ContactPage';
import Foot from './Foot';

function App(props) {
  let [darkMode, setDarkMode] = React.useState(false);
  const defaultContainer = () => {
    return (
      <div className="border-3 border-black bg-yellow-300 h-96 flex items-center justify-center">
        <p className="font-bold text-2xl">Default Page</p>
      </div>
    );
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const bgColor = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div>
      <div
        onClick={bgColor}
        className={`fixed bottom-4 right-5 border-2 border-black p-1 flex items-center justify-center gap-2 rounded-full cursor-pointer z-50 ${
          darkMode ? 'bg-white' : 'bg-[#28283c]'
        }`}
      >
        {/* <button
          onClick={bgColor}
          className={`text-white cursor-pointer active:opacity-80 rounded-full p-3 flex items-center gap-4 relative bg-[#000000] `}
        >
          <img className="w-[1.5vw]" src={whiteIcon} alt="icon" />
          <img className="w-[1.5vw]" src={darkIcon} alt="icon" />
        </button> */}
        <div className="rounded-full p-1 relative">
          <div
            className={`absolute bg-black rounded-full left-0 right-0 top-0 bottom-0  ${
              darkMode ? 'opacity-100' : 'opacity-0'
            }`}
          ></div>

          <img className={`md:w-[2vw] w-[6vw]`} src={whiteIcon} alt="icon" />
        </div>
        {/* -------------------------------- */}
        <div className="rounded-full p-1 relative">
          <div
            className={`absolute bg-white rounded-full left-0 right-0 top-0 bottom-0 ${
              darkMode ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <img className={`md:w-[2vw] w-[6vw]`} src={darkIcon} alt="icon" />
        </div>
      </div>

      <Nav background={darkMode} />
      <MainPage background={darkMode} id="MainPage" />
      <AboutMe background={darkMode} id="AboutMe" />
      <Projects background={darkMode} id="projects" />
      <ContactPage background={darkMode} id="contact" />
      <Foot />
      {/* {defaultContainer()}
      {defaultContainer()}
      {defaultContainer()}
      {defaultContainer()}
      {defaultContainer()} */}
    </div>
  );
}

export default App;
