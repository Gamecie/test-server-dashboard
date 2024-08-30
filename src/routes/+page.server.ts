import { getServerLists } from "$db/zicare_tsd/server";

export async function get(request: Request): Promise<{ data: JSON }> {   
  // get employee from MongoDB
  const task = await getServerLists();
  console.log({task});
  // return JSON response
  return { data : task };
}