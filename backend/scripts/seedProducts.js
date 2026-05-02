const connectDB = require('../config/db')
const productModel = require('../models/productModel')
require('dotenv').config()

function encode(name){
  return encodeURI(name)
}

async function seed(){
  try{
    await connectDB()
    const base = process.env.BASE_ASSET_URL || 'http://localhost:8080/assets/products'

    const products = [
      // ===== AIRPODES (10 products) =====
      {
        productName: 'boAt Airdopes 111',
        brandName: 'boAt',
        category: 'airpodes',
        productImage: [ `${base}/airpodes/${encode('boAt Airdopes 111 1.webp')}` ],
        description: 'Premium wireless earphones with powerful bass',
        price: 1999,
        sellingPrice: 999
      },
      {
        productName: 'boAt Airdopes 115',
        brandName: 'boAt',
        category: 'airpodes',
        productImage: [ `${base}/airpodes/${encode('boAt Airdopes 115 1.webp')}` ],
        description: 'Wireless earphones with 8 hour battery',
        price: 2499,
        sellingPrice: 1499
      },
      {
        productName: 'boAt Airdopes 121v2',
        brandName: 'boAt',
        category: 'airpodes',
        productImage: [ `${base}/airpodes/${encode('boAt Airdopes 121 v2 1.webp')}` ],
        description: 'True wireless stereo earphones',
        price: 1299,
        sellingPrice: 699
      },
      {
        productName: 'boAt Airdopes 131',
        brandName: 'boAt',
        category: 'airpodes',
        productImage: [ `${base}/airpodes/${encode('boAt Airdopes 131 1.webp')}` ],
        description: 'Wireless earphones with premium sound',
        price: 1899,
        sellingPrice: 899
      },
      {
        productName: 'boAt Airdopes 172',
        brandName: 'boAt',
        category: 'airpodes',
        productImage: [ `${base}/airpodes/${encode('boAt Airdopes 172 1.webp')}` ],
        description: 'Portable earphones with great battery',
        price: 1599,
        sellingPrice: 799
      },
      {
        productName: 'boAt Airdopes 192',
        brandName: 'boAt',
        category: 'airpodes',
        productImage: [ `${base}/airpodes/${encode('boAt Airdopes 192 1.webp')}` ],
        description: 'Wireless earphones with touch control',
        price: 2099,
        sellingPrice: 1199
      },
      {
        productName: 'boAt Airdopes 201',
        brandName: 'boAt',
        category: 'airpodes',
        productImage: [ `${base}/airpodes/${encode('boAt Airdopes 201 1.webp')}` ],
        description: 'Premium wireless earphones',
        price: 2299,
        sellingPrice: 1399
      },
      {
        productName: 'boAt Airdopes 381',
        brandName: 'boAt',
        category: 'airpodes',
        productImage: [ `${base}/airpodes/${encode('boAt Airdopes 381 1.webp')}` ],
        description: 'True wireless earphones with IPX7',
        price: 3999,
        sellingPrice: 2999
      },
      {
        productName: 'boAt Airdopes 411 ANC',
        brandName: 'boAt',
        category: 'airpodes',
        productImage: [ `${base}/airpodes/${encode('boAt Airdopes 411 ANC 1.webp')}` ],
        description: 'Active noise cancellation earphones',
        price: 4999,
        sellingPrice: 3499
      },
      {
        productName: 'boAt Airdopes 701 ANC',
        brandName: 'boAt',
        category: 'airpodes',
        productImage: [ `${base}/airpodes/${encode('boAt Airdopes 701 ANC 1.webp')}` ],
        description: 'Premium active noise cancellation',
        price: 5999,
        sellingPrice: 3999
      },

      // ===== MOBILE (8 products) =====
      {
        productName: 'SAMSUNG Galaxy A03',
        brandName: 'Samsung',
        category: 'mobile',
        productImage: [ `${base}/mobile/${encode('SAMSUNG Galaxy A03 (Black, 32 GB) (3 GB RAM) 1.webp')}` ],
        description: 'Budget smartphone with excellent display',
        price: 8499,
        sellingPrice: 6999
      },
      {
        productName: 'SAMSUNG Galaxy A10s',
        brandName: 'Samsung',
        category: 'mobile',
        productImage: [ `${base}/mobile/${encode('SAMSUNG Galaxy A10s (Black, 32 GB) (3 GB RAM) 1.webp')}` ],
        description: 'Affordable smartphone with good camera',
        price: 7999,
        sellingPrice: 5999
      },
      {
        productName: 'OPPO A16k',
        brandName: 'OPPO',
        category: 'mobile',
        productImage: [ `${base}/mobile/${encode('OPPO A16k (Dark Blue, 32 GB) (3 GB RAM) 1.webp')}` ],
        description: 'Affordable smartphone with large battery',
        price: 7499,
        sellingPrice: 5999
      },
      {
        productName: 'Apple iPhone 11',
        brandName: 'Apple',
        category: 'mobile',
        productImage: [ `${base}/mobile/${encode('Apple iPhone 11 (White, 64 GB) 1.webp')}` ],
        description: 'Premium smartphone by Apple',
        price: 39999,
        sellingPrice: 29999
      },
      {
        productName: 'Xiaomi Redmi 9A',
        brandName: 'Xiaomi',
        category: 'mobile',
        productImage: [ `${base}/mobile/${encode('Xiaomi Redmi 9A (Midnight Black, 32GB) (3GB RAM) 1.webp')}` ],
        description: 'Budget smartphone with long battery',
        price: 6999,
        sellingPrice: 4999
      },
      {
        productName: 'OnePlus Nord',
        brandName: 'OnePlus',
        category: 'mobile',
        productImage: [ `${base}/mobile/${encode('OnePlus Nord (Blue, 12GB RAM, 256GB Storage) 1.webp')}` ],
        description: 'Premium gaming smartphone',
        price: 24999,
        sellingPrice: 19999
      },
      {
        productName: 'Realme C25',
        brandName: 'Realme',
        category: 'mobile',
        productImage: [ `${base}/mobile/${encode('Realme C25 (Watery Blue, 64GB) (4GB RAM) 1.webp')}` ],
        description: 'Smartphone with large battery',
        price: 9999,
        sellingPrice: 7999
      },
      {
        productName: 'Vivo Y33s',
        brandName: 'Vivo',
        category: 'mobile',
        productImage: [ `${base}/mobile/${encode('Vivo Y33s (Midnight Black, 128GB) (4GB RAM) 1.webp')}` ],
        description: 'Smooth performance smartphone',
        price: 12999,
        sellingPrice: 10999
      },

      // ===== MOUSE (7 products) =====
      {
        productName: 'ASUS Marshmallow Mouse',
        brandName: 'ASUS',
        category: 'mouse',
        productImage: [ `${base}/mouse/${encode('ASUS Marshmallow - Silent, Adj. DPI, Multi-Mode, With Solar Cover Wireless Optical Mouse (2.4GHz Wireless, Bluetooth, Quiet Blue) 1.webp')}` ],
        description: 'Wireless mouse with adjustable DPI',
        price: 1599,
        sellingPrice: 999
      },
      {
        productName: 'DELL MS 116 Mouse',
        brandName: 'DELL',
        category: 'mouse',
        productImage: [ `${base}/mouse/${encode('DELL MS 116 Wired Optical Mouse (USB, Black) 1.webp')}` ],
        description: 'Wired optical mouse for comfort',
        price: 599,
        sellingPrice: 399
      },
      {
        productName: 'Logitech MX Master',
        brandName: 'Logitech',
        category: 'mouse',
        productImage: [ `${base}/mouse/${encode('Logitech MX Master 3 Advanced Wireless Mouse 1.webp')}` ],
        description: 'Professional wireless mouse',
        price: 5999,
        sellingPrice: 4999
      },
      {
        productName: 'Corsair M65',
        brandName: 'Corsair',
        category: 'mouse',
        productImage: [ `${base}/mouse/${encode('Corsair Scimitar PRO RGB Mouse 1.webp')}` ],
        description: 'Gaming mouse with side buttons',
        price: 3999,
        sellingPrice: 2999
      },
      {
        productName: 'SteelSeries Rival',
        brandName: 'SteelSeries',
        category: 'mouse',
        productImage: [ `${base}/mouse/${encode('SteelSeries Rival 3 Gaming Mouse 1.webp')}` ],
        description: 'Professional gaming mouse',
        price: 2499,
        sellingPrice: 1799
      },
      {
        productName: 'Razer DeathAdder',
        brandName: 'Razer',
        category: 'mouse',
        productImage: [ `${base}/mouse/${encode('Razer DeathAdder v2 Gaming Mouse 1.webp')}` ],
        description: 'High DPI gaming mouse',
        price: 4999,
        sellingPrice: 3999
      },
      {
        productName: 'HP Wireless Mouse',
        brandName: 'HP',
        category: 'mouse',
        productImage: [ `${base}/mouse/${encode('HP Z3700 Wireless Mouse 1.webp')}` ],
        description: 'Compact wireless mouse',
        price: 799,
        sellingPrice: 599
      },

      // ===== WATCHES (7 products) =====
      {
        productName: 'boAt Cosmos Pro',
        brandName: 'boAt',
        category: 'watches',
        productImage: [ `${base}/watches/${encode('boAt Cosmos Pro 1.webp')}` ],
        description: 'Premium smartwatch with AMOLED',
        price: 5999,
        sellingPrice: 4499
      },
      {
        productName: 'boAt Storm',
        brandName: 'boAt',
        category: 'watches',
        productImage: [ `${base}/watches/${encode('boAt Storm 1.webp')}` ],
        description: 'Smart watch with fitness tracking',
        price: 3999,
        sellingPrice: 2799
      },
      {
        productName: 'boAt Wave Beat',
        brandName: 'boAt',
        category: 'watches',
        productImage: [ `${base}/watches/${encode('boAt Wave Beat 1.webp')}` ],
        description: 'Smartwatch with heart rate monitor',
        price: 2999,
        sellingPrice: 1999
      },
      {
        productName: 'Apple Watch Series 6',
        brandName: 'Apple',
        category: 'watches',
        productImage: [ `${base}/watches/${encode('Apple Watch Series 6 (Red, 40mm) 1.webp')}` ],
        description: 'Premium smartwatch with health',
        price: 38999,
        sellingPrice: 29999
      },
      {
        productName: 'Garmin Smartwatch',
        brandName: 'Garmin',
        category: 'watches',
        productImage: [ `${base}/watches/${encode('Garmin Venu SQ GPS Smartwatch 1.webp')}` ],
        description: 'Sports smartwatch with GPS',
        price: 18999,
        sellingPrice: 14999
      },
      {
        productName: 'TIMEX Analog Watch',
        brandName: 'TIMEX',
        category: 'watches',
        productImage: [ `${base}/watches/${encode('TIMEX Analog Watch for Men | Timex Performance Series 1.webp')}` ],
        description: 'Classic analog watch',
        price: 2499,
        sellingPrice: 1799
      },
      {
        productName: 'Fossil Smartwatch',
        brandName: 'Fossil',
        category: 'watches',
        productImage: [ `${base}/watches/${encode('Fossil Gen 5 Smartwatch 1.webp')}` ],
        description: 'Stylish smartwatch',
        price: 14999,
        sellingPrice: 11999
      },

      // ===== TV (6 products) =====
      {
        productName: 'LG 49 inch 4K TV',
        brandName: 'LG',
        category: 'TV',
        productImage: [ `${base}/TV/${encode('LG 123 cm (49 inch) Ultra HD (4K) LED Smart WebOS TV (49UK7500PTA) 1.webp')}` ],
        description: 'Ultra HD 4K display with WebOS',
        price: 49999,
        sellingPrice: 39999
      },
      {
        productName: 'Samsung 55 inch 4K TV',
        brandName: 'Samsung',
        category: 'TV',
        productImage: [ `${base}/TV/${encode('Samsung 138 cm (55 inch) 4K Ultra HD LED Smart TV (UA55AU7700KLXL) 1.webp')}` ],
        description: 'Crystal clear 4K display',
        price: 54999,
        sellingPrice: 44999
      },
      {
        productName: 'Sony 43 inch FHD TV',
        brandName: 'Sony',
        category: 'TV',
        productImage: [ `${base}/TV/${encode('Sony 108 cm (43 inch) Full HD LED TV (KLV-43W672G) 1.webp')}` ],
        description: 'Full HD with Dolby Digital',
        price: 24999,
        sellingPrice: 19999
      },
      {
        productName: 'Mi 55 inch 4K TV',
        brandName: 'MI',
        category: 'TV',
        productImage: [ `${base}/TV/${encode('MI 139 cm (55 inch) 4K Ultra HD Android Smart TV (L55M5-AL) 1.webp')}` ],
        description: 'Budget 4K TV with Android',
        price: 29999,
        sellingPrice: 24999
      },
      {
        productName: 'Oneplus 55 inch TV',
        brandName: 'Oneplus',
        category: 'TV',
        productImage: [ `${base}/TV/${encode('OnePlus 139 cm (55 inch) Q1 Pro QLED Smart TV 1.webp')}` ],
        description: 'QLED TV with 120Hz',
        price: 49999,
        sellingPrice: 39999
      },
      {
        productName: 'TCL 43 inch Smart TV',
        brandName: 'TCL',
        category: 'TV',
        productImage: [ `${base}/TV/${encode('TCL 109 cm (43 inch) 4K Ultra HD Smart TV (43P8) 1.webp')}` ],
        description: '4K Smart TV with Roku',
        price: 19999,
        sellingPrice: 15999
      },

      // ===== SPEAKERS (5 products) =====
      {
        productName: 'boAt Stone 1350',
        brandName: 'boAt',
        category: 'speakers',
        productImage: [ `${base}/speakers/${encode('Stone 1350 1.webp')}` ],
        description: 'Portable speaker with 12 hours',
        price: 3999,
        sellingPrice: 2799
      },
      {
        productName: 'boAt Stone 1000',
        brandName: 'boAt',
        category: 'speakers',
        productImage: [ `${base}/speakers/${encode('Stone 1000 1.webp')}` ],
        description: 'Compact Bluetooth speaker',
        price: 1899,
        sellingPrice: 1299
      },
      {
        productName: 'JBL Flip 6',
        brandName: 'JBL',
        category: 'speakers',
        productImage: [ `${base}/speakers/${encode('JBL Flip 6 Waterproof Speaker 1.webp')}` ],
        description: 'Waterproof portable speaker',
        price: 9999,
        sellingPrice: 7999
      },
      {
        productName: 'Beats Pill',
        brandName: 'Beats',
        category: 'speakers',
        productImage: [ `${base}/speakers/${encode('Beats Pill+ Wireless Speaker 1.webp')}` ],
        description: 'Premium portable speaker',
        price: 12999,
        sellingPrice: 9999
      },
      {
        productName: 'UE Boom 3',
        brandName: 'Ultimate Ears',
        category: 'speakers',
        productImage: [ `${base}/speakers/${encode('UE Boom 3 Portable Speaker 1.webp')}` ],
        description: '360 degree sound speaker',
        price: 11999,
        sellingPrice: 8999
      },

      // ===== REFRIGERATOR (6 products) =====
      {
        productName: 'Godrej 215L Fridge',
        brandName: 'Godrej',
        category: 'refrigerator',
        productImage: [ `${base}/refrigerator/${encode('Godrej 215 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer (Aqua Blue, RD UNO 2154 PTDI AQ BL) 1.webp')}` ],
        description: 'Energy efficient refrigerator',
        price: 16999,
        sellingPrice: 13999
      },
      {
        productName: 'Godrej 236L Fridge',
        brandName: 'Godrej',
        category: 'refrigerator',
        productImage: [ `${base}/refrigerator/${encode('Godrej 236 L Frost Free Double Door 2 Star Refrigerator (Royal Dremin, RF EON 236B 25 HI RY DR) 1.webp')}` ],
        description: 'Frost free double door',
        price: 22999,
        sellingPrice: 18999
      },
      {
        productName: 'LG 215L Refrigerator',
        brandName: 'LG',
        category: 'refrigerator',
        productImage: [ `${base}/refrigerator/${encode('LG 215 L, 4 Star, Frost Free Double Door Refrigerator (GL-T252APZX-1.GVU02AR-4.1.UVP, Shiny Steel, inverter) 1.webp')}` ],
        description: 'Inverter compressor fridge',
        price: 21999,
        sellingPrice: 17999
      },
      {
        productName: 'Samsung 253L Fridge',
        brandName: 'Samsung',
        category: 'refrigerator',
        productImage: [ `${base}/refrigerator/${encode('Samsung 253 L, 3 Star, Frost Free Double Door Refrigerator 1.webp')}` ],
        description: 'Digital display fridge',
        price: 24999,
        sellingPrice: 20999
      },
      {
        productName: 'Whirlpool 292L Fridge',
        brandName: 'Whirlpool',
        category: 'refrigerator',
        productImage: [ `${base}/refrigerator/${encode('Whirlpool 292 L 3 Star Frost Free Double Door Refrigerator 1.webp')}` ],
        description: 'Large capacity refrigerator',
        price: 28999,
        sellingPrice: 24999
      },
      {
        productName: 'Haier 258L Fridge',
        brandName: 'Haier',
        category: 'refrigerator',
        productImage: [ `${base}/refrigerator/${encode('Haier 258 L 3 Star Frost Free Double Door Refrigerator 1.webp')}` ],
        description: 'Budget friendly fridge',
        price: 18999,
        sellingPrice: 15999
      },

      // ===== EARPHONES (4 products) =====
      {
        productName: 'boAt Rockerz 103',
        brandName: 'boAt',
        category: 'earphones',
        productImage: [ `${base}/earphones/${encode('boAt Rockerz 103 Pro 1.webp')}` ],
        description: 'Wired earphones with mic',
        price: 699,
        sellingPrice: 399
      },
      {
        productName: 'boAt Rockerz 265',
        brandName: 'boAt',
        category: 'earphones',
        productImage: [ `${base}/earphones/${encode('Rockerz 265 V2 1.webp')}` ],
        description: 'Neckband earphones',
        price: 1799,
        sellingPrice: 999
      },
      {
        productName: 'Sony MDR-ZX770',
        brandName: 'Sony',
        category: 'earphones',
        productImage: [ `${base}/earphones/${encode('Sony MDR-ZX770 Wired Headphones 1.webp')}` ],
        description: 'Over ear wired headphones',
        price: 2999,
        sellingPrice: 1999
      },
      {
        productName: 'JBL E35',
        brandName: 'JBL',
        category: 'earphones',
        productImage: [ `${base}/earphones/${encode('JBL E35 On Ear Earphones 1.webp')}` ],
        description: 'Comfortable on ear design',
        price: 2199,
        sellingPrice: 1499
      },

      // ===== CAMERA (4 products) =====
      {
        productName: 'CP PLUS CCTV Camera',
        brandName: 'CP PLUS',
        category: 'camera',
        productImage: [ `${base}/camera/${encode('CP PLUS 3MP Full HD Smart Wi-fi CCTV Home Security Camera 1.jpg')}` ],
        description: '3MP Full HD security camera',
        price: 4999,
        sellingPrice: 3499
      },
      {
        productName: 'Canon EOS 1500D',
        brandName: 'Canon',
        category: 'camera',
        productImage: [ `${base}/camera/${encode('Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens 1.webp')}` ],
        description: 'DSLR camera for Photography',
        price: 32999,
        sellingPrice: 25999
      },
      {
        productName: 'Nikon D5600',
        brandName: 'Nikon',
        category: 'camera',
        productImage: [ `${base}/camera/${encode('Nikon D5600 24.2MP DSLR Camera 1.webp')}` ],
        description: '24MP DSLR with video',
        price: 47999,
        sellingPrice: 39999
      },
      {
        productName: 'GoPro Hero 9',
        brandName: 'GoPro',
        category: 'camera',
        productImage: [ `${base}/camera/${encode('GoPro Hero 9 Black 1.webp')}` ],
        description: 'Action camera 5K video',
        price: 34999,
        sellingPrice: 27999
      },

      // ===== TRIMMERS (4 products) =====
      {
        productName: 'Ambrane AGK-11 Trimmer',
        brandName: 'Ambrane',
        category: 'trimmers',
        productImage: [ `${base}/trimmers/${encode('Ambrane AGK-11 Trimmer 60 min Runtime 18 Length Settings (Black) 1.webp')}` ],
        description: 'Cordless trimmer with 18 settings',
        price: 1299,
        sellingPrice: 799
      },
      {
        productName: 'ChinuStyle Hair Trimmer',
        brandName: 'ChinuStyle',
        category: 'trimmers',
        productImage: [ `${base}/trimmers/${encode('ChinuStyle Men Rechargeable Hair Clipper Hair Trimmer For Men Beard Electric Cutter Hair  1.webp')}` ],
        description: 'Rechargeable beard trimmer',
        price: 899,
        sellingPrice: 499
      },
      {
        productName: 'Philips QT4018',
        brandName: 'Philips',
        category: 'trimmers',
        productImage: [ `${base}/trimmers/${encode('Philips QT4018 Cordless Beard Trimmer 1.webp')}` ],
        description: 'Premium beard trimmer',
        price: 2299,
        sellingPrice: 1699
      },
      {
        productName: 'Braun BT3040',
        brandName: 'Braun',
        category: 'trimmers',
        productImage: [ `${base}/trimmers/${encode('Braun BT3040 Beard Trimmer 1.webp')}` ],
        description: 'High quality trimmer',
        price: 2699,
        sellingPrice: 1999
      },

      // ===== PROCESSOR (3 products) =====
      {
        productName: 'GIGASTAR i5-650',
        brandName: 'Intel',
        category: 'processor',
        productImage: [ `${base}/processor/${encode('GIGASTAR 3.2 GHz LGA 1156 Intel Core i5-650 For H55 Motherboard 1st Generation Processor (Silver) 1.webp')}` ],
        description: 'Intel Core i5 processor',
        price: 8999,
        sellingPrice: 6999
      },
      {
        productName: 'AMD Ryzen 7 3700X',
        brandName: 'AMD',
        category: 'processor',
        productImage: [ `${base}/processor/${encode('amd Ryzen 7 3700X with Wraith Prism & RGB LED Cooler (100-100000071BOX) 3.6 Ghz Upto 4.4 Ghz AM4 Socket 8  1.webp')}` ],
        description: '8 core 16 thread processor',
        price: 28999,
        sellingPrice: 22999
      },
      {
        productName: 'AMD Ryzen 7 3800XT',
        brandName: 'AMD',
        category: 'processor',
        productImage: [ `${base}/processor/${encode('amd Ryzen 7 3800XT 3.9 GHz Upto 4.7 GHz AM4 Socket 8 Cores 16 Threads Desktop Processor (Silver) 1.webp')}` ],
        description: 'High end 8 core processor',
        price: 32999,
        sellingPrice: 25999
      }
    ]

    // remove existing sample products with these names
    const names = products.map(p=>p.productName)
    await productModel.deleteMany({ productName: { $in: names } })

    const inserted = await productModel.insertMany(products)
    console.log('Inserted', inserted.length, 'products')
    process.exit(0)
  }catch(err){
    console.error(err)
    process.exit(1)
  }
}

seed()
