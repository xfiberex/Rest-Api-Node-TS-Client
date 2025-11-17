import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <>
            <header className="bg-linear-to-r from-slate-800 to-slate-900 shadow-lg">
                <div className="mx-auto max-w-6xl py-10 px-4">
                    <h1 className="text-4xl font-extrabold text-white">
                        📦 Administrador de Productos
                    </h1>
                    <p className="text-slate-300 mt-2">Gestiona tu inventario de forma eficiente</p>
                </div>
            </header>

            <main className="mt-10 mx-auto max-w-6xl p-10 bg-white shadow-xl rounded-xl border border-slate-200">
                <Outlet />
            </main>
        </>
    )
}
