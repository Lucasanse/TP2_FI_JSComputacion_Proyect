import { useState, type FormEvent } from "react";

export default function Login() {
  const [enviado, setEnviado] = useState(false);

  // Versión estática: no hay backend, solo se muestra un aviso
  const enviar = (e: FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section className="flex flex-1 items-center justify-center bg-surface-alt px-4 py-10">
      <div className="w-full max-w-md rounded-xl border border-line bg-surface shadow-lg p-8">
        <h1 className="text-3xl font-bold text-primary text-center">
          Iniciar sesión
        </h1>
        <p className="mt-2 text-muted text-center">
          Bienvenido, ingresa tus credenciales
        </p>

        <form onSubmit={enviar} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-ink mb-1">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="tuemail@ejemplo.com"
              className="w-full rounded-lg border border-line px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1">
              Contraseña
            </label>
            <input
              type="password"
              required
              placeholder="********"
              className="w-full rounded-lg border border-line px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-ink cursor-pointer select-none">
            <input
              type="checkbox"
              name="recuerdame"
              className="h-4 w-4 rounded border-line accent-primary"
            />
            Recuérdame
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary text-surface py-2 font-semibold 
                       hover:bg-primary-dark transition-colors"
          >
            Entrar
          </button>
        </form>

        {enviado && (
          <p className="mt-4 rounded-lg bg-primary-light px-4 py-2 text-center text-sm text-primary">
            Versión estática de demostración: el inicio de sesión no está conectado a un servidor.
          </p>
        )}

        <p className="mt-4 text-center text-sm text-muted">
          ¿No tienes cuenta?{" "}
          <a href="#/login" className="text-secondary-dark hover:underline">
            Regístrate aquí
          </a>
        </p>
      </div>
    </section>
  );
}
