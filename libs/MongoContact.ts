import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_NAME = process.env.DB_NAME_CONTACT;


//check the MongoDb URI

if(!MONGODB_URI){
    throw new Error('Define the MONGODB_URI env variable')
}

//check the mongodb name

if(!MONGODB_NAME){
    throw new Error("Define the MONGODB_NAME env variable")
}

let cachedClient:any = null;
let cachedDb:any = null;


export async function connectToDatabase(){
    //check the cache

    if(cachedClient && cachedDb){
        //load from cache
        return{
            client: cachedClient,
            db: cachedDb
        }
    }

    //set the connection options
    const options:any = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    //connect to cluster

    let client = new MongoClient(MONGODB_URI!, options);
    await client.connect();
    let db = client.db(MONGODB_NAME);


    //set cache
    cachedClient = client;
    cachedDb = db;

    return{
        client: cachedClient,
        db: cachedDb
    }
}