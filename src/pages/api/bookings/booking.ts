import type { NextApiRequest,NextApiResponse } from "next";
import { connectToDatabase } from "../../../../libs/MongoBooking";

type Data = {
    message:string | undefined
  }

  export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse<Data> 
  ) {
    try{
        let {db} = await connectToDatabase();
        let bodyObject = JSON.parse(req.body);
        let newPost = await db.collection("booking").insertOne(bodyObject)
        console.log(newPost)
        res.status(200).json({message:"Your details submitted successfully. We will reach out to you shortly"})
        
    }catch(err){
        res.status(400).json({message:"Something went wrong"});
    }
  }