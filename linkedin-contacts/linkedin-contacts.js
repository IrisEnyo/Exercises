// const buttonGetContact = document.querySelector("#getContact");
// const list = document.querySelector("ul");
// const buttonRemoveContact = document.querySelector("#removeContact");

// function getContact() {
//   fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=1")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       const img = document.createElement("img");
//       img.src = data[0].picture;

//       list.append(document.createTextNode(data[0].name.first));
//       list.append(document.createTextNode(data[0].name.last));
//       list.append(document.createTextNode(data[0].title));
//       list.append(img);

//       console.log(data);
//     });
// }

// buttonRemoveContact.addEventListener("click", () => {
//   list.innerHTML = "";
// });

// buttonGetContact.addEventListener("click", () => {
//   list.innerHTML = "";

//   getContact();
// });
//================================================================================================================================================================//

const state = {
  contactData: {
    title: "",
    first: "",
    last: "",
    picture: "",
    jobTitle: "",
    mutualConnections: "",
    backgroundImage: "",
  },
  nextContact: null,
  limit: 1,
};

function getContactData() {
  fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=8")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);

      for (let i = 0; i < 8; i++) {
        state.contactData.first = data[i].name.first;
        state.contactData.last = data[i].name.last;
        state.contactData.title = data[i].name.title;
        state.contactData.picture = data[i].picture;
        state.contactData.jobTitle = data[i].title;
        state.contactData.mutualConnections =
          data[i].mutualConnections + " mutual connections";
        state.contactData.backgroundImage = data[i].backgroundImage;
        render();
      }
    });
}

function render() {
  const body = document.querySelector("body");
  const img = document.createElement("img");
  img.src = state.contactData.picture;

  body.append(img);
  body.append(document.createTextNode(state.contactData.title));
  body.append(document.createTextNode(state.contactData.first));
  body.append(document.createTextNode(state.contactData.last));
  body.append(document.createTextNode(state.contactData.jobTitle));
  body.append(document.createTextNode(state.contactData.mutualConnections));
}

/* Next: remove-button shall remove the spezific contact where the event(click) was happend (maybe with the "hidden" property, i.e.: 
"document.getElementById("okButton").addEventListener("click", () => {
    document.getElementById("welcome").hidden = true;
    document.getElementById("awesome").hidden = false;
  },
  false,
);")
and 1 new contact shall be reloaded */

// document.querySelector("#next-btn").addEventListener("click", () => {
//   if (state.nextItems) {
//     getPokemonData(state.nextItems);
//   }
// });

// document.querySelector("#limit").addEventListener("change", init);

// console.log(3);
// function init() {
//   document.querySelector(".list").innerHTML = "";
//   state.limit = document.querySelector("#limit").value;
//   getPokemonData("https://pokeapi.co/api/v2/pokemon/?limit=" + state.limit);
// }

// init();

getContactData();

render();
