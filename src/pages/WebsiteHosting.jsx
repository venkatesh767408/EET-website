import React from "react";
import { CheckCircle } from "lucide-react";

const WebsiteHosting = () => {
    
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
            Website Development and Hosting
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Eagle Eye Tech builds modern, mobile-friendly websites and provides
            secure, reliable, and scalable 24/7 hosting solutions.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>
      <section className="w-full bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Solutions Section - Image Left */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="w-full md:w-1/2">
              <img
                src="/web_hosting/web_hosting_1.jpeg"
                alt="Hosting Solutions"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-semibold text-orange-600 mb-6">
                Our Hosting Solutions
              </h2>
              <ul className="space-y-4">
                {[
                  "Cloud Hosting – remove single point of failure with distributed servers.",
                  "Redundancy & Quality – secure data centers worldwide with maximum uptime.",
                  "Secure – multi-tiered security with firewalls, load balancers & hardened OS.",
                  "Dedicated Expertise – tailored support for your business.",
                  "Immediate Account Creation – start building right away.",
                  "Simple Administration – easy setup & QuickBooks integration.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 w-6 h-6 mt-1" />
                    <p className="text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Crucial Decision - Image Right */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-semibold text-orange-600 mb-6">
                Is Web Development & Hosting Such a Crucial Decision?
              </h2>
              <p className="text-gray-700 mb-4">
                Think of hosting as the foundation of your online presence — it
                must be safe, secure, and easy to manage. Poor hosting can lead
                to security risks, downtime, and financial loss.
              </p>
              <p className="text-gray-700">
                Eagle Eye Tech ensures reliable hosting & development services
                so you save time, money, and maintain complete control over your
                website and customer interactions.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img
                src="/web_hosting/web_hosting_2.jpg"
                alt="Secure Hosting"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Development Approach - Image Left */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="w-full md:w-1/2">
              <img
                src="/web_hosting/web_hosting_3.png"
                alt="Development Approach"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-semibold text-orange-600 mb-6">
                Our Ideal Website Development Approach
              </h2>
              <ul className="space-y-4">
                {[
                  "Collecting Requirements – understand business goals & user needs.",
                  "Development – build with industry best practices & standards.",
                  "Deployment – smooth launch with post-development support.",
                  "Testing – ensure usability, responsiveness & cross-browser compatibility.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 w-6 h-6 mt-1" />
                    <p className="text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Advantages Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-orange-600 mb-8 text-center">
              The Advantages of Our Web Development Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Compatibility with Multiple Browsers",
                "Engaging UI/UX",
                "Completely Tested",
                "User-Friendly & Standards-Compliant",
                "Improved Site Performance",
                "Excellent Technical Support",
                "Domain Email Addresses",
                "Enhanced Website Security",
                "High Uptime & Reliability",
              ].map((adv, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 w-6 h-6 mt-1" />
                  <p className="text-gray-700">{adv}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hosting Types - Image Right */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-semibold text-orange-600 mb-6">
                Types of Hosting We Offer
              </h2>
              <ul className="space-y-4">
                {[
                  "Shared Web Hosting",
                  "VPS (Virtual Private Server)",
                  "Reseller Hosting",
                  "Dedicated Servers",
                  "Grid Hosting",
                ].map((type, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 w-6 h-6 mt-1" />
                    <p className="text-gray-700">{type}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img
                src="/web_hosting/web_hosting_4.jpg"
                alt="Hosting Types"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-orange-600 mb-8 text-center">
              Delivering Direct-to-Need Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Ecommerce Development",
                  desc: "Design eCommerce websites that convert visitors into loyal customers.",
                },
                {
                  title: "High-End Hosting",
                  desc: "Premium hosting with unlimited DBs, GIT access, and fast performance.",
                },
                {
                  title: "WordPress Design",
                  desc: "Responsive, efficient, and user-friendly WordPress sites.",
                },
                {
                  title: "Private Hosting",
                  desc: "Beginner-friendly SSD hosting with developer tools.",
                },
                {
                  title: "WooCommerce",
                  desc: "Boost eCommerce experiences with custom WooCommerce solutions.",
                },
                {
                  title: "Organizational Hosting",
                  desc: "Enterprise hosting with backups, free CDN & advanced tools.",
                },
              ].map((srv, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold text-orange-600 mb-4">
                    {srv.title}
                  </h3>
                  <p className="text-gray-700">{srv.desc}</p>
                </div>
              ))}
            </div>
          </div>
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
    </>
  );
};

export default WebsiteHosting;
