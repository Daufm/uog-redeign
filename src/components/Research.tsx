import React from 'react';
import { Microscope, Globe, Lightbulb, TrendingUp, Users, BookOpen } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      icon: Microscope,
      title: "Health Sciences Research",
      description: "Advancing medical knowledge and healthcare solutions for Africa",
      projects: 45,
      publications: 120
    },
    {
      icon: Globe,
      title: "Environmental Studies",
      description: "Climate change adaptation and sustainable development research",
      projects: 28,
      publications: 85
    },
    {
      icon: Lightbulb,
      title: "Technology Innovation",
      description: "AI, machine learning, and digital transformation research",
      projects: 32,
      publications: 95
    },
    {
      icon: TrendingUp,
      title: "Agricultural Development",
      description: "Food security and sustainable farming practices",
      projects: 38,
      publications: 78
    }
  ];

  const achievements = [
    { number: "500+", label: "Research Projects" },
    { number: "1,200+", label: "Publications" },
    { number: "150+", label: "Research Partners" },
    { number: "25", label: "Patents Filed" }
  ];

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Research & Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pioneering research that addresses Ethiopia's challenges and contributes to global knowledge, 
            driving innovation and sustainable development across multiple disciplines.
          </p>
        </div>

        {/* Research Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {researchAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-2 group border border-gray-200 hover:border-blue-200"
              >
                <div className="bg-white p-4 rounded-lg shadow-sm mb-6 group-hover:shadow-md transition-shadow inline-block">
                  <IconComponent className="h-8 w-8 text-blue-700" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {area.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-700">{area.projects}</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{area.publications}</div>
                    <div className="text-sm text-gray-600">Publications</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Research Highlights */}
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Leading Research Impact
              </h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Our research initiatives have contributed significantly to academic knowledge and practical solutions, 
                with partnerships spanning across continents and disciplines.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-blue-100">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Research laboratory"
                className="rounded-xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Research Centers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="bg-red-100 p-3 rounded-lg inline-block mb-4">
              <Users className="h-8 w-8 text-red-700" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Research Collaboration Center
            </h3>
            <p className="text-gray-600 mb-4">
              Facilitating partnerships with international institutions and industry leaders.
            </p>
            <div className="text-blue-700 font-medium">Learn More →</div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
              <BookOpen className="h-8 w-8 text-green-700" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Innovation Hub
            </h3>
            <p className="text-gray-600 mb-4">
              Supporting student and faculty entrepreneurship and technology transfer.
            </p>
            <div className="text-blue-700 font-medium">Learn More →</div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="bg-yellow-100 p-3 rounded-lg inline-block mb-4">
              <Lightbulb className="h-8 w-8 text-yellow-700" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Graduate Research School
            </h3>
            <p className="text-gray-600 mb-4">
              Advanced research training and PhD programs across all disciplines.
            </p>
            <div className="text-blue-700 font-medium">Learn More →</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;