import Button from './Button.jsx';

function LoginForm() {
  return (
    <section
      id="login"
      className="bg-white rounded-xl shadow-md p-5 sm:p-6"
      aria-labelledby="login-title"
    >
      <h2
        id="login-title"
        className="text-lg font-semibold text-slate-900 mb-4"
      >
        Iniciar sesión
      </h2>

      <form className="space-y-4">
        <div className="space-y-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="tucorreo@ejemplo.com"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-700"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="********"
          />
        </div>

        <p className="text-sm text-red-600">
          Ha ocurrido un error al iniciar sesión. Revisa tus datos.
        </p>

        <div className="pt-2">
          <Button type="submit" className="w-full">
            Acceder
          </Button>
        </div>
      </form>
    </section>
  );
}

export default LoginForm;

