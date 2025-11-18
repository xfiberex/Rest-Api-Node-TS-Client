import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { deleteProduct } from "../services/ProductService";

export async function deleteProductAction({ params }: ActionFunctionArgs) {
    if (params.id !== undefined) {
        await deleteProduct(+params.id);
        return redirect("/?toast=deleted");
    }
}
