import { formatCurrency } from "../helpers/formatCurrency"
import type { Product } from "../types"

type ProductDetailsPropsType = {
    product: Product
}

export default function ProductDetails({ product }: ProductDetailsPropsType) {
    const isAvailable = product.availability

    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {isAvailable ? "Disponible" : "No disponible"}
            </td>
            <td className="p-3 text-lg text-gray-800 ">
                
            </td>
        </tr>
    )
}