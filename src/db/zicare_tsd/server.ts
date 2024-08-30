import { getDB } from '$db/mongo';
import { toPOJO } from '$helper/mongo';
import { serverRelationalAggregation } from './aggregations/server';

const db = getDB('zicare_tsd');
const collection = db.collection('server');

export async function getServerLists(): Promise<Object> {
  const servers = await collection.aggregate(serverRelationalAggregation).toArray();
  return toPOJO(servers);
}