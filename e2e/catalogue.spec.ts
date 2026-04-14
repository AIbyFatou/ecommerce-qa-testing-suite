import { test, expect} from '@playwright/test';
import { productsData } from './fixtures/productsData';


test.describe('Catalogue - Display of products', () => {

    test.beforeEach(async({page}) => {
        //Given - I am on the Home page
        await page.goto('/');
    });

    test('display at least one product', async({page})=>{

        //Then - at least one product item is visible
        const products = page.getByRole('img');
        await expect (products.first()).toBeVisible();
    });

    test('display all products with name and price', async({page}) =>{
        // THEN - each product is dislplayed with its name and price
        for (const product of productsData){
            await expect(page.getByText(product.name.trim())).toBeVisible();
            await expect(page.getByText(`${product.price}€`)).toBeVisible();
        }
    });

    test('The searchbar is present', async({page})=> {
        //Then - The placeholder is visible
        await expect(
            page.getByPlaceholder('Rechercher un produit')).toBeVisible();
    });

});