import { StateData } from "../../state/types";
import { ProductData } from "../../../product/display-product/types";
import { ProductItemData } from "../../../product/list-products/types";
import { CartProductItemData } from "../../../cart/list-cart-products/types";


export const mockProduct: ProductData = {//Product for display-product
    id: "1",
    name: "Mock Product",
    picture: "mock-product.jpg",
    price: 19.99,
    description: "This is a mock product for testing purposes.",
};
export const mockState: StateData = {//State for reducer tests
    products: [],
    product: mockProduct,
    cartProducts: [],
    cartCount: 0,
};

export const mockProducts: ProductItemData[] = [ //Products for list-products
    {
        id: "1",
        name: "Mock Product 1",
        picture: "mock-product-1.jpg",
        price: 19.99,
    },
    {
        id: "2",
        name: "Mock Product 2",
        picture: "mock-product-2.jpg",
        price: 29.99,
    },
];

export const mockUpdatedCart :{ cartCount: number; cartProducts: CartProductItemData[] } = {//Updated cart for cart/added action test
    cartCount: 3,
    cartProducts : [{
        id: "1",
        name: "Mock Product 1",
        picture: "mock-product-1.jpg",
        price: 19.99,
    },
    {
        id: "2",
        name: "Mock Product 2",
        picture: "mock-product-2.jpg",
        price: 29.99,
    },
    {
        id: "3",
        name: "Mock Product 3",
        picture: "mock-product-3.jpg",
        price: 39.99,
    },]
}