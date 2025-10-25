import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { FadeInWhenVisible } from '../../utils/animation';
import helpers from '@/utils/helpers';
import { testimonialsData as testimonials } from '../../hooks/landingApi';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const cardsRef = useRef([]);
  const sceneRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      alpha: true,
      antialias: true 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    // Create floating geometric shapes
    const geometries = [
      new THREE.OctahedronGeometry(0.5),
      new THREE.TorusGeometry(0.3, 0.1, 16, 100),
      new THREE.IcosahedronGeometry(0.4),
      new THREE.ConeGeometry(0.3, 0.8, 8)
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0x00ffff, 
        transparent: true, 
        opacity: 0.3,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x9d4edd, 
        transparent: true, 
        opacity: 0.2,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xff6b6b, 
        transparent: true, 
        opacity: 0.25,
        wireframe: true 
      })
    ];

    const shapes = [];
    
    // Create multiple floating shapes
    for (let i = 0; i < 8; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.x = (Math.random() - 0.5) * 10;
      mesh.position.y = (Math.random() - 0.5) * 10;
      mesh.position.z = (Math.random() - 0.5) * 5;
      
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      
      scene.add(mesh);
      shapes.push({
        mesh,
        speed: Math.random() * 0.02 + 0.01,
        amplitude: Math.random() * 0.5 + 0.3
      });
    }

    // Create particle system
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 500;
    
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 10;
      
      // Cyan to purple gradient colors
      const color = new THREE.Color();
      color.setHSL(0.5 + Math.random() * 0.2, 0.8, 0.6);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.6
    });
    
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Animation function
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      // Animate shapes
      shapes.forEach((shape, index) => {
        shape.mesh.rotation.x += shape.speed;
        shape.mesh.rotation.y += shape.speed * 0.7;
        shape.mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.005;
      });
      
      // Animate particles
      const positions = particleGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += 0.01;
        if (positions[i + 1] > 10) {
          positions[i + 1] = -10;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // GSAP animations for 2D elements
    const ctx = gsap.context(() => {
      // Background particles animation
      gsap.to(particlesRef.current, {
        y: -20,
        rotation: 360,
        duration: 4,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Floating cards animation
      cardsRef.current.forEach((card, index) => {
        gsap.to(card, {
          y: -10,
          rotation: Math.random() * 1 - 0.5,
          duration: 2 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.2
        });
      });

    }, sectionRef);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
      ctx.revert();
      renderer.dispose();
    };
  }, []);

  const addToParticles = (el) => {
    if (el && !particlesRef.current.includes(el)) {
      particlesRef.current.push(el);
    }
  };

  const addToCards = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden"
    >
      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.4 }}
      />

      {/* Enhanced 2D Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-[#0a0a0a]/90 to-black/80">
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(125, 86, 86, 0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px] transform rotate-12" />
        </div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            ref={addToParticles}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Animated Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/5 to-transparent" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeInWhenVisible>
          <div className="text-center mb-20">
            <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase mb-4 inline-block">
              Success Stories
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mt-4 mb-6">
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how businesses like yours are achieving remarkable results
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeInWhenVisible key={testimonial.id} delay={helpers.getAnimationDelay(index)}>
              <div 
                ref={addToCards}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400/20 rounded-full blur-sm group-hover:bg-cyan-400/40 transition-colors duration-300" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400/20 rounded-full blur-sm group-hover:bg-purple-400/40 transition-colors duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span 
                        key={i} 
                        className="text-yellow-400 text-xl hover:scale-110 transition-transform duration-200"
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-200 text-lg mb-6 leading-relaxed italic group-hover:text-white transition-colors duration-300">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="relative w-14 h-14 mr-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold text-xl shadow-lg shadow-cyan-500/20 relative z-10 group-hover:scale-110 transition-transform duration-300">
                        {testimonial.avatar}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                        {testimonial.role}
                      </div>
                      {testimonial.company && (
                        <div className="text-xs text-cyan-400 mt-1">
                          {testimonial.company}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <FadeInWhenVisible delay={0.8}>
          <div className="text-center mt-20 p-12 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 hover:border-cyan-400/20 transition-all duration-500 relative overflow-hidden group">
            {/* Animated background elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl group-hover:bg-cyan-400/20 transition-all duration-700" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl group-hover:bg-purple-400/20 transition-all duration-700" />
            
            <h3 className="text-3xl font-bold text-white mb-6 relative z-10">
              Ready to Join Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Success Stories</span>?
            </h3>
            <p className="text-xl text-gray-300 mb-8 relative z-10 max-w-2xl mx-auto">
              Transform your business with our proven solutions and join hundreds of satisfied clients
            </p>
            <button 
              className="relative bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 transform hover:scale-105 overflow-hidden group"
              onMouseEnter={(e) => {
                gsap.to(e.target, {
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.target, {
                  scale: 1,
                  boxShadow: "0 0px 0px rgba(6, 182, 212, 0)",
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
            >
              <span className="relative z-10">Start Your Journey Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </button>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Testimonials;