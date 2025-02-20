import Link from "next/link";
import Header from "./components/Header";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-red-300 to-yellow-300 min-h-screen flex flex-col items-center justify-center p-4">
      {/* Header Component */}
      <Header />
      
      <h1 className="text-5xl font-extrabold text-center text-white py-6 px-10 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
        Welcome to Traversy Media
      </h1>
      
      <ul className="mt-8 p-6 space-y-6 bg-white rounded-xl shadow-xl w-full max-w-lg">
        <li className="hover:bg-blue-100 hover:scale-105 transition-all duration-300 rounded-lg shadow-md">
          <Link className="text-2xl font-semibold text-gray-800 block py-4 text-center" href="/">Home</Link>
        </li>
        <li className="hover:bg-blue-100 hover:scale-105 transition-all duration-300 rounded-lg shadow-md">
          <Link className="text-2xl font-semibold text-gray-800 block py-4 text-center" href="/About">About</Link>
        </li>
        <li className="hover:bg-blue-100 hover:scale-105 transition-all duration-300 rounded-lg shadow-md">
          <Link className="text-2xl font-semibold text-gray-800 block py-4 text-center" href="/About/team">Team</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
