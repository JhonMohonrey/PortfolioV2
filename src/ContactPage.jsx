import React from 'react';
import gmailIcon from './projectIcon/gmailIcon.png';
import locationIcon from './projectIcon/locationIcon.png';

function ContactPage(props) {
  const renderInfo = (img, title, info) => {
    return (
      <div className=" flex gap-4">
        <div className=" flex items-center justify-center">
          <img
            className="md:w-[clamp(1rem,3.5vw,80px)] w-[12vw]"
            src={img}
            alt="location"
          />
        </div>
        <div className="">
          <p className="text-blue-500 font-bold text-[clamp(1rem,6vw,25px)] md:text-[clamp(1rem,1.5vw,50px)] select-none">
            {title}
          </p>
          <p
            className={`md:text-[clamp(1rem,1vw,35px)] text-[clamp(1rem,6vw),40px]  ${
              props.background ? 'text-white' : 'text-gray-600'
            }`}
          >
            {info}
          </p>
        </div>
      </div>
    );
  };
  return (
    <div
      id={props.id}
      className={`flex  justify-center ${
        props.background ? 'bg-[#28283c]' : 'bg-[#ffffff]'
      }`}
    >
      <div
        className={`${
          props.background ? 'bg-[#28283c]' : 'bg-white'
        } w-full max-w-screen-2xl z-20 py-8 md:py-10 md:px-5 my-20 md:my-50 px-2`}
      >
        <p className="text-blue-500 font-bold text-[clamp(1rem,5vw,25px)] md:text-[clamp(1rem,1.8vw,50px)] select-none">
          Contact
        </p>
        <p
          className={`${
            props.background ? 'text-white' : 'text-black'
          } font-bold text-[clamp(1rem,6vw,26px)] md:text-[clamp(1rem,2.5vw,60px)] select-none`}
        >
          I'd be happy to hear from you. 👇
        </p>

        <div className=" flex p-2 gap-7 flex-col items-start md:p-0 md:items-start md:flex-row my-5 md:my-10">
          {renderInfo(locationIcon, 'Location', 'Batangas, Philippines')}
          {renderInfo(gmailIcon, 'Gmail', 'mohonrey45@gmail.com')}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
