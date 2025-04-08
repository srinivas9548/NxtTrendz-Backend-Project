const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const primeDealsData = [
    {
        id: 1001,
        image_url: "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-silver-hair-dryer.png",
        title: "Hair Dryer",
        style: "Philips HP8100/46 Hair Dryer - Salon Dry Compact",
        price: 760,
        description: "Cleverly designed, this compact hairdryer is easy to handle and lightweight. The ThermoProtect temperature setting provides the optimal hair drying rate while protecting your hair from overheating. An efficient hairdryer sets your hair dry in just a few seconds. It also comes with a rubber storage hook.",
        brand: "Phillips",
        total_reviews: 5463,
        rating: "3.9",
        availability: "In Stock"
    },
    {
        id: 1002,
        image_url: "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-people-toys.png",
        title: "Minifigures",
        style: "Minifigures",
        price: 760,
        description: "Collect all mystery mini-figures in the new series 11 and grow your LEGO Minifigure Collection. Each mini-figure comes in a sealed “mystery” bag with its accessories, display plate, and collector’s booklet. Only 1 of 16 individual mini-figures will be available in each “mystery” bag.",
        brand: "LEGO",
        total_reviews: 5463,
        rating: "3.9",
        availability: "In Stock"
    },
    {
        id: 1003,
        image_url: "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-short-tri-pod.png",
        title: "Lightweight Tripod",
        style: "Lightweight Tripod",
        price: 760,
        description: "Capture vivid, professional-style photographs with help from this Lightweight Tripod. The tripod makes it easy to achieve reliable stability and score just the right angle when going after that award-winning shot. The handy tripod accommodates a wide range of digital, video, and still cameras.",
        brand: "LEGO",
        total_reviews: 5463,
        rating: "3.9",
        availability: "In Stock"
    }
];

const dbPath = path.join(__dirname, 'ecommerce.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS prime_deals (
      id INTEGER PRIMARY KEY,
      image_url TEXT,
      title TEXT,
      style TEXT,
      price INTEGER,
      description TEXT,
      brand TEXT,
      total_reviews INTEGER,
      rating TEXT,
      availability TEXT
    )
  `);

    primeDealsData.forEach((deal) => {
        db.run(`
      INSERT OR IGNORE INTO prime_deals (
        id, image_url, title, style, price, description, brand, total_reviews, rating, availability
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
            deal.id,
            deal.image_url,
            deal.title,
            deal.style,
            deal.price,
            deal.description,
            deal.brand,
            deal.total_reviews,
            deal.rating,
            deal.availability
        ], (err) => {
            if (err) {
                console.error(`Error inserting deal ID ${deal.id}:`, err.message);
            } else {
                console.log(`Inserted or skipped deal ID ${deal.id}`);
            }
        });
    });
});

setTimeout(() => {
    db.close((err) => {
        if (err) {
            return console.error('Error closing DB:', err.message);
        }
        console.log('All data inserted. Database connection closed.');
    });
}, 1000);
