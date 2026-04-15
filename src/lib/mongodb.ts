// src/lib/mongodb.ts
// MongoDB singleton connection — reuses the same client across hot-reloads in dev.

import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI as string;
const DB_NAME     = 'mandal_civil';

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in your .env.local file');
}

/* Cache the connection on the global object in dev to survive hot-reloads */
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    console.log('[MongoDB] Initializing new connection...');
    const client = new MongoClient(MONGODB_URI);
    global._mongoClientPromise = client.connect();
  } else {
    console.log('[MongoDB] Using existing global connection promise.');
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  const client = new MongoClient(MONGODB_URI);
  clientPromise = client.connect();
}

export default clientPromise;

/** Helper — returns the app database */
export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db(DB_NAME);
}
