import React from "react";
import Linkedin from "../assets/svg/bi_linkedin.svg";
import instageam from "../assets/svg/ri_instagram-fill.svg";
import facebook from "../assets/svg/ic_baseline-facebook.svg";

const Footer = () => {
  return (
    <footer className="bg-[#212227] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:px-0 max-w-7xl px-2 sm:px-16 lg:px-20">
        {/* Company Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Prosperico</h2>
          <p className="text-[#AFAFAF] mb-4">
            Saas dashboard that enables users to perform various tasks and
            activities related to their business.
          </p>
          <div className="flex space-x-4 mt-10">
            <a href="#" className="w-6">
              <img src={Linkedin} />
            </a>
            <a href="#" className="w-6">
              <img src={facebook} />
            </a>
            <a href="#" className="w-6">
              <img src={instageam} />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-[#AFAFAF] hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-[#AFAFAF] hover:text-white">
                Solutions
              </a>
            </li>
            <li>
              <a href="#" className="text-[#AFAFAF] hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-[#AFAFAF] hover:text-white">
                Mission
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
