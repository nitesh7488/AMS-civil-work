const { MongoClient } = require('mongodb');

const uri = "mongodb://user:9102615343n%40N@ac-h7cauva-shard-00-00.xnx1o91.mongodb.net:27017,ac-h7cauva-shard-00-01.xnx1o91.mongodb.net:27017,ac-h7cauva-shard-00-02.xnx1o91.mongodb.net:27017/mandal_civil?ssl=true&replicaSet=atlas-f9z1f6-shard-0&authSource=admin&retryWrites=true&w=majority";

async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('mandal_civil');
    const blogsCollection = db.collection('blogs');

    const blog = await blogsCollection.findOne({ slug: "bungalow-construction-cost-in-mumbai-2026-a-complete-guide" });
    console.log(blog.content);

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
