import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";
import Refractor from "react-refractor";
// Load any languages you want to use from `refractor`
 import js from "refractor/lang/javascript";
// import typescript from "refractor/lang/typescript";
// import tsx from "refractor/lang/tsx";

//You'll need to register the languages you want to use 
 Refractor.registerLanguage(js);
// Refractor.registerLanguage(typescript);
// Refractor.registerLanguage(tsx);
export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain rounded-lg hover:w-full hover:h-full"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  //   myCodeField: ({ props }: any) => {
  //     // return (
  //     //   <Refractor
  //     //   // In this example, `props` is the value of a `code` field
  //     //   language={props.language}
  //     //   value={props.code}
  //     //   markers={props.highlightedLines}
  //     // />
  
  //     // );
  // },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5 text-lg">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="lg:text-3xl py-7 font-bold text-cyan-700 underline text-2xl">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="lg:text-2xl py-5 font-bold text-gray-600 underline text-xl">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="pl-5 py-5 my-5 bg-[#1E293B] text-md font-mono text-[#7BCFF7]">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg py-3 text-gray-700">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#4181ac] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
