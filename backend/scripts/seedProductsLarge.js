const connectDB = require('../config/db')
const productModel = require('../models/productModel')
const fs = require('fs')
const path = require('path')
require('dotenv').config()

function encode(name){
  return encodeURI(name)
}

// Get all image files from a category
function getImageFilesForCategory(category) {
  const assetPath = path.join(__dirname, '..', '..', 'frontend', 'src', 'assest', 'products', category)
  try {
    const files = fs.readdirSync(assetPath)
      .filter(f => f.match(/\.(webp|jpg|jpeg|png)$/i))
      .sort()
    return files
  } catch (err) {
    console.warn(`Warning: Could not read ${category} directory:`, err.message)
    return []
  }
}

const brandNames = {
  airpodes: ['boAt', 'Sony', 'Boat', 'JBL', 'Realme', 'OnePlus', 'Noise', 'Xiaomi'],
  mobile: ['Samsung', 'OPPO', 'Apple', 'Xiaomi', 'Realme', 'OnePlus', 'Vivo', 'Motorola', 'Infinix'],
  mouse: ['ASUS', 'Dell', 'Logitech', 'Corsair', 'SteelSeries', 'Razer', 'HP', 'Zebronics'],
  watches: ['boAt', 'Apple', 'Garmin', 'Fossil', 'TIMEX', 'Samsung', 'Amazfit', 'Realme'],
  TV: ['LG', 'Samsung', 'Sony', 'Mi', 'OnePlus', 'TCL', 'Panasonic', 'Philips'],
  speakers: ['boAt', 'JBL', 'Beats', 'Bose', 'Ultimate Ears', 'Sony', 'Marshall', 'Anker'],
  trimmers: ['Ambrane', 'Philips', 'Braun', 'Panasonic', 'ChinuStyle', 'Luhao', 'Chaoba', 'Nova'],
  refrigerator: ['Godrej', 'LG', 'Samsung', 'Haier', 'Whirlpool', 'Videocon', 'Lloyd', 'Daikin'],
  earphones: ['boAt', 'Sony', 'JBL', 'Noise', 'One Plus', 'Realme', 'Jabra', 'Skullcandy'],
  camera: ['Canon', 'Nikon', 'CP PLUS', 'Sony', 'GoPro', 'Fujifilm', 'Panasonic', 'Olympus'],
  processor: ['Intel', 'AMD', 'Qualcomm', 'MediaTek', 'Apple', 'Samsung', 'Snapdragon'],
  printers: ['HP', 'Canon', 'Brother', 'Xerox', 'Epson', 'Samsung', 'Ricoh']
}

const descriptions = {
  airpodes: [
    'Premium wireless earphones with powerful bass',
    'True wireless stereo earphones',
    'Wireless earphones with noise cancellation',
    'Portable earphones with great battery',
    'Active noise cancellation earphones',
    'Earphones with touch control',
    'Waterproof wireless earphones',
    'Gaming earphones with low latency'
  ],
  mobile: [
    'Budget smartphone with excellent display',
    'Affordable smartphone with large battery',
    'Premium smartphone by major brand',
    'Gaming smartphone with high refresh rate',
    'Smartphone with excellent camera',
    'Compact smartphone',
    '5G enabled smartphone',
    'Smartphone with long battery life'
  ],
  mouse: [
    'Wireless mouse with adjustable DPI',
    'Gaming mouse with RGB lighting',
    'Professional wireless mouse',
    'Wired optical mouse for comfort',
    'Ergonomic wireless mouse',
    'High DPI gaming mouse',
    'Compact wireless mouse',
    'Mouse with side buttons for gaming'
  ],
  watches: [
    'Smart watch with fitness tracking',
    'Smartwatch with heart rate monitor',
    'Premium smartwatch with AMOLED',
    'Sports smartwatch with GPS',
    'Classic analog watch',
    'Smartwatch with long battery',
    'Sports tracking smartwatch',
    'Premium fitness watch'
  ],
  TV: [
    'Ultra HD 4K display with smart features',
    'Crystal clear HD display',
    '4K Smart TV with great color',
    'Budget 4K TV with smart apps',
    'Premium OLED display',
    'TV with Dolby Atmos sound',
    '4K TV with gaming features',
    'Full HD Smart TV'
  ],
  speakers: [
    'Portable Bluetooth speaker',
    'Waterproof portable speaker',
    'High power speaker system',
    '360 degree sound speaker',
    'Compact Bluetooth speaker',
    'Bass boosted speaker',
    'Long battery life speaker',
    'Studio quality speaker'
  ],
  trimmers: [
    'Cordless beard trimmer with adjustable length',
    'Professional cordless trimmer',
    'Rechargeable beard trimmer',
    'High quality precision trimmer',
    'Waterproof beard trimmer',
    'Quick charge trimmer',
    'Stainless steel blade trimmer',
    'Quiet operation trimmer'
  ],
  refrigerator: [
    'Energy efficient refrigerator',
    'Frost free double door fridge',
    'Inverter compressor fridge',
    'Digital display refrigerator',
    'Large capacity refrigerator',
    'Budget friendly fridge',
    'Premium frost-free fridge',
    'Single door energy saver fridge'
  ],
  earphones: [
    'Wired earphones with mic',
    'Neckband earphones',
    'Over ear wired headphones',
    'Comfortable on ear design',
    'Earphones with magnetic closure',
    'Lightweight portable earphones',
    'Pro grade earphones',
    'Bass enhanced earphones'
  ],
  camera: [
    '3MP Full HD security camera',
    'DSLR camera for Photography',
    'High MP DSLR with video',
    'Action camera 4K video',
    'Mirrorless camera system',
    'Professional grade camera',
    'Compact digital camera',
    'Vlogging camera'
  ],
  processor: [
    'High performance processor',
    'Gaming processor',
    'Multi-core processor for workstations',
    'Budget processor',
    'Processor for content creation',
    'Energy efficient processor',
    'Overclockable processor'
  ],
  printers: [
    'Fast laser printer',
    'Multifunction printer',
    'Color inkjet printer',
    'Network printer',
    'Photo printer',
    'Professional printer',
    'Budget friendly printer'
  ]
}

function getRandomBrand(category) {
  const brands = brandNames[category] || ['Generic']
  return brands[Math.floor(Math.random() * brands.length)]
}

function getRandomDescription(category) {
  const descs = descriptions[category] || ['High quality product']
  return descs[Math.floor(Math.random() * descs.length)]
}

function generatePrice() {
  const basePrice = Math.floor(Math.random() * 40000) + 500
  const discount = Math.floor(Math.random() * 40) + 10
  const sellingPrice = Math.floor(basePrice * (1 - discount / 100))
  return { price: basePrice, sellingPrice }
}

async function seed(){
  try{
    await connectDB()
    const base = process.env.BASE_ASSET_URL || 'http://localhost:8080/assets/products'

    const products = []
    const categories = ['airpodes', 'mobile', 'mouse', 'watches', 'TV', 'speakers', 'trimmers', 'refrigerator', 'earphones', 'camera', 'processor', 'printers']

    // For each category, generate 50 products
    for (const category of categories) {
      const imageFiles = getImageFilesForCategory(category)
      
      if (imageFiles.length === 0) {
        console.warn(`⚠️  No image files found for ${category}`)
        continue
      }

      console.log(`📦 Generating 50 products for ${category} (${imageFiles.length} unique images)`)

      for (let i = 0; i < 50; i++) {
        // Cycle through images if we have more products than images
        const imageFile = imageFiles[i % imageFiles.length]
        const productNum = i + 1
        
        const productData = {
          productName: `${imageFile.replace(/\.[^/.]+$/, "")} - ${productNum}`,
          brandName: getRandomBrand(category),
          category: category,
          productImage: [ `${base}/${category}/${encode(imageFile)}` ],
          description: getRandomDescription(category),
          ...generatePrice()
        }
        
        products.push(productData)
      }
    }

    console.log(`\n🌍 Total products to insert: ${products.length}`)

    // Delete existing products before inserting
    await productModel.deleteMany({})
    console.log('🗑️  Cleared existing products')

    // Insert all products
    const inserted = await productModel.insertMany(products)
    console.log(`\n✅ Successfully inserted ${inserted.length} products`)
    
    // Show breakdown by category
    const breakdown = {}
    inserted.forEach(p => {
      breakdown[p.category] = (breakdown[p.category] || 0) + 1
    })
    
    console.log('\n📊 Products by category:')
    Object.entries(breakdown).forEach(([cat, count]) => {
      console.log(`   ${cat}: ${count} products`)
    })
    
    process.exit(0)
  }catch(err){
    console.error('❌ Error:', err.message)
    process.exit(1)
  }
}

seed()
