export default function Header() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      {/* Logo and Brand */}
      <div className="flex items-center space-x-3">
        <img
          src="/images/logoe-commerce.jpg"
          alt="Logo"
          className="h-10 w-auto rounded"
        />
        <h1 className="text-2xl font-extrabold text-purple-700 tracking-wide">
          MithilaKart
        </h1>
      </div>

      {/* Nav links — each inside its own small box */}
      <nav className="flex space-x-4">
        <a
          href="#"
          className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700 font-medium hover:bg-purple-100 hover:text-purple-700 shadow-sm transition"
        >
          Home
        </a>
        <a
          href="#"
          className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700 font-medium hover:bg-purple-100 hover:text-purple-700 shadow-sm transition"
        >
          Shop
        </a>
        <a
          href="#"
          className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700 font-medium hover:bg-purple-100 hover:text-purple-700 shadow-sm transition"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
