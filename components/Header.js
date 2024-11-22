"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { NavMenu } from "./NavMenu";

export default function Header() {
  const [menuNav, setMenuNav] = useState(false);
  const toggleNavMenu = () => {
    setMenuNav(!menuNav);
  };
  return (
    <>
      <header className={`fixed w-full p-12 top-0 z-40 bg-background`}>
        <div className={`flex w-[1000px] mx-auto`}>
            <Image
              className={`transition-all ${menuNav ? "saturate-0" : ""}`}
              src={`/logo.svg`}
              alt={`NDEX Logo`}
              width={`32`}
              height={`32`}
            />
          <div className={`grow`}></div>
          <div
            className={`flex items-center justify-center p-4 -m-4 hover:cursor-pointer`}
            onClick={() => toggleNavMenu()}
          >
            <Image
              className={`transition-all duration-300 ease-out select-none ${
                menuNav ? "rotate-180 saturate-0" : ""
              }`}
              src={`/ham.svg`}
              alt={`Open Menu`}
              width={`20`}
              height={`20`}
            />
          </div>
        </div>
      </header>

      <NavMenu state={menuNav} />
    </>
  );
}
