import { Link, useLoaderData, useNavigation, useSearchParams } from "react-router-dom"
import { useEffect } from "react";
import ProductDetails from "../components/ProductDetails";
import DemoWarning from "../components/DemoWarning";
import { TableSkeleton } from "../components/SkeletonLoader";
import { useToast } from "../hooks/useToast";
import type { Product } from "../types";

export default function Products() {
    const products = useLoaderData() as Product[];
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    const [searchParams, setSearchParams] = useSearchParams();
    const { showToast } = useToast();

    useEffect(() => {
        const toastType = searchParams.get('toast');
        
        if (toastType) {
            const messages = {
                created: '✓ Producto creado exitosamente',
                updated: '✓ Producto actualizado exitosamente',
                deleted: '✓ Producto eliminado exitosamente',
            };

            const message = messages[toastType as keyof typeof messages];
            if (message) {
                showToast(message, 'success');
            }

            // Limpiar el parámetro de la URL
            searchParams.delete('toast');
            setSearchParams(searchParams, { replace: true });
        }
    }, [searchParams, setSearchParams, showToast]);

    return (
        <>
            <DemoWarning />
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h2 className="text-3xl font-black text-slate-800">
                        Productos
                    </h2>
                    <p className="text-slate-600 mt-1">Lista completa de productos en inventario</p>
                </div>

                <Link
                    to="productos/nuevo"
                    className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-indigo-700 transition-all duration-200 hover:shadow-xl hover:scale-105"
                >
                    ➕ Agregar Producto
                </Link>
            </div>

            {isLoading ? (
                <TableSkeleton />
            ) : (
                <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-md animate-fade-in">
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
                            {products.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="p-8 text-center text-slate-500">
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="text-4xl">📦</span>
                                            <p className="font-semibold">No hay productos en el inventario</p>
                                            <p className="text-sm">Agrega tu primer producto para empezar</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                products.map(product => (
                                    <ProductDetails
                                        key={product.id}
                                        product={product}
                                    />
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}
