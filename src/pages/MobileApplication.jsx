import React from "react";
import { CheckCircle } from "lucide-react";

const MobileApplication = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mobile Web Applications
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            EAGLE EYE TECH provides full life cycle services such as design,
            integration & management. Our professionals prepare everything from
            concept to continuous support — whether it’s customer-focused or
            enterprise solutions.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>
      <section className="w-full bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Why Choose Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-orange-600 mb-8 text-center">
              Why Choose EAGLE EYE TECH?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Staff augmentation to enhance your team with high-skill experts.",
                "Experience-led & outcome-oriented approach.",
                "Proven, rapid, agile & trusted delivery methods.",
                "Cross-platform solutions for iOS, Android, and Windows.",
                "Full transparency, collaboration & communication.",
                "Customer satisfaction is our number one priority.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 w-6 h-6 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Native vs Web vs Hybrid */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-orange-600 mb-8 text-center">
              Native App vs Mobile Web App vs Hybrid App
            </h2>
            <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto mb-6">
              When it comes to the type of mobile app to design, there is no
              one-size-fits-all solution. Each has its own strengths and
              trade-offs.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg">
                <h3 className="text-xl font-bold text-orange-600 mb-4">
                  Native
                </h3>
                <p className="text-gray-700">
                  Built for a specific platform, offering full access to device
                  features but usually more expensive and time-consuming.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Web</h3>
                <p className="text-gray-700">
                  Faster and less expensive. Works across devices with web-based
                  technologies but limited access to device features.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg">
                <h3 className="text-xl font-bold text-orange-600 mb-4">
                  Hybrid
                </h3>
                <p className="text-gray-700">
                  Combines web and native. Built with web tech and wrapped in a
                  native shell for partial device access.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-orange-600 mb-8 text-center">
              Benefits of Mobile Web Applications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Immediacy – instantly available on all devices.",
                "Cannot be deleted during their life cycle.",
                "Compatible across multiple platforms.",
                "Instant upgradability & easy maintenance.",
                "Lower cost and faster time-to-market.",
                "Easily discoverable & shareable online.",
                "Broader reach & larger audience potential.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-orange-600 mb-8 text-center">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Extensive Planning",
                  desc: "Identify needs, explore features, and ensure compatibility with various devices and resolutions.",
                },
                {
                  title: "Performance Enhancement",
                  desc: "Optimize images, queries, and code. Use CDNs for faster and smoother app performance.",
                },
                {
                  title: "Framework Selection",
                  desc: "Leverage responsive frameworks like Bootstrap, Foundation, or lightweight JS frameworks.",
                },
                {
                  title: "Debugging & Testing",
                  desc: "Use Chrome DevTools, Firefox Firebug, or Opera Dragonfly for reliable app debugging.",
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

          {/* Final Thought */}
          <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-2xl shadow-lg p-10 text-center">
            <h2 className="text-3xl font-semibold mb-4">Final Thought</h2>
            <p className="text-lg max-w-4xl mx-auto">
              The demand for effective, user-friendly, high-performance mobile
              applications is skyrocketing. Mobile web apps offer the most
              efficient, cost-effective approach — delivering speed, reach, and
              compatibility without compromising on quality.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileApplication;
