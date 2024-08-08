import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://alfredojose92:Dev.2024@users.didkq.mongodb.net/?retryWrites=true&w=majority";

export default async function handler(req, res) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
  try {
    await client.connect();
    const database = client.db("aroma");
    const collection = database.collection("user");

    // Realiza las acciones necesarias con la colección
    const users = await collection.find({}).toArray();

    res.status(200).json(collection);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await client.close();
  }
}
