import React from 'react';
import { Award, BookOpen, Users, Mail } from 'lucide-react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Alemayehu Teshome",
      position: "Dean of Medicine",
      specialization: "Cardiology & Internal Medicine",
      image: "https://images.pexels.com/photos/5214329/pexels-photo-5214329.jpeg?auto=compress&cs=tinysrgb&w=400",
      qualifications: "MD, PhD",
      experience: "20+ years",
      publications: 150,
      email: "alemayehu.t@uog.edu.et"
    },
    {
      name: "Prof. Sarah Mitchell",
      position: "Research Director",
      specialization: "Environmental Science & Climate Research",
      image: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=400",
      qualifications: "PhD, MSc",
      experience: "18+ years",
      publications: 120,
      email: "sarah.m@uog.edu.et"
    },
    {
      name: "Dr. Tekle Woldemichael",
      position: "Head of Engineering",
      specialization: "Mechanical Engineering & Innovation",
      image: "https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=400",
      qualifications: "PhD, MEng",
      experience: "15+ years",
      publications: 95,
      email: "tekle.w@uog.edu.et"
    },
    {
      name: "Dr. Rahel Getachew",
      position: "Department of Computer Science",
      specialization: "Artificial Intelligence & Machine Learning",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      qualifications: "PhD, MSc",
      experience: "12+ years",
      publications: 85,
      email: "rahel.g@uog.edu.et"
    },
    {
      name: "Prof. David Thompson",
      position: "International Programs Director",
      specialization: "Business Administration & Economics",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400",
      qualifications: "PhD, MBA",
      experience: "22+ years",
      publications: 130,
      email: "david.t@uog.edu.et"
    },
    {
      name: "Dr. Meron Tadesse",
      position: "Dean of Agriculture",
      specialization: "Sustainable Agriculture & Food Security",
      image: "https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&w=400",
      qualifications: "PhD, MSc",
      experience: "16+ years",
      publications: 110,
      email: "meron.t@uog.edu.et"
    }
  ];

  const stats = [
    { number: "850+", label: "Faculty Members", icon: Users },
    { number: "92%", label: "PhD Holders", icon: Award },
    { number: "2,500+", label: "Research Publications", icon: BookOpen },
    { number: "35", label: "Countries Represented", icon: Award }
  ];

  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Distinguished Faculty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn from world-class educators, researchers, and industry experts 
            who are committed to academic excellence and student success.
          </p>
        </div>

        {/* Faculty Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                  <IconComponent className="h-8 w-8 text-blue-700" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Featured Faculty */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Leading Academics
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-200 hover:border-blue-200"
              >
                <div className="text-center mb-6">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-white shadow-lg group-hover:ring-blue-200 transition-all"
                  />
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{faculty.name}</h4>
                  <p className="text-blue-700 font-medium mb-2">{faculty.position}</p>
                  <p className="text-gray-600 text-sm">{faculty.qualifications}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Specialization:</span>
                    <p className="text-gray-900">{faculty.specialization}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-700">{faculty.publications}</div>
                      <div className="text-xs text-gray-600">Publications</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{faculty.experience}</div>
                      <div className="text-xs text-gray-600">Experience</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <a
                    href={`mailto:${faculty.email}`}
                    className="flex items-center text-blue-700 hover:text-blue-800 font-medium transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Join Our Academic Community
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Explore opportunities to collaborate with our distinguished faculty 
            on groundbreaking research and innovative academic programs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Faculty Positions
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              Research Collaboration
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;