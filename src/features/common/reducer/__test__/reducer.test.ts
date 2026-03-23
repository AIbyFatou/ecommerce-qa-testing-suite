
import { ActionData } from "../../actions/types";
import { reducer } from "../index";
import {mockProducts, mockState} from "./mock";


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
});

