import React from 'react';
import { motion } from 'framer-motion';
import './Products.css';

const Products = () => {
  const newShades = [
    { name: 'Acacia Green', image: '/images/products/new_shades/acacia_green.png', color: '#7A9B76' },
    { name: 'English Green', image: '/images/products/new_shades/english_green.png', color: '#4A6741' },
    { name: 'Eucalyptus Green', image: '/images/products/new_shades/eucalyptus_green.png', color: '#5F8A73' },
    { name: 'Khyber Blue', image: '/images/products/new_shades/khyber_blue.png', color: '#4A6B8A' },
    { name: 'Ocean Blue', image: '/images/products/new_shades/ocean_blue.png', color: '#2C5F7E' },
    { name: 'Sky Blue', image: '/images/products/new_shades/sky_blue.png', color: '#87CEEB' }
  ];

  const laminateDesigns = [
    {
      id: 1,
      name: 'Bleached Cork',
      category: 'Natural Textures',
      description: 'A refined natural cork texture with bleached finish, perfect for creating warm, organic spaces with a contemporary twist.',
      designImage: '/images/products/fancy_usages/Bleeched_cork.png',
      usageImage: '/images/products/fancy_usages/Bleeched_cork_usage.png',
      features: ['Eco-friendly', 'Sound absorption', 'Warm aesthetic']
    },
    {
      id: 2,
      name: 'Brescan Splash',
      category: 'Contemporary',
      description: 'Dynamic splash pattern that brings energy and movement to modern interiors, ideal for statement walls and feature surfaces.',
      designImage: '/images/products/fancy_usages/brescan_splash.png',
      usageImage: '/images/products/fancy_usages/brescan_splash_usage.png',
      features: ['Bold design', 'Modern appeal', 'Unique pattern']
    },
    {
      id: 3,
      name: 'Columbian Sepia',
      category: 'Wood Finish',
      description: 'Rich sepia-toned wood grain that adds depth and sophistication to any space, perfect for classic and transitional designs.',
      designImage: '/images/products/fancy_usages/columbian_sepia.png',
      usageImage: '/images/products/fancy_usages/columbian_sepia_usage.png',
      features: ['Classic elegance', 'Rich tones', 'Versatile']
    },
    {
      id: 4,
      name: 'Designer Collection',
      category: 'Premium',
      description: 'Exclusive designer pattern featuring intricate details and premium finish for luxury interiors and high-end commercial spaces.',
      designImage: '/images/products/fancy_usages/designer.png',
      usageImage: '/images/products/fancy_usages/designer_usage.png',
      features: ['Luxury finish', 'Intricate details', 'Premium quality']
    },
    {
      id: 5,
      name: 'Fade Triton',
      category: 'Contemporary',
      description: 'Subtle fade effect with triton undertones, creating a serene ambiance perfect for modern minimalist and coastal-inspired designs.',
      designImage: '/images/products/fancy_usages/Fade_triton.png',
      usageImage: '/images/products/fancy_usages/Fade_triton_usage.png',
      features: ['Soft gradients', 'Calming effect', 'Modern minimal']
    },
    {
      id: 6,
      name: 'Hellenic Taupe',
      category: 'Neutral Tones',
      description: 'Timeless taupe with Hellenic influences, offering a sophisticated neutral palette that complements any interior style.',
      designImage: '/images/products/fancy_usages/helenic_taupe.png',
      usageImage: '/images/products/fancy_usages/helenic_taupe_usage.png',
      features: ['Neutral elegance', 'Timeless', 'Versatile pairing']
    },
    {
      id: 7,
      name: 'Smoked Brose Pecan',
      category: 'Wood Finish',
      description: 'Smoky pecan wood with brose finish creates a warm, inviting atmosphere with distinctive character and natural appeal.',
      designImage: '/images/products/fancy_usages/smoked_brose_pecan.png',
      usageImage: '/images/products/fancy_usages/smoked_brose_pecan_usage.png',
      features: ['Warm tones', 'Natural grain', 'Distinctive character']
    },
    {
      id: 8,
      name: 'Sumatra Chestnut',
      category: 'Wood Finish',
      description: 'Exotic Sumatra chestnut featuring deep, rich tones and authentic wood grain for spaces that demand natural elegance.',
      designImage: '/images/products/fancy_usages/sumatra_chestnut.png',
      usageImage: '/images/products/fancy_usages/sumatra_chestnut_usage.png',
      features: ['Exotic appeal', 'Deep rich tones', 'Authentic grain']
    },
    {
      id: 9,
      name: 'Tough Marble',
      category: 'Stone Effect',
      description: 'Durable marble effect laminate combining the luxury of marble with superior toughness, ideal for high-traffic areas.',
      designImage: '/images/products/fancy_usages/tough_marble.png',
      usageImage: '/images/products/fancy_usages/tough_marble_usage.png',
      features: ['Marble luxury', 'High durability', 'Easy maintenance']
    },
    {
      id: 10,
      name: 'Wood Finish Classic',
      category: 'Wood Finish',
      description: 'Timeless wood finish that brings natural warmth and classic beauty, perfect for traditional and contemporary interiors alike.',
      designImage: '/images/products/fancy_usages/wood_finish.png',
      usageImage: '/images/products/fancy_usages/wood_finish_usage.png',
      features: ['Classic beauty', 'Natural warmth', 'Universal appeal']
    }
  ];

  return (
    <div className="products-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Premium Laminate Collection</h1>
            <p>Discover exquisite designs that transform spaces into stunning masterpieces</p>
          </motion.div>
        </div>
      </div>

      {/* New Shades Collection */}
      <section className="new-shades-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">New Shades Collection</h2>
            <p className="section-subtitle">Explore our latest color palette</p>
          </motion.div>

          <div className="shades-row">
            {newShades.map((shade, index) => (
              <div
                key={index}
                className="shade-card"
                style={{ zIndex: newShades.length - index }}
              >
                <div className="shade-image-wrapper">
                  <img
                    src={shade.image}
                    alt={shade.name}
                    className="shade-thumbnail"
                  />
                </div>
                <div className="shade-color-name">{shade.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laminate Showcase */}
      <section className="laminate-showcase section">
        <div className="container">
          {laminateDesigns.map((laminate, index) => (
            <motion.article
              key={laminate.id}
              className={`laminate-article ${index % 2 === 0 ? 'reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="laminate-images">
                <motion.div
                  className="design-image-container"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={laminate.designImage}
                    alt={`${laminate.name} design`}
                    className="design-image"
                  />
                  <div className="image-overlay">
                    <span>Design Pattern</span>
                  </div>
                </motion.div>
                <motion.div
                  className="usage-image-container"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={laminate.usageImage}
                    alt={`${laminate.name} in use`}
                    className="usage-image"
                  />
                  <div className="image-overlay">
                    <span>Real Application</span>
                  </div>
                </motion.div>
              </div>

              <div className="laminate-content">
                <div className="category-badge">{laminate.category}</div>
                <h2>{laminate.name}</h2>
                <p className="description">{laminate.description}</p>
                <div className="features-list">
                  {laminate.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
