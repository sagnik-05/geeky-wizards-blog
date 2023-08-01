import { draftMode } from "next/headers";
import { groq } from "next-sanity";
import { getClient } from "../../lib/client";
// import PreviewSuspense from "../../components/PreviewSuspense"
import { LiveQueryProvider } from '@sanity/preview-kit'
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";
const query = groq`
  *[_type == 'post']{
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)
`;

export default async function HomePage() {
  const { isEnabled } = draftMode();
  if (isEnabled) {
    return (
    // <PreviewSuspense fallback={(
    //   <div className="text-center text-lg animate-pulse text-blue-600">
    //     <p>Loading...</p>
    //   </div>
      
    // )}>
      
    // </PreviewSuspense>
     <PreviewBlogList query={query}/>
    );
  }

  // Use getClient to get the Sanity client
  const sanityClient = getClient();

  // Create a query execution function using the client
  const executeQuery = async () => {
    return await sanityClient.fetch(query);
  };

  // Call the query execution function to fetch data
  const posts = await executeQuery();
  // console.log(posts);

  return <BlogList posts={ posts}/>
}