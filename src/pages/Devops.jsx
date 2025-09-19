import React from "react";

const Devops = () => {
  const services = [
    {
      title: "Cloud Setup & Management",
      desc: "At Eagle Eye Tech, we pride ourselves on helping customers set up and manage their IT assets with flexibility, speed, and security as the driving performance factors. We oversee the organization and administration of public and private cloud environments, providing access to cloud resources whenever necessary. Our cloud setup includes infrastructure, resources, and services to maximize and secure your computing needs.",
      img: "/devops_cloud/cloud_setup.jpg",
    },
    {
      title: "Migration",
      desc: "The world of application development as well as ongoing maintenance continues to evolve with new hosting environments. Through the lift-and-shift model, Eagle Eye Tech can move applications to a virtual or cloud environment that closely resembles legacy infrastructure. Beyond cost savings, the cloud enables auto-scaling and pay-per-consumption, helping drive efficiency and revenue.",
      img: "/devops_cloud/migration_cloud.png",
    },
    {
      title: "Container Deployments",
      desc: "Containers are vital for keeping applications running and scaling to meet customer needs. They are highly suitable for microservices architectures, where applications are split into smaller, self-sufficient components. Our experts can start, create, replicate, or destroy containers within seconds, enabling your business to meet the fast-paced demands of modern IT with speed and reliability.",
      img: "/devops_cloud/deployment_cloud.jpg",
    },
    {
      title: "Disaster Recovery",
      desc: "Virtually all businesses are vulnerable to disasters that affect IT operations. At Eagle Eye Tech, we provide rapid recovery of your critical systems with secure remote access. Cloud disaster recovery eliminates the need for traditional infrastructure and reduces downtime significantly. This ensures faster recovery times at a fraction of the cost, keeping your business resilient and operational.",
      img: "/devops_cloud/data_recovery.png",
    },
    {
      title: "Alerting & Monitoring Applications",
      desc: "You can’t track application success without real-time performance data. We monitor CPU load, memory utilization, processes, and disk usage, all tied to an alert system that notifies your team of critical events. Real-time reporting allows administrators to proactively resolve issues, ensuring better uptime and performance for your applications and servers.",
      img: "/devops_cloud/alert_cloud.jpg",
    },
    {
      title: "DevSecOps",
      desc: "We employ DevSecOps strategies to integrate security into every phase of development and operations. By using the ‘security as code’ model, we provide continuous monitoring and automation that ensures your systems remain protected, compliant, and efficient end-to-end.",
      img: "/devops_cloud/dev_sec_cloud.jpg",
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
            DevOps & Cloud Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            With proven IT expertise and technological advancements, Eagle Eye
            Tech delivers comprehensive DevOps strategies and reliable cloud
            services to boost performance and scalability.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
     {services.map((service, idx) => (
  <section
    key={idx}
    className={`w-full py-16 px-6 md:px-12 ${
      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
    }`}
  >
    <div
      className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 ${
        idx % 2 !== 0 ? "md:flex-row-reverse" : ""
      } ${idx % 2 !== 0 ? "flex-col-reverse md:flex-row-reverse" : ""}`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={service.img}
          alt={service.title}
          className="w-full max-w-sm sm:max-w-md md:max-w-full h-56 sm:h-64 md:h-80 object-contain rounded-xl shadow-lg"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
          {service.title}
        </h2>
        <p className="text-lg leading-relaxed">{service.desc}</p>
      </div>
    </div>
  </section>
))}

    

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
                  className="mx-8 inline-flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* Consistent logo box */}
                  <div className="h-20 w-40 flex items-center justify-center">
                    <img
                      src={client.src}
                      alt={client.alt}
                      className="max-h-16 max-w-[140px] object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate for infinite loop */}
              {ourclients.map((client, idx) => (
                <div
                  key={`dup-${idx}`}
                  className="mx-8 inline-flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="h-20 w-40 flex items-center justify-center">
                    <img
                      src={client.src}
                      alt={client.alt}
                      className="max-h-16 max-w-[140px] object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Devops;
