export default function CartButton() {
  // Aquí luego conectarás Nano Stores: const cartCount = useStore($cartStore).length;
  const cartCount = 0;

  const openCart = () => {
    // Lógica para abrir un Drawer (panel lateral) o ir a la página /carrito
    console.log('Abriendo carrito...');
  };

  return (
    <button
      onClick={openCart}
      className="group relative flex items-center gap-1.5 transition-colors hover:text-yellow-200"
    >
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 transition-transform group-hover:scale-110"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        {/* Badge del contador. Puedes ocultarlo si cartCount === 0 */}
        <span className="absolute -top-1.5 -right-1.5 rounded-full border border-pink-500 bg-yellow-400 px-1.5 py-0.5 text-[10px] font-bold text-pink-700 shadow-sm">
          {cartCount}
        </span>
      </div>
      <span className="hidden lg:inline">Carrito</span>
    </button>
  );
}
