import React from "react";
import { useState, useRef, useEffect } from "react";
import { FiBox, FiEye, FiBarChart2, FiTarget } from "react-icons/fi";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Homemain = () => {
  const workCards = [
    {
      title: "Application Support",
      items: [
        "Implementation Services",
        "Post Implementation Support",
        "Trouble Shooting Support",
        "Technical Support",
      ],
      image: "/ourwork/Application_support.jpg",
    },
    {
      title: "Digital Marketing",
      items: [
        "Search Engine Marketing (SEM)",
        "Social Media Marketing (SMM)",
        "Social Engine Marketing (SEO)",
        "Online Reputation",
        "Strategy & Consulting",
      ],
      image: "/ourwork/Digital_marketing.jpg",
    },
    {
      title: "Data Science",
      items: ["Ai Chat Bot", "Technologies", "Competencies"],
      image: "/ourwork/Data_science.jpg",
    },
    {
      title: "Software Testing",
      items: ["Mobile App Testing", "Manual", "Automation"],
      image: "/ourwork/Software_testing.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const nextCard = () => {
    if (currentIndex < workCards.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Update scroll position on index change
  useEffect(() => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.firstChild.offsetWidth + 24; // card width + gap
      containerRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  // testmonials js code
  const testimonials = [
    {
      name: "Sophia Williams",
      role: "CEO, TechNova",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      feedback:
        "Working with Eagle Eye Tech has transformed our digital presence. Their team is professional, creative, and delivers results beyond expectations!",
    },
    {
      name: "Liam Johnson",
      role: "Product Manager, Innovex",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      feedback:
        "The team’s expertise in UI/UX and software solutions helped us launch our app faster and with higher quality. Highly recommended!",
    },
    {
      name: "Emma Brown",
      role: "CTO, CloudCore",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      feedback:
        "Eagle Eye Tech’s innovative approach and attention to detail are unmatched. Our project exceeded all expectations!",
    },
    {
      name: "Noah Davis",
      role: "Senior Developer, NextGen Apps",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      feedback:
        "Exceptional team, clear communication, and outstanding technical skills. We are extremely satisfied with their work!",
    },
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonialRef = useRef(null);
  const [visible, setVisible] = useState(() => {
    if (window.innerWidth >= 768) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  });

  useEffect(() => {
    const handleResize = () => {
      setVisible(() => {
        if (window.innerWidth >= 768) return 3;
        if (window.innerWidth >= 640) return 2;
        return 1;
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (testimonials.length <= visible) return;
    setTestimonialIndex((prev) =>
      prev < testimonials.length - visible ? prev + 1 : 0
    );
  };

  const handlePrev = () => {
    if (testimonials.length <= visible) return;
    setTestimonialIndex((prev) =>
      prev > 0 ? prev - 1 : testimonials.length - visible
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [visible, testimonials]);

  useEffect(() => {
    if (testimonialRef.current && testimonialRef.current.firstChild) {
      const cardWidth = testimonialRef.current.firstChild.offsetWidth + 32;
      testimonialRef.current.scrollTo({
        left: testimonialIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [testimonialIndex]);

  // our clients js code
  const ourclients = [
                { src: "/ourclients/cisco.png", alt: "Cisco" },
                { src: "/ourclients/verizon.png", alt: "Verizon" },
                { src: "/ourclients/fargo.png", alt: "Wells Fargo" },
                { src: "/ourclients/fedility.png", alt: "Fidelity" },
                { src: "/ourclients/hcl.png", alt: "HCL" },
                { src: "/ourclients/infosys.png", alt: "Infosys" },
              ]

  return (
    <>
      <section className="relative bg-white py-12 px-6 md:px-16 lg:px-24">
        {/* Top Services Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <div className="flex items-center space-x-4">
              <img
                src="/DataSecurity.png"
                alt="Data Security"
                className="w-10 h-10"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Data Security
              </h3>
            </div>
            <p className="mt-3 text-gray-600 text-sm">
              Data security, privacy, encryption, cyber threats, sensitive
              information, protection measures.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <div className="flex items-center space-x-4">
              <img
                src="/Business.png"
                alt="Business Security"
                className="w-10 h-10"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Business Security
              </h3>
            </div>
            <p className="mt-3 text-gray-600 text-sm">
              A critical aspect that every organization must prioritize in
              today’s digital landscape.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <div className="flex items-center space-x-4">
              <img
                src="/Management.png"
                alt="Managed IT Services"
                className="w-10 h-10"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Managed IT Services
              </h3>
            </div>
            <p className="mt-3 text-gray-600 text-sm">
              IT infrastructure, support, technology solutions, management,
              efficiency, cost-effectiveness.
            </p>
          </div>
        </div>

        {/* About Us Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Illustration */}
          <div className="flex justify-center">
            <img
              src="/Creative.jpg"
              alt="Creative Team"
              className="w-full max-w-md"
            />
          </div>
          {/* Right Content */}
          <div>
            <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
              Who We Are!
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-snug">
              We Are Dreamers & Innovators <br /> With A Creative Bent
            </h2>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              Eagle Eye Tech objective is to serve clients with fast, best,
              unique, and high-quality services. Our innovators boost client’s
              brands and help them become instantly recognizable by implementing
              invariable technology solutions in every industry.
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md shadow-md transition cursor-pointer">
              Read More
            </button>
          </div>
        </div>
      </section>
      {/* What We Do Section */}
      <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-snug">
              Design Develop Deliver
            </h2>
            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              To resolve client’s business needs, we architect and create
              scalable yet high-performing services.
            </p>

            <div className="mt-8 space-y-6">
              {/* Item 1 */}
              <div className="flex items-start space-x-4">
                <span className="text-orange-500 text-2xl">
                  <FiTarget />
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Shape Your Solution
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    With the trending & evolving demands of clients – we tailor
                    the solutions that meet their needs. We personalize
                    solutions to the changing and challenging requirements of
                    clients.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start space-x-4">
                <span className="text-orange-500 text-2xl">
                  <FiEye />
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Create Your Vision
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    We are committed to providing a complete real experience
                    because we understand it is the key to determining our
                    ultimate objective of being an internationally known
                    corporation by offering higher quality services & solutions.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start space-x-4">
                <span className="text-orange-500 text-2xl">
                  <FiBarChart2 />
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Enhance Your Company’s Growth
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    With the assistance of our professional team, we can ensure
                    that your digital transformation gets momentum. We cherish
                    each client and offer quick support by constantly monitoring
                    the technical solutions we provide to them.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start space-x-4">
                <span className="text-orange-500 text-2xl">
                  <FiBox />
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Focus On Providing Services & Solutions
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    We measure our precision to ensure client satisfaction, and
                    we’re a professional IT solutions company that provides
                    customer-centric, results-oriented, cost-effective, and
                    innovative IT solutions globally.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
            <img
              src="/Idea.png"
              alt="Idea Box Illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>
      {/* Our Services Section */}
      <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-snug">
            We Are Just Getting Started
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Explore our services, which we will aid along with our qualified
            professionals.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service Card 1: Staffing */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src="/ourservices/Staffing.jpg" // Replace with actual image path
              alt="Staffing"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Staffing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Eagle Eye Tech has been connecting fresh talent with companies
                from around the world.
              </p>
              <a
                href="#"
                className="inline-block text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Service Card 2: Development Services */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src="/ourservices/Software_development.jpg" // Replace with actual image path
              alt="Development Services"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Development Services
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Eagle Eye Tech has provided technical solutions for a decade.
              </p>
              <a
                href="#"
                className="inline-block text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Service Card 3: Digital Marketing */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src="/ourservices/Digital_marketing.png" // Replace with actual image path
              alt="Digital Marketing"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Digital Marketing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Going beyond boundaries, our strategies leverage the ROI of a
                business.
              </p>
              <a
                href="#"
                className="inline-block text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
            ABOUT US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-snug">
            Why Partner With Us?
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Eagle Eye Tech is a vibrant digital transformation firm with a
            strong ability to access a wide range of enhanced technologies. We
            believe in long-time patronage that benefits both organizations, so
            we believe in win-win situations.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Card 1: Scalability But Also Flexibility */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src="/aboutus/Scalability.png" // Replace with actual image path
              alt="Scalability But Also Flexibility"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Scalability But Also Flexibility
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We deploy qualified teams with far more aggregate experience
                than our competitors.
              </p>
            </div>
          </div>

          {/* About Card 2: Depth Of Expertise */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src="/aboutus/Depth_of.png" // Replace with actual image path
              alt="Depth Of Expertise"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Depth Of Expertise
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Many of our professionals come from various platforms, we have
                great expertise and the great subject knowledge required to
                offer you the best solution possible.
              </p>
            </div>
          </div>

          {/* About Card 3: Consultation & Services */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src="/aboutus/Consultation.png" // Replace with actual image path
              alt="Consultation & Services"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Consultation & Services
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Identifying the root cause, we prefer to dig more by doing
                recommended pre-research to address the challenges & the
                services will be tailored to enrich the solution offered.
              </p>
            </div>
          </div>

          {/* About Card 4: We Succeed Because You Succeed */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src="/aboutus/Succeed.png" // Replace with actual image path
              alt="We Succeed Because You Succeed"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                We Succeed Because You Succeed
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We go to any extent to ensure our client's success. We are
                always optimistic about connecting with you.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Eagle Eye Tech Only!
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Our team evaluate niche technology domains and your business
            challenges, yielding better & smarter digital transformation
            solutions while ensuring success in today's digital environment.
          </p>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {/* Card 01 */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <img
                  src="/whychooseus/Detail.jpg"
                  alt="Detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-orange-500 font-semibold mt-4">01</p>
              <h3 className="font-semibold text-lg text-gray-800 mt-2">
                Detail
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Our motive is to get precise information from clients before
                moving forward.
              </p>
            </div>

            {/* Card 02 */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <img
                  src="/whychooseus/Design.jpg"
                  alt="Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-orange-500 font-semibold mt-4">02</p>
              <h3 className="font-semibold text-lg text-gray-800 mt-2">
                Design
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Eagle Eye Tech possesses with best expert planning according to
                the client's requirements.
              </p>
            </div>

            {/* Card 03 */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <img
                  src="/whychooseus/Develop.jpg"
                  alt="Develop"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-orange-500 font-semibold mt-4">03</p>
              <h3 className="font-semibold text-lg text-gray-800 mt-2">
                Develop
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                We at Eagle Eye tech, ready to grow and be the route cause to
                elaborate in Digital Advancement.
              </p>
            </div>

            {/* Card 04 */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <img
                  src="/whychooseus/Deliver.png"
                  alt="Deliver"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-orange-500 font-semibold mt-4">04</p>
              <h3 className="font-semibold text-lg text-gray-800 mt-2">
                Deliver
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Our organization strives to succeed because we value client
                relations period.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Work Section with Carousel Functionality */}
      <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Eagle Eye Tech is a vibrant digital transformation firm with a
            strong goal of transforming every business. We are led by
            highly-skilled, experienced, and dynamic result-oriented
            individuals. Our end-to-end solutions for all of your digital
            requirement will help you gain momentum for your business.
          </p>

          {/* Carousel */}
          <div className="mt-12 relative">
            <div
              ref={containerRef}
              className="flex gap-6 overflow-hidden scroll-smooth"
            >
              {workCards.map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/3 bg-white border border-gray-200 rounded-lg shadow-lg p-6 text-center"
                >
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <ul className="text-gray-600 text-sm text-left list-disc pl-5 mb-4">
                    {card.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="text-orange-500 font-semibold text-sm hover:underline"
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={prevCard}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-white border border-gray-300 p-3 rounded-full shadow hover:bg-orange-500 hover:text-white transition z-10"
              disabled={currentIndex === 0}
            >
              <MdArrowBackIos size={20} />
            </button>
            <button
              onClick={nextCard}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 bg-white border border-gray-300 p-3 rounded-full shadow hover:bg-orange-500 hover:text-white transition z-10"
              disabled={currentIndex >= workCards.length - 3}
            >
              <MdArrowForwardIos size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16  hide-scrollbar-scrollable">
        <div className="max-w-7xl mx-auto px-5 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            What Our Clients Say
          </h2>

          <div className="overflow-hidden relative">
            <div
              ref={testimonialRef}
              className="flex gap-8 transition-transform duration-500 overflow-hide snap-x snap-mandatory"
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 bg-white p-6 rounded-2xl shadow-lg text-center"
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-indigo-500 object-cover"
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/80")
                    }
                  />
                  <p className="text-gray-700 leading-relaxed mb-4 italic">
                    "{t.feedback}"
                  </p>
                  <span className="inline-block h-1 w-10 rounded-full bg-indigo-500 mb-3"></span>
                  <h3 className="text-gray-900 font-semibold">{t.name}</h3>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              ))}
            </div>

            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-white border border-gray-300 p-3 rounded-full shadow hover:bg-orange-500 hover:text-white transition z-10"
              disabled={testimonials.length <= visible}
            >
              <MdArrowBackIos size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 bg-white border border-gray-300 p-3 rounded-full shadow hover:bg-orange-500 hover:text-white transition z-10"
              disabled={testimonials.length <= visible}
            >
              <MdArrowForwardIos size={20} />
            </button>
          </div>
        </div>
      </section>
      {/*our clients*/}
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

export default Homemain;
