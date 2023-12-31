// import type { NextApiRequest, NextApiResponse } from "next";
// export default function exit(req: NextApiRequest, res: NextApiResponse) {
//     res.setDraftMode({ enable: true })
//     res.writeHead(307, { Location: '/' })
//     res.end()
// }
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  draftMode().disable();
  redirect("/");
  // return new Response("Draft mode is disabled");
}