import React from "react";

const Footer = () => {
  return (
    <div className="mt-24 bg-emerald-100 py-8">
      <div className="flex justify-around ">
        <div className="text-center">
          <h2 className="font-bold text-xl mb-6 text-gray-700">Support</h2>
          <ul className="text-sm items-center text-slate-600">
            <li className="hover:text-emerald-500 cursor-pointer">FAQ</li>
            <li className="hover:text-emerald-500 cursor-pointer">Blogs</li>
            <li className="hover:text-emerald-500 cursor-pointer">Pricing</li>
            <li className="hover:text-emerald-500 cursor-pointer">
              Contact us
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h2 className="font-bold text-xl mb-6 text-gray-700">Tools</h2>
          <ul className="text-sm  items-center text-slate-600">
            <li className="hover:text-emerald-500 cursor-pointer">
              WhatsApp Link Generator
            </li>
            <li className="hover:text-emerald-500 cursor-pointer">
              WhatsApp Text Formatter
            </li>
            <li className="hover:text-emerald-500 cursor-pointer">
              Random Password Generator
            </li>
            <li className="hover:text-emerald-500 cursor-pointer">
              WhatsApp QR Code Generator
            </li>
          </ul>
        </div>
        <div className="text-center ">
          <h2 className="font-bold text-xl mb-6 text-gray-700">Company</h2>
          <ul className="text-sm  text-slate-600">
            <li className="hover:text-emerald-500 cursor-pointer">Affliiate</li>
            <li className="hover:text-emerald-500 cursor-pointer">
              Terms and Condition
            </li>
            <li className="hover:text-emerald-500 cursor-pointer">
              Refund Policy
            </li>
            <li className="hover:text-emerald-500 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center my-6 text-sm text-gray-600 max-w-full ">
        <p>Copyright © 2024 WAToolkit</p>
        <p>Made with WACode 💚</p>
      </div>
    </div>
  );
};

export default Footer;
Footer;
