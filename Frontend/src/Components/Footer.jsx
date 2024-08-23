import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">About Us</h4>
            <p className="text-sm">
              I am an fullstack developer building with MERN.
            </p>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <ul className="text-sm">
              <li>Email: hrithikyadav88@gmail.com</li>
              <li>Phone: </li>
              <li>Address:  XYX </li>
            </ul>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; 2024 Bloggers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
