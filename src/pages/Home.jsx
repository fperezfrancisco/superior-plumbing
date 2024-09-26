import React from "react";
import plumberHero from "../assets/plumber-hero.png";
import ServiceBox from "../components/ServiceBox";
import { FaFaucetDrip, FaFilter } from "react-icons/fa6";
import { PiBathtubFill } from "react-icons/pi";
import { GiTeePipe } from "react-icons/gi";
import { IoWater } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import TestimonialBox from "../components/TestimonialBox";
import sarahImg from "../assets/user-profile-sophia.jpeg";
import johnImg from "../assets/user-john.jpg";
import nasimImg from "../assets/user-nasim.jpg";
import jenImg from "../assets/user-jen.jpg";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { IoRibbonSharp } from "react-icons/io5";
import plumberWorkImg from "../assets/plumbing-work.jpg";
import plumberHomeWorkImg from "../assets/plumber-home-work.jpg";
import plumberHeroImg from "../assets/hero-bg.webp";
import tubePlumber from "../assets/tube-plumber.jpg";
import friendlyPlumber from "../assets/friendly-plumber.jpg";

function Home() {
  const serviceList = [
    {
      service: "Commercial Plumbing",
      icon: <FaFaucetDrip />,
    },
    {
      service: "Bathtub Installation",
      icon: <PiBathtubFill />,
    },
    {
      service: "Water Filter Cleaning",
      icon: <FaFilter />,
    },
    {
      service: "Skilled & Trained Personnel",
      icon: <GiTeePipe />,
    },
    {
      service: "Fast Reliable Service",
      icon: <IoWater />,
    },
    {
      service: "Water Line & Gas Line Repair",
      icon: <FaFaucetDrip />,
    },
    {
      service: "Basement Plumbing",
      icon: <FaFaucetDrip />,
    },
  ];

  return (
    <>
      <section className="w-full max-w-[2500px] flex flex-col lg:flex-row my-0 mx-auto pt-8 px-4 md:px-8 bg-blue-900 h-full min-h-[500px] lg:justify-center">
        <div className="heroCopy flex flex-col justify-center h-full text-left items-start pr-4 lg:max-w-[575px] pt-4 xl:justify-center">
          <h2 className="text-sm text-white uppercase ">
            --- Ready to help you
          </h2>
          <h1 className="text-[2rem] md:text-[4rem] text-white leading-[1.2] font-semibold">
            Expert Plumbing <span className="text-yellow-300">Services</span>{" "}
            Provider{" "}
          </h1>
          <p className="w-full font-light text-sm md:text-[1rem] text-white opacity-75 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
            excepturi voluptate vel, quisquam dolor quaerat similique corporis
            debitis placeat vero ullam maiores, consequatur accusamus odio fuga
            illo autem, eaque expedita consequuntur adipisci provident sapiente
            minima modi cupiditate! Praesentium, laboriosam excepturi.
          </p>
          <button className="py-4 px-20 bg-yellow-300 w-fit min-w-[200px] max-w-[450px] mt-12 h-[60px] rounded-3xl hover:bg-yellow-500">
            Learn More
          </button>
        </div>
        <div className="flex w-full lg:w-fit pl-4 h-full justify-center items-end">
          <img
            src={plumberHero}
            alt="Plumber Hero Img"
            className="h-full w-full max-w-[450px] md:max-w-[600px] xl:max-w-[500px]"
          />
        </div>
      </section>
      <section className="w-full max-w-[2500px] h-full flex flex-col p-4 py-20 my-20 md:p-16 md:py-24">
        <div className="sectionHeader flex">
          <div className="titleContainer flex flex-col max-w-[600px]">
            <h3 className="subheading text-sm font-semibold text-blue-900 uppercase">
              Our Features
            </h3>
            <h2 className="sectionTitle text-[2.25rem] text-black capitalize font-semibold">
              Explore our Services & Solutions
            </h2>
            <p className="text-gray-400 opacity-95 mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              minima inventore dolorum sint quo omnis impedit quidem cumque quis
              expedita.
            </p>
          </div>
        </div>
        <div className="serviceGrid flex flex-wrap gap-8 mt-12 justify-center xl:justify-start">
          {serviceList.map((service) => (
            <ServiceBox service={service} />
          ))}
        </div>
      </section>
      <section className="w-full max-w-[2500px] h-full mt-12 py-24 bg-gray-200 flex flex-col-reverse lg:flex-row items-center lg:justify-center">
        <div className="artwork relative w-fit flex flex-wrap items-center justify-center">
          <div className="p-2 flex flex-col items-end gap-4">
            <div className="rounded-3xl w-[240px] h-[140px] bg-gray-400 overflow-hidden">
              <img src={plumberWorkImg} alt="" className="object-cover" />
            </div>
            <div className="rounded-3xl w-[300px] h-[140px] bg-gray-400 overflow-hidden">
              <img src={plumberHomeWorkImg} alt="" className="object-cover" />
            </div>
            <div className="rounded-3xl w-[240px] h-[140px] bg-gray-400 overflow-hidden">
              <img src={plumberHeroImg} alt="" className="object-cover" />
            </div>
          </div>
          <div className="p-2 flex flex-col items-start gap-4 h-full justify-end">
            <div className="rounded-3xl w-[240px] h-[140px] bg-gray-400 overflow-hidden">
              <img src={tubePlumber} alt="" className="object-cover" />
            </div>
            <div className="rounded-3xl w-[300px] h-[200px] bg-gray-400 overflow-hidden">
              <img src={friendlyPlumber} alt="" className="object-cover" />
            </div>
          </div>
        </div>
        <div className="sectionCopy flex flex-col items-start p-8 py-16 w-full lg:max-w-[600px]">
          <h3 className="subheading text-sm font-semibold text-blue-900 uppercase">
            About Us
          </h3>
          <h2 className="sectionTitle text-[2.25rem] text-black capitalize font-semibold">
            We Are Available for 24/7 Emergency Service
          </h2>
          <p className="text-gray-400 opacity-95 mt-4 pl-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id minima
            inventore dolorum sint quo omnis impedit quidem cumque quis
            expedita.
          </p>
          <div className="aboutSubcontainer flex flex-col gap-2 ml-8 mt-6 p-4 rounded-2xl bg-white text-gray-500">
            <div className="flex flex-row gap-4">
              <IoIosCheckmarkCircleOutline className="text-xl" />
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                animi.
              </span>
            </div>
            <div className="flex flex-row gap-4">
              <IoIosCheckmarkCircleOutline className="text-xl" />
              <span className="text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                animi.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full max-w-[2500px] relative flex flex-col p-8 my-0 py-24 pb-[14rem] lg:pb-[16rem] lg:py-[12rem] bg-blue-900 items-center justify-center"
        id="workSection"
      >
        <div className="overlay absolute w-full h-full top-0 bottom-0 right-0 left-0 bg-blue-900 opacity-95"></div>
        <div className="flex flex-col pr-2 w-full items-center justify-center z-20 text-center">
          <h3 className="subheading text-sm font-semibold text-white uppercase">
            Our Operations
          </h3>
          <h2 className="sectionTitle text-[2.25rem] text-white capitalize font-semibold">
            This is How We Work
          </h2>
          <div className="operationRow flex gap-8 items-center justify-center mt-20 mb-16 flex-wrap">
            <div className="workStep flex flex-col text-center items-center p-4 w-[300px]">
              <div className="iconContainer rounded-full w-[90px] h-[90px] flex items-center justify-center relative border-[1px] border-yellow-400 my-10">
                <FaPhoneFlip className="text-white text-[2rem]" />
                <div className="stepNumber absolute -bottom-2 -right-2 w-[36px] h-[36px] bg-yellow-400 text-blue-900 rounded-full flex justify-center items-center font-bold">
                  1
                </div>
              </div>
              <h4 className="text-white text-[1.25rem] font-semibold">
                Book Online or With Phone
              </h4>
              <p className="text-light text-white max-w-[250px] opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
            <div className="workStep flex flex-col text-center items-center p-4 w-[300px]">
              <div className="iconContainer rounded-full w-[90px] h-[90px] flex items-center justify-center relative border-[1px] border-yellow-400 my-10">
                <MdOutlineContentPasteSearch className="text-white text-[2rem]" />
                <div className="stepNumber absolute -bottom-2 -right-2 w-[36px] h-[36px] bg-yellow-400 text-blue-900 rounded-full flex justify-center items-center font-bold">
                  2
                </div>
              </div>
              <h4 className="text-white text-[1.25rem] font-semibold">
                We identify the problem
              </h4>
              <p className="text-light text-white max-w-[250px] opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
            <div className="workStep flex flex-col text-center items-center p-4 w-[300px]">
              <div className="iconContainer rounded-full w-[90px] h-[90px] flex items-center justify-center relative border-[1px] border-yellow-400 my-10">
                <GrUserWorker className="text-white text-[2rem]" />
                <div className="stepNumber absolute -bottom-2 -right-2 w-[36px] h-[36px] bg-yellow-400 text-blue-900 rounded-full flex justify-center items-center font-bold">
                  3
                </div>
              </div>
              <h4 className="text-white text-[1.25rem] font-semibold">
                Our Professionals Arrive
              </h4>
              <p className="text-light text-white max-w-[250px] opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
            <div className="workStep flex flex-col text-center items-center p-4 w-[300px]">
              <div className="iconContainer rounded-full w-[90px] h-[90px] flex items-center justify-center relative border-[1px] border-yellow-400 my-10">
                <IoRibbonSharp className="text-white text-[2rem]" />
                <div className="stepNumber absolute -bottom-2 -right-2 w-[36px] h-[36px] bg-yellow-400 text-blue-900 rounded-full flex justify-center items-center font-bold">
                  4
                </div>
              </div>
              <h4 className="text-white text-[1.25rem] font-semibold">
                We solve your problem
              </h4>
              <p className="text-light text-white max-w-[250px] opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-[2500px] flex flex-col p-4 mt-12 py-24 lg:p-8 lg:py-[12rem]">
        <div className="sectionHeading flex items-center justify-center flex-col text-center">
          <h3 className="subheading text-sm font-semibold text-blue-900 uppercase">
            Expert Plumbers
          </h3>
          <h2 className="sectionTitle text-[2.25rem] text-black capitalize font-semibold">
            Meet our Team
          </h2>
        </div>
        <div className="teamRow flex flex-wrap w-full px-8 mt-24 justify-center gap-6">
          <div
            className="memberContainer flex flex-col p-6 justify-end rounded-lg w-[300px] h-[450px] bg-gray-300"
            id="alexPlumber"
          >
            <div className="copy flex flex-col items-center p-2 bg-yellow-400 text-blue-900 rounded-lg ">
              <p className="name text-md font-bold text-center">Alex Stuart</p>
              <p className="name text-md font-light text-center">Plumber</p>
            </div>
          </div>
          <div
            className="memberContainer flex flex-col p-6 justify-end rounded-lg w-[300px] h-[450px] bg-gray-300"
            id="jasonPlumber"
          >
            <div className="copy flex flex-col items-center p-2 bg-yellow-400 text-blue-900 rounded-lg ">
              <p className="name text-md font-bold text-center">Jason Bowman</p>
              <p className="name text-md font-light text-center">
                Head Plumber
              </p>
            </div>
          </div>
          <div
            className="memberContainer flex flex-col p-6 justify-end rounded-lg w-[300px] h-[450px] bg-gray-300"
            id="andrewPlumber"
          >
            <div className="copy flex flex-col items-center p-2 bg-yellow-400 text-blue-900 rounded-lg ">
              <p className="name text-md font-bold text-center">Andrew Wolf</p>
              <p className="name text-md font-light text-center">Plumber</p>
            </div>
          </div>
          <div
            className="memberContainer flex flex-col p-6 justify-end rounded-lg w-[300px] h-[450px] bg-gray-300"
            id="henryPlumber"
          >
            <div className="copy flex flex-col items-center p-2 bg-yellow-400 text-blue-900 rounded-lg ">
              <p className="name text-md font-bold text-center">Henry Barton</p>
              <p className="name text-md font-light text-center">Plumber</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full relative max-[2500px] flex flex-col lg:flex-row p-4 lg:p-8 py-20 lg:py-[14rem] bg-blue-900 "
        id="testimonialSection"
      >
        <div className="overlay absolute w-full h-full top-0 bottom-0 right-0 left-0 bg-blue-900 opacity-95"></div>
        <div className="z-20 sectionCopy flex flex-col items-start p-8 py-16 w-full lg:max-w-[550px]">
          <h3 className="subheading text-sm font-semibold text-white uppercase">
            Testimonial
          </h3>
          <h2 className="sectionTitle text-[2.25rem] text-white capitalize font-semibold">
            What our clients say about us
          </h2>
          <p className="text-gray-400 opacity-95 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id minima
            inventore dolorum sint quo omnis impedit quidem cumque quis
            expedita.
          </p>
          <button className="py-4 px-20 bg-yellow-300 w-fit min-w-[200px] max-w-[450px] mt-12 h-[60px] rounded-3xl hover:bg-yellow-500">
            Learn More
          </button>
        </div>
        <div className="testimonialBox z-10 flex flex-wrap justify-center gap-12">
          <TestimonialBox name="Sarah Fisher" img={sarahImg} />
          <TestimonialBox name="John Chesnut" img={johnImg} />
          <TestimonialBox name="Jennifer Hutson" img={jenImg} />
          <TestimonialBox name="Nasim Abdullah" img={nasimImg} />
        </div>
      </section>
      <footer className="w-full max-w-[2500px] p-4 md:p-8 py-12 flex flex-wrap justify-between bg-yellow-400">
        <div className="w-full p-4 flex gap-3 items-center lg:max-w-[300px]">
          <div className="icon bg-blue-900 w-[50px] h-[50px] rounded-full"></div>
          <div className="flex flex-col items-start text-[0.75rem]">
            1234 Valencia Blvd, Valencia, CA, USA
          </div>
        </div>
        <div className="w-full p-4 flex gap-3 items-center lg:max-w-[300px]">
          <div className="icon bg-blue-900 w-[50px] h-[50px] rounded-full"></div>
          <div className="flex flex-col items-start text-[0.75rem]">
            Call Us: 661.390.6504
          </div>
        </div>
        <div className="w-full p-4 flex gap-3 items-center lg:max-w-[300px]">
          <div className="icon bg-blue-900 w-[50px] h-[50px] rounded-full"></div>
          <div className="flex flex-col items-start text-[0.75rem]">
            Email Us: info@superplumbers.com
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
