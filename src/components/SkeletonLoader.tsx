export function TableSkeleton() {
    return (
        <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-md animate-pulse">
            <table className="w-full table-auto">
                <thead className="bg-slate-200">
                    <tr>
                        <th className="p-4 text-left">
                            <div className="h-4 bg-slate-300 rounded w-24"></div>
                        </th>
                        <th className="p-4 text-left">
                            <div className="h-4 bg-slate-300 rounded w-16"></div>
                        </th>
                        <th className="p-4 text-center">
                            <div className="h-4 bg-slate-300 rounded w-28 mx-auto"></div>
                        </th>
                        <th className="p-4 text-center">
                            <div className="h-4 bg-slate-300 rounded w-20 mx-auto"></div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                    {[...Array(5)].map((_, index) => (
                        <tr key={index} className="bg-white">
                            <td className="p-4">
                                <div className="h-4 bg-slate-200 rounded w-48"></div>
                            </td>
                            <td className="p-4">
                                <div className="h-4 bg-slate-200 rounded w-20"></div>
                            </td>
                            <td className="p-4">
                                <div className="h-8 bg-slate-200 rounded-lg w-32 mx-auto"></div>
                            </td>
                            <td className="p-4">
                                <div className="flex gap-2 justify-center">
                                    <div className="h-8 bg-slate-200 rounded-lg w-20"></div>
                                    <div className="h-8 bg-slate-200 rounded-lg w-20"></div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export function FormSkeleton() {
    return (
        <div className="mt-8 bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-md animate-pulse">
            <div className="space-y-6">
                {/* Nombre del producto */}
                <div>
                    <div className="h-4 bg-slate-300 rounded w-32 mb-2"></div>
                    <div className="h-12 bg-slate-200 rounded-lg w-full"></div>
                </div>

                {/* Precio */}
                <div>
                    <div className="h-4 bg-slate-300 rounded w-24 mb-2"></div>
                    <div className="h-12 bg-slate-200 rounded-lg w-full"></div>
                </div>

                {/* Disponibilidad (solo en edición) */}
                <div>
                    <div className="h-4 bg-slate-300 rounded w-28 mb-2"></div>
                    <div className="h-12 bg-slate-200 rounded-lg w-full"></div>
                </div>

                {/* Botón */}
                <div className="mt-8">
                    <div className="h-14 bg-slate-300 rounded-lg w-full"></div>
                </div>
            </div>
        </div>
    );
}
