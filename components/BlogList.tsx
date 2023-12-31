// eslint-disable react/jsx-key
import React from "react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { getClient } from "@/lib/getClient";
import category from "@/schemas/category";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";
import Footer from "./Footer";
type Props = {
  posts: Post[];
};
function BlogList({ posts }: Props) {
  return (
    <div>
    <div>
      <hr className="border-[#29bdf2] mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="flex flex-col group cursor-pointer">
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <Image
                  className="object-cover object-left lg:object-center"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black rounded backdrop-blur-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center mr-5">
                    {post.categories.map((category, index) => (
                      <div
                        key={`category-${index}`} // Use a unique key for each category
                        className="px-4 py-2 bg-[#29bdf2] text-white rounded-lg text-sm font-semibold text-center"
                      >
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="">
                <p className=" line-clamp-2 mt-2">{post.description}</p>
              </div>
              <p className="mt-5 font-bold flex items-center group-hover:underline">
                Read Post
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
    </div>
  );
}

export default BlogList;
