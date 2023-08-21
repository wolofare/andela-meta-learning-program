import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="text-center text-slate-50 bg-slate-600 h-40 p-5">
      <h2 className="text-2xl">React Router</h2>
      <nav>
        <Link to="products" className="text-white no-underline p-1">
          Products
        </Link>
      </nav>
    </header>
  );
}
