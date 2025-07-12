export default function Header() {
    return (
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-700">Ethnic Art Shop</h1>
        <nav className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-purple-700">Home</a>
          <a href="#" className="text-gray-700 hover:text-purple-700">About</a>
          <a href="#" className="text-gray-700 hover:text-purple-700">Contact</a>
        </nav>
      </header>
    );
  }
  