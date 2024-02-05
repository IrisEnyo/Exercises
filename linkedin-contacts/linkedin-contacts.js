//den fetch in den state packen und dann rendern!
const state = {
  cards: 8,
  limit: 1,
};

const body = document.querySelector("body");
const section = document.querySelector("section");

function cardTemplate(user) {
  const article = document.createElement("article");
  const backgroundImage = document.createElement("div");
  const img = document.createElement("img");
  const removeButton = document.createElement("button");
  const h1 = document.createElement("h1");
  const nameTitle = document.createElement("span");
  const nameFirst = document.createElement("span");
  const nameLast = document.createElement("span");
  const jobTitle = document.createElement("p");
  const mutualConnections = document.createElement("p");
  const connectButton = document.createElement("button");

  backgroundImage.classList.add("backgroundImage");
  backgroundImage.setAttribute(
    "style",
    `background: url('${user.backgroundImage}')`
  );

  if (user.backgroundImage === "") {
    backgroundImage.setAttribute(
      "style",
      `background: url("https://i.stack.imgur.com/OpeH1.png")`
      //math.random() einbauen um unterschiedliche Bilder zu bekommen (querySelector das mit ? u.s.w.)
    );
  }

  img.classList.add("picture");
  img.setAttribute("src", user.picture);
  img.setAttribute(
    "alt",
    `${user.name.title}
    ${user.name.first}
    ${user.name.last}`
  );
  removeButton.classList.add("removeButton");
  removeButton.type = "button";
  removeButton.textContent = "X";
  h1.classList.add("salutation");
  nameTitle.classList.add("nameTitel");
  nameTitle.textContent = `${user.name.title}`;
  nameFirst.classList.add("nameFirst");
  nameFirst.textContent = `${user.name.first}`;
  nameLast.classList.add("nameLast");
  nameLast.textContent = `${user.name.last}`;
  jobTitle.classList.add("jobTitle");
  jobTitle.textContent = `${user.title}`;
  mutualConnections.classList.add("mutualConnections");
  mutualConnections.textContent =
    `${user.mutualConnections}` + " mutual connections";
  connectButton.classList.add("connectButton");
  connectButton.type = "button";
  connectButton.textContent = "Connect";

  section.append(article);
  article.append(
    backgroundImage,
    img,
    removeButton,
    h1,
    jobTitle,
    mutualConnections,
    connectButton
  );
  h1.append(nameTitle, nameFirst, nameLast);

  return { section, removeButton, connectButton };
}

function getContactData() {
  fetch(
    `https://dummy-apis.netlify.app/api/contact-suggestions?count=${state.cards}`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);

      if (data.length > 0) {
        for (const user of data) {
          const { section } = cardTemplate(user);
          body.append(section);
        }
      }
    });
}

function getOneContactData() {
  fetch(
    `https://dummy-apis.netlify.app/api/contact-suggestions?count=${state.limit}`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      if (data.length > 0) {
        for (const user of data) {
          const { section } = cardTemplate(user);
          body.append(section);
        }
      }
    });
}

body.addEventListener("click", (event) => {
  const closeBtn = event.target.closest(".removeButton");
  if (closeBtn) {
    const closeCard = closeBtn.closest("article");
    closeCard.remove();
    getOneContactData();
  }
});

const invitationCount = document.getElementsByClassName("invitationCount");

function init() {
  getContactData();
}

init();
