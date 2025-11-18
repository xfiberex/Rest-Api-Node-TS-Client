import { Link, Form, useActionData, useNavigation } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import ProductForm from "../components/ProductForm";
import LoadingSpinner from "../components/LoadingSpinner";

export default function NewProducts() {

    const error = useActionData() as string
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h2 className="text-3xl font-black text-slate-800">
                        Registrar Producto
                    </h2>
                    <p className="text-slate-600 mt-1">Agrega un nuevo producto al inventario</p>
                </div>

                <Link
                    to={"/"}
                    className="rounded-lg bg-slate-600 hover:bg-slate-700 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
                >
                    ← Volver a Productos
                </Link>
            </div>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Form className="mt-8 bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-md" method="POST">
                <ProductForm  />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 py-4 text-white font-bold text-lg cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 hover:scale-[1.02] disabled:hover:scale-100"
                >
                    {isSubmitting ? (
                        <>
                            <LoadingSpinner size="sm" />
                            <span>Registrando producto...</span>
                        </>
                    ) : (
                        <>💾 Registrar Producto</>
                    )}
                </button>
            </Form>
        </>
    )
}
