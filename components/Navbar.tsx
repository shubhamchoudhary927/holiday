"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, User } from "lucide-react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-orange-600">हॉलिडे</span>
              <span className="text-2xl font-bold text-gray-700">पैकेज</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">
              होम
            </Link>
            <Link href="/packages" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">
              पैकेज
            </Link>
            <Link href="/destinations" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">
              डेस्टिनेशन
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">
              संपर्क करें
            </Link>

            {/* Auth Buttons */}
            {status === "loading" ? (
              <div className="w-20 h-8 bg-gray-200 animate-pulse rounded"></div>
            ) : session ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-700">{session.user?.name}</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => signOut()}
                  className="flex items-center gap-1"
                >
                  <LogOut className="h-4 w-4" />
                  लॉगआउट
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm">लॉगिन</Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                    साइनअप
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium">
              होम
            </Link>
            <Link href="/packages" className="block text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium">
              पैकेज
            </Link>
            <Link href="/destinations" className="block text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium">
              डेस्टिनेशन
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium">
              संपर्क करें
            </Link>
            
            {!session && (
              <div className="pt-4 space-y-2">
                <Link href="/login" className="block">
                  <Button variant="outline" className="w-full">लॉगिन</Button>
                </Link>
                <Link href="/signup" className="block">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">साइनअप</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}