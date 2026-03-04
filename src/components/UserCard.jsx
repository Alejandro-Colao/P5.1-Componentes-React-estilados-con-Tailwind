import Button from './Button.jsx';

function UserCard() {
  return (
    <section
      id="perfil"
      className="bg-white rounded-xl shadow-md p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
    >
      <div className="flex-shrink-0">
        <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-xl">
          AR
        </div>
      </div>

      <div className="flex-1 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Alejandro Rodríguez
            </h2>
            <p className="text-sm text-slate-500">Usuario estándar</p>
          </div>
          <Button variant="primary" className="w-full sm:w-auto">
            Editar perfil
          </Button>
        </div>

        <dl className="mt-4 space-y-1 text-sm text-slate-600">
          <div className="flex gap-2">
            <dt className="font-medium w-20">Email</dt>
            <dd className="truncate">alejandro@example.com</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium w-20">Estado</dt>
            <dd className="text-emerald-600 font-medium">Activo</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default UserCard;

