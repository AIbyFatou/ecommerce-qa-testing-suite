
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
});

