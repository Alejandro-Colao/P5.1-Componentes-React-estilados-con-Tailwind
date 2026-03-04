import Button from './Button.jsx';

function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm font-semibold">
            PU
          </div>
          <span className="font-semibold text-slate-900">
            Panel de usuario
          </span>
        </div>

        <div className="flex items-center gap-4">
          <ul className="hidden sm:flex items-center gap-4 text-sm text-slate-600">
            <li>
              <a
                href="#inicio"
                className="hover:text-slate-900 hover:underline underline-offset-4"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#perfil"
                className="hover:text-slate-900 hover:underline underline-offset-4"
              >
                Perfil
              </a>
            </li>
            <li>
              <a
                href="#login"
                className="hover:text-slate-900 hover:underline underline-offset-4"
              >
                Login
              </a>
            </li>
          </ul>

          <div className="hidden sm:block">
            <Button variant="secondary">Cerrar sesión</Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

