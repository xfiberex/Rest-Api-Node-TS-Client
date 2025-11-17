import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products from "./views/Products";
import NewProducts from "./views/NewProducts";
import EditProducts from "./views/EditProducts";
import { newProductAction } from "./actions/newProductAction";
import { editProductAction } from "./actions/editProductAction";
import { productsLoader } from "./loaders/productsLoader";
import { editProductLoader } from "./loaders/editProductLoader";
import { deleteProductAction } from "./actions/deleteProductAction";
import { updateAvailabilityAction } from "./actions/updateAvailabilityAction";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader,
                action: updateAvailabilityAction
            },
            {
                path: "productos/nuevo",
                element: <NewProducts />,
                action: newProductAction
            },
            {
                path: "productos/:id/editar", // ROA Pattern - Resource-Oriented Design
                element: <EditProducts />,
                loader: editProductLoader, // Obtener el id del producto
                action: editProductAction // Actualizar el producto
            },
            {
                path: "productos/:id/eliminar",
                action: deleteProductAction
            }
        ]
    }
])