import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_NAME = process.env.DB_NAME_BOOKING;

if(!MONGODB_URI) {
    throw new Error('Define the MONGODB_URI env variable')
}

if(!MONGODB_NAME){
    throw new Error("Define the MONGODB_NAME env variable")
}

let cachedClient:any = null;
let cachedDb:any = null;

export async function connectToDatabase() {
    if(cachedClient && cachedDb){

        return{
            client: cachedClient,
            db: cachedDb
        }
    }

    const options:any = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    let client = new MongoClient(MONGODB_URI!, options);
    await client.connect();
    let db = client.db(MONGODB_NAME);

    cachedClient = client;
    cachedDb = db;

    return{
        client: cachedClient,
        db: cachedDb
    }
}