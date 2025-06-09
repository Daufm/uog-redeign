import React, { useState } from 'react';
import { MapPin, Users, Calendar, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

const Campus = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const campusImages = [
    {
      url: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Main Campus Grounds"
    },
    {
      url: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Modern Library Complex"
    },
    {
      url: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Student Activity Center"
    },
    {
      url: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920",
      caption: "Engineering Laboratories"
    }
  ];

  const facilities = [
    {
      icon: "🏥",
      name: "University Hospital",
      description: "State-of-the-art medical facility serving the community"
    },
    {
      icon: "📚",
      name: "Central Library",
      description: "Over 500,000 books and digital resources"
    },
    {
      icon: "🔬",
      name: "Research Centers",
      description: "Advanced laboratories for cutting-edge research"
    },
    {
      icon: "🏃‍♂️",
      name: "Sports Complex",
      description: "Olympic-standard facilities for athletics"
    },
    {
      icon: "🍽️",
      name: "Dining Halls",
      description: "Multiple dining options across campus"
    },
    {
      icon: "🏠",
      name: "Student Housing",
      description: "Comfortable accommodation for 15,000+ students"
    }
  ];

  const studentLife = [
    {
      title: "Cultural Diversity",
      description: "Students from over 50 ethnic groups create a vibrant multicultural community",
      icon: Users,
      stat: "50+"
    },
    {
      title: "Student Organizations",
      description: "Over 100 clubs and societies for academic, cultural, and recreational activities",
      icon: Trophy,
      stat: "100+"
    },
    {
      title: "Annual Events",
      description: "Festivals, conferences, and competitions throughout the academic year",
      icon: Calendar,
      stat: "200+"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % campusImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + campusImages.length) % campusImages.length);
  };

  return (
    <section id="campus" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Campus Life & Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover a vibrant campus community where academic excellence meets 
            rich cultural experiences, modern facilities, and lifelong friendships.
          </p>
        </div>

        {/* Campus Gallery */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-96 md:h-[500px]">
              <img
                src={campusImages[currentSlide].url}
                alt={campusImages[currentSlide].caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
              
              {/* Caption */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{campusImages[currentSlide].caption}</h3>
                <div className="flex space-x-2">
                  {campusImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlide ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Facilities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            World-Class Facilities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
              >
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{facility.name}</h4>
                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Student Life Stats */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Discover Student Life
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentLife.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-200"
                >
                  <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
                    <IconComponent className="h-8 w-8 text-blue-700" />
                  </div>
                  <div className="text-4xl font-bold text-blue-700 mb-2">{item.stat}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Location Info */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 text-blue-700 mr-3" />
                <h3 className="text-3xl font-bold text-gray-900">Our Location</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Historic City of Gondar</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Located in the historic city of Gondar, our campus is surrounded by 
                    UNESCO World Heritage sites, including the famous Fasil Ghebbi castle complex.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Strategic Location</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Positioned in the Amhara Region, the university serves as a hub for 
                    education and research in northern Ethiopia, with easy access to major cities.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Campus Size</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Spanning over 400 hectares, our expansive campus provides ample space 
                    for academic buildings, research facilities, and recreational areas.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gondar cityscape"
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

export default Campus;