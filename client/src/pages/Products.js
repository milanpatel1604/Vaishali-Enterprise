import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaSearch, FaFilter, FaTh, FaList } from 'react-icons/fa';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Products.css';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedGrade, setSelectedGrade] = useState(searchParams.get('grade') || '');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    'All',
    'High Gloss',
    'Matte Finish',
    'Textured',
    'Wood Finish',
    'Solid Colors',
    'Digital Print'
  ];

  const grades = ['All', 'A', 'B'];

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [searchTerm, selectedCategory, selectedGrade, products]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
      // Set sample data for demo
      setProducts(getSampleProducts());
    }
  };

  const getSampleProducts = () => [
    {
      _id: '1',
      name: 'Premium Oak Wood',
      code: 'VE-WF-001',
      category: 'Wood Finish',
      grade: 'A',
      finish: 'Wood Texture',
      description: 'Natural oak wood finish with realistic texture',
      image: 'https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=500&h=500&fit=crop',
      isNew: true,
      inStock: true
    },
    {
      _id: '2',
      name: 'Crystal White Gloss',
      code: 'VE-HG-002',
      category: 'High Gloss',
      grade: 'A',
      finish: 'High Gloss',
      description: 'Brilliant white high gloss finish',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=500&h=500&fit=crop',
      isBestSeller: true,
      inStock: true
    },
    {
      _id: '3',
      name: 'Textured Grey Stone',
      code: 'VE-TX-003',
      category: 'Textured',
      grade: 'B',
      finish: 'Stone Texture',
      description: 'Contemporary grey with stone texture',
      image: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=500&h=500&fit=crop',
      isNew: true,
      inStock: true
    },
    {
      _id: '4',
      name: 'Matte Black Elegance',
      code: 'VE-MF-004',
      category: 'Matte Finish',
      grade: 'A',
      finish: 'Matte',
      description: 'Sophisticated matte black finish',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&h=500&fit=crop',
      isBestSeller: true,
      inStock: true
    },
    {
      _id: '5',
      name: 'Marble Carrara',
      code: 'VE-DP-005',
      category: 'Digital Print',
      grade: 'A',
      finish: 'Digital HD',
      description: 'Realistic Carrara marble digital print',
      image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=500&h=500&fit=crop',
      isBestSeller: true,
      inStock: true
    },
    {
      _id: '6',
      name: 'Walnut Wood',
      code: 'VE-WF-006',
      category: 'Wood Finish',
      grade: 'B',
      finish: 'Wood Texture',
      description: 'Rich walnut wood finish',
      image: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=500&h=500&fit=crop',
      isBestSeller: true,
      inStock: true
    },
    {
      _id: '7',
      name: 'Solid Red',
      code: 'VE-SC-007',
      category: 'Solid Colors',
      grade: 'A',
      finish: 'Matte',
      description: 'Vibrant solid red color',
      image: 'https://images.pexels.com/photos/6510361/pexels-photo-6510361.jpeg?w=500&h=500&fit=crop',
      inStock: true
    },
    {
      _id: '8',
      name: 'Beige Elegance',
      code: 'VE-SC-008',
      category: 'Solid Colors',
      grade: 'B',
      finish: 'Matte',
      description: 'Warm beige solid color',
      image: 'https://images.pexels.com/photos/6045266/pexels-photo-6045266.jpeg?w=500&h=500&fit=crop',
      inStock: true
    },
    {
      _id: '9',
      name: 'High Gloss Navy',
      code: 'VE-HG-009',
      category: 'High Gloss',
      grade: 'A',
      finish: 'High Gloss',
      description: 'Deep navy blue with brilliant gloss',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&h=500&fit=crop',
      isNew: true,
      inStock: true
    },
    {
      _id: '10',
      name: 'Teak Wood Premium',
      code: 'VE-WF-010',
      category: 'Wood Finish',
      grade: 'A',
      finish: 'Wood Texture',
      description: 'Premium teak wood finish',
      image: 'https://images.unsplash.com/photo-1565183928294-7d22f3d628ab?w=500&h=500&fit=crop',
      isBestSeller: true,
      inStock: true
    },
    {
      _id: '11',
      name: 'Textured Concrete',
      code: 'VE-TX-011',
      category: 'Textured',
      grade: 'B',
      finish: 'Concrete Texture',
      description: 'Industrial concrete texture',
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=500&h=500&fit=crop',
      inStock: true
    },
    {
      _id: '12',
      name: 'Granite Black Digital',
      code: 'VE-DP-012',
      category: 'Digital Print',
      grade: 'A',
      finish: 'Digital HD',
      description: 'Black granite digital print',
      image: 'https://images.unsplash.com/photo-1594398569065-8cdb7feb2540?w=500&h=500&fit=crop',
      isNew: true,
      inStock: true
    }
  ];

  const filterProducts = () => {
    let filtered = [...products];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by grade
    if (selectedGrade && selectedGrade !== 'All') {
      filtered = filtered.filter(product => product.grade === selectedGrade);
    }

    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === 'All' ? '' : category);
    if (category !== 'All') {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  const handleGradeChange = (grade) => {
    setSelectedGrade(grade === 'All' ? '' : grade);
  };

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
            <h1>Our Products</h1>
            <p>Explore our extensive collection of premium laminates</p>
          </motion.div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="filters-section">
        <div className="container">
          <div className="filters-container">
            {/* Search Bar */}
            <div className="search-box">
              <FaSearch />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* View Mode Toggle */}
            <div className="view-toggle">
              <button
                className={viewMode === 'grid' ? 'active' : ''}
                onClick={() => setViewMode('grid')}
              >
                <FaTh />
              </button>
              <button
                className={viewMode === 'list' ? 'active' : ''}
                onClick={() => setViewMode('list')}
              >
                <FaList />
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="category-filters">
            <span className="filter-label">
              <FaFilter /> Categories:
            </span>
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${
                    (category === 'All' && !selectedCategory) ||
                    selectedCategory === category
                      ? 'active'
                      : ''
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="results-count">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* Products Grid/List */}
      <section className="products-section section">
        <div className="container">
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="no-products">
              <h3>No products found</h3>
              <p>Try adjusting your filters or search term</p>
            </div>
          ) : (
            <div className={`products-${viewMode}`}>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product._id}
                  className={`product-card ${viewMode}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    {product.isNew && <span className="badge badge-new">New</span>}
                    {product.isBestSeller && <span className="badge badge-bestseller">Best Seller</span>}
                    {!product.inStock && <span className="badge badge-out">Out of Stock</span>}
                  </div>
                  <div className="product-details">
                    <div className="product-header">
                      <span className="product-grade">Grade {product.grade}</span>
                      <span className="product-finish">{product.finish}</span>
                    </div>
                    <h3>{product.name}</h3>
                    <p className="product-code">Code: {product.code}</p>
                    <p className="product-description">{product.description}</p>
                    <div className="product-footer">
                      <span className="product-category">{product.category}</span>
                      <button className="btn btn-primary btn-sm">Get Quote</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
