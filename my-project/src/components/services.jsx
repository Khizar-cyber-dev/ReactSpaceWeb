import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import wave from "../assets/wave Gif.gif";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";

const ServiceData = [
  {
    title: "HST",
    content: "300-1500km",
    description:
      "Used for astronomical observations, capturing stunning images of the universe.",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "ISS",
    content: "500-1500km",
    description:
      ", it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "GPS",
    content: "300-1500km",
    description:
      "Part of the Global Positioning System (GPS) used for navigation.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="bg-black">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                {ServiceData.map((data, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto mt-10"
                  >
                    {data.icon}
                    <h1>{data.title}</h1>
                    <p>{data.content}</p>
                    <p className="text-sm">{data.description}</p>
                  </div>
                ))}
              </div>
              <img
                src={wave}
                alt="wave animation"
                className="h-[200px] w-full object-cover mix-blend-screen -translate-y-[80px] relative z-[0]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
