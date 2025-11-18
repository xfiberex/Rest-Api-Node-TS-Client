import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function GlobalPageLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Ocultar el loader HTML inicial inmediatamente cuando React se monta
        const initialLoader = document.getElementById('initial-loader');
        if (initialLoader) {
            initialLoader.classList.add('hidden');
            // Removerlo del DOM después de la transición
            setTimeout(() => {
                initialLoader.remove();
            }, 300);
        }

        // Marcar que React ha cargado
        document.body.classList.add('react-loaded');

        // Ocultar el loader de React cuando el DOM esté completamente cargado
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
                // Dar tiempo para la animación de fade-out
                setTimeout(() => {
                    setIsVisible(false);
                }, 300);
            }, 300); // Pequeño delay para transición suave
        };

        // Si la página ya está cargada
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 bg-linear-to-br from-slate-50 to-indigo-50 z-9999 flex items-center justify-center transition-opacity duration-300 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
            {/* Decoración de fondo */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-slate-100 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="relative flex flex-col items-center gap-6 animate-fade-in">
                {/* Logo o icono */}
                <div className="text-7xl animate-pulse-slow drop-shadow-lg">
                    📦
                </div>
                
                {/* Spinner */}
                <LoadingSpinner size="lg" className="border-indigo-600 border-t-transparent" />
                
                {/* Texto */}
                <div className="text-center">
                    <h2 className="text-2xl font-black text-slate-800 mb-2">
                        Administrador de Productos
                    </h2>
                    <p className="text-slate-600 text-sm font-medium">
                        Cargando aplicación...
                    </p>
                </div>

                {/* Barra de progreso decorativa */}
                <div className="w-48 h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full animate-pulse" style={{ width: '70%' }}></div>
                </div>
            </div>
        </div>
    );
}
