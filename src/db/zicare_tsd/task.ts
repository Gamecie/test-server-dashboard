import { getDB } from '$db/mongo';
import { taskRelationalAggregation } from './aggregations/task';

const db = await getDB('zicare_tsd');
const collection = db.collection('task');

export async function getTaskLists(): Promise<JSON> {
  return await collection.find().aggregate(taskRelationalAggregation).toArray();
}