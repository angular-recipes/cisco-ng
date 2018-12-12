export class Book {
    id: number;
    title: string;
    author: string;
    price: number;
    rating: number;

    constructor(id, title, author, price, rating) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.rating = rating;
    }
}
