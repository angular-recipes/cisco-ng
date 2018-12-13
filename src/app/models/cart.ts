import { Item } from './item';

export class Cart {
    items: Item[];
    totalPrice: number;
    totalItems: number; 

    constructor() {
        this.items = [];
        this.totalPrice = 0;
        this.totalItems = 0;
    }
}
