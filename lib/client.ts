// import { createClient } from "@sanity/client";
// import type { SanityClient } from "@sanity/client";
// import { cache } from "react";

// export const projectId =  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
// export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
// export const apiVersion = '1'; // Set to '1' for the latest API version

// export function getClient(previewToken?: string): SanityClient {
//   const client = createClient({
//     projectId,
//     dataset,
//     apiVersion,
//     useCdn: false,
//   });

//   return previewToken
//     ? client.withConfig({
//         token: previewToken,
//         useCdn: false,
//         ignoreBrowserTokenWarning: true,
//         // If you are using '1' as the apiVersion, set perspective to 'published' for production data
//         perspective: 'previewDrafts',
//       })
//     : client;
// }
// export const getCachedClient = (preview?: {token?: string}) => {
//   const client = getClient(preview);

//   return cache(client.fetch.bind(client));
// };
// ./nextjs-app/sanity/lib/client.ts

import { createClient } from 'next-sanity'
import { cache } from "react"

import { apiVersion, dataset, projectId, useCdn } from "../sanity/env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});
// export const cachedClient = cache(client.fetch.bind(client))