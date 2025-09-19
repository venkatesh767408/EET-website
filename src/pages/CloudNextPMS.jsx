import React from 'react';

const CloudNestPMS = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cloud Nest PMS
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Next-Generation Property & Hotel Management System
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Cloud Nest PMS simplifies hospitality operations—whether you manage hotels, resorts, serviced apartments, or rental properties. 
              Streamline operations, improve guest experience, and maximize revenue—all from one centralized dashboard.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/Cloud_next_pms/cloud_pms_1.png" 
              alt="Cloud Nest PMS Dashboard" 
              className="rounded-lg shadow-xl w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* What Cloud Nest PMS Offers */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
            <img 
              src="/Cloud_next_pms/cloud_pms_2.jpg" 
              alt="Property Management" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What Cloud Nest PMS Offers
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Cloud Nest PMS brings every aspect of property and hotel management into one platform:
            </p>
            <ul className="space-y-4">
              {[
                "Front Desk Management – Smooth check-in/check-out, room allocation, and reservations.",
                "Booking Engine Integration – Manage direct and third-party bookings (OTAs like Booking.com, Expedia, Airbnb).",
                "Revenue & Rate Management – Dynamic pricing, occupancy tracking, and revenue forecasts.",
                "Guest Profile Management – Maintain guest history, preferences, and loyalty programs.",
                "Billing & Payments – Automated invoicing, multi-currency, and secure payment support.",
                "Housekeeping & Maintenance – Task assignment, real-time room status, and staff coordination.",
                "Reports & Analytics – Dashboards for occupancy, revenue, and guest satisfaction."
              ].map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Cloud Nest PMS Key Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Cloud-based, accessible from anywhere",
                "Multi-property management from one platform",
                "Integration with OTAs & Channel Managers",
                "Automated Invoicing & Payment Processing",
                "Real-time Housekeeping & Maintenance Tracking",
                "AI-powered Reporting & Forecasting"
              ].map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/Cloud_next_pms/cloud_pms_3.avif" 
              alt="Cloud Nest PMS Highlights" 
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
            <img 
              src="/Cloud_next_pms/cloud_pms_4.jpg" 
              alt="Who Benefits from Cloud Nest PMS" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who Benefits from Cloud Nest PMS?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Cloud Nest PMS is designed for the entire hospitality ecosystem:
            </p>
            <div className="space-y-6">
              {[
                { title: "Hotels & Resorts", description: "Simplify reservations, staff, and guest management." },
                { title: "Property Managers", description: "Easily handle multiple rental units or serviced apartments." },
                { title: "Hostels & Guesthouses", description: "Streamline occupancy and reduce manual errors." },
                { title: "Hospitality Chains", description: "Centralized control across multiple properties in real-time." }
              ].map((benefit, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg text-blue-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Cloud Nest PMS is Different */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Cloud Nest PMS is Different
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Unlike traditional PMS, Cloud Nest is modern, scalable, and user-friendly. 
              It’s not just software—it’s a digital transformation tool for your business.
            </p>
            <div className="space-y-4">
              {[
                "All-in-One Platform – from reservations to revenue management.",
                "Mobile-Friendly – manage on the go.",
                "Seamless Integrations – OTAs, POS, payment gateways.",
                "Secure & Reliable – encryption, backups, GDPR compliant."
              ].map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/Cloud_next_pms/cloud_pms_5.png" 
              alt="Why Cloud Nest PMS is Different" 
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Vision / Future Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
            <img 
              src="/Cloud_next_pms/cloud_pms_7.png" 
              alt="Cloud Nest PMS Vision" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Future of Cloud Nest PMS
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We’re constantly innovating to bring smarter solutions for the hospitality industry:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "AI-driven guest personalization",
                "Chatbot for guest inquiries and reservations",
                "Marketplace integrations (spa, events, tours)",
                "Mobile apps for guests – self check-in, digital keys",
                "Voice-enabled operations",
                "Smart revenue optimization",
                "Integrated marketing tools (email, SMS, social)"
              ].map((vision, index) => (
                <div key={index} className="bg-indigo-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="bg-indigo-100 p-2 rounded-full mr-3">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-indigo-800">Future Roadmap</h3>
                  </div>
                  <p className="text-gray-700 text-sm">{vision}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudNestPMS;
