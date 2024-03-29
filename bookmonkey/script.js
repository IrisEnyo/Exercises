const apiUrl = "http://localhost:4730/";

const books =
  (await getBooksData()) || JSON.parse(localStorage.getItem("books")) || [];

renderBooks();

async function getBooksData() {
  try {
    const response = await fetch(apiUrl + "books");
    const booksFromApi = await response.json();

    localStorage.setItem("books", JSON.stringify(booksFromApi));

    return booksFromApi;
  } catch (error) {
    console.log(error);
  }
}

/* function getBooksData() {
  fetch(apiUrl + "books")
    .then(function (response) {
      if (response.status === 200) {
        return response.json();
      } else {
        return "Nix";
      }
    })
    .then((booksFromApi) => {
      books.push(...booksFromApi);
    })
    .catch(function (error) {
      console.error(error);
    });
} */

function renderBooks() {
  const booksList = document.querySelector("#books-list");

  for (const book of books) {
    const listEl = document.createElement("li");

    const bookTitle = document.createElement("h3");
    bookTitle.innerText = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.innerText = book.author;

    const bookLink = document.createElement("a");
    bookLink.innerText = "More";
    bookLink.href = `/book.html?isbn=${book.isbn}`;

    listEl.append(bookTitle, bookAuthor, bookLink);
    booksList.append(listEl);
  }
}
