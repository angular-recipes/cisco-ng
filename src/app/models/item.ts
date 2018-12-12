export class Item {
    productId: number;
    productName: string;
    productPrice: number;
    qty: number;

    constructor(productId, productName, productPrice, qty) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.qty = qty;
    }

    increaseQty() {
        this.qty++;
    }
}
