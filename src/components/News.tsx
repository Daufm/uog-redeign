import React, { useState } from 'react';
import { Calendar, ArrowRight, Filter } from 'lucide-react';

const News = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Academic', 'Research', 'Student Life', 'Events'];
  
  const newsItems = [
    {
      id: 1,
      category: 'Research',
      title: 'UoG Researchers Develop Groundbreaking Malaria Treatment',
      excerpt: 'Medical researchers at University of Gondar have developed a new treatment protocol that shows 95% effectiveness in malaria treatment.',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-15',
      readTime: '5 min read'
    },
    {
      id: 2,
      category: 'Academic',
      title: 'New Engineering Programs Launch Fall 2024',
      excerpt: 'The university announces three new engineering programs in renewable energy, biomedical engineering, and data science.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-12',
      readTime: '3 min read'
    },
    {
      id: 3,
      category: 'Student Life',
      title: 'International Student Exchange Program Expands',
      excerpt: 'UoG partners with 15 new universities worldwide, offering expanded opportunities for student exchange and cultural immersion.',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-10',
      readTime: '4 min read'
    },
    {
      id: 4,
      category: 'Events',
      title: 'Annual Innovation Summit 2024',
      excerpt: 'Join us for the largest innovation event in Ethiopia, featuring startup competitions, research presentations, and networking.',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-08',
      readTime: '2 min read'
    },
    {
      id: 5,
      category: 'Research',
      title: 'Climate Change Research Initiative Receives $2M Grant',
      excerpt: 'Major funding secured for comprehensive study on climate adaptation strategies for Ethiopian agriculture.',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-05',
      readTime: '6 min read'
    },
    {
      id: 6,
      category: 'Academic',
      title: 'Medical College Achieves International Accreditation',
      excerpt: 'The College of Medicine receives prestigious international accreditation, enhancing global recognition and partnerships.',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-03',
      readTime: '4 min read'
    }
  ];

  const filteredNews = activeFilter === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeFilter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed about the latest developments, achievements, and events 
            happening across the University of Gondar community.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center text-gray-600 mr-4">
            <Filter className="h-5 w-5 mr-2" />
            <span className="font-medium">Filter by:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-blue-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-700 border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                    item.category === 'Research' ? 'bg-blue-600' :
                    item.category === 'Academic' ? 'bg-green-600' :
                    item.category === 'Student Life' ? 'bg-purple-600' :
                    item.category === 'Events' ? 'bg-yellow-600' :
                    'bg-gray-600'
                  }`}>
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formatDate(item.date)}</span>
                  <span className="mx-2">•</span>
                  <span>{item.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center text-blue-700 font-medium group-hover:text-blue-800 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Connected
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about important 
            university news, events, and opportunities.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;