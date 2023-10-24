import { IProduct } from "./iproduct";

export interface ProductCartEvent {
    item: IProduct;
    quantity: number;
}

