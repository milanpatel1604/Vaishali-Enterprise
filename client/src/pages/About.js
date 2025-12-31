import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaAward, 
  FaUsers, 
  FaCheckCircle, 
  FaLeaf,
  FaShieldAlt,
  FaStar
} from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { number: 20, suffix: '+', label: 'Years Experience', icon: <FaAward />, color: '#ff6b6b' },
    { number: 1000, suffix: '+', label: 'Happy Customers', icon: <FaUsers />, color: '#4ecdc4' },
    { number: 500, suffix: '+', label: 'Product Designs', icon: <FaStar />, color: '#ffd93d' },
    { number: 100, suffix: '%', label: 'Quality Assured', icon: <FaShieldAlt />, color: '#6bcf7f' }
  ];

  // Animated Counter Component
  const AnimatedCounter = ({ end, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        { threshold: 0.3 }
      );

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => {
        if (counterRef.current) {
          observer.unobserve(counterRef.current);
        }
      };
    }, []);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        const currentCount = Math.floor(easeOutQuart * end);
        
        setCount(currentCount);

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [isVisible, end, duration]);

    return (
      <span ref={counterRef}>
        {count}{suffix}
      </span>
    );
  };

  const values = [
    {
      icon: <FaCheckCircle />,
      title: 'Quality First',
      description: 'We never compromise on the quality of our laminates. Every product undergoes rigorous quality checks.'
    },
    {
      icon: <FaUsers />,
      title: 'Customer Satisfaction',
      description: 'Our customers are at the heart of everything we do. Their satisfaction is our ultimate goal.'
    },
    {
      icon: <FaLeaf />,
      title: 'Eco-Friendly',
      description: 'We are committed to sustainable practices and environmentally friendly manufacturing.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Trust & Reliability',
      description: 'Building long-term relationships through consistent quality and reliable service.'
    }
  ];

  const timeline = [
    {
      year: '2004',
      title: 'Company Founded',
      description: 'Vaishali Enterprise was established with a vision to provide premium quality laminates.'
    },
    {
      year: '2012',
      title: 'Expansion',
      description: 'Expanded our product range to include A & B grade laminates with diverse finishes.'
    },
    {
      year: '2016',
      title: 'Market Leader',
      description: 'Became one of the leading laminate suppliers in the region with 500+ satisfied customers.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched our online platform to serve customers across India.'
    },
    {
      year: '2025',
      title: 'Innovation & Growth',
      description: 'Continuing to innovate with new designs and sustainable manufacturing practices.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="page-header about-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>About Vaishali Enterprise</h1>
            <p>Your Trusted Partner for Premium Quality Laminates</p>
          </motion.div>
        </div>
      </div>

      {/* Company Story */}
      <section className="company-story section">
        <div className="container">
          <div className="story-content">
            <motion.div 
              className="story-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-title left-align">
                <h2>Our Story</h2>
                <div className="underline"></div>
              </div>
              <p>
                Founded in 2004, <strong>Vaishali Enterprise</strong> has been a trusted name in 
                providing premium quality laminates across India. What started as a small venture 
                has grown into a leading supplier in the laminate industry.
              </p>
              <p>
                We specialize in A and B grade laminates with diverse finishes including high gloss, 
                matte, textured, wood finish, and digital prints. With over 1000 satisfied customers, 
                we're committed to delivering excellence in every project.
              </p>
            </motion.div>

            <motion.div 
              className="story-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=600&fit=crop" 
                alt="Our Office" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Redesigned */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid-new">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card-new"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="stat-card-inner">
                  <div className="stat-icon-wrapper" style={{ backgroundColor: `${stat.color}20` }}>
                    <div className="stat-icon-new" style={{ color: stat.color }}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="stat-content-new">
                    <h3 className="stat-number-new" style={{ color: stat.color }}>
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </h3>
                    <p className="stat-label-new">{stat.label}</p>
                  </div>
                  <div className="stat-decoration" style={{ background: `linear-gradient(135deg, ${stat.color}40, transparent)` }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values-section section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <div className="underline"></div>
            <p className="subtitle">The principles that guide everything we do</p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section section">
        <div className="container">
          <div className="section-title">
            <h2>Our Journey</h2>
            <div className="underline"></div>
            <p className="subtitle">Milestones that define our growth</p>
          </div>

          <div className="timeline">
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="timeline-content">
                  <span className="timeline-year">{event.year}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section section">
        <div className="container">
          <div className="why-content">
            <motion.div 
              className="why-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600" 
                alt="Team" 
              />
            </motion.div>

            <motion.div 
              className="why-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-title left-align">
                <h2>Why Choose Us?</h2>
                <div className="underline"></div>
              </div>
              <ul className="why-list">
                <li><FaCheckCircle /> Wide variety of A & B grade laminates</li>
                <li><FaCheckCircle /> Premium quality at competitive prices</li>
                <li><FaCheckCircle /> Expert consultation and design assistance</li>
                <li><FaCheckCircle /> Quick delivery across India</li>
                <li><FaCheckCircle /> Durable and long-lasting products</li>
                <li><FaCheckCircle /> Eco-friendly and sustainable</li>
                <li><FaCheckCircle /> 24/7 customer support</li>
                <li><FaCheckCircle /> Trusted by 1000+ customers</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
