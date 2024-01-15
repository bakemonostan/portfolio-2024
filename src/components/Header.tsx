import React from "react";
import { createClient } from "@/prismicio";

import NavBar from "@/components/NavBar";
import Link from "next/link";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
      <nav>
        <ul>
          <li>
            <Link href="/" aria-label="Home page">
              {settings.data.name}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
