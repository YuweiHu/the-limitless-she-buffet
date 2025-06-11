"use client";

import Link from "next/link";
import { useState } from "react";

const sets = ["A", "B", "C", "D"];

export default function Navbar() {
  const [isSetMenuOpen, setIsSetMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              The Limitless She Buffet
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/dishes" className="text-gray-600 hover:text-gray-900">
              All Dishes A to Z
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsSetMenuOpen(!isSetMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                Set Menu
              </button>
              {isSetMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
                  onMouseLeave={() => setIsSetMenuOpen(false)}
                >
                  {sets.map((set) => (
                    <Link
                      key={set}
                      href={`/set/${set}`}
                      onClick={() => setIsSetMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {`Set ${set}`}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/chefs" className="text-gray-600 hover:text-gray-900">
              Our Chefs
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
