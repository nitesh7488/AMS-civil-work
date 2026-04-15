// src/scripts/migrate-testimonials.js
const fs = require('fs');
const { MongoClient } = require('mongodb');
const path = require('path');

// Read .env.local manually
const envPath = path.resolve(process.cwd(), '.env.local');
const env = fs.readFileSync(envPath, 'utf8');
const uri = env.match(/MONGODB_URI=(.*)/)[1].trim();

const client = new MongoClient(uri);

const testimonials = [
  {
    name: 'Rajesh Sharma',
    location: 'Borivali, Mumbai',
    rating: 5,
    text: 'AMS Civil transformed our old 2BHK into a modern luxury space. The attention to detail in the tiling and POP work was exceptional. They finished the project 4 days ahead of schedule!',
    service: 'Full Home Renovation',
    avatar: 'RS',
  },
  {
    name: 'Suresh Patil',
    location: 'Navi Mumbai',
    rating: 5,
    text: 'Finding a reliable contractor in Mumbai is hard, but Kedar and his team are a rare find. Honest pricing, highly skilled workers, and no hidden costs. Highly recommended for bungalow work.',
    service: 'Bungalow Construction',
    avatar: 'SP',
  },
  {
    name: 'Anita Desai',
    location: 'Thane',
    rating: 5,
    text: 'The POP ceiling work in our living room is a masterpiece. The cove lighting integration was done perfectly. Many guests mistake it for high-end interior design work.',
    service: 'POP Work',
    avatar: 'AD',
  },
  {
    name: 'Vikram Gupta',
    location: 'Mira Road',
    rating: 4,
    text: 'Solid workmanship on our villa project. The team is very responsive and keeps us updated at every stage. Thrilled with the progress and quality of materials used.',
    service: 'Bungalow Construction',
    avatar: 'VG',
  },
  {
    name: 'Nisha Joshi',
    location: 'Mulund, Mumbai',
    rating: 5,
    text: 'The flooring team did an outstanding job with our marble installation. Zero gaps, perfect level, and the polishing is mirror-smooth. Worth every rupee!',
    service: 'Flooring Work',
    avatar: 'NJ',
  },
];

async function migrate() {
  try {
    await client.connect();
    const db = client.db('mandal_civil');
    const col = db.collection('testimonials');

    // Add createdAt to each
    const docs = testimonials.map(t => ({ ...t, createdAt: new Date() }));

    const result = await col.insertMany(docs);
    console.log(`Successfully migrated ${result.insertedCount} testimonials.`);
  } catch (err) {
    console.error('Migration failed:', err);
  } finally {
    await client.close();
  }
}

migrate();
