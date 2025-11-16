import { getProducts } from "../services/ProductService";

export async function productsLoader() {
    const products = await getProducts();
    return products;
}
