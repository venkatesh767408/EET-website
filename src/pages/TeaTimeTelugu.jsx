import React from 'react';

const TeaTimeTelugu = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tea Time Telugu
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Connecting the Global Telugu Community
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Tea Time Telugu is one of the fastest-growing Telugu news and entertainment platforms, launched in 2025 with a mission to connect the global Telugu community.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                <a href="https://teatimetelugu.com" >Read Latest News</a>
              </button>
              
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/TeaTimeTelugu/T_T_T_1.png" 
              alt="Tea Time Telugu" 
              className="rounded-lg shadow-xl w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
            <img 
              src="/TeaTimeTelugu/T_T_T_2.png" 
              alt="News Coverage" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What We Cover
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We specialize in delivering news that truly matters—whether it's politics, movies, human-interest stories, or social commentary.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Breaking News – Political updates, state and national events",
                "Tollywood & Movies – Reviews, box office updates, gossips",
                "Human-Interest Stories – Inspiring, emotional stories",
                "News Behind the News – Uncovering mysteries, exclusive insights",
                "Event Galleries – Celebrity events, movie launches",
                "Social & Political Commentary – Analysis and opinions that matter"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interviews Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-amber-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Celebrity Interviews & Events
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At Tea Time Telugu, we believe in bringing fans closer to their stars. Our exclusive celebrity interviews provide candid insights into actors' lives, careers, and upcoming projects.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Soon, we will be expanding into on-ground coverage of movie release events, press meets, and red-carpet shows—delivering an authentic Tollywood experience to your screens.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
              Watch Interviews
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/TeaTimeTelugu/T_T_T_3.avif" 
              alt="Celebrity Interviews" 
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
            <img 
              src="/TeaTimeTelugu/T_T_T_4.webp" 
              alt="Key Highlights" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tea Time Telugu's Key Highlights
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Real-Time Breaking News Coverage",
                "Movie Reviews & Box Office Analysis",
                "Exclusive Celebrity Interviews",
                "OTT Series Updates & Film Highlights",
                "Political Sensations & Social Stories",
                "100% Native Telugu Content"
              ].map((highlight, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-amber-100">
                  <div className="bg-amber-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Website */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-amber-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Beyond the Website
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Tea Time Telugu is not limited to just a website. We're building a strong presence across platforms to bring you:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Celebrity Bites & Interviews",
                "Short-form Breaking News Updates",
                "Event Coverage & Exclusive Footage",
                "Engaging Social Media Campaigns"
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-amber-100 p-2 rounded-full mr-3">
                      <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <h3 className="font-semibold">Social Media</h3>
                  </div>
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex mt-8 space-x-4">
              <button className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                YouTube
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/TeaTimeTelugu/T_T_T_6.png" 
              alt="Social Media Presence" 
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
            <img 
              src="/TeaTimeTelugu/T_T_T_7.png" 
              alt="Our Vision" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We aim to be the go-to digital hub for every Telugu-speaking individual across the globe.
            </p>
            <div className="space-y-4">
              {[
                "Maintaining speed and accuracy in news delivery",
                "Acting as a bridge between newsmakers and the public",
                "Avoiding sensationalism, but offering sensational stories that matter",
                "Continuously expanding to new media formats and platforms"
              ].map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* Why Choose Us */}
<section className="py-20 px-6 md:px-12 bg-gradient-to-br from-amber-700 via-amber-800 to-black text-white relative">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
      Why Choose <span className="text-amber-400">Tea Time Telugu?</span>
    </h2>
    <p className="text-amber-200 max-w-2xl mx-auto mb-14 text-lg">
      Delivering trusted, fast, and culturally rich content for Telugu readers worldwide.
    </p>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Trusted Worldwide",
          description: "A global source trusted by Telugu readers everywhere.",
          icon: "🌍"
        },
        {
          title: "First in Breaking News",
          description: "Stay updated with the fastest breaking news alerts.",
          icon: "⚡"
        },
        {
          title: "Balanced Content",
          description: "Blending entertainment and responsibility seamlessly.",
          icon: "⚖️"
        },
        {
          title: "Cultural Reflection",
          description: "True voice and essence of Telugu heritage.",
          icon: "🎭"
        }
      ].map((item, index) => (
        <div
          key={index}
          className="bg-amber-900/30 border border-amber-700 rounded-2xl p-8 hover:bg-amber-800/50 transition-all duration-300 shadow-lg hover:shadow-amber-500/20"
        >
          <div className="text-5xl mb-6">{item.icon}</div>
          <h3 className="text-xl font-bold mb-3 text-amber-300">{item.title}</h3>
          <p className="text-amber-100 text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default TeaTimeTelugu;