import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          {/* Section Header */}
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
             Let’s Talk about Your IT Needs!
            </p>
          </div>

          <div className="container px-5 py-24 mx-auto">
        {/* Two Column Layout */}
        <div className="lg:w-4/5 md:w-11/12 mx-auto flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
          
          {/* Left Side Company Info */}
          <div className="bg-[#151515] text-white p-10 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-orange-500">
              Get <span className="text-white">Started</span> Today!
            </h2>
            <p className="mb-6 text-gray-300 text-sm leading-relaxed">
              Would you like to discover how technology and innovation can transform
              your business outcomes? You have landed at the right place. Let us help
              you in bringing your business to life with a digital experience that
              delights your customers. No matter how complex your project is, we will
              build it in time.
            </p>

            {/* USA Office */}
            <div className="mb-6">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">USA</h3>
                  <p className="text-gray-300 text-sm">
                    1000 Bearcat Way Suite 105 Unit 5 <br />
                    Morrisville NC 27560
                  </p>
                </div>
              </div>
            </div>

            {/* India Office */}
            <div className="mb-6">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">India</h3>
                  <p className="text-gray-300 text-sm">
                    Workafella Cyber Crown HiTech City <br />
                    7th Floor HUDA Techno Enclave Madhapur <br />
                    Hyderabad Telangana 500081
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-4 flex items-center space-x-3">
              <FaEnvelope className="text-orange-500" />
              <span className="text-sm">hr@eagleiitech.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-orange-500" />
              <span className="text-sm">(919) 439-6578</span>
            </div>
          </div>

          {/* Right Side Contact Form */}
          <div className="bg-white p-10 md:w-1/2">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">
              Request A Quote
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              Let’s Talk about Your IT Needs!
            </p>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-2 px-3"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-2 px-3"
                />
                <input
                  type="text"
                  placeholder="Phone No"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-2 px-3"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-2 px-3"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none mb-4"
              ></textarea>
              <button className="bg-orange-500 text-white px-6 py-2 rounded shadow hover:bg-orange-600 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

          {/* Map Section */}
          <div className="mt-12">
            <iframe
              className="w-full h-96 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105476.21832796893!2d-78.820273!3d35.827466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf1f5f6882931%3A0xbeac2e3f149c37c0!2s1000%20Bear%20Cat%20Way%20105%205%2C%20Morrisville%2C%20NC%2027560!5e0!3m2!1sen!2sus!4v1695100000000!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
