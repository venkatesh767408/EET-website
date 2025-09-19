import React from "react";

const PostImplementation = () => {
 const services = [
  {
    title: "Customer Support",
    desc: "Our service provides clients with rapid troubleshooting to satisfy them and deliver solutions on time. Our support is multi-tiered and includes help services, on-site support, and an exceptional client experience.",
    img: "/post_implementation/customer_support.jpg",
  },
  {
    title: "Managed & Advisory Services",
    desc: "We provide consultancy services to companies, IT officers, and operational officers to accelerate output via process optimization. To bring additional benefits to our clients, we also deliver hosting and business process services.",
    img: "/post_implementation/managed_advisory.jpg",
  },
  {
    title: "High & Easy Recruitment Process",
    desc: "We handle staffing thoroughly, and when it comes to hiring, we continuously engage in seeking the finest individuals to meet organizational needs efficiently.",
    img: "/post_implementation/hiring.jpg",
  },
  {
    title: "Performance Monitoring & Optimization",
    desc: "We continuously track system performance, identify bottlenecks, and implement improvements to ensure maximum efficiency, scalability, and reliability of your solutions after go-live.",
    img: "/post_implementation/optimization.jpg",
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
            Post Implementation Support
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Unlock the full potential of your technology investments with Eagle
            Eye Tech’s Post-Implementation Services. From system optimization to
            ongoing support and training, we empower your organization to
            achieve scalability, efficiency, and long-term success with
            reliable, high-performance solutions.
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
                src="/post_implementation/support_1.jpg"
                alt="Application Integration Illustration"
                className="relative w-auto max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
              POST IMPLEMENTATION SUPPORT
            </h2>
            <p className="mb-6 leading-relaxed text-lg">
              Post-implementation is the procedure that begins right after
              project accomplishment. The purpose of post-implementation is to
              determine whether project outcomes meet the requirement or not.
              Following the completion of the project, we perform a Post
              Implementation evaluation. We checklist the tasks tailored to
              assess the project objectives were accomplished or not, how
              successfully we have managed the project, knowledge gained for the
              future, and actions needed to maximize the advantages from project
              outputs.
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
            Eagle Eye Tech provides clients with the best post-software
            implementation services. Among our solutions are
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

export default PostImplementation;
