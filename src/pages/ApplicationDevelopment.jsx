import React from "react";

const ApplicationDevelopment = () => {
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
            Application Development
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Eagle Eye Tech empowers businesses with scalable, efficient, and
            high-performance applications backed by ongoing support and
            optimization.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>
      <div className="bg-gray-50">
        <section className="w-full bg-white py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-3"></div>
                <img
                  src="/software_development/software_development.jpg"
                  alt="Application Integration Illustration"
                  className="relative w-auto max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full md:w-1/2 text-gray-800">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
                APPLICATION DEVELOPMENT
              </h2>
              <p className="mb-6 leading-relaxed text-lg">
                Eagle Eye Tech professionals programming experts perform various
                tasks. Tasks such as collecting specifications, developing
                prototypes, testing, implementation & integration are all
                necessary steps for developing web & mobile applications. Our
                experts can design custom apps, platforms, and solutions to
                match the needs of your company or new venture.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full bg-white py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* leftt Side - Content */}
            <div className="w-full md:w-1/2 text-gray-800">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
                One-Stop Web & Mobile App Design & Development
              </h2>
              <p className="mb-6 leading-relaxed text-lg">
                We always dedicate time and resources to developing new products
                to provide the most modern software solutions that make a
                difference in the success of your organization. We use a unique
                approach to design and construct scalable business web
                applications, assuring project completion on time. Custom mobile
                app development follows the same standard-based concepts as
                other Eagle Eye Tech development solutions. We are committed to
                different techniques and also have expertise in this specific
                field. Similar Projects initiation from simple UI/UX makeover to
                full-stack app development services, we take over the
                development through a few below stages.
              </p>
            </div>
            {/* rightSide - Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-3"></div>
                <img
                  src="/software_development/app_development.jpg"
                  alt="Application Integration Illustration"
                  className="relative w-auto max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
                Application & Web Development Solutions & Services
              </h1>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Eagle Eye Tech is a technology innovator with the ability to
                develop unique web development solutions that address complex
                business challenges in the day-to-day world. We use innovative
                tools and work closely with your team throughout the process to
                deliver accurate, timely, and productive results.
              </p>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 pb-3 border-b-2 border-orange-500">
                  Custom Web & Mobile App Development
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We deliver dynamic, responsive, and well-integrated custom
                  applications to build better visibility over the web
                  platforms. Our expertise majorly takeover the services listed
                  below.
                </p>

                {/* Services List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Customer & organization research",
                    "Design wireframing & prototyping",
                    "Architecture Planning",
                    "Backend Coding & Frontend",
                    "Optimization",
                    "Maintenance",
                    "DevOps",
                  ].map((service, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-600"
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
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile App Section */}
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    Mobile Application Development
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Eagle Eye Tech mobile application developers can design and
                    deliver high-quality applications that work on all mobile
                    devices. We develop mobile applications for end-users.
                  </p>

                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "Architecture planning",
                      "Business analysis",
                      "UI/UX design and prototyping",
                      "Development",
                      "Testing and QA",
                      "Publication",
                      "Further Tech support",
                    ].map((service, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-orange-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Responsive Development Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-blue-800">
                        Responsive Mobile & Web Development
                      </h2>
                      <p className="text-gray-700 mt-2 mb-5">
                        We design and develop highly responsive web and
                        mobile-first web applications with emerging technologies
                        and platforms.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-200 rounded-xl h-48 mt-6 flex items-center justify-center">
                    <img
                      src="/software_development/responsive_design.jpg"
                      alt="Responsive Design"
                      className="max-h-full max-w-full object-contain rounded-xl"
                    />
                  </div>
                </div>

                {/* E-Commerce Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-blue-800">
                        E-Commerce & CMS Specialized
                      </h2>
                      <p className="text-gray-700 mt-2 mb-5">
                        Our team can build you an easy-to-use CMS or eCommerce
                        platform that will help your business.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-200 rounded-xl h-48 mt-6 flex items-center justify-center">
                    <img
                      src="/software_development/ecommerce.jpg"
                      alt="Responsive Design"
                      className="max-h-full max-w-full object-contain rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="w-full bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
                Eagle Eye Tech Strategic Planning Analysis
              </h1>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                By gathering business requirements, performing in-depth business
                analysis, and planning web development efficiently, we deliver
                the scope of the application, identify features, architecture
                patterns, and initial documentation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Mobile & Web App Development Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-800">
                    Mobile & Web App Development
                  </h2>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We prefer to develop the design as fast as possible, without
                  spending too much money. The first step is to design an MP
                  (minimum variable product), which allows us to test whether or
                  not we want the product.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  After that, we develop the final version for all platforms. We
                  develop your app using the relevant tools. Our UIUX designers
                  create basic wireframes, mock-ups, low- and high-fidelity
                  prototypes, showing the application structure, graphics,
                  interactive elements, other visuals, & more.
                </p>

                {/* Placeholder for image */}
                <div className="bg-gray-200 rounded-xl h-48 mt-6 flex items-center justify-center">
                  <span className="text-gray-500">
                    <img
                      src="/software_development/android_development.jpg"
                      alt="App Development"
                      className="h-full"
                    />
                  </span>
                </div>
              </div>

              {/* Mobile & Web Application Testing Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-orange-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-800">
                    Mobile & Web Application Testing
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Eagle Eye Tech can assist you with end-to-end web app testing
                  to ensure your application meets all your requirements during
                  the entire development process.
                </p>

                {/* Placeholder for image */}
                <div className="bg-gray-200 rounded-xl h-48 mt-6 flex items-center justify-center">
                  <span className="text-gray-500">
                    <img
                      src="/software_development/testing.jpg"
                      alt="Testing"
                      className="h-full"
                    />
                  </span>
                </div>
              </div>

              {/* Mobile & Web Application Maintenance Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-800">
                    Mobile & Web Application Maintenance
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  For Eagle Eye Tech experts, we see about creating a reliable
                  product. That is why we will recommend creating a mobile
                  application that benefits your business and that you can
                  monitor and control.
                </p>

                {/* Placeholder for image */}
                <div className="bg-gray-200 rounded-xl h-48 mt-6 flex items-center justify-center">
                  <span className="text-gray-500">
                    <img
                      src="/software_development/maintenance.jpg"
                      alt="Maintenance"
                      className="h-full"
                    />
                  </span>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-600">
                Benefits From Our Web & App Development Services
              </h2>
              <p className="leading-relaxed">
                If you need professional web & mobile app development services,
                it’s better to analyze all pros & cons. Compared to other
                cooperation Eagle Eye Tech custom client-focused approach has a
                few advantages.
              </p>

              <ul className="space-y-4">
                {[
                  "Better engagement through fast & responsive solutions",
                  "Custom monitoring with transparent project control",
                  "Fully tailored solutions by complete understanding",
                  "New revenue opportunities",
                  "Reduced Development costs",
                ].map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
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
    </>
  );
};

export default ApplicationDevelopment;
