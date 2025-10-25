import React, { useState, useRef, useEffect } from 'react';
import '../../styles/flip.css'; // Use the scoped CSS file

const FlipCard = ({ 
  type = "default",
  imgSrc, 
  avatarSrc, 
  cardBackImgSrc,
  title,
  subTitle,
  bio,
  stats,
  ctaText,
  badge,
  targetId 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardData = {
    default: {
      title: "Digital Marketing Pro",
      subTitle: "@MarketingExpert",
      bio: "Boost your brand with data-driven strategies that deliver real results. Let's grow together!",
      stats: "89% ROI",
      ctaText: "Get Free Audit",
      badge: "Featured"
    },
    social: {
      title: "Social Media Guru",
      subTitle: "@SocialBoost",
      bio: "Transform your social presence with viral content strategies that engage and convert.",
      stats: "2.3M Reach",
      ctaText: "Boost Engagement",
      badge: "Trending"
    },
    seo: {
      title: "SEO Specialist",
      subTitle: "@SearchMaster",
      bio: "Dominate search rankings with white-hat SEO techniques that drive organic traffic.",
      stats: "#1 Ranking",
      ctaText: "Analyze Site",
      badge: "Expert"
    },
    ppc: {
      title: "PPC Advertising",
      subTitle: "@AdCampaigns",
      bio: "Maximize your ad spend with precision targeting and conversion-optimized campaigns.",
      stats: "45% Lower CPA",
      ctaText: "Start Campaign",
      badge: "Hot"
    },
    content: {
      title: "Content Strategist",
      subTitle: "@ContentKing",
      bio: "Create compelling content that resonates with your audience and drives action.",
      stats: "3x Engagement",
      ctaText: "Content Plan",
      badge: "Popular"
    },
    analytics: {
      title: "Analytics Pro",
      subTitle: "@DataDriven",
      bio: "Turn data into decisions with advanced analytics and actionable insights.",
      stats: "92% Accuracy",
      ctaText: "Get Insights",
      badge: "Premium"
    }
  };

  const currentData = cardData[type] || cardData.default;

  return (
    <div 
      className={`flipperContainer ${isFlipped ? 'hover' : ''} ${type}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flipper">
        {/* Front of Card - Advertising Offer */}
        <div className="cardFront cardContainer">
          {badge && <div className="adBadge">{badge}</div>}
          <CardImg imgSrc={imgSrc} />
          <CardAvatar avatarSrc={avatarSrc} />
          <CardTitle 
            targetId={targetId} 
            title={currentData.title} 
            subTitle={currentData.subTitle} 
          />
          <CardStats stats={currentData.stats} />
          <CardBio bio={currentData.bio} />
          <CardCTAButton ctaText={currentData.ctaText} />
          <CardSocialIcons />
        </div>
        
        {/* Back of Card - Detailed Offer */}
        <div className="cardBack adCardBack">
          <img className="cardBackImg" src={cardBackImgSrc} alt="Advertising offer" />
          <div className="adDetails">
            <h3 className="adTitle">Special Offer</h3>
            <div className="adFeatures">
              <div className="feature">
                <span className="featureIcon">✓</span>
                <span>Free Strategy Session</span>
              </div>
              <div className="feature">
                <span className="featureIcon">✓</span>
                <span>Competitor Analysis</span>
              </div>
              <div className="feature">
                <span className="featureIcon">✓</span>
                <span>Custom Action Plan</span>
              </div>
            </div>
            <div className="adPricing">
              <span className="originalPrice">$499</span>
              <span className="currentPrice">FREE</span>
            </div>
            <button className="adCtaButton">Claim Offer Now</button>
            <p className="limitedTime">Limited Time Offer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-components
const CardImg = ({ imgSrc }) => (
  <div className="imgContainer">
    <img src={imgSrc} className="img" alt="Advertising background" />
    <div className="imgOverlay"></div>
  </div>
);

const CardAvatar = ({ avatarSrc }) => (
  <div className="avatarContainer">
    <img src={avatarSrc} alt="Expert avatar" />
    <div className="onlineIndicator"></div>
  </div>
);

const CardTitle = ({ targetId, title, subTitle }) => (
  <div className="titleDiv">
    <h1 id={targetId} className="title">{title}</h1>
    <h4 className="subTitle">{subTitle}</h4>
  </div>
);

const CardStats = ({ stats }) => (
  <div className="statsContainer">
    <div className="statsBubble">
      <span className="statsText">{stats}</span>
    </div>
  </div>
);

const CardBio = ({ bio }) => (
  <div className="bioContainer">
    <p className="bio">{bio}</p>
  </div>
);

const CardCTAButton = ({ ctaText }) => (
  <button className="ctaButton">
    {ctaText}
    <span className="ctaArrow">→</span>
  </button>
);

const CardSocialIcons = () => (
  <div className="iconsContainer">
    <span className="icon verified" title="Verified">
      <i className="fas fa-badge-check"></i>
    </span>
    <span className="icon" title="LinkedIn">
      <i className="fab fa-linkedin"></i>
    </span>
    <span className="icon" title="Portfolio">
      <i className="fas fa-briefcase"></i>
    </span>
    <span className="icon" title="Reviews">
      <i className="fas fa-star"></i>
    </span>
  </div>
);

// Main container component with advertising content
const FlipCardContainer = () => {
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const advertisingCards = [
    {
      type: "default",
      imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      avatarSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      cardBackImgSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
      targetId: "marketing",
      category: "marketing"
    },
    {
      type: "social",
      imgSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      avatarSrc: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      cardBackImgSrc: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&h=300&fit=crop",
      targetId: "social",
      category: "social"
    },
    {
      type: "seo",
      imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      cardBackImgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      targetId: "seo",
      category: "seo"
    },
    {
      type: "ppc",
      imgSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      avatarSrc: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
      cardBackImgSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      targetId: "ppc",
      category: "ppc"
    },
    {
      type: "content",
      imgSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      avatarSrc: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      cardBackImgSrc: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop",
      targetId: "content",
      category: "content"
    },
    {
      type: "analytics",
      imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      cardBackImgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      targetId: "analytics",
      category: "analytics"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'social', name: 'Social Media' },
    { id: 'seo', name: 'SEO' },
    { id: 'ppc', name: 'PPC Ads' },
    { id: 'content', name: 'Content' },
    { id: 'analytics', name: 'Analytics' }
  ];

  const filteredCards = activeFilter === 'all' 
    ? advertisingCards 
    : advertisingCards.filter(card => card.category === activeFilter);

  const duplicatedCards = [...filteredCards, ...filteredCards, ...filteredCards];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || !isAutoScrolling || isPaused) return;

    let scrollSpeed = 1;
    let animationId;

    const autoScroll = () => {
      if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 3)) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isAutoScrolling, isPaused, activeFilter]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="flip-card-section" style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <div className="cardApp">
        <div className="sectionHeader">
          <h1 className="header">Meet Our Advertising Experts</h1>
          <p className="subHeader">Hover to discover special offers • Scroll to explore services</p>
        </div>

        {/* Category Filters */}
        <div className="categoryFilters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filterBtn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="scroll-container-wrapper">
          <div 
            ref={scrollContainerRef}
            className="cardsScrollContainer horizontal"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div className="cardsRow">
              {duplicatedCards.map((card, index) => (
                <div key={index} className="cardWrapper">
                  <FlipCard {...card} />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlays */}
          <div className="scroll-gradient left" />
          <div className="scroll-gradient right" />
        </div>

        {/* Scroll indicators */}
        <div className="scrollIndicators horizontal">
          <button 
            className="scrollBtn"
            onClick={() => {
              scrollContainerRef.current.scrollLeft -= 400;
            }}
          >
            ←
          </button>
          <span className="scrollHint">Discover Advertising Solutions</span>
          <button 
            className="scrollBtn"
            onClick={() => {
              scrollContainerRef.current.scrollLeft += 400;
            }}
          >
            →
          </button>
        </div>

        {/* Stats Section */}
        <div className="statsSection">
          <div className="statItem">
            <div className="statNumber">500+</div>
            <div className="statLabel">Happy Clients</div>
          </div>
          <div className="statItem">
            <div className="statNumber">89%</div>
            <div className="statLabel">Average ROI</div>
          </div>
          <div className="statItem">
            <div className="statNumber">24/7</div>
            <div className="statLabel">Support</div>
          </div>
          <div className="statItem">
            <div className="statNumber">15+</div>
            <div className="statLabel">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCardContainer;