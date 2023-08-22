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
          <nav className="">
            <li className="list-none m-0 p-0 flex gap-5 justify-between items-center">
              <Link
                href="/contact"
                className="text-gray-600 hover:text-green-500 transition-all duration-300 ease-in-out"
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="text-gray-600 hover:text-green-500 transition-all duration-300 ease-in-out"
              >
                Login
              </Link>
            </li>
          </nav>
        </div>
      </Container>
    </header>
  );
}
