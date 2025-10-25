import React, { useEffect, useRef, useState } from 'react';
import '../../styles/ArtGallery.css'; // Import the CSS file for styling

const ArtGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const gridRef = useRef(null);
  const fullviewRef = useRef(null);
  const enterButtonRef = useRef(null);
  const contentRef = useRef(null);

  const gridData = [
    [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop", // Marketing Strategy
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop", // Team Collaboration
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Data Analytics
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", // Digital Marketing
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop", // Social Media
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", // SEO Optimization
    ],
    [
      "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&h=600&fit=crop", // Brand Identity
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop", // Creative Campaign
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop", // Target Audience
      "https://images.unsplash.com/photo-1551836026-d5c8c2c038d4?w=800&h=600&fit=crop", // Growth Marketing
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", // PPC Advertising
      "https://images.unsplash.com/photo-1551836026-d5c8c2c038d4?w=800&h=600&fit=crop", // Conversion Rate
    ],
    [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", // Content Marketing
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Marketing Analytics
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop", // Marketing Team
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop", // Social Media Ads
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop", // Marketing Strategy
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", // Digital Presence
    ],
    [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop", // Creative Design
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop", // Market Research
      "https://images.unsplash.com/photo-1551836026-d5c8c2c038d4?w=800&h=600&fit=crop", // Business Growth
      "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&h=600&fit=crop", // Brand Development
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", // Online Advertising
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Performance Metrics
    ],
    [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop", // Social Marketing
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", // Web Optimization
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop", // Marketing Planning
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop", // Agency Work
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop", // Customer Engagement
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop", // Ad Campaign
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
    <div className={`art-gallery-component ${isOpen ? 'art-gallery-open' : ''}`}>
        <style>{/* ... same styles ... */}</style>

        <main className="art-gallery-main">
          <section className={`art-gallery-intro ${isOpen ? 'art-gallery-intro-open' : ''}`}>
            <div className="art-gallery-grid" ref={gridRef}>
              {gridData.map((row, rowIndex) => (
                <div key={rowIndex} className="art-gallery-row">
                  {row.map((imgUrl, itemIndex) => (
                    <div key={itemIndex} className="art-gallery-item">
                      <div className="art-gallery-item-inner">
                        <img
                          src={imgUrl}
                          alt={`Art Gallery ${rowIndex + 1}-${itemIndex + 1}`}
                          className="art-gallery-img"
                          loading="lazy"
                          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="art-gallery-fullview" ref={fullviewRef} />
          </section>
        </main>
    </div>
);
};

export default ArtGallery;