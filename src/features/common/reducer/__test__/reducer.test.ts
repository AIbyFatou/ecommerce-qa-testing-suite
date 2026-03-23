
import { ActionData } from "../../actions/types";
import { reducer } from "../index";
import {mockProducts, mockState, mockUpdatedCart} from "./mock";


describe("Reducer tests", () => {
    it("should update the products in the state when products/fetched action is dispatched", () => {
        //GIVEN
        const initialState = mockState;
        const action = {
            type: "products/fetched",
            payload: mockProducts,
        } as ActionData;

        //WHEN
        const result = reducer(initialState, action);

        //THEN
        expect(result.products).toEqual(mockProducts);
    });

    it('should update the product when it is added to the cart', () => {
        //GIVEN
        const initialState = mockState;
        const action = {
            type : "cart/added",
            payload: {
                cartCount: 3,
                cartProducts:mockUpdatedCart.cartProducts,
            },
        } as ActionData;

        //WHEN
        const result = reducer(initialState, action);

        //THEN
        expect(result.cartCount).toEqual(mockUpdatedCart.cartCount);
        expect(result.cartProducts).toEqual(mockUpdatedCart.cartProducts);
    });

    it('should update the product when it is removed from the cart', () => {
        //GIVEN
        const initialState = {
            ...mockState,
            cartCount: 3,
            cartProducts: mockUpdatedCart.cartProducts,
        };
        const action = {
            type : "cart/removed",
            payload: {
                cartCount: 2,
                cartProducts: mockUpdatedCart.cartProducts.slice(0, 2),
            },
        } as ActionData;

        const result = reducer(initialState, action);

        //THEN
        expect(result.cartCount).toEqual(2);
        expect(result.cartProducts).toEqual(mockUpdatedCart.cartProducts.slice(0, 2));
    });
});