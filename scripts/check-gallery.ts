import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI not found');
    return;
  }

  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('gallery');
    const items = await collection.find({}).toArray();
    console.log('Gallery Items in DB:', JSON.stringify(items, null, 2));
  } catch (error) {
    console.error('DB Error:', error);
  } finally {
    await client.close();
  }
}

main();
