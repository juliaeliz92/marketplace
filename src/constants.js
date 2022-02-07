import { ProductList, Cart } from "./pages";

export const ROUTES = [
    {
        route: '/',
        element: <ProductList />
    },
    {
        route: '/cart',
        element: <Cart />
    }
];