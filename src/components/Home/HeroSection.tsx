/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto lg:px-0 ">
      <div className="flex items-center justify-around ">
        <div className="w-1/2 pr-8 items-center">
          <h1 className="text-4xl font-bold text-gray-700 ">
            Welcome to WhatsApp Toolkit
          </h1>
          <p className="text-gray-600 landing-relaxed">
            Empower your privacy: Blur out contact names, photos, recent
            messages, and more. Take control with our innovative features for a
            secure user experience. Elevate your privacy, seamlessly.
          </p>
          <div className=" mt-16">
            <div className="flex">
              <Image
                src="/images/customer-1.jpg"
                className="rounded-full w-10 -ml-1.5 ring ring-white"
                alt="customer image"
                width={40}
                height={40}
              />
              <Image
                src="/images/customer-2.jpg"
                className="rounded-full w-10 -ml-1.5 ring ring-white"
                alt="customer image"
                width={40}
                height={40}
              />
              <Image
                src="/images/customer-3.jpg"
                className="rounded-full w-10 -ml-1.5 ring ring-white"
                alt="customer image"
                width={40}
                height={40}
              />
              <Image
                src="/images/customer-4.jpg"
                className="rounded-full w-10 -ml-1.5 ring ring-white"
                alt="customer image"
                width={40}
                height={40}
              />
              <Image
                src="/images/customer-5.jpg"
                className="rounded-full w-10 -ml-1.5 ring ring-white"
                alt="customer image"
                width={40}
                height={40}
              />
              <Image
                src="/images/customer-6.jpg"
                className="rounded-full w-10 -ml-1.5 ring ring-white"
                alt="customer image"
                width={40}
                height={40}
              />
            </div>
            <div>
              <p className="text-gray-600 landing-relaxed mt-2">
                Trusted by
                <span className="text-emerald-700  font-bold"> 20,000+ </span>
                persons across the Globe.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src="/images/hero2.png"
            alt="hero image"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div>
        <div className="text-4xl font-bold mt-24 text-center text-gray-700">
          Make WAToolkit Work for Your Business
        </div>
        <div className="flex items-center justify-around mt-10">
          <div className="w-1/2 pr-8 ">
            <Image
              src="/images/hero2.png"
              alt="hero image"
              className="shadow"
              width={500}
              height={500}
              priority={true}
            />
          </div>
          <div className="w-1/2  pr-8 text-center">
            <div className="mb-4">
              <span className="text-4xl font-bold inline-block mb-6 text-gray-700">
                With WAToolkit
              </span>
              <br />
              <span className="text-gray-600">
                WhatsApp Toolkit simplifies contact extraction from any group
                you're part of. Easily download your extracted contacts in CSV,
                VCF, or TXT format with the convenience you need. Streamline
                your contact management effortlessly with our toolkit's
                user-friendly features.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-24">
        <div className="text-4xl font-bold text-gray-700">
          Benefit of Whatsapp Toolkit?
        </div>
        <div>
          <p className="leading-7 mt-6 text-gray-600">
            <span>
              Protect sensitive information by blurring contact names, photos,
              recent messages, and conversations.
            </span>
            <br />
            <span>
              Non-blurred details appear on hover, creating a dynamic and
              user-friendly interface.
            </span>
            <br />
            <span>
              Easily extract contacts from any group, simplifying contact list
              management.
            </span>
            <br />
            <span>
              Download contacts in CSV, VCF, or TXT formats to suit various
              needs.
            </span>
            <br />
            <span>
              Enjoy a visually cohesive and user-friendly interface with the
              same color scheme as WhatsApp.
            </span>
            <br />
            <span>
              Access a free version allowing the extraction and download of up
              to 30 contacts in a TXT file.
            </span>
            <br />
            <span className="font-bold mt-4">
              So without any second thought you can Prioritize user privacy and
              convenience with versatile tools, offering both free and premium
              options for an intuitive and engaging experience.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
