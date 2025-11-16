import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products from "./views/Products";
import NewProducts from "./views/NewProducts";
import { newProductAction } from "./actions/newProductAction";
import { productsLoader } from "./loaders/productsLoader";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader
            },
            {
                path: "productos/nuevo",
                element: <NewProducts />,
                action: newProductAction
            }
        ]
    }
])