import React from 'react';

const Medi2AIProductPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Medi2AI
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Advanced AI-Powered Medical Assistant
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Medi2AI is an advanced AI-powered medical assistant designed to support healthcare professionals in making faster, smarter, and more accurate clinical decisions.
            </p>
           
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/Medi2Ai/medi_1.png" 
              alt="Medi2AI Dashboard" 
              className="rounded-lg shadow-xl w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* What Medi2AI Does */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
            <img 
              src="/Medi2Ai/medi_2.png" 
              alt="EHR Analysis" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What Medi2AI Does
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Medi2AI bridges the gap between data overload and clinical clarity.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700"><strong>Automated Medical Summaries</strong> – Converts EHRs and patient notes into concise summaries.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700"><strong>Clinical Decision Support</strong> – Suggests possible diagnoses, risk factors, and next steps.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700"><strong>Symptom & History Analysis</strong> – Reviews past medical records to detect patterns.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700"><strong>Billing & Documentation Support</strong> – Generates structured clinical notes for compliance.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700"><strong>Predictive Insights</strong> – Leverages AI models to forecast health risks and treatment outcomes.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Medi2AI's Key Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "AI-powered Clinical Decision Support",
                "Automated Patient Record Summaries",
                "Time-Saving Documentation Tools",
                "Predictive Healthcare Analytics",
                "Seamless Integration with EHR/EMR Systems",
                "Data Security & HIPAA Compliance"
              ].map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
              src="/Medi2Ai/medi_3.jpg" 
              alt="Medi2AI Highlights" 
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
              src="/Medi2Ai/medi_5.avif" 
              alt="Who Benefits from Medi2AI" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who Benefits from Medi2AI?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Medi2AI is designed for clinicians, hospitals, and healthcare organizations who want to improve efficiency and reduce burnout.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Doctors",
                  description: "Faster access to patient insights & reduced admin work."
                },
                {
                  title: "Clinics & Hospitals",
                  description: "Streamlined workflows, better resource management."
                },
                {
                  title: "Healthcare Systems",
                  description: "Improved outcomes through data-driven insights."
                },
                {
                  title: "Medical Students/Residents",
                  description: "Smarter learning with real-time AI assistance."
                }
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

      {/* Why Medi2AI is Different */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Medi2AI is Different
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Unlike generic AI tools, Medi2AI is built specifically for the medical ecosystem. It doesn't just summarize—it understands clinical context and delivers insights that are relevant, accurate, and actionable.
            </p>
            <div className="space-y-4">
              {[
                "Reduces Physician Burnout by cutting documentation time.",
                "AI with Clinical Intelligence – trained on healthcare-specific data.",
                "Privacy First – HIPAA/GDPR compliant.",
                "Scalable – works for solo practitioners to large hospital chains.",
                "Context-Aware Insights – understands clinical relevance.",
                "Continuous Learning AI – evolves with medical research updates."
              ].map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
              src="/Medi2Ai/medi_6.jpg" 
              alt="Why Medi2AI is Different" 
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
            <img 
              src="/Medi2Ai/medi_7.avif" 
              alt="Medi2AI Vision" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Beyond Today: The Vision of Medi2AI
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Medi2AI is not just a tool—it's the future of intelligent healthcare assistance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Mobile app for doctors-on-the-go",
                "Voice-enabled patient consultation summaries",
                "AI-driven personalized treatment plans",
                "Integration with telemedicine platforms"
              ].map((vision, index) => (
                <div key={index} className="bg-indigo-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="bg-indigo-100 p-2 rounded-full mr-3">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

export default Medi2AIProductPage;