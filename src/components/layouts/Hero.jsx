import React, { useState, useEffect } from "react";
import {Link } from 'react-router-dom'
const services = [
  {
    text: "Elevate Your Business with Digital Marketing Solutions!",
    subtext:
      "Our expert team crafts tailored strategies, executes effective campaigns, and drives sustainable growth for your brand.",
    image: "/DM_LOGO.png",
  },
  {
    text: "Boost Your Development with Cutting-Edge Solutions!",
    subtext:
      "We deliver innovative software development services to power your digital transformation.",
    image: "/SOFTWARE.jpg",
  },
  {
    text: "Enhance UI/UX with Creative Designs!",
    subtext:
      "Our designers create intuitive and stunning user experiences to captivate your audience.",
    image: "/UI.jpg",
  },
  {
    text: "Optimize with Data Science Expertise!",
    subtext:
      "Leverage our data-driven insights to make informed decisions and grow your business.",
    image: "/DATA_SCIENCE.jpg",
  },
  {
    text: "Secure Your Future with Cloud Solutions!",
    subtext:
      "We provide robust cloud services to ensure scalability and security for your operations.",
    image: "/CLOUD.jpg",
  },
];
const Hero = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []); // services is static, so dependency array is empty
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 blur-[1px] transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${services[currentServiceIndex].image})`,
        }}
      ></div>
      {/* Content */}
      <div className="relative container mx-auto px-6 py-20 md:py-32 text-center">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in text-orange-200 transition-all duration-1000"
          style={{ opacity: 0.9 }}
        >
          {services[currentServiceIndex].text}
        </h1>
        <p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-delay transition-all duration-1000"
          style={{ opacity: 0.9 }}
        >
          {services[currentServiceIndex].subtext}
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link to='/mission'
            className="px-6 py-3 bg-orange-500 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 animate-fade-in-delay-2"
          >
            Read More
          </Link>
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 hidden md:block">
        <div className="w-32 h-32 bg-orange-300 rounded-full opacity-20 blur-xl animate-pulse"></div>
      </div>
      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="w-24 h-24 bg-teal-300 rounded-full opacity-20 blur-xl animate-pulse"></div>
      </div>
    </section>
  );
};
export default Hero;