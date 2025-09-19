import React, { useState, useEffect } from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { CiLinkedin } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  // Show/hide button based on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-gray-300 relative">
      {/* Top Footer */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800">
        {/* Left: Logo & About */}
        <div>
          <img src="/EET_LOGO.png" alt="Eagle Eye Tech" className="h-14 mb-4" />
          <p className="text-gray-400 leading-relaxed mb-6">
            Would you like to discover how technology and innovation can
            transform your business outcomes? You have landed at the right place.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/eagle-eye-technologies-llc/"
              className="bg-orange-600 p-2 rounded-sm hover:bg-orange-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.facebook.com/people/Eagle-Eye-Tech/61555907854696/"
              className="bg-orange-600 p-2 rounded-sm hover:bg-orange-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiSocialFacebook className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Middle: Our Services */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-orange-500 text-lg">•</span>
              <span>Software Development</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-orange-500 text-lg">•</span>
              <span>Mobile Development</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-orange-500 text-lg">•</span>
              <span>UI/UX</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-orange-500 text-lg">•</span>
              <span>Software Testing</span>
            </li>
          </ul>
        </div>

        {/* Right: Contact Us */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Contact Us</h3>

          <h4 className="text-orange-500 font-semibold">USA</h4>
          <p className="text-gray-400 text-sm mb-4">
            1000 Bearcat Way Suite 105 Unit 5 <br />
            Morrisville NC 27560
          </p>

          <h4 className="text-orange-500 font-semibold">India</h4>
          <p className="text-gray-400 text-sm mb-2">
            Workafella Cyber Crown HiTech City <br />
            7th Floor HUDA Techno Enclave Madhapur <br />
            Hyderabad Telangana 500081 India
          </p>

          <p className="text-sm">
            <span className="font-semibold">Phone :</span>{" "}
            <span className="text-orange-500">(919) 439-6578</span>
          </p>
          <p className="text-sm">
            <span className="font-semibold">Email :</span>{" "}
            <a
              href="mailto:hr@eagleiitech.com"
              className="text-orange-500 hover:underline"
            >
              hr@eagleiitech.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          Copyright © 2025{" "}
          <span className="font-semibold text-white">Eagle Eye Technologies</span>
          — All Rights Reserved.
        </p>
        <div className="flex space-x-6 text-sm mt-3 md:mt-0">
          <a href="#" className="hover:text-orange-500">
            Career
          </a>
          <a href="#" className="hover:text-orange-500">
            Term Of Use
          </a>
          <a href="#" className="hover:text-orange-500">
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-orange-600 text-white shadow-lg hover:bg-orange-500 transition-all duration-300 flex items-center justify-center"
          aria-label="Back to Top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
