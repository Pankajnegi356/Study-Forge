const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

// Avoid multiple connection instances in serverless
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) return cachedDb;
  const db = await mongoose.connect(MONGODB_URI);
  cachedDb = db;
  return db;
}

const stateSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  data: { type: mongoose.Schema.Types.Mixed }
}, { strict: false });

const State = mongoose.models.State || mongoose.model('State', stateSchema);

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    await connectToDatabase();

    const collectionName = req.query.collection || 'default_state';

    if (req.method === 'GET') {
      const state = await State.findOne({ userId: collectionName });
      return res.status(200).json(state ? state.data : {});
    } 
    
    if (req.method === 'POST') {
      const { data } = req.body;
      await State.findOneAndUpdate(
        { userId: collectionName },
        { data: data },
        { upsert: true, new: true }
      );
      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
