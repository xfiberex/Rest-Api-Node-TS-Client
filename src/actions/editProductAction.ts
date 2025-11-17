import { type ActionFunctionArgs, redirect } from "react-router-dom";
import { updateProduct } from "../services/ProductService";

export async function editProductAction({ request, params }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData());

    let error = "";

    if (Object.values(data).includes("")) {
        error = "Todos los campos son obligatorios";
        return error;
    }

    try {
        await updateProduct(+params.id!, data);
        return redirect("/");
    } catch (err) {
        console.error("Error al actualizar producto:", err);
        return "Hubo un error al actualizar el producto";
    }
}
