// import { SanityDocument } from "@sanity/client";
// import { draftMode } from "next/headers";

// import Post from "@/components/Post";
// import PreviewProvider from "@/components/PreviewProvider";
// import PreviewPost from "@/components/PreviewPost";

// import { postPathsQuery, postQuery } from "../../../../lib/queries";
// import { getCachedClient } from "../../../../lib/getClient";

// // Prepare Next.js to know which routes already exist
// export async function generateStaticParams() {
//   const posts = await cachedClient(postPathsQuery);

//   return posts;
// }

// export default async function Page({ params }: { params: any }) {
//   const preview = draftMode().isEnabled
//     ? { token: process.env.SANITY_API_READ_TOKEN }
//     : undefined;
//   const post = await getCachedClient(preview)<SanityDocument>(postQuery, params);

//   if (preview?.token) {
//     return (
//       <PreviewProvider token={preview.token}>
//         <PreviewPost post={post} />
//       </PreviewProvider>
//     );
//   }

//   return <Post post={post} />;
// }
"use client"
import { client } from "../../../../lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import CommentSection from "@/components/CommentSection";
import { useState, useEffect } from "react";
type Props = {
  params: {
    slug: string;
  };
};
export const revalidate = 30;

export async function generateStaticParams() {
  const query = groq`*[_type=='post']{
    slug
  }
  `;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}
function Post({ params: { slug } }: Props) {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = groq`
        *[_type ==  'post' && slug.current == $slug][0]{
          ...,
          author->,
          categories[]->,
        }
      `;
      const postData: Post = await client.fetch(query, { slug });
      setPost(postData);
    };

    fetchData();
  }, [slug]);

  if (!post) {
    return (
      <div role="status" className=" flex justify-center m-4">
    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>
    )
  }
  return (
    <article className="px-10 pb-28 mt-10">
      <section className="space-y-2 border border-[#29bdf2] text-white">
        <div className=" relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className=" absolute top-0 w-full h-full opacity-20 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className="p-5 bg-cyan-600 w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  className=" rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                  suppressHydrationWarning={true}
                />
                <div className=" w-64">
                  <h3 className=" text-lg font-bold">{post.author.name}</h3>
                </div>
              </div>
            </div>
            <div>
              <h2 className=" italic pt-10">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className=" bg-sky-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        
        </div>
      </section>
      <PortableText value={post.body} components={RichTextComponents}/> 
      <CommentSection/>
    </article>
  );
}
export default Post;
