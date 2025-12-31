import React, { useEffect, useState } from 'react';
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
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await axios.get('/api/products?limit=6');
      setFeaturedProducts(response.data.slice(0, 6));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
      // Set sample data for demo
      setFeaturedProducts(getSampleProducts());
    }
  };

  const getSampleProducts = () => [
    {
      _id: '1',
      name: 'Premium Wood Finish',
      code: 'VE-WF-001',
      category: 'Wood Finish',
      grade: 'A',
      image: 'https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=400&h=400&fit=crop',
      isNew: true
    },
    {
      _id: '2',
      name: 'High Gloss White',
      code: 'VE-HG-002',
      category: 'High Gloss',
      grade: 'A',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=400&h=400&fit=crop',
      isBestSeller: true
    },
    {
      _id: '3',
      name: 'Textured Grey',
      code: 'VE-TX-003',
      category: 'Textured',
      grade: 'B',
      image: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=400&h=400&fit=crop',
      isNew: true
    },
    {
      _id: '4',
      name: 'Matte Black',
      code: 'VE-MF-004',
      category: 'Matte Finish',
      grade: 'A',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop',
      isBestSeller: true
    },
    {
      _id: '5',
      name: 'Marble Effect',
      code: 'VE-ME-005',
      category: 'Digital Print',
      grade: 'A',
      image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=400&fit=crop',
      isNew: true
    },
    {
      _id: '6',
      name: 'Oak Wood',
      code: 'VE-WF-006',
      category: 'Wood Finish',
      grade: 'B',
      image: 'https://images.unsplash.com/photo-1565183928294-7d22f3d628ab?w=400&h=400&fit=crop',
      isBestSeller: true
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

  const categories = [
    {
      name: 'High Gloss',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&h=400&fit=crop',
      count: '50+ Designs'
    },
    {
      name: 'Wood Finish',
      image: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=500&h=400&fit=crop',
      count: '80+ Designs'
    },
    {
      name: 'Matte Finish',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&h=400&fit=crop',
      count: '60+ Designs'
    },
    {
      name: 'Textured',
      image: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=500&h=400&fit=crop',
      count: '45+ Designs'
    }
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
            <div>
              ✨ Trusted Since 2008
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

      {/* Categories Section */}
      <section className="categories section">
        <div className="container">
          <div className="section-title">
            <h2>Shop By Category</h2>
            <div className="underline"></div>
            <p className="subtitle">Explore our diverse range of laminate finishes</p>
          </div>

          <div className="categories-grid">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="category-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/products?category=${category.name}`}>
                  <div className="category-image">
                    <img src={category.image} alt={category.name} />
                    <div className="category-overlay">
                      <span className="view-more">View Collection</span>
                    </div>
                  </div>
                  <div className="category-info">
                    <h3>{category.name}</h3>
                    <p>{category.count}</p>
                  </div>
                </Link>
              </motion.div>
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

          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="products-grid">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product._id}
                  className="product-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    {product.isNew && <span className="badge badge-new">New</span>}
                    {product.isBestSeller && <span className="badge badge-bestseller">Best Seller</span>}
                    <div className="product-overlay">
                      <button className="btn btn-primary" onClick={onExpertClick}>
                        Get Quote
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <span className="product-grade">Grade {product.grade}</span>
                    <h3>{product.name}</h3>
                    <p className="product-code">{product.code}</p>
                    <span className="product-category">{product.category}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

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
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=700&fit=crop" 
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
