import React from "react";

const Snowflake = () => {
  const services = [
    {
      title: "Snowflake as a Service",
      desc: "Snowflake as a Service for our clients who are looking to upgrade to a modern data architecture on cloud service. We provide Snowflake as a fully managed Cloud Data Warehouse that is offered as Software-as-a-Service (SaaS) or Database-as-a-Service (DaaS). At Eagle Eye Tech, our services include launching Snowflake on your network, migrating on-premises Data Warehouses, building pipelines with Airflow, connecting BI tools, and optimizing storage and compute costs.",
      img: "/snowflake/snowflake_1.png",
    },
    {
      title: "Data Migration",
      desc: "Our certified Snowflake developers handle migration projects from on-premises to the Snowflake cloud platform. We outline project timelines, identify required data sources, and redesign architectures that align with Snowflake’s capabilities. Using advanced tools, we ensure smooth transformations with rigorous AB testing to validate data quality, ensuring migrations meet client expectations.",
      img: "/snowflake/snowflake_2.png",
    },
    {
      title: "Big Data Pipeline",
      desc: "Our certified Data Engineers build robust and scalable pipelines using Snowflake connectors and ETL tools. Leveraging Apache Airflow, Python, and PySpark, we design ETL workflows that handle huge structured and unstructured data sets, transforming them efficiently. These pipelines ensure high availability of critical data within Snowflake for business operations.",
      img: "/snowflake/snowflake_3.jpg",
    },
    {
      title: "Data Analytics and BI",
      desc: "Our Data Scientists resolve business problems by leveraging Snowflake’s data lakes and warehouses. We design BI dashboards using Tableau, Power BI, and other visualization tools connected to Snowflake. With enterprise-wide data access, organizations gain actionable insights, enabling data-driven decision-making and accelerated problem resolution.",
      img: "/snowflake/snowflake_4.jpg",
    },
    {
      title: "Cost Optimization",
      desc: "Our Snowflake experts specialize in tuning and optimizing storage and compute costs. We build dashboards to track Snowflake credit utilization, eliminate redundant data, and optimize queries. With strategic cost reduction measures, Eagle Eye Tech helps clients maximize ROI on their Snowflake investments while reducing operational overhead.",
      img: "/snowflake/snowflake_5.jpg",
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
      <section className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Snowflake Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Unlock the full potential of modern cloud data architecture with
            Eagle Eye Tech’s Snowflake solutions. From migration to cost
            optimization, we empower your organization with scalable,
            high-performance data warehousing.
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
              idx % 2 !== 0
                ? "flex-col-reverse md:flex-row-reverse"
                : "flex-col md:flex-row"
            }`}
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

export default Snowflake;
