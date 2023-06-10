class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(key, value) {
		for (const book of this.books) {
			if (book[key] === value) {
				return book;
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				const book = this.books.splice(i, 1)[0];
				return book;
			}
		}
		return null;
	}
}

// создайте библиотеку
const library = new Library("Моя библиотека");

// добавьте в библиотеку несколько печатных изданий разных типов
library.addBook(
	new DetectiveBook(
		"Артур Конан Дойл",
		"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
		2019,
		1008
	)
);
library.addBook(
	new FantasticBook(
		"Аркадий и Борис Стругацкие",
		"Пикник на обочине",
		1972,
		168
	)
);
library.addBook(
	new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138)
);
library.addBook(new Magazine("Мурзилка", 1924, 60));

// найдите книгу, изданную в 1919 году, или создайте её при необходимости
const book1919 = library.findBookBy("releaseDate", 1919);
if (!book1919) {
	const newBook1919 = new Book("Неизвестны автор", "Название книги", 1919, 200);
	library.addBook(newBook1919);
}

// выдайте любую книгу
const lentBook = library.giveBookByName("Пикник на обочине");

// повредите выданную книгу
lentBook.state = 20;

// восстановите выданную книгу
lentBook.fix();

// попытайтесь добавить восстановленную книгу обратно в библиотеку
library.addBook(lentBook);

// книги в библиотеке
console.log("Книги в библиотеке:", library.books);