import React from "react";

function Navbar() {
  return (
    <nav className="bg-emerald-600 sticky top-0 z-10 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-lg">
            <a href="/" className="text-white">
              WhatsApp Toolkit
            </a>
          </div>
          <div className="space-x-4">
            <a href="/" className="text-white">
              Home
            </a>
            <a href="pricing" className="text-white">
              Pricing
            </a>
            <a href="contact" className="text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
