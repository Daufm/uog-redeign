import React from 'react';
import { BookOpen, Microscope, Stethoscope, Cpu, Briefcase, FlaskConical } from 'lucide-react';

const Academics = () => {
  const colleges = [
    {
      icon: Stethoscope,
      name: "College of Medicine & Health Sciences",
      description: "Leading medical education and healthcare innovation in Ethiopia",
      programs: ["Medicine", "Nursing", "Pharmacy", "Public Health"],
      students: "12,000+",
      color: "bg-red-50 border-red-200"
    },
    {
      icon: Cpu,
      name: "College of Natural & Computational Sciences",
      description: "Advancing technology and scientific research for the future",
      programs: ["Computer Science", "Mathematics", "Physics", "Chemistry"],
      students: "8,500+",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: Briefcase,
      name: "College of Business & Economics",
      description: "Developing future business leaders and entrepreneurs",
      programs: ["Business Administration", "Economics", "Accounting", "Management"],
      students: "15,000+",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: FlaskConical,
      name: "College of Agriculture & Environmental Sciences",
      description: "Sustainable agriculture and environmental conservation",
      programs: ["Agriculture", "Environmental Science", "Animal Science", "Plant Science"],
      students: "6,200+",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      icon: BookOpen,
      name: "College of Social Sciences & Humanities",
      description: "Understanding society, culture, and human development",
      programs: ["Psychology", "Sociology", "History", "Languages"],
      students: "9,800+",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: Microscope,
      name: "College of Veterinary Medicine",
      description: "Excellence in animal health and veterinary sciences",
      programs: ["Veterinary Medicine", "Animal Health", "Veterinary Surgery"],
      students: "2,500+",
      color: "bg-indigo-50 border-indigo-200"
    }
  ];

  return (
    <section id="academics" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Academic Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover world-class education across 13 colleges and institutes, 
            offering comprehensive programs that prepare students for leadership in their fields.
          </p>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {colleges.map((college, index) => {
            const IconComponent = college.icon;
            return (
              <div
                key={index}
                className={`${college.color} rounded-xl p-8 border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer`}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-white p-3 rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-blue-700" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {college.name}
                </h3>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {college.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {college.programs.slice(0, 3).map((program) => (
                      <span
                        key={program}
                        className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700"
                      >
                        {program}
                      </span>
                    ))}
                    {college.programs.length > 3 && (
                      <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-500">
                        +{college.programs.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-700">{college.students}</span>
                  <span className="text-sm text-gray-600">Students</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Program Highlights */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose University of Gondar?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <BookOpen className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Research Excellence</h4>
                    <p className="text-gray-600">Leading research initiatives addressing real-world challenges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Microscope className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Modern Facilities</h4>
                    <p className="text-gray-600">State-of-the-art laboratories and learning environments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-2 rounded-lg">
                    <Stethoscope className="h-6 w-6 text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expert Faculty</h4>
                    <p className="text-gray-600">Learn from distinguished professors and industry experts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students in laboratory"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;