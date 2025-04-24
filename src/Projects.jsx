import React from 'react';
import img from './assets/106888626.jpg';
import gitBlack from './projectIcon/GitBlack.png';
import gitWhite from './projectIcon/GitWhite.png';
import gitHover from './projectIcon/GitHover.png';
import NextBlack from './projectIcon/nextBlack.png';
import NextWhite from './projectIcon/nextWhite.png';
import NextHover from './projectIcon/nextHover.png';
import DrawerIcon from './projectIcon/drawer.png';
import PizzaIcon from './projectIcon/pizza-slice.png';
import Panpie from './projectImage/panpie.png';
import test from './projectImage/test282.png';

function Projects(props) {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Initial log + cleanup
    handleResize(); // Optional, in case initial value is wrong

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let [projects, setProjects] = React.useState([
    {
      img: `${Panpie}`,
      title: `Panpie Demo`,
      info: `PanPie is a professionally developed pizza ordering website, built using ReactJS for a dynamic user experience and SCSS for refined, maintainable styling. Users can seamlessly explore the menu and place orders effortlessly.`,
      isFlip: false,
      isHover: false,
      demo: false,
      id: 1,
      demoLink: 'https://jhonmohonrey.github.io/panpie/',
      codeLink: 'https://github.com/JhonMohonrey/panpie',
      projectIcon: `${PizzaIcon}`,
    },
    // {
    //   img: `${Panpie}`,
    //   title: `Panpie Demo`,
    //   info: `Crafted with ReactJS for a seamless experience and SCSS for a sleek design, discover your dream car and elevate your journeys. Browse our inventory and contact us today for a test drive.`,
    //   isFlip: true,
    //   isHover: false,
    //   demo: false,
    //   id: 2,
    //   demoLink: 'https://jhonmohonrey.github.io/panpie/',
    //   codeLink: 'https://github.com/JhonMohonrey/panpie',
    //   projectIcon: `${DrawerIcon}`,
    // },
  ]);

  const hoverIn = (id) => {
    setProjects((prev) => {
      return prev.map((item) => {
        if (item.id !== id) return item;

        return {
          ...item,
          isHover: !item.isHover,
        };
      });
    });
  };

  const demoIn = (id) => {
    setProjects((prev) => {
      return prev.map((item) => {
        if (item.id !== id) return item;

        return {
          ...item,
          demo: !item.demo,
        };
      });
    });
  };

  const renderProject = () => {
    const imageSection = (imgLink, flip) => {
      return (
        <div className={`${flip ? 'justify-start' : 'justify-end'}  flex `}>
          <img
            className="md:w-[clamp(1rem,50vw,500px)] w-[85vw] rounded-2xl shadow-lg md:shadow-xl shadow-[#00000052] cursor-pointer active:opacity-90 transition-all duration-300"
            src={imgLink}
            alt="projectImage"
          />
        </div>
      );
    };

    let gitCodeIcon = props.background ? gitWhite : gitBlack;
    let LiveDemoIcon = props.background ? NextWhite : NextBlack;

    const infoSection = (
      title,
      info,
      flip,
      id,
      hover,
      demo,
      demoLink,
      codeLink,
      projectIcon
    ) => {
      return (
        <div className=" flex flex-col items-center">
          {/* props.background ? 'text-white' : 'text-black' */}
          <p
            className={`${
              props.background ? 'text-white' : 'text-black'
            } text-center font-bold text-2xl flex items-center gap-2 hover:text-blue-500 cursor-pointer  md:mt-0 select-none`}
          >
            {title}
            <img
              className="w-[clamp(1.2rem,1.5vw,25px)] "
              src={projectIcon}
              alt="project Icon"
            />
          </p>
          <p
            className={`${
              props.background ? 'text-white' : 'text-black'
            } md:text-center text-gray-700 my-[clamp(1rem,2vw,30px)] text-center md:max-w-[clamp(1rem,32vw,650px)] text-[clamp(1rem,1.2vw,25px)] select-none`}
          >
            {info}
          </p>

          <div className=" p-2 flex items-center justify-center gap-5">
            <a
              // props.background ? 'text-white' : 'text-black'
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                props.background ? 'text-white' : 'text-black'
              } active:opacity-80 flex items-center gap-2 font-bold hover:text-blue-500 text-[clamp(1rem,1.2vw,40px)]`}
              onMouseEnter={() => hoverIn(id)}
              onMouseLeave={() => hoverIn(id)}
            >
              Code
              <img
                className="w-[clamp(1rem,1.2vw,40px)]"
                src={hover ? gitHover : gitCodeIcon}
                alt="icon"
              />
            </a>

            <a
              // props.background ? 'text-white' : 'text-black'
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => demoIn(id)}
              onMouseLeave={() => demoIn(id)}
              className={`${
                props.background ? 'text-white' : 'text-black'
              } active:opacity-80 flex items-center gap-2 font-bold hover:text-blue-500 text-[clamp(1rem,1.2vw,40px)]`}
            >
              Live Demo
              <img
                className="w-[clamp(1rem,1.2vw,40px)]"
                src={demo ? NextHover : LiveDemoIcon}
                alt="icon"
              />
            </a>
          </div>
        </div>
      );
    };
    return projects.map((item) => {
      return (
        <div
          key={item.title}
          className="flex items-center justify-center gap-5 py-2 md:flex-row flex-col"
        >
          {item.isFlip && width > 767 ? (
            <>
              {infoSection(
                item.title,
                item.info,
                item.isFlip,
                item.id,
                item.isHover,
                item.demo,
                item.demoLink,
                item.codeLink,
                item.projectIcon
              )}
              {imageSection(item.img, item.isFlip, item.id)}
            </>
          ) : (
            <>
              {imageSection(item.img, item.isFlip, item.id)}
              {infoSection(
                item.title,
                item.info,
                item.isFlip,
                item.id,
                item.isHover,
                item.demo,
                item.demoLink,
                item.codeLink,
                item.projectIcon
              )}
            </>
          )}
        </div>
      );
    });
  };
  return (
    <div
      id={props.id}
      className={`${
        props.background ? 'bg-[#242436]' : 'bg-[#f5f5f5]'
      }  flex items-center justify-center `}
    >
      <div
        className={`${
          props.background ? 'bg-[#242436]' : 'bg-[#f5f5f5]'
        } w-full max-w-screen-2xl items-center  px-2 md:px-[clamp(1rem,2vw,12px)] md:py-30 py-15`}
      >
        <div className="mb-2">
          <p className="text-blue-500 font-bold text-[clamp(1rem,5vw,25px)] md:text-[clamp(1rem,1.8vw,50px)] select-none">
            Portfolio
          </p>
          <p
            className={`${
              props.background ? 'text-white' : 'text-black'
            } font-bold text-[clamp(1rem,6.5vw,26px)] md:text-[clamp(1rem,2.5vw,60px)] select-none`}
          >
            All Of My Personal Projects
          </p>
        </div>
        <div className="flex flex-col md:gap-12 gap-8">{renderProject()}</div>
      </div>
    </div>
  );
}

export default Projects;
