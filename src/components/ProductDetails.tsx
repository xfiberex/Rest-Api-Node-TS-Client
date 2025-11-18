import { Form, useFetcher, useNavigate } from "react-router-dom"
import { useEffect, useRef } from "react"
import { formatCurrency } from "../helpers/formatCurrency"
import type { Product } from "../types"
import LoadingSpinner from "./LoadingSpinner"
import { useToast } from "../hooks/useToast"

type ProductDetailsPropsType = {
    product: Product
}

export default function ProductDetails({ product }: ProductDetailsPropsType) {
    const fetcher = useFetcher()
    const navigate = useNavigate()
    const isAvailable = product.availability
    const isUpdating = fetcher.state !== "idle"
    const { showToast } = useToast()
    const prevStateRef = useRef(fetcher.state)

    useEffect(() => {
        if (prevStateRef.current === "submitting" && fetcher.state === "idle") {
            showToast("✓ Disponibilidad actualizada", "success")
        }
        prevStateRef.current = fetcher.state
    }, [fetcher.state, showToast])

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
                        disabled={isUpdating}
                        className={`${isAvailable 
                            ? "bg-green-100 text-green-800 border border-green-300 hover:bg-green-200" 
                            : "bg-red-100 text-red-800 border border-red-300 hover:bg-red-200"} 
                            rounded-lg px-4 py-2 text-xs uppercase font-bold transition-all cursor-pointer
                            disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto justify-center min-w-[140px]`}
                    >
                        {isUpdating ? (
                            <>
                                <LoadingSpinner size="sm" className="border-current border-t-transparent" />
                                <span>Actualizando...</span>
                            </>
                        ) : (
                            <>{isAvailable ? "✓ Disponible" : "✗ No disponible"}</>
                        )}
                    </button>
                </fetcher.Form>
            </td>
            <td className="p-4">
                <div className="flex gap-2 justify-center">
                    <button
                        onClick={() => navigate(`productos/${product.id}/editar`)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 uppercase font-bold text-xs transition-all shadow-md hover:shadow-lg hover:scale-105"
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
                            className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-4 py-2 uppercase font-bold text-xs transition-all shadow-md hover:shadow-lg hover:scale-105 cursor-pointer"
                        />
                    </Form>
                </div>
            </td>
        </tr>
    )
}