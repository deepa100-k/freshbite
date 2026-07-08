import { MapPin, Phone, Mail } from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Fresh<span className="text-orange-500">Bite</span>
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Fresh, healthy and delicious meals delivered straight to your
              doorstep. Eat healthy, live happy.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500 transition flex items-center justify-center"
              >
             
              <FaLinkedinIn size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaYoutube size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-white text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Menu
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Categories */}

          <div>
            <h3 className="text-white text-xl font-semibold mb-5">
              Categories
            </h3>

            <ul className="space-y-3">

              <li>Healthy Meals</li>
              <li>Salads</li>
              <li>Fresh Juices</li>
              <li>Healthy Bowls</li>

            </ul>
          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <MapPin className="text-orange-500" size={20} />
                <span>mayur vihar New Delhi, India</span>
              </div>

              <div className="flex gap-3">
                <Phone className="text-orange-500" size={20} />
                <span>+91 8802628093</span>
              </div>

              <div className="flex gap-3">
                <Mail className="text-orange-500" size={20} />
                <span>support@freshbite.com</span>
              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} FreshBite. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;