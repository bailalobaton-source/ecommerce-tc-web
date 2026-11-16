export default function SearchBar() {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí irá la lógica para filtrar productos o redirigir a /busqueda?q=...
  };

  return (
    <form onSubmit={handleSearch} className="group relative order-last w-full md:order-0 md:flex-1">
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full rounded-full bg-white py-2.5 pr-12 pl-5 font-['Quicksand'] text-sm text-gray-700 shadow-inner transition-shadow focus:ring-4 focus:ring-pink-300 focus:outline-none sm:py-3"
      />
      <button
        type="submit"
        aria-label="Buscar"
        className="absolute top-1/2 right-1.5 -translate-y-1/2 rounded-full bg-pink-100 p-2 text-[#ff4b8b] transition-colors hover:bg-pink-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="h-4 w-4 sm:h-5 sm:w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </form>
  );
}
