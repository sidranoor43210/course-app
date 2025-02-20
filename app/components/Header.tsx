import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-800 w-full text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <Link href="/" className="text-3xl font-semibold hover:text-blue-300 transition duration-300">
            Traversy Media
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="links space-x-6">
          <Link
            href="/About"
            className="text-lg hover:text-blue-300 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/About/team"
            className="text-lg hover:text-blue-300 transition duration-300"
          >
            Our Team
          </Link>
          <Link
            href="/code/repos"
            className="text-lg hover:text-blue-300 transition duration-300"
          >
            Code
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
