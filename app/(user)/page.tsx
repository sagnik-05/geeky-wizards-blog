import { draftMode } from "next/headers";
import { groq } from "next-sanity";
import { getClient,getCachedClient } from "../../lib/getClient";
import PreviewPosts from "@/components/PreviewPosts";
import PreviewProvider from "@/components/PreviewProvider";
import Posts from "@/components/Posts";
import { postsQuery } from "../../lib/queries";
import BlogList from "@/components/BlogList";
const query = groq`
  *[_type == 'post']{
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)
`;

export default async function HomePage() {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;
  const post = await getCachedClient(preview)(postsQuery);
  if (preview && preview.token) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewPosts posts={post} />
      </PreviewProvider>
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

  return <BlogList posts={posts} />;
}
