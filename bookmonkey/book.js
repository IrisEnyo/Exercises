const apiUrl = `http://localhost:4730/`;

// get ISBN from URL
function getIsbnFromUrl() {
  const urlParams = new URLSearchParams(document.location.search);
  return urlParams.get("isbn");
}

// get books data from API
async function getBooksData() {
  try {
    const response = await fetch(apiUrl + "books");
    const booksFromApi = await response.json();

    return booksFromApi;
  } catch (error) {
    console.log(error);
  }
}

console.log(await getBooksData());

// render one book infos
async function renderBook(isbn) {
  const books = await getBooksData();

  const book = books.find((book) => book.isbn === isbn);

  if (book) {
    const bookDetails = document.querySelector("#book-infos");
    const imgContainer = document.querySelector("#img-container");

    bookDetails.innerHTML = "";

    const coverImg = document.createElement("img");
    coverImg.src = book.cover;

    const bookTitle = document.createElement("h2");
    bookTitle.innerText = book.title;

    const bookSubtitle = document.createElement("h3");
    bookSubtitle.innerText = "Subtitle:";
    const subtitleText = document.createElement("p");
    subtitleText.innerText = book.subtitle;

    const bookAuthor = document.createElement("h3");
    bookAuthor.innerText = "Author:";
    const authorName = document.createElement("p");
    authorName.innerText = book.author;

    const bookAbstract = document.createElement("h3");
    bookAbstract.innerText = "Abstract:";
    const abstractText = document.createElement("p");
    abstractText.innerText = book.abstract;

    const publisher = document.createElement("h3");
    publisher.innerText = "Publisher:";
    const publisherText = document.createElement("p");
    publisherText.innerText = book.publisher;

    const numPages = document.createElement("h3");
    numPages.innerText = "Number of Pages:";
    const numPagesText = document.createElement("p");
    numPagesText.innerText = book.numPages;

    const id = document.createElement("h3");
    id.innerText = "ID:";
    const idText = document.createElement("p");
    idText.innerText = book.id;

    const isbn = document.createElement("h3");
    isbn.innerText = "ISBN:";
    const isbnText = document.createElement("p");
    isbnText.innerText = book.isbn;

    const price = document.createElement("h3");
    price.innerText = "Price:";
    const priceText = document.createElement("p");
    priceText.innerText = book.price;

    imgContainer.append(coverImg);

    bookDetails.append(
      bookTitle,
      bookSubtitle,
      subtitleText,
      bookAuthor,
      authorName,
      bookAbstract,
      abstractText,
      publisher,
      publisherText,
      numPages,
      numPagesText,
      id,
      idText,
      isbn,
      isbnText,
      price,
      priceText
    );
  }
}

// get ISBN from URL and render
const isbn = getIsbnFromUrl();
if (isbn) {
  renderBook(isbn);
} else {
  console.log("ISBN not found in URL!");
}

// go back button
const backButton = document.querySelector("button");

backButton.addEventListener("click", () => {
  window.history.back();
});
