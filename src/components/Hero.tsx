export default function Hero() {
  return (
    <div
      className="text-center py-20 bg-yellow-50 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/madhubani-vineeth-pr.jpg')",
        backgroundBlendMode: "overlay",
        backgroundColor: "#e8fef8cc" // matches Tailwind's bg-yellow-50
      }}
    >
      <h2 className="text-4xl font-extrabold text-gray-800 drop-shadow-md">
        Discover Authentic Indian Art
      </h2>
      <p className="mt-4 text-gray-700 text-lg drop-shadow-sm">
        Explore traditional Madhubani, Rajasthani, and other ethnic styles.
      </p>
    </div>
  );
}
