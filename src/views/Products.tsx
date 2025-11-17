import { Link, useLoaderData } from "react-router-dom"
import ProductDetails from "../components/ProductDetails";
import type { Product } from "../types";

export default function Products() {
    const products = useLoaderData() as Product[];

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h2 className="text-3xl font-black text-slate-800">
                        Productos
                    </h2>
                    <p className="text-slate-600 mt-1">Lista completa de productos en inventario</p>
                </div>

                <Link
                    to="productos/nuevo"
                    className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-indigo-700 transition-colors duration-200 hover:shadow-xl"
                >
                    ➕ Agregar Producto
                </Link>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-md">
                <table className="w-full table-auto">
                    <thead className="bg-linear-to-r from-slate-800 to-slate-900 text-white">
                        <tr>
                            <th className="p-4 text-left font-semibold">Producto</th>
                            <th className="p-4 text-left font-semibold">Precio</th>
                            <th className="p-4 text-center font-semibold">Disponibilidad</th>
                            <th className="p-4 text-center font-semibold">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {products.map(product => (
                            <ProductDetails
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
