import React from "react";

const TroubleShooting = () => {
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
  const steps = [
  {
    title: "Define the Problem",
    description:
      "Identify and clearly articulate the issue to ensure accurate troubleshooting from the start.",
  },
  {
    title: "Disaggregate",
    description:
      "Break down the problem into smaller, manageable components to analyze effectively.",
  },
  {
    title: "Prioritize",
    description:
      "Focus on the most critical issues first to minimize impact and downtime.",
  },
  {
    title: "Workplan",
    description:
      "Create a structured approach with clear steps and responsibilities to address the issue.",
  },
  {
    title: "Communicate",
    description:
      "Maintain transparent communication with stakeholders throughout the troubleshooting process.",
  },
  {
    title: "Synthesize",
    description:
      "Combine findings from different analyses to form a complete picture of the problem.",
  },
  {
    title: "Analyze",
    description:
      "Examine data, logs, and system behavior to identify root causes and potential solutions.",
  },
  {
    title: "Workplan Execution",
    description:
      "Implement the planned actions, monitor progress, and adjust if needed for effective resolution.",
  },
];
const services = [
  {
    title: "Scalable Solutions",
    desc: "We offer consistent, scalable, and cost-effective troubleshooting services to both large and small organizations. Our flexible services cover both on-site and remote staff support. We assure you that our team resolves the majority of problems within an hour.",
    img: "/trouble_shoot/scalability.png",
  },
  {
    title: "Advanced Tools",
    desc: "We have advanced tools that effectively diagnose and troubleshoot issues at the root. From monitoring systems to personal computers, mobile devices, and network infrastructure, our experts can solve even the most complex technical challenges.",
    img: "/trouble_shoot/advance_tools.jpg",
  },
  {
    title: "24/7 Multi-Tier Support",
    desc: "Our dedicated support team is available around the clock with multi-tiered assistance. Whether through helpdesk, on-site visits, or remote sessions, we provide quick resolutions with minimal downtime.",
    img: "/trouble_shoot/full_support.png",
  },
  {
    title: "Proactive Monitoring & Maintenance",
    desc: "We don’t just solve problems—we prevent them. Our proactive monitoring and maintenance services identify potential risks before they cause disruptions, ensuring smooth and reliable operations.",
    img: "/trouble_shoot/active_monitoring.jpg",
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
    <div className="bg-white-50">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Troubleshooting Support
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Resolve issues faster and keep your business running smoothly with
            Eagle Eye Tech’s Troubleshooting & Support Services. From rapid
            problem diagnosis to multi-tier assistance and on-site support, we
            ensure your organization receives timely solutions, minimized
            downtime, and an exceptional client experience.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>
      <section className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-3"></div>
              <img
                src="/trouble_shoot/Trouble_Support1.png"
                alt="Application Integration Illustration"
                className="relative w-auto max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
              TROUBLESHOOTING SUPPORT
            </h2>
            <p className="mb-6 leading-relaxed text-lg">
              Troubleshooting is the process of analyzing the cause of a problem
              and executing the best available solution to resolve it. When
              systems are inter-connected with many technologies & if anything
              goes wrong, then it is nearly impossible to identify the reason.
              To resolve any issues regarding the software and hardware, you
              need the best troubleshooting support. Sadup Soft specializes in
              providing excellent troubleshooting solutions for firms.
            </p>
          </div>
        </div>
      </section>
      {/* Steps Section */}
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
      {/* Services Section */} {/* Services We Offer */}
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

export default TroubleShooting;
