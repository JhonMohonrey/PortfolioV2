import React from 'react';
import github from './projectIcon/GitWhite.png';

function Foot(props) {
  return (
    <div className={`flex  justify-center  bg-[#181818] py-30 `}>
      <div
        className={`
        } w-full max-w-screen-2xl flex justify-between items-center px-2 flex-col md:flex-row `}
      >
        <p className="text-[clamp(1.2rem,2vw,40px)] font-semibold text-white text-center md:text-start">
          Copyright © {new Date().getFullYear()} All rights reserved
        </p>
        <a
          href="https://github.com/JhonMohonrey"
          target="_blank"
          rel="noopener noreferrer"
          className=" inline-block active:opacity-80 transition-all duration-150"
        >
          <img
            className="w-[clamp(2rem,5vw,50px)] md:my-0 my-5"
            src={github}
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Foot;
