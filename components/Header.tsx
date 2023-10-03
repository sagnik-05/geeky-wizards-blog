import React from "react";
import Link from "next/link";
import Image from "next/image";
function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/wizard.jpg"
            width={100}
            height={100}
            alt="Geeky Wizard"
            className="rounded-full"
          />
        </Link>
        <h1 className="text-sky-800/90 text-2xl">Geeky Wizard</h1>
      </div>
      <div className=" flex justify-center ">
        
        <Link
          href="/"
          className="px-5 py-3 text-base text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br flex items-center rounded-full m-2
        text-center"
        >
          Visit my Website
        </Link>
      </div>
    </header>
  );
}

export default Header;
