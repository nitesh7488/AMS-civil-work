// src/scripts/migrate-gallery.ts
// Run with: npx ts-node src/scripts/migrate-gallery.ts
// Seeds the database with the original static gallery images.

import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
import path from 'path';

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME     = 'mandal_civil';
const COLLECTION  = 'gallery';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80', alt: 'Bungalow Exterior', category: 'Bungalow' },
  { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80', alt: 'Luxury Bathroom', category: 'Bathroom' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', alt: 'Modular Kitchen', category: 'Kitchen' },
  { src: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80', alt: 'Floor Tiles', category: 'Tiles' },
  { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', alt: 'Living Room', category: 'Interior' },
  { src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80', alt: 'POP Ceiling', category: 'POP' },
  { src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80', alt: 'Marble Flooring', category: 'Flooring' },
  { src: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80', alt: 'House Construction', category: 'Bungalow' },
  { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80', alt: 'Bathroom Tiles', category: 'Bathroom' },
  { src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80', alt: 'Kitchen Interior', category: 'Kitchen' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'Wall Finish', category: 'Wall' },
  { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', alt: 'Completed Home', category: 'Bungalow' },
];

async function migrate() {
  if (!MONGODB_URI) {
    console.error('MONGODB_URI not found in .env.local');
    return;
  }

  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(DB_NAME);
    const col = db.collection(COLLECTION);

    // Prepare documents
    const docs = galleryImages.map(img => ({
      ...img,
      title: img.alt,
      createdAt: new Date(),
    }));

    // Insert
    const result = await col.insertMany(docs);
    console.log(`Successfully migrated ${result.insertedCount} images to the database!`);
    
  } catch (err) {
    console.error('Migration failed:', err);
  } finally {
    await client.close();
  }
}

migrate();
