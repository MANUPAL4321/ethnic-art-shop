export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
        <h1 className="text-xl font-bold text-purple-700">Madhubani Art Shop</h1>
      </div>
      <nav className="space-x-4">
        <a href="#" className="text-gray-700 hover:text-purple-700">Home</a>
        <a href="#" className="text-gray-700 hover:text-purple-700">Shop</a>
        <a href="#" className="text-gray-700 hover:text-purple-700">Contact</a>
      </nav>
    </header>
  );
}
