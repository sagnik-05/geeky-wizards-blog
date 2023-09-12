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
    return <p>Loding your Blog...</p>
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
          <section className="p-5 bg-[#29bdf2] w-full">
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
                    className=" bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
}
//export default dynamic(() => Promise.resolve(Post), { ssr: false });
export default Post;
