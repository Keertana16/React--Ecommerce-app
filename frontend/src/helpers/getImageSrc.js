const placeholder = require('../assest/sampleImage.jpg')

const categoryImages = {
    watches: require('../assest/products/watches/boAt Wave Beat 1.webp'),
    camera: require('../assest/products/camera/Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens 2.jpg'),
    mobile: require('../assest/products/mobile/SAMSUNG Galaxy A03 (Black, 32 GB) (3 GB RAM) 1.webp'),
    earphones: require('../assest/products/earphones/Rockerz 265 V2 1.webp'),
    airpodes: require('../assest/products/airpodes/boAt Airdopes 111 1.webp'),
    mouse: require('../assest/products/mouse/ASUS Marshmallow - Silent, Adj. DPI, Multi-Mode, With Solar Cover Wireless Optical Mouse (2.4GHz Wireless, Bluetooth, Quiet Blue) 1.webp'),
    printers: require('../assest/products/printers/Canon MG2570S Multi-function Color Inkjet Printer (Black, Ink Cartridge) 1.webp'),
    processor: require('../assest/products/processor/GIGASTAR 3.2 GHz LGA 1156 Intel Core i5-650 For H55 Motherboard 1st Generation Processor (Silver) 1.webp'),
    refrigerator: require('../assest/products/refrigerator/Godrej 215 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer (Aqua Blue, RD UNO 2154 PTDI AQ BL) 1.webp'),
    speakers: require('../assest/products/speakers/BLITZ 2000 1.webp'),
    trimmers: require('../assest/products/trimmers/Ambrane AGK-11 Trimmer 60 min Runtime 18 Length Settings (Black) 1.webp'),
    tv: require('../assest/products/TV/LG 123 cm (49 inch) Ultra HD (4K) LED Smart WebOS TV (49UK7500PTA) 1.webp')
}

function getImageSrc(url, category){
        if (url) {
            if (typeof url === 'string' && /^https?:\/\//i.test(url)) {
                try {
                    const parsedUrl = new URL(url)
                    return `${parsedUrl.pathname}${parsedUrl.search}`
                } catch (error) {
                    return url
                }
            }

            return url
        }

        if(!category) return placeholder
        const key = category.toString().toLowerCase()
        return categoryImages[key] || placeholder
}

export default getImageSrc
