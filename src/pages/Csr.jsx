import React from "react";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 const programs = [
  {
    title: "Digital-Literacy",
    description:
      "We will provide access to technology and education to less privileged communities to help bridge the digital divide.",
    image: "/csr/digital.png",
  },
  {
    title: "Environmental Sustainability",
    description:
      "We will use technology to build and support resource-efficient and eco-conscious solutions that focus on eliminating negative environmental impacts and reducing carbon emissions.",
    image: "/csr/environment.png",
  },
  {
    title: "Innovation & Entrepreneurship",
    description:
      "We will organize programs to foster innovation and entrepreneurship among young people, providing mentoring, resources, networking opportunities, and STEM training.",
    image: "/csr/Innovation.png",
  },
  {
    title: "Social Impact",
    description:
      "We will use technology to address social issues such as poverty and inequality, partnering with non-profits and other organizations to positively impact 100 million lives by 2030.",
    image: "/csr/social.png",
  },
];
const ourclients = [
                { src: "/ourclients/cisco.png", alt: "Cisco" },
                { src: "/ourclients/verizon.png", alt: "Verizon" },
                { src: "/ourclients/fargo.png", alt: "Wells Fargo" },
                { src: "/ourclients/fedility.png", alt: "Fidelity" },
                { src: "/ourclients/hcl.png", alt: "HCL" },
                { src: "/ourclients/infosys.png", alt: "Infosys" },
              ]
const CSR = () => {
   
const cardsRef = useRef([]);

  useEffect(() => {
  gsap.fromTo(
    cardsRef.current,
    {
      opacity: 0,
      scale: 0.95,
      y: 30,
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: "easeOut",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 85%",
      },
    }
  );
}, []);

  return (
    <>
    <section className="bg-white">
      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10">
        {/* Left Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/csr/mission.png"
            alt="CSR Mission"
            className="w-80 md:w-[420px] object-contain"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Corporate Social Responsibility (CSR) is integral to our business
            practices, and at Eagle Eye Tech, we firmly believe that being
            socially responsible and embracing Environmental, Social, and
            Governance (ESG) practices are essential components of a successful
            business strategy.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our CSR initiatives include investing in community development
            programs, promoting digital literacy and education, and reducing our
            carbon footprint by implementing green practices.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Through the power of emerging technologies, we aim to proactively
            drive positive change, enhance social equity, and contribute to a
            sustainable future for all.
          </p>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="bg-gray-50">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10">
          {/* Left Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Objectives
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 font-bold">
                  ✓
                </span>
                <p className="text-gray-700">
                  Promote diversity and inclusivity by using inclusive language
                  throughout our communication, interactions, and code/solution
                  delivery.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 font-bold">
                  ✓
                </span>
                <p className="text-gray-700">
                  Develop code that is accessible to all users, regardless of
                  ability.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 font-bold">
                  ✓
                </span>
                <p className="text-gray-700">
                  Prioritize environmental sustainability in our operations by
                  choosing energy-efficient technology solutions and hardware,
                  implementing sustainable procurement practices, and working
                  towards becoming carbon neutral by 2030.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 font-bold">
                  ✓
                </span>
                <p className="text-gray-700">
                  Encourage and endorse social impact initiatives that address
                  critical societal challenges.
                </p>
              </li>
            </ul>
          </div>

          {/* Right Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/csr/objective.jpg"
              alt="CSR Objectives"
              className="w-80 md:w-[420px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
    {/* programs section */}
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Our Programs
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((program, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {program.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="relative py-16 bg-white">
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Our Clients
          </h2>

          <div className="overflow-hidden relative">
            <div className="flex animate-marquee whitespace-nowrap">
              {ourclients.map((client, idx) => (
                <div
                  key={idx}
                  className="mx-10 inline-flex items-center justify-center  bg-white-50  shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="max-h-16 max-w-[120px] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}

              {/* Duplicate for infinite loop */}
              {ourclients.map((client, idx) => (
                <div
                  key={`dup-${idx}`}
                  className="mx-10 inline-flex items-center justify-center  bg-white-50  shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="max-h-16 max-w-[120px] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CSR;
