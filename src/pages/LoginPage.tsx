import React, { useState } from 'react';
import { useAuthStore } from '../stores/authStore';
import { Navigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const { login, register, isAuthenticated, error, clearError } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegistering) {
      await register(email, password);
    } else {
      await login(email, password);
    }
  };

  const handleContactAdmin = () => {
    window.location.href = "mailto:xabier.olaz@unavarra.es?subject=Recuperación de contraseña UpnAssist";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <img src="/logo.png" alt="UpnAssist" className="mx-auto h-20 w-auto mb-4" />
        <h2 className="text-3xl font-extrabold text-gray-900">
          UpnAssist 2026
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Estructura de Datos - Acceso Restringido
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-2xl rounded-2xl sm:px-10 border-t-4 border-red-600">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo institucional (@e.unavarra.es)
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); clearError(); }}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña {isRegistering ? '(Elige una nueva)' : ''}
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); clearError(); }}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm font-medium bg-red-50 p-2 rounded border border-red-200">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
              >
                {isRegistering ? 'Registrarse y Entrar' : 'Iniciar Sesión'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  ¿Es tu primera vez?
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col space-y-3">
              <button
                onClick={() => { setIsRegistering(!isRegistering); clearError(); }}
                className="text-center text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                {isRegistering ? 'Ya tengo cuenta, iniciar sesión' : 'No tengo cuenta, quiero registrarme'}
              </button>
              
              <button
                onClick={handleContactAdmin}
                className="text-center text-xs text-gray-400 hover:text-gray-600 underline"
              >
                ¿Has olvidado tu contraseña? Contacta con el profesor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
