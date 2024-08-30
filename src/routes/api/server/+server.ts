import { getServerLists } from "$db/zicare_tsd/server";

export async function GET(request: Request): Promise<Response> {   
  // get employee from MongoDB
  const servers = await getServerLists();
  // return JSON response
  // content type: json
  return new Response(JSON.stringify(servers), {
    headers: {
      'content-type': 'application/json'
    }
  });
}