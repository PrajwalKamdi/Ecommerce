import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';



export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">TrueMART</h3>
          <p className="text-sm leading-relaxed">
            Your one-stop shop for high-quality products. We are committed to providing you with the best shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors duration-300">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Shop</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <MapPin size={18} />
              <span>123 E-Commerce St, City, Country</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={18} />
              <span>+1 (123) 456-7890</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} />
              <span>info@truemart.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors duration-300">
              <Twitter size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors duration-300">
              <Instagram size={24} />
            </a>
            {/* <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors duration-300">
              <Whastapp size={24} />
            </a> */}
          </div>
        </div>
      </div>

      {/* Copyright & Developer Info */}
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} TrueMART. All rights reserved.</p>
        <p className="mt-2">Developed by Prajwal Kamdi</p>
      </div>
    </footer>
  );
}

