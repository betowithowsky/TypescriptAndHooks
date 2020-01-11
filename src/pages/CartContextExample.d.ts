/// <reference types="react" />
interface Product {
    id: number;
    name: string;
    price: number;
}
interface Cart {
    products?: Product[];
    shipping_value?: number;
}
declare const CartContextExample: import("react").Context<Cart>;
export default CartContextExample;
