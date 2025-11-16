import { array, boolean, number, object, string, type InferOutput } from "valibot";

export const DrraftProductSchema = object({
    name: string(),
    price: number(),
});

export const ProductSchema = object({
    id: number(),
    name: string(),
    price: number(),
    availability: boolean(),
});

export const ProductsSchema = array(ProductSchema)
export type Product = InferOutput<typeof ProductSchema>