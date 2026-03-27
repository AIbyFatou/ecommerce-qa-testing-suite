import { ProductItemData } from "../../../types";

export const mockProductWithPicture: ProductItemData = {
    id:"1",
    name : "Test Product",
    price : 10,
    picture : "https://example.com/product-image.jpg",
};

export const mockProductWithoutPicture: ProductItemData = {
    id:"2",
    name : "Test Product 2",
    picture : '',
    price : 20,
};