export default function AccountButton() {
  // Más adelante puedes leer de un store si el usuario está logueado
  // para cambiar el enlace o abrir un modal de login.

  return (
    <a href="/perfil" className="flex items-center gap-1.5 transition-colors hover:text-yellow-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
      <span className="hidden lg:inline">Mi cuenta</span>
    </a>
  );
}
