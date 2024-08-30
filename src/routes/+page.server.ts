import { getServerLists } from "$db/zicare_tsd/server";

export async function load(request: Request): Promise<{ data: JSON }> {   
  // get employee from MongoDB
  const task = await getServerLists();
  // return JSON response
  return { data : JSON.stringify(task) };
}