import React from "react";
import Image from "next/image";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    // <div className="w-full py-10 bg-bgColor text-black/80 px-4 bg-gray-100">
    //   <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
    //     <div className="flex items-center gap-3">
    //       <Image src="/gw_logo.png" width={120} height={80} alt="logo" />
    //       <p className="flex items-center font-titleFont gap-1 font-semibold text-md ">
    //         <AiOutlineCopyrightCircle className="mt-[1px] ml-2" />
    //         Sagnik Panda || all rights reserved 2023
    //       </p>
    //     </div>

    //     <div className="flex gap-7 sm:justify-start">
    //       <a
    //         href="https://www.instagram.com/_sagnik_05/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <BsInstagram className="w-7 h-7 text-black/50 hover:text-pink-500 duration-300 cursor-pointer" />
    //       </a>
    //       <BsFacebook className="w-7 h-7 text-black/50 hover:text-[#2936f2] duration-300 cursor-pointer" />
    //       <a
    //         href="https://github.com/sagnik-05"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <BsGithub className="w-7 h-7 text-black/50 hover:text-[#4eba7b] duration-300 cursor-pointer" />
    //       </a>
    //       <a
    //         href="https://www.linkedin.com/in/sagnik-panda-164242230/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <BsLinkedin className="w-8 h-7 text-black/50 hover:text-[#535cbe] duration-300 cursor-pointer" />
    //       </a>
    //     </div>
    //   </div>
    // </div>

    <footer className="relative bg-slate-50 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-cyan-800">
              Let&apos;s keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-cyan-700">
              Find me on any of these platforms, will respond as fast as
              possible :)
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex gap-7 sm:justify-start">
              <a
                href="https://www.instagram.com/_sagnik_05/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram className="w-7 h-7 text-cyan-800 hover:text-pink-500 duration-300 cursor-pointer" />
              </a>
              <BsFacebook className="w-7 h-7 text-cyan-800 hover:text-[#2936f2] duration-300 cursor-pointer" />
              <a
                href="https://github.com/sagnik-05"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className="w-7 h-7 text-cyan-800 hover:text-[#4eba7b] duration-300 cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/sagnik-panda-164242230/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="w-8 h-7 text-cyan-800 hover:text-[#535cbe] duration-300 cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-cyan-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-cyan-700 hover:text-cyan-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-cyan-700 hover:text-cyan-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-cyan-700 hover:text-cyan-800 font-semibold block pb-2 text-sm"
                      href="https://github.com/sagnik-05"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-cyan-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-cyan-700 hover:text-cyan-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-cyan-700 hover:text-cyan-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-cyan-700 hover:text-cyan-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-cyan-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-cyan-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span> Sagnik Panda
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
