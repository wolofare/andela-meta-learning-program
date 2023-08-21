import Link from "next/link";
import React from "react";
import Container from "../Container";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-neutral-100">
      <Container>
        <div className="flex items-center justify-between h-10 py-4">
          <h1 className="text-xl font-semibold">
            <Link href={"/"}>Form Validation</Link>
          </h1>
          <nav>
            <li className="list-none m-0 p-0">
              <Link
                href="/contact"
                className="text-gray-600 hover:text-green-500 transition-all duration-300 ease-in-out"
              >
                Contact
              </Link>
            </li>
          </nav>
        </div>
      </Container>
    </header>
  );
}
