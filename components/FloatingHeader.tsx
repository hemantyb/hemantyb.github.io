import {
  FiBriefcase,
  FiHome,
  FiMail,
  FiMenu,
  FiMoon,
  FiSun,
  FiUser,
  FiX,
} from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const FloatingHeader = ({ darkMode, setDarkMode }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItem = [
    { name: "Portfolio", href: "/", icon: FiHome },
    { name: "Blog", href: "/blog", icon: FiBriefcase },
    { name: "About", href: "/about", icon: FiUser },
    { name: "Contact", href: "/contact", icon: FiMail },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href === "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 rounded-xl backdrop-blur-lg transition-shadow duration-200 hover:shadow-xl ${
        darkMode ? "" : ""
      } shadow-lg border ${darkMode ? "" : ""}`}
    >
      <div className="px-4 sm:px-6">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">
              <Link
                href="/"
                className="text-2xl font-bold transition-colors duration-200 hover:text-primary"
              >
                Hemant B.
              </Link>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full p-2 transition duration-200 hover:scale-105 hover:bg-green-200 dark:hover:bg-gray-700 motion-reduce:transform-none"
            >
              {darkMode ? (
                <FiSun className="h-5 w-5" />
              ) : (
                <FiMoon className="h-5 w-5" />
              )}
            </button>
            <nav>
              <ul className="flex space-x-6 gap-3">
                {navItem.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center rounded-md px-2 py-1 transition duration-200 hover:scale-[1.02] hover:bg-accent hover:text-primary motion-reduce:transform-none ${
                        isActive(item.href) ? "text-primary font-semibold" : ""
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full p-2 transition duration-200 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 motion-reduce:transform-none"
            >
              {darkMode ? (
                <FiSun className="h-5 w-5" />
              ) : (
                <FiMoon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 transition duration-200 hover:scale-105 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 motion-reduce:transform-none"
              aria-expanded="false"
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-4">
          {navItem.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center rounded-lg px-4 py-3 text-base font-medium transition duration-200 hover:translate-x-1 hover:bg-accent hover:text-primary motion-reduce:transform-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingHeader;
