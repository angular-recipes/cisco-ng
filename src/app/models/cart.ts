import { Item } from './item';

export class Cart {
    items: Item[];
    totalPrice: number;

    constructor(items, totalPrice) {
        this.items = items;
        this.totalPrice = totalPrice;
    }
}
