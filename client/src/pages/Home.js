import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaStar, 
  FaShieldAlt, 
  FaTruck, 
  FaHeadset,
  FaArrowRight,
  FaCheckCircle 
} from 'react-icons/fa';
import axios from 'axios';
import './Home.css';

const Home = ({ onExpertClick }) => {
  const featuredLaminates = [
    {
      id: 1,
      name: 'Bleached Cork',
      category: 'Natural Textures',
      description: 'A refined natural cork texture with bleached finish, perfect for creating warm, organic spaces.',
      designImage: '/images/products/fancy_usages/Bleeched_cork.png',
      usageImage: '/images/products/fancy_usages/Bleeched_cork_usage.png',
      features: ['Eco-friendly', 'Sound absorption', 'Warm aesthetic']
    },
    {
      id: 2,
      name: 'Brescan Splash',
      category: 'Contemporary',
      description: 'Dynamic splash pattern that brings energy and movement to modern interiors.',
      designImage: '/images/products/fancy_usages/brescan_splash.png',
      usageImage: '/images/products/fancy_usages/brescan_splash_usage.png',
      features: ['Bold design', 'Modern appeal', 'Unique pattern']
    },
    {
      id: 3,
      name: 'Designer Collection',
      category: 'Premium',
      description: 'Exclusive designer pattern featuring intricate details and premium finish for luxury interiors.',
      designImage: '/images/products/fancy_usages/designer.png',
      usageImage: '/images/products/fancy_usages/designer_usage.png',
      features: ['Luxury finish', 'Intricate details', 'Premium quality']
    },
    {
      id: 4,
      name: 'Tough Marble',
      category: 'Stone Effect',
      description: 'Durable marble effect laminate combining the luxury of marble with superior toughness.',
      designImage: '/images/products/fancy_usages/tough_marble.png',
      usageImage: '/images/products/fancy_usages/tough_marble_usage.png',
      features: ['Marble luxury', 'High durability', 'Easy maintenance']
    }
  ];

  const features = [
    {
      icon: <FaStar />,
      title: 'Premium Quality',
      description: 'A & B grade laminates with superior finish'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Durable & Long-lasting',
      description: 'Resistant to scratches, heat, and moisture'
    },
    {
      icon: <FaTruck />,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping across India'
    },
    {
      icon: <FaHeadset />,
      title: '24/7 Support',
      description: 'Expert guidance for all your needs'
    }
  ];

  const brands = [
    { name: 'Pegasus Panel', website: 'https://www.dorbypanels.com/' },
    { name: 'Surfica India', website: 'http://surfica.in/' },
    { name: 'Fasten Laminate', website: 'http://www.fastenlaminate.com/' },
    { name: 'Sarvottam Laminate', website: 'https://www.sarvottamdecor.in/' },
    { name: 'Abhiyan Laminate', website: 'https://www.abhiyanlam.in/' },
    { name: 'Vee Decor', website: 'https://www.laminatesheets.in/vee-decor-laminate-sheet-5639504.html' },
    { name: 'Alfa Ica', website: 'https://alfaica.com/' },
    { name: 'Airolam Ltd', website: 'https://www.airolam.com/' },
    { name: 'Cedar Decor Ltd', website: 'https://www.cedarindia.com/' }
  ];

  const whyChooseUs = [
    'Wide variety of A & B grade laminates',
    'Competitive pricing without compromising quality',
    'Expert consultation and design assistance',
    'Quick turnaround time on orders',
    'Trusted by 1000+ satisfied customers',
    'Eco-friendly and sustainable products'
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background-slider">
          <div className="hero-slide slide-1"></div>
          <div className="hero-slide slide-2"></div>
          <div className="hero-slide slide-3"></div>
        </div>
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="trust-text">
              ✨ Trusted Since 2004
            </div>
            <h1 className="hero-title">
              <span className="title-line">Crafting Excellence in</span>
              <span className="highlight-fancy">Every Finish</span>
            </h1>
            <p className="hero-subtitle">
              Discover unmatched quality with our premium A & B grade laminates.
              <br />
              From contemporary high-gloss to timeless wood finishes — 
              <span className="text-glow"> we bring your vision to life</span>.
            </p>
            <div className="hero-stats">
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="stat-number">20+</span>
                <span className="stat-label">Years Experience</span>
              </motion.div>
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="stat-number">1000+</span>
                <span className="stat-label">Satisfied Clients</span>
              </motion.div>
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <span className="stat-number">500+</span>
                <span className="stat-label">Unique Designs</span>
              </motion.div>
            </div>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary btn-hero">
                Explore Collection <FaArrowRight />
              </Link>
              <button onClick={onExpertClick} className="btn btn-outline btn-light btn-hero">
                <FaHeadset /> Talk to Expert
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands section">
        <div className="container">
          <div className="section-title">
            <h2>We Are Dealing With</h2>
            <div className="underline"></div>
            <p className="subtitle">Trusted premium laminate brands we partner with</p>
          </div>

          <div className="brands-list">
            {brands.map((brand, index) => (
              <motion.a
                key={index}
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-link"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 10 }}
              >
                <span className="brand-arrow">→</span>
                <span className="brand-text">{brand.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products section">
        <div className="container">
          <div className="section-title">
            <h2>Featured Products</h2>
            <div className="underline"></div>
            <p className="subtitle">Handpicked selection from our premium collection</p>
          </div>

          <div className="featured-laminates-grid">
            {featuredLaminates.map((laminate, index) => (
              <motion.div
                key={laminate.id}
                className="featured-laminate-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="laminate-images-showcase">
                  <div className="design-preview">
                    <img src={laminate.designImage} alt={laminate.name} />
                    <span className="category-badge">{laminate.category}</span>
                  </div>
                  <div className="usage-preview">
                    <img src={laminate.usageImage} alt={`${laminate.name} usage`} />
                  </div>
                </div>
                <div className="laminate-content">
                  <h3>{laminate.name}</h3>
                  <p className="laminate-description">{laminate.description}</p>
                  <div className="laminate-features">
                    {laminate.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">
                        <FaCheckCircle /> {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/products" className="btn btn-primary">
              View All Products <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose section">
        <div className="container">
          <div className="why-choose-content">
            <motion.div 
              className="why-choose-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Why Choose Vaishali Enterprise?</h2>
              <p>
                With years of experience in the laminate industry, we have established 
                ourselves as a trusted supplier of premium quality laminates. Our commitment 
                to excellence and customer satisfaction sets us apart.
              </p>
              <ul className="why-choose-list">
                {whyChooseUs.map((item, index) => (
                  <li key={index}>
                    <FaCheckCircle />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={onExpertClick} className="btn btn-primary">
                Get Started Today
              </button>
            </motion.div>

            <motion.div 
              className="why-choose-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=700&fit=crop" 
                alt="Why Choose Us" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Space?</h2>
            <p>Get in touch with our experts for personalized recommendations</p>
            <div className="cta-buttons">
              <button onClick={onExpertClick} className="btn btn-primary">
                Talk to Expert
              </button>
              <Link to="/contact" className="btn btn-light">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
