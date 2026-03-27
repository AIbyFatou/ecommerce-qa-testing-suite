import { mockProductWithoutPicture, mockProductWithPicture } from "./mock";
import { render, screen } from "@testing-library/react";
import ProductItem from "../ProductItem";

describe("ProductItem tests",() =>{
    it("should render the product name", () =>{
    //     //GIVEN
        render(<ProductItem product={mockProductWithPicture} />);

        
        //THEN
        const nameElement = screen.getByText(mockProductWithPicture.name);  
        expect(nameElement).toBeInTheDocument();
    });

    it("should render the product price", () => {
        //GIVEN
        render(<ProductItem product={mockProductWithPicture} />);

        //THEN
        const priceElement = screen.getByText(`${mockProductWithPicture.price}€`);
        expect(priceElement).toBeInTheDocument();
    });

    it("should render the product image when picture is provided", () => {
        //GIVEN
        render(<ProductItem product={mockProductWithPicture}/>);

        //THEN
        const pictureElementProvided = screen.getByAltText(mockProductWithPicture.name);
        expect(pictureElementProvided).toBeInTheDocument();
        expect(pictureElementProvided).toHaveAttribute('src', mockProductWithPicture.picture);
    });

    it("should render the product Panorama Icon when picture is not provided", () => {
        //GIVEN
        
        render(<ProductItem product={mockProductWithoutPicture}/>);

        // //THEN
        const pictureElementNotProvided = screen.getByTestId("PanoramaIcon");
        expect(pictureElementNotProvided).toBeInTheDocument();
    });
});