import React from "react";

const Dynamicwebsite = () => {
  const features = [
    "Simple To Operate — manage products & content without special IT skills.",
    "Extremely Scalable — modular design supporting blogs, e-commerce, events, and more.",
    "Cost-Effective Maintenance — lower long-term costs despite higher initial investment.",
    "Search Engine Supported — frequent updates help SEO and indexing.",
    "Independent Administration — update and expand your site without developer help.",
  ];
  const benefits = [
  "One-of-a-kind Relevant Content for Each Dynamic Page.",
  "Information produced dynamically by the domain.",
  "Product listings that change based on updates.",
  "Dynamic News Engine for real-time updates.",
  "Modify website content online with content management.",
  "CMS (Content Management Systems) simplifies adding and updating content.",
  "Improved user engagement through advanced search and filter options.",
  "Regular content updates improve SEO and search engine ranking.",
  "Ease of analysis and back-end reporting.",
  "Integration of advanced features such as eCommerce, shopping carts, AI-powered chatbots, and more.",
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
    <div>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Dynamic Website
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Accelerate growth with our smart technology solutions.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>
      {/* Content Section */}
      <section className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-3"></div>
              <img
                src="/dynamic_website/dynamic_design_1.jpg"
                alt="Application Integration Illustration"
                className="relative w-auto max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
              DYNAMIC WEBSITE
            </h2>
            <p className="mb-6 leading-relaxed text-lg">
              Eagle Eye Tech is a well-known website development business
              focused on Web Development, Ecommerce Development, Custom
              WordPress Development & JavaScript Development. With changing
              technology, trends & client preferences, website owners must
              maintain their sites up to date with a dynamic website. At Digital
              hub solution, you may choose a website template for your
              organization from a wide selection. Having a dynamic website
              implies having the ability to update it as needed. Websites
              display different material on different pages, as opposed to
              static web pages. Visitors are never bored since they are
              continually engaged in this manner.
            </p>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="w-full bg-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* HEADLINE */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-orange-600 font-sans">
              Designing a Dynamic Website — powerful, manageable, and built to
              scale.
            </h1>

            {/* FEATURES LIST */}
            <ul className="space-y-4">
              {features.map((f, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <span className="mt-1 flex-shrink-0">
                    {/* Orange tick icon */}
                    <svg
                      className="w-6 h-6 text-orange-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="12" fill="#FFF7ED" />
                      <path
                        d="M7 12.5l3 3 7-8"
                        stroke="#F97316"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="text-gray-700 leading-relaxed font-sans">{f}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT COLUMN - IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/dynamic_website/dynamic_design_2.jpg"
                alt="Feature Illustration"
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
              />
            </div>
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
                src="/dynamic_website/dynamic_design_3.png"
                alt="Dynamic Website Services Illustration"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>

          {/* Left Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">
              Services Eagle Eye Tech Provide
            </h2>

            <div className="mb-8 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">
                Dynamic Website Solutions
              </h3>
              <p className="leading-relaxed text-lg">
                When there is a need for modifications, you may make them on a
                dynamic website. In contrast to static websites, it shows
                different material on various pages, keeping the audience
                engaged. Companies must stay current with new technology,
                trends, and client expectations. Eagle Eye Tech provides a
                variety of templates organizations can choose from.
              </p>
            </div>

            <div className="mb-8 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">
                Professional Dynamic Websites
              </h3>
              <p className="leading-relaxed text-lg">
                If you own a business, you must have a professional web
                presence. We specialize in creating modern, visually engaging
                websites that enhance your brand. Unlike static sites, dynamic
                websites are interactive, polished, and impactful.
              </p>
            </div>

            <div className="mb-8 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">
                Effortless Editing & Upgrades
              </h3>
              <p className="leading-relaxed text-lg">
                Our dynamic website design services are perfect for blog-based
                or content-heavy platforms. With our simplified CMS, you can
                easily update, revise, and publish new content. We enable
                businesses to manage their websites more efficiently.
              </p>
            </div>

            <div className="mb-8 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">
                Database Structure
              </h3>
              <p className="leading-relaxed text-lg">
                Dynamic websites often require complex coding, but our experts
                ensure your site is designed with a well-organized database
                structure. This makes your website easy to maintain, administer,
                and keeps it engaging for users.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">
                Eye-catching Web Designs
              </h3>
              <p className="leading-relaxed text-lg">
                Our dynamic websites are visually appealing and customizable
                with a single click—change themes, colors, fonts, images, and
                more. This flexibility allows businesses to stay creative and
                keep their websites fresh and engaging.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="w-full bg-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/*left cloumn image*/}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/dynamic_website/dynamic_design_2.jpg"
                alt="Feature Illustration"
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
          {/* Right COLUMN */}
          <div className="space-y-6">
            {/* HEADLINE */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-orange-600 font-sans">
              The Benefits Of Dynamic Websites
            </h1>

            {/* FEATURES LIST */}
            <ul className="space-y-4">
              {benefits.map((f, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <span className="mt-1 flex-shrink-0">
                    {/* Orange tick icon */}
                    <svg
                      className="w-6 h-6 text-orange-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="12" fill="#FFF7ED" />
                      <path
                        d="M7 12.5l3 3 7-8"
                        stroke="#F97316"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="text-gray-700 leading-relaxed font-sans">{f}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* our clients Section */}
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

export default Dynamicwebsite;
