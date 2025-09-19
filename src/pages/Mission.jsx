import React from "react";
import {
  CheckCircle,
  Users,
  ShieldCheck,
  Handshake,
  Award,
  Star,
  Lightbulb,
} from "lucide-react";
const values = [
  {
    id: "01",
    icon: <Users className="w-8 h-8 text-red-600" />,
    title: "Customer-Centric",
    desc: "Our #1 priority is to achieve the best outcomes for our clients, always.",
  },
  {
    id: "02",
    icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
    title: "Truthfulness",
    desc: "We stand for honesty, ethics, and openness with our clients in all communications.",
  },
  {
    id: "03",
    icon: <Handshake className="w-8 h-8 text-red-600" />,
    title: "Collaboration",
    desc: "We listen, understand, and co-create solutions with our clients to achieve success.",
  },
  {
    id: "04",
    icon: <Award className="w-8 h-8 text-red-600" />,
    title: "Empowerment",
    desc: "We empower our people with opportunities for education, innovation, and growth.",
  },
  {
    id: "05",
    icon: <Star className="w-8 h-8 text-red-600" />,
    title: "Quality",
    desc: "We deliver reliable services with consistent innovation to exceed client expectations.",
  },
  {
    id: "06",
    icon: <Lightbulb className="w-8 h-8 text-red-600" />,
    title: "Bold",
    desc: "We embrace innovation, take risks, and learn from failures to move faster and smarter.",
  },
];
const ourclients = [
                { src: "/mission/aws.png", alt: "aws" },
                { src: "/mission/cloud.png", alt: "cloud" },
                { src: "/mission/servicenow.png", alt: "servicenow" },
                { src: "/mission/salesforce.png", alt: "salesforce" },
                { src: "/mission/sap.png", alt: "sap" },
              
              ]
const Mission = () => {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
          {/* ========== Our Mission Section ========== */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="text-red-600 font-semibold uppercase text-sm tracking-wide">
                # Our
              </span>
              <h2 className="text-[45px] md:text-4xl font-bold text-gray-900 mt-2">
                Mission
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We believe that by creating an environment where people feel
                respected, engaged, and committed to their work, we are able to
                meet and surpass client expectations by taking complete
                ownership and accountability while maintaining the highest
                standards of ethics, professionalism, and transparency in our
                business.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="/mission/mission.jpg"
                alt="Mission Illustration"
                className="w-3/4 md:w-2/3 lg:w-full object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* ========== Deliver Solutions Section ========== */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="flex justify-center order-1 lg:order-none">
              <img
                src="/mission/deliver.jpg"
                alt="Business Solutions Illustration"
                className="w-3/4 md:w-2/3 lg:w-full object-contain rounded-2xl"
              />
            </div>

            {/* Right Content */}
            <div>
              <span className="text-red-600 font-semibold uppercase text-sm tracking-wide mt-2.5">
                # We
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Deliver Solutions To Enhance Your Business
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our team is passionate about excellence in transforming
                businesses with technology-driven solutions. By offering agile
                solutions and bridging marketing and IT barriers, we provide
                momentum for your business while keeping you informed of the
                latest technology trends. We ensure our clients stay ahead with
                innovative enhancements and tailored solutions.
              </p>

              {/* Services List */}
              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                {[
                  "Staffing",
                  "Development Services",
                  "Application Support",
                  "Data Science",
                  "Digital Marketing",
                  "Implementations",
                  "UI/UX",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="text-red-600 w-5 h-5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* from strategy execution */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="text-red-600 font-semibold uppercase text-sm tracking-wide">
                # FROM STRATEGY TO EXECUTION
              </span>
              <h2 className="text-[45px] md:text-4xl font-bold text-gray-900 mt-2">
                The Perks Of Working With Eagle Eye Tech
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Eagle Eye Tech is a team of specialists in Software development,
                Digital Marketing, Staffing & Implementations. We focus on
                delivering value by making a project successful. From Digital
                Marketing to Website Design to custom Software Development &
                Implementing all stated technology areas, we can help you
                succeed. We engage & deliver the best positive work culture
                value at every step in the process. No matter how varied project
                requirements are, our challenging technology professionals are
                always committed to satisfying client requirements. Each project
                is supervised by a professional, dedicated team that ensures all
                our departments are always engaged and productive.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="/mission/strategy.png"
                alt="Mission Illustration"
                className="w-3/4 md:w-2/3 lg:w-full object-contain rounded-2xl"
              />
            </div>
          </div>
          {/* Innovative way to grow */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                src="/mission/integrate.jpg"
                alt="Mission Illustration"
                className="w-3/4 md:w-2/3 lg:w-full object-contain rounded-2xl"
              />
            </div>
            {/* Right Content */}
            <div>
              <span className="text-red-600 font-semibold uppercase text-sm tracking-wide">
                # INNOVATIVE WAY TO GROW YOUR BUSINESS
              </span>
              <h2 className="text-[45px] md:text-4xl font-bold text-gray-900 mt-2">
                Specialized Professionals, Integrated Solutions
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We are skilled in the most innovative technologies and
                methodologies mapping it to varied industries & businesses
                service sectors, providing tailored solutions meeting client
                needs under stipulated time. Our Software development services
                also undergo a continuous delivery process to ensure they are
                updated with the latest market trends. We are always ready to
                engage our skill sets to execute and produce the best outcomes
                in managing projects, regardless of the service requirement’s
                complexity.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="text-red-600 font-semibold uppercase text-sm tracking-wide">
                # BRINGING SOLUTIONS TO LIFE
              </span>
              <h2 className="text-[45px] md:text-4xl font-bold text-gray-900 mt-2">
                Delivering The Impossible
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Eagle Eye Tech focuses on providing necessary
                Technology-oriented Services & Business solutions to clients,
                which are often connected with scalability, alongside
                progressing towards a success roadmap Our team knows how to
                accomplish tasks in a timely and effective manner. So, we’d be
                scheduling flexible meet-ups to grasp the client’s expectations
                & then we will perform suitable modifications. We connect our
                team to our clients, aiming to contribute the desired value and
                deliver quick results.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="/mission/delivery.png"
                alt="Mission Illustration"
                className="w-3/4 md:w-2/3 lg:w-full object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* our core values section */}
      <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuits.png')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-red-500 font-semibold uppercase text-sm tracking-wider">
              # Our
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Core Values</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              We combine talented minds with learning and innovation to solve
              complex challenges. Our values define who we are and guide us in
              delivering better outcomes for your business.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.id}
                className="relative bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4">{value.icon}</div>

                {/* Title */}
                <h3 className="font-semibold text-lg">{value.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{value.desc}</p>

                {/* Number Watermark */}
                <span className="absolute top-4 right-6 text-5xl font-bold text-gray-200 opacity-50 select-none">
                  {value.id}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* in mission section about us */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 bg-white">
        {/* Left Side */}
        <div className="md:w-1/2">
          <p className="text-orange-600 font-semibold uppercase tracking-wider mb-2">
            # About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-4">
            We Increasing Business <br /> Success With Technology
          </h2>
          <p className="text-gray-600 mb-10 max-w-lg">
            We combine talented minds with learning and innovation to solve most
            complex issues...!
          </p>

          {/* Progress Bars */}
          <div className="space-y-6">
            {[
              { title: "Managed IT Services", percent: "85%" },
              { title: "IT Support & Helpdesk", percent: "92%" },
              { title: "We Have an IT Department", percent: "80%" },
              { title: "Software Development", percent: "99%" },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">
                    {item.title}
                  </span>
                  <span className="font-semibold text-gray-800">
                    {item.percent}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-orange-500 h-2 rounded-full transition-all duration-1000 ease-in-out"
                    style={{ width: item.percent }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side (Images) */}
        <div className="md:w-1/2 relative mt-12 md:mt-0 flex justify-center">
          {/* First Image (Always visible) */}
          <img
            src="/mission/team1.jpg"
            alt="Team working"
            className="w-72 rounded-xl shadow-xl relative z-10 transition-transform duration-700 hover:scale-105"
          />

          {/* Second Image (Hidden on Mobile) */}
          <img
            src="/mission/team2.jpg"
            alt="Team discussion"
            className="hidden md:block w-72 rounded-xl shadow-xl absolute top-24 right-0 transition-transform duration-700 hover:scale-105"
          />
        </div>
      </section>
      {/* our parteners */}
      <section className="flex flex-col items-center px-6 md:px-12 py-16 bg-white">
  {/* Header */}
  <div className="text-center max-w-3xl mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      Our Partners
    </h1>
    <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">
      Empowering Growth Through Strategic Partnerships
    </p>
    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
      At Eagle Eye Tech, we embrace a partnership paradigm centered on
      innovation, precision, and shared success. Our collaborations with SAP
      and Salesforce are testament to our commitment to delivering
      cutting-edge solutions.
    </p>
  </div>

  {/* Logos Marquee */}
  <div className="w-full overflow-hidden relative">
    <div className="flex animate-marquee whitespace-nowrap">
      {ourclients.map((client, idx) => (
        <div
          key={idx}
          className="mx-8 inline-flex items-center justify-center bg-gray-50 rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-all duration-300"
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
          className="mx-8 inline-flex items-center justify-center bg-gray-50 rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <img
            src={client.src}
            alt={client.alt}
            className="max-h-25 max-w-[150px] object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
};

export default Mission;
