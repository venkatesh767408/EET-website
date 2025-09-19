import React from "react";

const ImplementationServices = () => {
   const getStepIcon = (index) => {
  const icons = [
    'fa-clipboard-list',
    'fa-brain',
    'fa-cogs',
    'fa-rocket',
    'fa-chart-line',
    'fa-handshake'
  ];
  return icons[index] || 'fa-check-circle';
};
  const benefits = [
    "Assessment Services",
    "Design Services",
    "Upgrade Services",
    "Migration Services",
    "Professional Services",
    "Applications, Database, and Middleware Services",
    "Infrastructure & Cloud",
    "Hybrid Cloud Platforms",
  ];

  const steps = [
  {
    title: 'Requirement Analysis',
    description: 'We begin by thoroughly understanding your business needs and objectives.'
  },
  {
    title: 'Solution Design',
    description: 'Our experts create a tailored solution architecture for your specific requirements.'
  },
  {
    title: 'Development & Configuration',
    description: 'We build and customize the solution according to the approved design specifications.'
  },
  {
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing ensures everything works perfectly before deployment.'
  },
  {
    title: 'Deployment & Integration',
    description: 'Seamless implementation with your existing systems and processes.'
  },
  {
    title: 'Training & Support',
    description: 'Comprehensive training and ongoing support to ensure long-term success.'
  }
];

  const services = [
    {
      title: "Data Migration",
      desc: "We migrate historical data from legacy systems and archives into our ERP. Our professionals ensure seamless data transfer without spreadsheets or manual work.",
      img: "/implementation_services/services_1.jpeg",
    },
    {
      title: "Employee Training",
      desc: "We provide training for employees, both in-house and remote. Our experts ensure staff adapt quickly to new systems with ongoing training sessions.",
      img: "/implementation_services/services_2.jpg",
    },
    {
      title: "Customization",
      desc: "We offer customized solutions and help clients implement tailored practices that meet their unique business requirements.",
      img: "/implementation_services/services_3.jpg",
    },
    {
      title: "Installation & Configuration",
      desc: "Our experts install and configure cloud-based services tailored to client requirements, ensuring scalability, security, and smooth deployment.",
      img: "/implementation_services/services_4.jpg",
    },
  ];
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
            Implementation Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Eagle Eye Tech delivers end-to-end implementation services that
            ensure your software solutions work seamlessly, scale effectively,
            and deliver real results.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
              Why Choose Eagle Eye Tech?
            </h2>
            <p className="mb-6 leading-relaxed text-lg">
              Implementation services rely on a disciplined, all-inclusive
              strategy from design to testing to yield the best results. Our
              unique combination of application, infrastructure, and data
              expertise ensures smooth deployments that accelerate business
              growth.
            </p>
            <ul className="space-y-4">
              {[
                "Best-in-class expertise",
                "Advanced Tools",
                "Proven Methodology",
                "Co-delivery Model",
                "Out-of-the-box Approach",
                "Best Practices for Scalability & Security",
              ].map((point, index) => (
                <li
                  key={index}
                  className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition"
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
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 
                        1 0 01-1.414 0l-4-4a1 1 0 
                        011.414-1.414L8 12.586l7.293-7.293a1 
                        1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-3"></div>
              <img
                src="/implementation_services/implementation_1.png"
                alt="Implementation Services"
                className="relative w-auto max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
            Benefits of Our Implementation Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Unlock the full potential of your business with solutions tailored
            to meet modern challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start p-4 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-orange-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 
                    010 1.414l-8 8a1 1 0 
                    01-1.414 0l-4-4a1 1 0 
                    011.414-1.414L8 
                    12.586l7.293-7.293a1 
                    1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-lg">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Steps Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6 relative inline-block">
            Our Implementation Process
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our disciplined, step-by-step approach ensures smooth and efficient
            deployments with measurable results.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  {idx + 1}
                </div>

                {/* Step Card */}
                <div className="bg-white p-8 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 h-full border-t-4 border-orange-500 transform group-hover:-translate-y-2">
                  <div className="mb-6 text-orange-500 text-3xl">
                    <i className={`fas ${getStepIcon(idx)}`}></i>
                  </div>
                  <h3 className="font-bold text-blue-800 text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Connector line for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-1 bg-orange-400 group-hover:bg-orange-500 transition-colors duration-300">
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-600 mb-6">
            Services We Offer
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From migration to customization, we ensure every step of your
            implementation journey is covered.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src={srv.img}
                  alt={srv.title}
                  className="w-full md:w-48 h-40 object-cover rounded-lg shadow"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-gray-700">{srv.desc}</p>
                </div>
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
    </div>
  );
};

export default ImplementationServices;
