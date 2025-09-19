import React from "react";

const ApplicationIntegration = () => {
  const ourclients = [
    { src: "/ourclients/cisco.png", alt: "Cisco" },
    { src: "/ourclients/verizon.png", alt: "Verizon" },
    { src: "/ourclients/fargo.png", alt: "Wells Fargo" },
    { src: "/ourclients/fedility.png", alt: "Fidelity" },
    { src: "/ourclients/hcl.png", alt: "HCL" },
    { src: "/ourclients/infosys.png", alt: "Infosys" },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Application Integration Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Streamline your business processes with our expert application integration solutions
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-3"></div>
              <img
                src="application-integration/application.jpg"
                alt="Application Integration Illustration"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">
              APPLICATION INTEGRATION
            </h2>
            <p className="mb-6 leading-relaxed text-lg">
              Eagle Eye Tech enables data sharing across different enterprise
              applications while reducing data redundancy. We process merging &
              optimizing the data and workflows between two disparate software
              applications with efficient processes at a low cost.
            </p>
            <p className="mb-6 leading-relaxed text-lg">
              Integrating applications automate your business processes, which
              allows them to focus on adding value to other parts of your
              business. Our core process automation includes ordering and
              fulfillment, invoicing, collections, expenses, approvals, and
              more.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-blue-700">
              Concepts On Application Integration
            </h3>
            <p className="leading-relaxed text-lg">
              Our applications communicate with clients by exchanging data &
              invoking services that we offer. Application Integration is one of
              the Digital Transformation strategies where your business can
              operate in new & innovative ways.
            </p>
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="w-full bg-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-100 rounded-2xl -rotate-3"></div>
              <img
                src="application-integration/api.jpg"
                alt="API Illustration"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>

          {/* Left Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">
              API - Application Programming Interface
            </h2>
            <p className="mb-6 leading-relaxed text-lg">
              APIs allow different software components to interact, enabling
              developers to easily and quickly gain access to the functionality
              of other systems.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">
                Actions & Events
              </h3>
              <p className="leading-relaxed">
                When users interact with a product or service, it generates an
                event that triggers an action in other systems. These actions are
                standardized and can include creating, retrieving, or updating
                information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">
                Data Mapping
              </h3>
              <p className="leading-relaxed">
                Information is exchanged between applications by linking fields
                from one application to another, ensuring smooth data flow.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">
                Choosing Eagle Eye Tech!
              </h3>
              <p className="leading-relaxed">
                Our approach to business process automation offers organizations
                affordable cost planning while avoiding changes to existing IT
                systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">
                Key Features of Eagle Eye Tech
              </h3>
              <ul className="space-y-3">
                {[
                  "Scalable",
                  "Complete transparency",
                  "Secure",
                  "Reliable",
                  "Superior Quality",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-orange-100 p-1 rounded-full mr-3">
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
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-3"></div>
              <img
                src="application-integration/Application-Integration.jpg"
                alt="Benefits of Application Integration Illustration"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-800">
              Benefits Of Application Integration
            </h2>

            <ul className="space-y-4">
              {[
                "Reduce system architecture complexity",
                "Improve organization agility",
                "Efficient process management for effective optimization",
                "Optimize use of current infrastructure",
                "Reduce operational costs by utilizing tailor-made automated processes",
                "Scalable & reliable infrastructure",
                "A well-integrated ecosystem of technologies & application integration solutions enhances business operations which enable for shorter time-to-market.",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
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
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-100 rounded-2xl -rotate-3"></div>
              <img
                src="/application-integration/software_integration.jpg"
                alt="Integration Consulting Illustration"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>

          {/* Left Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">
              Services We Offer
            </h2>
            
            <div className="mb-8 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">
                Integration Consulting
              </h3>
              <p className="leading-relaxed text-lg">
                Our team of experts analyze existing IT infrastructure, its needs,
                and constraints. Then Eagle Eye Tech understands which integration
                model is suitable for your organization. By applying the chosen
                integration model, your organization will have an efficient
                integration architecture and secured infrastructure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">
                Full Cycle Integration Implementation
              </h3>
              <p className="leading-relaxed text-lg">
                Eagle Eye Tech offers specialists who enable integration
                implementation and planning IT needs. We also provide system
                integration, re-engineering, re-architecting, and implement
                integration solutions at various component levels. We continually
                oversee the growth of an integrated ecosystem once we implement
                the setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
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

    </div>
  );
};

export default ApplicationIntegration;