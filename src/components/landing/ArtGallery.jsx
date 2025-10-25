import React, { useEffect, useState } from 'react';
import { FaGooglePlay, FaAndroid } from "react-icons/fa";

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

  const downloadFromGooglePlay = () => {
    // Add your Google Play store link here
    window.open('https://play.google.com/store/apps/details?id=your.app.id', '_blank');
  };

  const downloadAPK = () => {
    // Add your APK download link here
    window.open('https://your-domain.com/your-app.apk', '_blank');
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

            {/* Download Buttons */}
            {!isOpen && (
              <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col gap-3 z-50 w-full max-w-md px-4">
                {/* Google Play Button */}
                <button
                  onClick={downloadFromGooglePlay}
                  className="w-full bg-gradient-to-br from-green-500 to-green-600 text-white px-6 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider shadow-lg shadow-green-500/40 transition-all duration-300 opacity-90 active:scale-95 flex items-center justify-center gap-3"
                >
                  <FaGooglePlay className="text-xl" />
                  <div className="text-left">
                    <div className="text-xs font-normal">GET IT ON</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </button>

                {/* Android APK Button */}
                <button
                  onClick={downloadAPK}
                  className="w-full bg-gradient-to-br from-gray-700 to-gray-800 text-white px-6 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider shadow-lg shadow-gray-500/40 transition-all duration-300 opacity-90 active:scale-95 flex items-center justify-center gap-3"
                >
                  <FaAndroid className="text-xl" />
                  <div className="text-left">
                    <div className="text-xs font-normal">DOWNLOAD</div>
                    <div className="text-lg font-bold">Android APK</div>
                  </div>
                </button>
              </div>
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

            {/* Download Buttons */}
            {!isOpen && (
              <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
                {/* Google Play Button */}
                <button
                  onClick={downloadFromGooglePlay}
                  className="bg-gradient-to-br from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider shadow-lg shadow-green-500/40 transition-all duration-300 opacity-90 hover:opacity-100 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/60 active:translate-y-0 flex items-center gap-3"
                >
                  <FaGooglePlay className="text-2xl" />
                  <div className="text-left">
                    <div className="text-xs font-normal">GET IT ON</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </button>

                {/* Android APK Button */}
                <button
                  onClick={downloadAPK}
                  className="bg-gradient-to-br from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider shadow-lg shadow-gray-500/40 transition-all duration-300 opacity-90 hover:opacity-100 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-500/60 active:translate-y-0 flex items-center gap-3"
                >
                  <FaAndroid className="text-2xl" />
                  <div className="text-left">
                    <div className="text-xs font-normal">DOWNLOAD</div>
                    <div className="text-lg font-bold">Android APK</div>
                  </div>
                </button>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default ArtGallery;