import type { Product } from "../types"

type ProductFormPropsType = {
    product?: Product
}

export default function ProductForm({ product }: ProductFormPropsType) {
    return (
        <>
            <div className="mb-6">
                <label
                    className="text-slate-700 font-semibold block mb-2"
                    htmlFor="name"
                >Nombre del Producto:</label>

                <input
                    id="name"
                    type="text"
                    className="mt-1 block w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Ej: Laptop Dell, Mouse Inalámbrico"
                    name="name"
                    defaultValue={product?.name}
                />
            </div>

            <div className="mb-6">
                <label
                    className="text-slate-700 font-semibold block mb-2"
                    htmlFor="price"
                >Precio:</label>

                <input
                    id="price"
                    type="number"
                    className="mt-1 block w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Ej: 299.99"
                    name="price"
                    defaultValue={product?.price}
                    step="0.01"
                    min="0"
                />
            </div>
        </>
    )
}