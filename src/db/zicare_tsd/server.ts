import { getDB } from '$db/mongo';
import { serverRelationalAggregation } from './aggregations/server';

const db = getDB('zicare_tsd');
const collection = db.collection('server');

export async function getServerLists(): Promise<JSON> {
  return await collection.aggregate(serverRelationalAggregation).toArray();
}