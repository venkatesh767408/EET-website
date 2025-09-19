import React from "react";

const MobileOptimized = () => {
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
         Mobile Optimized Website
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Ensure your website delivers an exceptional experience on all devices with our expert mobile optimization services.
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
                src="/mobile_optimized/mobile_optimized_1.jpg"
                alt="Mobile Optimized Website Illustration"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
              MOBILE OPTIMIZED WEBSITE
            </h2>
            <p className="mb-6 leading-relaxed text-lg">
              People increasingly prefer mobile over desktop internet usage. As
              a result, a mobile-optimized website is essential to ensure the
              best user experience across devices. Eagle Eye Tech provides
              mobile-optimized solutions by analyzing current trends and
              competitors.
            </p>
            <p className="leading-relaxed text-lg">
              Mobile Optimization tailors your site’s content for mobile
              devices. It adapts smoothly to smaller displays, adjusts text
              sizes for readability, and ensures fast-loading content for users
              on the go.
            </p>
          </div>
        </div>
      </section>

      {/* Why Necessary Section */}
      <section className="w-full bg-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-100 rounded-2xl -rotate-3"></div>
              <img
                src="/mobile_optimized/mobile_optimized_2.jpg"
                alt="Why Mobile Optimization is Necessary"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>

          {/* Left Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
              Is Mobile Optimization Necessary?
            </h2>
            <p className="mb-6 leading-relaxed text-lg">
              Google reports that smartphone searches now outnumber desktop
              searches. Mobile devices account for over 57% of all web traffic.
              Email studies show between 15% and 70% of emails are opened on
              mobile devices depending on the demographic.
            </p>
            <p className="leading-relaxed text-lg">
              Simply put, mobile optimization is no longer optional. Businesses
              must prioritize delivering fast, user-friendly mobile
              experiences to remain competitive.
            </p>
          </div>
        </div>
      </section>

      {/* Unique Approach Section */}
      <section className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-3"></div>
              <img
                src="/mobile_optimized/mobile_optimized_3.jpg"
                alt="Unique Approach to Mobile Optimization"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-600">
              Our Unique Mobile Optimization Approach
            </h2>
            <ul className="space-y-4">
              {[
                "Optimize videos for mobile viewing",
                "Enable smooth scrolling instead of multiple page clicks",
                "Ensure high-quality, well-cropped images",
                "Design large, easy-to-tap buttons",
                "Use responsive templates including emails",
                "Shorten paragraphs for better readability",
                "Highlight mobile-specific content like directions",
                "Implement Accelerated Mobile Pages (AMP)",
              ].map((point, index) => (
                <li
                  key={index}
                  className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
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
      <section className="w-full bg-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-100 rounded-2xl -rotate-3"></div>
              <img
                src="/mobile_optimized/mobile_optimized_4.jpg"
                alt="Benefits of Mobile Optimization"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>

          {/* Left Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-600">
              Benefits of Mobile Optimization
            </h2>

            <ul className="space-y-4">
              {[
                "Less expensive – update once for all devices",
                "Improved search engine visibility",
                "Faster loading and better user engagement",
                "Flexible designs for all screen sizes",
                "Consistent content delivery",
                "Lower bounce rates and higher conversions",
              ].map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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
      <section className="w-full bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-3"></div>
              <img
                src="/mobile_optimized/mobile_optimization_5.jpg"
                alt="Mobile Optimization Services"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
              Services We Offer
            </h2>

            <div className="mb-8 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">
                Mobile Website Design
              </h3>
              <p className="leading-relaxed text-lg">
                We design fully responsive websites that adapt seamlessly to
                mobile devices, ensuring user-friendly navigation and
                consistent performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">
                Mobile SEO Optimization
              </h3>
              <p className="leading-relaxed text-lg">
                Our SEO experts optimize your mobile site for higher search
                rankings, faster load speeds, and increased visibility on
                Google, Bing, and other search engines.
              </p>
            </div>
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
}
export default MobileOptimized;
