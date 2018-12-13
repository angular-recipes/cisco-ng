export class Book {
    static numOfBooks: number = 0;
    id: number;
    title: string;
    author: string;
    price: number;
    rating: number;

    constructor(title, author, price, rating) {
        Book.numOfBooks++;
        this.id = Book.numOfBooks;
        this.title = title;
        this.author = author;
        this.price = price;
        this.rating = rating;
    }
}
