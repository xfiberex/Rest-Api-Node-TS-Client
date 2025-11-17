import type { LoaderFunctionArgs } from "react-router-dom";
import { getProductById } from "../services/ProductService";

export async function editProductLoader({ params }: LoaderFunctionArgs) {
    if (params.id !== undefined) {
        const product = await getProductById(+params.id);
        if (!product) {
            throw new Response("", {
                status: 404,
                statusText: "Producto no encontrado",
            });
        }
        return product;
    }
}
