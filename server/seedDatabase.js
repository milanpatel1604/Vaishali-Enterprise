// Sample data seeder for Vaishali Enterprise
// Run this file to populate the database with sample products

const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => {
  console.error('❌ MongoDB Connection Error:', err);
  process.exit(1);
});

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  code: String,
  category: String,
  grade: String,
  finish: String,
  description: String,
  image: String,
  isNew: Boolean,
  isBestSeller: Boolean,
  inStock: Boolean,
  createdAt: Date
});

const Product = mongoose.model('Product', productSchema);

// Sample Products Data
const sampleProducts = [
  {
    name: 'Premium Oak Wood',
    code: 'VE-WF-001',
    category: 'Wood Finish',
    grade: 'A',
    finish: 'Wood Texture',
    description: 'Natural oak wood finish with realistic texture and grain patterns',
    image: 'https://images.unsplash.com/photo-1565183928294-7d22f3d628ab?w=500',
    isNew: true,
    isBestSeller: true,
    inStock: true,
    createdAt: new Date()
  },
  {
    name: 'Crystal White Gloss',
    code: 'VE-HG-002',
    category: 'High Gloss',
    grade: 'A',
    finish: 'High Gloss',
    description: 'Brilliant white high gloss finish perfect for modern interiors',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500',
    isNew: false,
    isBestSeller: true,
    inStock: true,
    createdAt: new Date()
  },
  {
    name: 'Textured Grey Stone',
    code: 'VE-TX-003',
    category: 'Textured',
    grade: 'B',
    finish: 'Stone Texture',
    description: 'Contemporary grey with realistic stone texture effect',
    image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=500',
    isNew: true,
    isBestSeller: false,
    inStock: true,
    createdAt: new Date()
  },
  {
    name: 'Matte Black Elegance',
    code: 'VE-MF-004',
    category: 'Matte Finish',
    grade: 'A',
    finish: 'Matte',
    description: 'Sophisticated matte black finish for premium applications',
    image: 'https://images.unsplash.com/photo-1585128903994-d70f03c59a46?w=500',
    isNew: false,
    isBestSeller: true,
    inStock: true,
    createdAt: new Date()
  },
  {
    name: 'Marble Carrara White',
    code: 'VE-DP-005',
    category: 'Digital Print',
    grade: 'A',
    finish: 'Digital HD',
    description: 'Realistic Carrara marble digital print with fine veining',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=500',
    isNew: true,
    isBestSeller: false,
    inStock: true,
    createdAt: new Date()
  },
  {
    name: 'Walnut Wood Premium',
    code: 'VE-WF-006',
    category: 'Wood Finish',
    grade: 'B',
    finish: 'Wood Texture',
    description: 'Rich walnut wood finish with natural grain patterns',
    image: 'https://images.unsplash.com/photo-1565183997392-2f3f6e3c6d0a?w=500',
    isNew: false,
    isBestSeller: true,
    inStock: true,
    createdAt: new Date()
  },
  {
    name: 'Solid Red Cherry',
    code: 'VE-SC-007',
    category: 'Solid Colors',
    grade: 'A',
    finish: 'Matte',
    description: 'Vibrant solid red color perfect for accent walls',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500',
    isNew: false,
    isBestSeller: false,
    inStock: true,
    createdAt: new Date()
  },
  {
    name: 'Beige Elegance',
    code: 'VE-SC-008',
    category: 'Solid Colors',
    grade: 'B',
    finish: 'Matte',
    description: 'Warm beige solid color for timeless interiors',
    image: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96d60a?w=500',
    isNew: false,
    isBestSeller: false,
    inStock: true,
    createdAt: new Date()
  },
  {
    name: 'High Gloss Navy Blue',
    code: 'VE-HG-009',
    category: 'High Gloss',
    grade: 'A',
    finish: 'High Gloss',
    description: 'Deep navy blue with brilliant gloss finish',
    image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=500',
    isNew: true,
    isBestSeller: false,
    inStock: true,
    createdAt: new Date()
  },
  {
    name: 'Teak Wood Classic',
    code: 'VE-WF-010',
    category: 'Wood Finish',
    grade: 'A',
    finish: 'Wood Texture',
    description: 'Premium teak wood finish with authentic grain detail',
    image: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=500',
    isNew: false,
    isBestSeller: true,
    inStock: true,
    createdAt: new Date()
  },
  {
    name: 'Textured Concrete Grey',
    code: 'VE-TX-011',
    category: 'Textured',
    grade: 'B',
    finish: 'Concrete Texture',
    description: 'Industrial concrete texture for modern spaces',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
    isNew: false,
    isBestSeller: false,
    inStock: true,
    createdAt: new Date()
  },
  {
    name: 'Granite Black Digital',
    code: 'VE-DP-012',
    category: 'Digital Print',
    grade: 'A',
    finish: 'Digital HD',
    description: 'Black granite digital print with realistic depth',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=500',
    isNew: true,
    isBestSeller: false,
    inStock: true,
    createdAt: new Date()
  },
  {
    name: 'Maple Wood Light',
    code: 'VE-WF-013',
    category: 'Wood Finish',
    grade: 'A',
    finish: 'Wood Texture',
    description: 'Light maple wood finish for bright interiors',
    image: 'https://images.unsplash.com/photo-1565184157452-b5e33e102fde?w=500',
    isNew: false,
    isBestSeller: true,
    inStock: true,
    createdAt: new Date()
  },
  {
    name: 'High Gloss Cream',
    code: 'VE-HG-014',
    category: 'High Gloss',
    grade: 'A',
    finish: 'High Gloss',
    description: 'Elegant cream high gloss for sophisticated spaces',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500',
    isNew: false,
    isBestSeller: false,
    inStock: true,
    createdAt: new Date()
  },
  {
    name: 'Solid Charcoal',
    code: 'VE-SC-015',
    category: 'Solid Colors',
    grade: 'B',
    finish: 'Matte',
    description: 'Deep charcoal solid color with matte finish',
    image: 'https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?w=500',
    isNew: false,
    isBestSeller: false,
    inStock: true,
    createdAt: new Date()
  }
];

// Seed function
async function seedDatabase() {
  try {
    // Clear existing products
    await Product.deleteMany({});
    console.log('🗑️  Cleared existing products');

    // Insert sample products
    const result = await Product.insertMany(sampleProducts);
    console.log(`✅ Successfully added ${result.length} products to the database`);

    // Display summary
    console.log('\n📊 Product Summary:');
    console.log(`   - A Grade: ${result.filter(p => p.grade === 'A').length}`);
    console.log(`   - B Grade: ${result.filter(p => p.grade === 'B').length}`);
    console.log(`   - New Products: ${result.filter(p => p.isNew).length}`);
    console.log(`   - Best Sellers: ${result.filter(p => p.isBestSeller).length}`);

    console.log('\n✨ Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seeder
seedDatabase();
