import { Link, Form, useActionData, useLoaderData, } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import type { Product } from "../types";
import ProductForm from "../components/ProductForm";

const availabilityOptions = [
    { name: 'Disponible', value: true },
    { name: 'No Disponible', value: false }
]

export default function EditProducts() {

    const product = useLoaderData() as Product
    const error = useActionData() as string

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h2 className="text-3xl font-black text-slate-800">
                        Editar Producto
                    </h2>
                    <p className="text-slate-600 mt-1">Actualiza la información del producto</p>
                </div>

                <Link
                    to={"/"}
                    className="rounded-lg bg-slate-600 hover:bg-slate-700 px-6 py-3 text-sm font-bold text-white shadow-lg transition-colors duration-200 hover:shadow-xl"
                >
                    ← Volver a Productos
                </Link>
            </div>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Form className="mt-8 bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-md" method="POST">
                <ProductForm product={product} />

                <div className="mb-6">
                    <label
                        className="text-slate-700 font-semibold block mb-2"
                        htmlFor="availability"
                    >Disponibilidad:</label>

                    <select
                        id="availability"
                        className="mt-1 block w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        name="availability"
                        defaultValue={product?.availability.toString()}
                    >
                        {availabilityOptions.map(option => (
                            <option key={option.name} value={option.value.toString()}>{option.name}</option>
                        ))}
                    </select>
                </div>

                <input
                    type="submit"
                    className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 py-4 text-white font-bold text-lg cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                    value="💾 Guardar Cambios"
                />
            </Form>
        </>
    )
}
