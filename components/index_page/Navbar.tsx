"use client";

import { useState, useEffect } from "react";
import { SIDENAV_ITEMS } from "@/utils/constants";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { useWindowSize } from "@/hooks/useWindowSize";

import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const windowSize = useWindowSize();

  return (
    <>
      <div className="fixed z-10 w-full h-16 flex justify-between items-center px-8 pt-6 navbar gradient navbarBackground">
        <Link href="/">
          <Image
            src="assets/adfilm_logo.svg"
            width={96}
            height={22.33}
            className="select-none cursor-pointer"
            alt="adfilm Logo"
            draggable="false"
          />
        </Link>
        <div className="flex justify-center items-center gap-2 p-3 transition-all hover:bg-white hover:shadow-glow  hover:shadow-white hover:text-black text-white duration-100 border-white rounded cursor-pointer border">
          <p className="font-montserrat text-md">Meniu</p>
          <RxHamburgerMenu className="text-2xl" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
