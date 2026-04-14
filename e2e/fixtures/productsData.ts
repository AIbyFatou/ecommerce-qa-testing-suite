import type { ProductItemData } from '../../src/features/product/list-products/types';

//Pure data without assets - can bi imported in every file including e2e tests
export const productsData: Omit<ProductItemData, 'picture'>[] = [
    { id:'1', name:'MYBABY Premium Diapers', price:5 },
    { id:'2', name:'MYBABY Gentle Wipes', price:50 },
    { id:'3', name:'MYBABY Pants', price:34 },
    { id:'4', name:'MYBABY Diapers', price:20 },
]