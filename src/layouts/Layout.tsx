import { Outlet, useNavigation } from "react-router-dom"
import GlobalPageLoader from "../components/GlobalPageLoader";

export default function Layout() {
    const navigation = useNavigation();
    const isNavigating = navigation.state === "loading";

    return (
        <>
            <GlobalPageLoader />
            
            <header className="bg-linear-to-r from-slate-800 to-slate-900 shadow-lg">
                <div className="mx-auto max-w-6xl py-10 px-4">
                    <h1 className="text-4xl font-extrabold text-white">
                        📦 Administrador de Productos
                    </h1>
                    <p className="text-slate-300 mt-2">Gestiona tu inventario de forma eficiente</p>
                </div>
                {/* Barra de progreso de navegación */}
                {isNavigating && (
                    <div className="h-1 bg-indigo-500 animate-pulse-slow"></div>
                )}
            </header>

            <main className="mt-10 mx-auto max-w-6xl p-10 bg-white shadow-xl rounded-xl border border-slate-200 min-h-[600px]">
                <Outlet />
            </main>

            <footer className="mt-10 mb-6 text-center text-slate-500 text-sm">
                <p>© 2025 Administrador de Productos - Todos los derechos reservados</p>
            </footer>
        </>
    )
}
