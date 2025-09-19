import React from "react";

const ResponsiveWebDesign = () => {
  const ourclients = [
    { src: "/ourclients/cisco.png", alt: "Cisco" },
    { src: "/ourclients/verizon.png", alt: "Verizon" },
    { src: "/ourclients/fargo.png", alt: "Wells Fargo" },
    { src: "/ourclients/fedility.png", alt: "Fidelity" },
    { src: "/ourclients/hcl.png", alt: "HCL" },
    { src: "/ourclients/infosys.png", alt: "Infosys" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Responsive Web Design
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Ensure your website adapts beautifully to every screen size with our
            expert responsive design solutions.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-3"></div>
              <img
                src="/responsive_web_design/responsive_web_design_1.jpg"
                alt="Responsive Website Illustration"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
              Why Responsive Design Matters
            </h2>
            <p className="mb-6 leading-relaxed text-lg">
              People are shifting from desktops to mobile devices. A
              non-responsive website risks losing a large portion of your
              audience. Responsive design ensures your website delivers a smooth
              and consistent user experience across all devices.
            </p>
            <p className="leading-relaxed text-lg">
              At Eagle Eye Tech, we create mobile-ready, responsive websites
              that adapt instantly to different screen sizes, ensuring fast
              loading, readability, and seamless navigation.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="w-full bg-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-100 rounded-2xl -rotate-3"></div>
              <img
                src="/responsive_web_design/responsive_web_design_2.jpg"
                alt="Strategy for Responsive Design"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>

          {/* Left Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
              Our Strategy for Responsive Websites
            </h2>
            <ul className="space-y-4">
              {[
                "CMS-powered websites for easy management",
                "SEO-ready structures for future growth",
                "Client-centric design tailored to your audience",
                "Consistent design across PCs, tablets & mobiles",
              ].map((point, index) => (
                <li
                  key={index}
                  className="flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-3"></div>
              <img
                src="/responsive_web_design/responsive_web_design_3.jpg"
                alt="Benefits of Responsive Web Design"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-600">
              Benefits of Responsive Web Design
            </h2>
            <ul className="space-y-4">
              {[
                "Boosts Google search engine rankings",
                "Single site for desktop & mobile (less costly)",
                "Improves speed and user experience",
                "Reduces bounce rates & increases conversions",
                "Consistent branding across all devices",
              ].map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                >
                  <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-orange-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-orange-600">
            Our Responsive Design Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Logo Design",
                desc: "Custom-designed logos optimized for responsive websites.",
              },
              {
                title: "Website Redesign",
                desc: "Keep your site modern and mobile-friendly with regular redesigns.",
              },
              {
                title: "Mobile Website Design",
                desc: "Ensure smooth browsing experiences for smartphone-first users.",
              },
              {
                title: "SaaS Model Design",
                desc: "Responsive SaaS solutions with unit testing & scalability.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-orange-600">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-lg">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
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
                  className="mx-10 inline-flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-all duration-300"
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
                  className="mx-10 inline-flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-all duration-300"
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

export default ResponsiveWebDesign;
