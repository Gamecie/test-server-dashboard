import { getServerLists } from "$db/zicare_tsd/server";

export async function GET(request: Request): Promise<Response> {   
  const servers = await getServerLists();

  return new Response(JSON.stringify(servers), {
    "headers": { 
      "content-type": "application/json" 
    },
    "status": 200
  });
}