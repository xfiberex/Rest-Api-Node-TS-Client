import { Form, useFetcher, useNavigate } from "react-router-dom"
import { formatCurrency } from "../helpers/formatCurrency"
import type { Product } from "../types"

type ProductDetailsPropsType = {
    product: Product
}

export default function ProductDetails({ product }: ProductDetailsPropsType) {
    const fetcher = useFetcher()
    const navigate = useNavigate()
    const isAvailable = product.availability

    return (
        <tr className="hover:bg-slate-50 transition-colors">
            <td className="p-4 text-base font-medium text-slate-900">
                {product.name}
            </td>
            <td className="p-4 text-base font-semibold text-slate-700">
                {formatCurrency(product.price)}
            </td>
            <td className="p-4 text-center">
                {/* Actualizar solo la disponibilidad sin redirect con patch */}
                <fetcher.Form method="POST">
                    <button
                        type="submit"
                        name="id"
                        value={product.id}
                        className={`${isAvailable 
                            ? "bg-green-100 text-green-800 border border-green-300 hover:bg-green-200" 
                            : "bg-red-100 text-red-800 border border-red-300 hover:bg-red-200"} 
                            rounded-lg px-4 py-2 text-xs uppercase font-bold transition-colors cursor-pointer`}
                    >
                        {isAvailable ? "✓ Disponible" : "✗ No disponible"}
                    </button>
                </fetcher.Form>
            </td>
            <td className="p-4">
                <div className="flex gap-2 justify-center">
                    <button
                        onClick={() => navigate(`productos/${product.id}/editar`)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 uppercase font-bold text-xs transition-colors shadow-md hover:shadow-lg"
                    >
                        ✏️ Editar
                    </button>

                    <Form
                        method="POST"
                        action={`productos/${product.id}/eliminar`}
                        onSubmit={(e) => {
                            if (!confirm("¿Desea eliminar este producto?")) {
                                e.preventDefault()
                            }
                        }}
                    >
                        <input
                            type="submit"
                            value="🗑️ Eliminar"
                            className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-4 py-2 uppercase font-bold text-xs transition-colors shadow-md hover:shadow-lg cursor-pointer"
                        />
                    </Form>
                </div>
            </td>
        </tr>
    )
}