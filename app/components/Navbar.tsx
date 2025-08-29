import Image from "next/image";
import Link from "next/link";
import React from "react";
import DasktopLogo from "../../public/Airbnb_Logo_.png";
import MobileLogo from "../../public/airbnb-mobile-logo.png";
import UserNav from "./UserNav";

const Navbar = () => {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container max-auto px-5 lg:px-10 py-5">
        <Link href="/">
          <Image
            src={DasktopLogo}
            alt="Desktop logo"
            className="w-32 hidden lg:block"
          />
          <Image
            src={MobileLogo}
            alt="Mobile logo"
            className="block lg:hidden w-12"
          />
        </Link>
        <div className=" rounded-full border px-5 py-2">
          <h1>hello</h1>
        </div>
        <UserNav />
      </div>
    </nav>
  );
};

export default Navbar;
