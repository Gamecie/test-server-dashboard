import { getDB } from '$db/mongo';

const db = getDB('zicare_tsd');

export async function getCollection(collection_name:string, skip:number, limit:number): Promise<JSON>
{
    // get repositories from MongoDB with skip and limit
    return await db.collection(collection_name).find({}).project({_id:0}).skip(skip).limit(limit).toArray();
}

export async function searchCollection(collection_name:string, search:string): Promise<JSON>
{
    // get repositories from MongoDB with search query and regex options
    return db.collection(collection_name).find({title:{$regex:search, $options:'i'}}).project({_id:0}).toArray();
}
