const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-4 mt-auto border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
        {/* Left side */}
        <p className="text-sm">
          © {new Date().getFullYear()} E-Commerce Admin Panel. All rights reserved.
        </p>

        {/* Right side (links) */}
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white transition">
            Terms of Service
          </a>
          <a href="/support" className="hover:text-white transition">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
