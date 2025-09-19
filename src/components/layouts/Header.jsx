import React, { useState, useEffect, useRef } from "react";
import { MdArrowDropDown, MdMenu, MdClose, MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [nestedDropdown, setNestedDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [mobileNestedMenu, setMobileNestedMenu] = useState(null);
  const timeoutRef = useRef(null);
  const menuRef = useRef(null);

  const aboutUsOptions = [
    { label: "Company", href: "/Mission" },
    { label: "CSR", href: "/csr" },
    { label: "Mission & Vision", href: "/Mission" },
  ];

  const developmentServices = [
    { label: "Application Integration", href: "/application-integration" },
    { label: "Application Development", href: "/application-development" },
    { label: "Data Migration", href: "/data-migration" },
    { label: "DevOps and Cloud", href: "/devops-cloud" },
    { label: "Snowflake Services", href: "/snow-flake" },
  ];

  const applicationSupport = [
    { label: "Implementation Services", href: "/implementation-services" },
    { label: "Post Implementation Support", href: "/post-implementation" },
    { label: "Trouble Shooting Support", href: "/trouble-shooting" },
    { label: "Technical Support", href: "/technical-support" },
  ];

  const uiuxDesign = [
    { label: "Dynamic Website Design", href: "/dynamic-website" },
    { label: "Mobile Optimized Design", href: "/mobile-optimized" },
    { label: "Responsive Web Design", href: "/responsive-web-design" },
    { label: "Mobile Web Applications", href: "/mobile-applications" },
    { label: "Website Development & Hosting", href: "/website-development-hosting" },
  ];

  const servicesOptions = [
    { label: "Development Service", nested: developmentServices, isNested: true },
    { label: "Application Support", nested: applicationSupport, isNested: true },
    { label: "UI/UX Design", nested: uiuxDesign, isNested: true },
    { label: "Digital Marketing", href: "#" },
    { label: "Software Testing", href: "#" },
    { label: "Data Sciences", href: "#" },
    { label: "Staffing", href: "#" },
  ];

  const productsOptions = [
    { label: "Medi2Ai", href: "/medi2Ai" },
    { label: "TeaTimeTelugu", href: "/tea-time-telugu" },
    { label: "CloudNestPms", href: "/cloud-next-pms" },
  ];

  // Desktop hover
  const handleMouseEnter = (dropdown) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(dropdown);
    setNestedDropdown(null);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setNestedDropdown(null);
    }, 200);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleNestedEnter = (itemLabel) => {
    setNestedDropdown(itemLabel);
  };

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileSubMenu(null);
    setMobileNestedMenu(null);
  };

  const toggleMobileSubMenu = (menu) => {
    setMobileSubMenu(mobileSubMenu === menu ? null : menu);
    setMobileNestedMenu(null);
  };

  const toggleMobileNestedMenu = (menu) => {
    setMobileNestedMenu(mobileNestedMenu === menu ? null : menu);
  };

  // Close mobile menu on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
        setMobileSubMenu(null);
        setMobileNestedMenu(null);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/EET_LOGO.png"
            alt="EET Logo"
            className="h-16 w-auto transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none hover:text-orange-600 transition-colors duration-200"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <MdClose className="h-8 w-8" /> : <MdMenu className="h-8 w-8" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 items-center text-gray-800 font-semibold relative">
          <Link
            to="/"
            className="text-lg hover:text-orange-600 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>

          {/* Desktop Dropdowns */}
          {[
            { label: "About Us", options: aboutUsOptions, key: "about" },
            { label: "Our Services", options: servicesOptions, key: "services" },
            { label: "Products", options: productsOptions, key: "products" },
          ].map((menu) => (
            <div
              key={menu.key}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(menu.key)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-lg hover:text-orange-600 transition-colors duration-300">
                {menu.label} <MdArrowDropDown className="ml-1 h-6 w-6 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              {openDropdown === menu.key && (
                <div
                  className="absolute left-0 top-full bg-white text-gray-800 rounded-xl shadow-2xl w-56 mt-3 py-2 animate-fadeIn scale-95 md:scale-100 z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {menu.options.map((option, i) => (
                    <div 
                      key={i} 
                      className="relative"
                      onMouseEnter={() => option.isNested && handleNestedEnter(option.label)}
                      onMouseLeave={() => option.isNested && setNestedDropdown(null)}
                    >
                      {option.isNested ? (
                        <div className="flex justify-between items-center px-5 py-3 text-base hover:bg-blue-50 hover:text-orange-600 transition-all duration-300">
                          <span>{option.label}</span>
                          <MdArrowRight className="h-5 w-5" />
                        </div>
                      ) : (
                        <Link
                          to={option.href}
                          className="block px-5 py-3 text-base hover:bg-blue-50 hover:text-orange-600 transition-all duration-300"
                        >
                          {option.label}
                        </Link>
                      )}
                      
                      {/* Nested dropdown */}
                      {option.isNested && nestedDropdown === option.label && (
                        <div className="absolute left-full top-0 bg-white text-gray-800 rounded-xl shadow-2xl w-56 ml-1 py-2 animate-fadeIn z-50">
                          {option.nested.map((nestedItem, j) => (
                            <Link
                              key={j}
                              to={nestedItem.href}
                              className="block px-5 py-3 text-base hover:bg-blue-50 hover:text-orange-600 transition-all duration-300"
                            >
                              {nestedItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link to="/blogs" className="text-lg hover:text-orange-600 transition-colors duration-300">
            Blogs
          </Link>
          <Link to="/careers" className="text-lg hover:text-orange-600 transition-colors duration-300">
            Careers
          </Link>
          <Link to="/contact-us" className="text-lg hover:text-orange-600 transition-colors duration-300">
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-30 z-30 transition-opacity duration-300"></div>
      )}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 right-0 h-screen w-4/5 max-w-sm bg-white z-40 transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile menu header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <img src="/EET_LOGO.png" alt="EET Logo" className="h-12 w-auto" />
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none hover:text-orange-600 transition-colors duration-200"
            aria-label="Close menu"
          >
            <MdClose className="h-8 w-8" />
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto h-full pb-20">
          {[{ label: "Home", href: "/" },
            { label: "About Us", key: "about", options: aboutUsOptions },
            { label: "Our Services", key: "services", options: servicesOptions },
            { label: "Products", key: "products", options: productsOptions },
            { label: "Blogs", href:"/blogs" },
            { label: "Careers", href:"/careers" },
            { label: "Contact Us", href:"/contact-us" }
          ].map((item, index) => (
            <div key={index} className="mb-1">
              {item.options ? (
                <>
                  <button
                    onClick={() => toggleMobileSubMenu(item.key)}
                    className="flex justify-between w-full text-left text-lg font-semibold py-3 px-2 border-b border-gray-200 hover:text-orange-600 transition-colors duration-300"
                  >
                    {item.label}
                    <MdArrowDropDown
                      className={`ml-2 h-6 w-6 transition-transform duration-300 ${
                        mobileSubMenu === item.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      mobileSubMenu === item.key ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    {item.options.map((option, i) => (
                      <div key={i} className="pl-4">
                        {option.isNested ? (
                          <>
                            <button
                              onClick={() => toggleMobileNestedMenu(option.label)}
                              className="flex justify-between w-full text-left py-2 px-2 text-gray-700 hover:text-orange-600 transition-colors duration-300"
                            >
                              {option.label}
                              <MdArrowDropDown
                                className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                                  mobileNestedMenu === option.label ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            <div
                              className={`overflow-hidden transition-all duration-500 ${
                                mobileNestedMenu === option.label ? "max-h-96" : "max-h-0"
                              }`}
                            >
                              {option.nested.map((nestedItem, j) => (
                                <Link
                                  key={j}
                                  to={nestedItem.href}
                                  className="block py-2 pl-6 pr-2 text-gray-700 hover:text-orange-600 transition-colors duration-300"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {nestedItem.label}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            to={option.href}
                            className="block py-2 px-2 text-gray-700 hover:text-orange-600 transition-colors duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {option.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.href}
                  className="block text-lg font-semibold py-3 px-2 border-b border-gray-200 hover:text-orange-600 transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
