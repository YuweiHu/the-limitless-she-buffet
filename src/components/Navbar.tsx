"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const sets = ["A", "B", "C", "D"];

export default function Navbar() {
  const [isSetMenuOpen, setIsSetMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo-desktop.png"
                alt="The Limitless She Buffet"
                width={250}
                height={64}
              />
            </Link>
          </div>
          {/* Mobile hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="#91C8E4"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Desktop menu */}
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
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 shadow-lg z-40">
            <div className="flex flex-col space-y-2 py-4 px-6">
              <Link
                href="/dishes"
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                All Dishes A to Z
              </Link>
              <div className="py-2">
                <div className="text-gray-800 font-medium mb-2">Set Menu</div>
                <div className="pl-4 space-y-2">
                  {sets.map((set) => (
                    <Link
                      key={set}
                      href={`/set/${set}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-600 hover:text-gray-900"
                    >
                      {`Set ${set}`}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/chefs"
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Chefs
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
