import React from "react";
import Image from "next/image";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsInstagram
} from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-bgColor text-black/80 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/gw_logo.png" width={120} height={80} alt="logo" />
          <p className="flex items-center font-titleFont gap-1 font-semibold text-md ">
            <AiOutlineCopyrightCircle className="mt-[1px] ml-2" />
            Sagnik Panda || all rights reserved 2023
          </p>
        </div>

        <div className="flex gap-7 sm:justify-start">
          <BsInstagram className="w-7 h-7 text-black/50 hover:text-pink-500 duration-300 cursor-pointer" />
          <BsFacebook className="w-7 h-7 text-black/50 hover:text-[#2936f2] duration-300 cursor-pointer" />
          <BsGithub className="w-7 h-7 text-black/50 hover:text-[#4eba7b] duration-300 cursor-pointer" />
          <BsLinkedin className="w-8 h-7 text-black/50 hover:text-[#535cbe] duration-300 cursor-pointer" />
          <BsTwitter className="w-7 h-7 text-black/50 hover:text-[#29bdf2] duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
