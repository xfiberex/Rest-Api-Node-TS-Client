import { type ActionFunctionArgs } from "react-router-dom";
import { redirect } from "react-router-dom";
import { addProduct } from "../services/ProductService";

export async function newProductAction({ request }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData());

    let error = "";

    if (Object.values(data).includes("")) {
        error = "Todos los campos son obligatorios";
        return error;
    }

    try {
        await addProduct(data);
        return redirect("/?toast=created");
    } catch (err) {
        console.error("Error al crear producto:", err);
        return "Hubo un error al crear el producto";
    }
}
