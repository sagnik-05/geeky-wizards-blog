import React from "react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
//import imageUrlBuilder from '@sanity/image-url'
import { getClient } from "@/lib/client";
type Props = {
  posts: Post[];
};
// function urlFor (source) {
//     return imageUrlBuilder( getClient ).image(source)
// }

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10" />
      {/* <div>
       
        {posts.map((post) => (
          <div key={post._id}>
            <div
              className="relative w-full h-80 drop-shadow-xl
group-hover: scale-105 transition-transform duration-200
ease-out"
            >
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default BlogList;
