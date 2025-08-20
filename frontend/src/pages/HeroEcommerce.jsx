import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Smartphone, Zap, Shirt, Trophy, ShoppingBag, ArrowRight, Star } from 'lucide-react';

const EcommerceHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Latest Electronics",
      subtitle: "Tech That Transforms",
      description: "Discover cutting-edge gadgets and electronics that revolutionize your digital lifestyle",
      cta: "Shop Electronics",
      gradient: "from-blue-600 via-purple-600 to-indigo-800",
      icon: <Smartphone className="w-16 h-16 text-white" />,
      decorativeText: "NEW ARRIVALS"
    },
    {
      id: 2,
      title: "Sports & Fitness",
      subtitle: "Unleash Your Potential",
      description: "Premium sports gear and equipment to help you achieve your fitness goals",
      cta: "Shop Sports",
      gradient: "from-orange-500 via-red-500 to-pink-600",
      icon: <Trophy className="w-16 h-16 text-white" />,
      decorativeText: "BEST SELLERS"
    },
    {
      id: 3,
      title: "Fashion & Clothing",
      subtitle: "Style Redefined",
      description: "Trendy clothing and accessories that express your unique personality",
      cta: "Shop Fashion",
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      icon: <Shirt className="w-16 h-16 text-white" />,
      decorativeText: "TRENDING"
    }
  ];

  const categoryBanners = [
    {
      category: "Electronics",
      title: "Smart Gadgets",
      offer: "Up to 40% OFF",
      bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
      icon: <Zap className="w-8 h-8 text-white" />,
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      category: "Sports",
      title: "Fitness Gear",
      offer: "Best Prices",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-600",
      icon: <Trophy className="w-8 h-8 text-white" />,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      category: "Clothing",
      title: "Latest Trends",
      offer: "New Collection",
      bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
      icon: <Shirt className="w-8 h-8 text-white" />,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="relative">
      {/* Main Hero Carousel */}
      <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div className={`w-full h-full bg-gradient-to-r ${slide.gradient} relative`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
                  backgroundSize: '50px 50px'
                }}></div>
              </div>

              {/* Content Container */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                    {/* Text Content */}
                    <div className="text-white space-y-6">
                      {/* Decorative Badge */}
                      <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                        <Star className="w-4 h-4" />
                        <span>{slide.decorativeText}</span>
                      </div>

                      <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                        {slide.title}
                      </h1>
                      
                      <h2 className="text-2xl lg:text-3xl font-light text-white/90">
                        {slide.subtitle}
                      </h2>
                      
                      <p className="text-lg lg:text-xl text-white/80 max-w-md leading-relaxed">
                        {slide.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2">
                          <span>{slide.cta}</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                        
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                          Learn More
                        </button>
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className="flex justify-center lg:justify-end">
                      <div className="relative">
                        <div className="w-64 h-64 lg:w-80 lg:h-80 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-500">
                          {slide.icon}
                        </div>
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full animate-pulse"></div>
                        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full animate-pulse delay-1000"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200 z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200 z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Category Banners Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Shop By Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections designed for every lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoryBanners.map((banner, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <img
                    src={banner.image}
                    alt={banner.category}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 ${banner.bgColor} bg-opacity-80`}></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {banner.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{banner.category}</h3>
                    <p className="text-lg mb-2 opacity-90">{banner.title}</p>
                    <span className="text-xl font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                      {banner.offer}
                    </span>
                    
                    <button className="group/btn bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center space-x-2 transform hover:scale-105">
                      <ShoppingBag className="w-5 h-5" />
                      <span>Shop Now</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Promotional Strip */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center space-x-8 text-white text-sm font-medium">
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Free Shipping on Orders $50+</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>30-Day Easy Returns</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>24/7 Customer Support</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceHero;