import type { ActionFunctionArgs } from "react-router-dom";
import { updateProductAvailability } from "../services/ProductService";

export async function updateAvailabilityAction({ request }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData());
    await updateProductAvailability(+data.id)
    return {}
}