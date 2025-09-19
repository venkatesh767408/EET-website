import React from "react";

const DataMigration = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 ">
            Data Migration Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Streamline your business processes with our seamless migration
            services.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-3"></div>
              <img
                src="/datamigration/datamigration.jpeg"
                alt="Data Migration"
                className="relative w-auto max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
              DATA MIGRATION
            </h2>
            <p className="mb-6 leading-relaxed text-lg">
              For over a decade, Eagle Eye Tech has been providing unique
              technical solutions. Our team of experts is ready to help you
              migrate your data and applications and scale your business with
              confidence. We can ensure smooth integration with your existing
              systems while providing scalability and flexibility to support
              substantial future growth. Our experts focus on ROI by executing
              data migration accurately and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
              Benefits Of Data Migration
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Data migration impacts efficiency, cost, and decision-making.
              Eagle Eye Tech ensures your data is consistent, reliable, and
              business-ready.
            </p>
          </div>
          <ul className="space-y-6">
            {[
              {
                title: "Ensuring Integrity Of Data",
                desc: "We work with your departments to make data more consistent, structured, and organized. Tailored solutions turn company data into meaningful insights.",
              },
              {
                title: "Cost & Time Savings",
                desc: "High-quality data reduces operational costs across sectors. We offer free consultation and detailed planning for efficient data transfers.",
              },
              {
                title: "Enhanced Decision-Making",
                desc: "With well-organized data, you can create accurate reports and make stronger data-driven business decisions.",
              },
              {
                title: "The Digital Transform",
                desc: "Implement innovative data management & storage solutions to gain a competitive edge in your industry.",
              },
            ].map((item, idx) => (
              <li
                key={idx}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 text-center mb-12">
            Process Of Data Migration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Business Requirements",
                desc: "We collaborate with your teams to define requirements and scope the migration process.",
              },
              {
                title: "Execution",
                desc: "Using modern tools and in-house solutions, we transfer data from old systems to new ones.",
              },
              {
                title: "Provide a Solution & a Plan",
                desc: "We design a detailed migration plan and mapping strategy to ensure smooth execution.",
              },
              {
                title: "Data Validation",
                desc: "We employ rigorous testing and validation to ensure complete and accurate data migration.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl shadow hover:shadow-md"
              >
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 text-center mb-12">
            Data Migration Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Solutions That Are Unique",
                desc: "We design migration strategies tailored to your specific business model and data requirements.",
              },
              {
                title: "Data Migration That Is Secure",
                desc: "We follow best practices and security protocols to ensure safe data movement.",
              },
            ].map((solution, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-700">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 text-center mb-12">
            Our Data Migration Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Analysis",
                desc: "We study your systems and define requirements for a safe and effective migration.",
              },
              {
                title: "Planning",
                desc: "We create a detailed migration plan to minimize risk and errors.",
              },
              {
                title: "Migration",
                desc: "We execute data transfer using industry tools or custom-built solutions.",
              },
              {
                title: "Post-Migration",
                desc: "We validate and test data, inspect systems, and decommission legacy systems.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl shadow hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
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
                  className="mx-10 inline-flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="max-h-16 max-w-[120px] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
              {ourclients.map((client, idx) => (
                <div
                  key={`dup-${idx}`}
                  className="mx-10 inline-flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
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

export default DataMigration;
