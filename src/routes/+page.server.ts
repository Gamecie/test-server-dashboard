import { getServerLists } from "$db/zicare_tsd/server";

export async function load(request: Request): Promise<{ data: Object }> {   
  // get employee from MongoDB
  const servers = await getServerLists();
  // return JSON response
  return { data : servers };
}