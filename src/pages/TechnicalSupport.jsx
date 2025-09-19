import React from "react";

const TechnicalSupport = () => {
    const services = [
  {
    title: "Application Support",
    desc: "For each application, we offer three layers of technical assistance. We identify the problem in the first stage, examine the primary cause in the second, and resolve bugs, improve the service, and update documentation during the third phase. Our skilled experts provide timely service and contact you immediately after the fix.",
    img: "/technical_support/support_2.jpg", // replace with relevant image
  },
  {
    title: "Product Support",
    desc: "We help organizations build stronger client connections and ensure new process initiatives do not overwhelm teams. Our solutions meet product needs efficiently, including application customization, product modification, and improvement requests, delivering optimized services to your customers.",
    img: "/technical_support/support_3.jpg", // replace with relevant image
  },
  {
    title: "Technical Helpdesk",
    desc: "Our technical experts assist with every client query, offering remote assistance, enterprise support, pre- and post-sales support, and more. With prior expertise, we resolve product-related concerns promptly, helping organizations deliver exceptional service and build trust with their customers.",
    img: "/technical_support/support_4.jpg", // replace with relevant image
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
            Technical Support
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Resolve technical issues faster and keep your operations stable with
            Eagle Eye Tech’s Technical Support & Troubleshooting Services. From
            quick problem diagnosis to tiered support levels and on-site
            assistance, we deliver timely resolutions, reduced downtime, and a
            reliable user experience.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>
      {/* Content Section */}
      {/* Introduction Section */}
      <section className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-3"></div>
              <img
                src="/technical_support/support_1.jpg"
                alt="Application Integration Illustration"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
              TECHNICAL SUPPORT
            </h2>
            <p className="mb-6 leading-relaxed text-lg">
              Eagle Eye Tech enables data sharing across different enterprise
              applications while reducing data redundancy. We process merging &
              optimizing the data and workflows between two disparate software
              applications with efficient processes at a low cost. Integrating
              applications automate your business processes, which allows them
              to focus on adding value to other parts of your business. Our core
              process automation includes ordering and fulfillment, invoicing,
              collections, expenses, approvals, and more
            </p>
            <p className="mb-6 leading-relaxed text-lg">
              Integrating applications automate your business processes, which
              allows them to focus on adding value to other parts of your
              business. Our core process automation includes ordering and
              fulfillment, invoicing, collections, expenses, approvals, and
              more.
            </p>
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
            Eagle Eye Tech provides clients with the best software
            technical support services. Among our solutions are
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

export default TechnicalSupport;
