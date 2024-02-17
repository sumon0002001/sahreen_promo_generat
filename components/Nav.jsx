"use client";

import { useState, useEffect } from "react";
import {
  signIn,
  getUser,
  signOut,
  useSession,
  getProviders,
} from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
      </Link>
      <p className="logo_text">Sahreen AI Prompt</p>
    </nav>
  );
};

export default Nav;
