import React, { useEffect, useState } from 'react';

const ArtGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const gridData = [
    [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    ],
    [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    ],
    [
      "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop",
    ]
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const enterFullview = () => {
    setIsOpen(true);
  };

  return (
    <div className={`min-h-screen bg-black overflow-x-hidden ${isOpen ? 'overflow-hidden' : ''}`}>
      <main className="w-full">
        {/* Mobile View - 3x3 Grid */}
        {isMobile && (
          <section className="relative min-h-screen flex items-center justify-center p-4 bg-black">
            {/* 3x3 Grid */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-md">
              {gridData.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {row.map((imgUrl, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="aspect-square"
                    >
                      <div className="w-full h-full rounded-lg overflow-hidden transition-transform duration-300 active:scale-95">
                        <div
                          className="w-full h-full bg-cover bg-center bg-gray-900 transition-all duration-500 opacity-60 grayscale-[20%] active:opacity-90 active:grayscale-0 active:scale-105"
                          style={{ backgroundImage: `url(${imgUrl})` }}
                        />
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>

            {/* Explore Button */}
            {!isOpen && (
              <button
                onClick={enterFullview}
                className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wider shadow-lg shadow-indigo-500/40 transition-all duration-300 z-50 opacity-90 active:scale-95"
              >
                <span>Explore</span>
              </button>
            )}
          </section>
        )}

        {/* Desktop View */}
        {!isMobile && (
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Grid */}
            <div className={`flex flex-col gap-4 w-full p-8 transition-opacity duration-500 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              {gridData.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-4">
                  {row.map((imgUrl, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="flex-1 h-[18vh] min-w-[200px]"
                    >
                      <div className="w-full h-full rounded-lg overflow-hidden transition-transform duration-300 cursor-pointer hover:scale-105">
                        <div
                          className="w-full h-full bg-cover bg-center bg-gray-900 transition-all duration-500 opacity-40 grayscale-[30%] hover:opacity-90 hover:grayscale-0 hover:brightness-110 hover:scale-110"
                          style={{ backgroundImage: `url(${imgUrl})` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Fullview Overlay */}
            <div 
              className={`fixed inset-0 bg-black bg-opacity-95 z-50 transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Explore Button */}
            {!isOpen && (
              <button
                onClick={enterFullview}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-12 py-4 rounded-full font-semibold text-base uppercase tracking-wider shadow-lg shadow-indigo-500/40 transition-all duration-300 z-50 opacity-90 hover:opacity-100 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/60 active:translate-y-0"
              >
                <span>Explore</span>
              </button>
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default ArtGallery;