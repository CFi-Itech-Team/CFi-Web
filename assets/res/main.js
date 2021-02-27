const firebaseConfig = {
  apiKey: "AIzaSyBTmHWtVZAao1Oj8YIZhQM5k7aNrE-PYU0",
  authDomain: "projects-a1737.firebaseapp.com",
  databaseURL: "https://projects-a1737.firebaseio.com",
  projectId: "projects-a1737",
  storageBucket: "projects-a1737.appspot.com",
  messagingSenderId: "1076631160569",
  appId: "1:1076631160569:web:d84cb5a51bcb5df9cdc428",
};
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const colDB = firestore.doc("Contacts/" + getrandom());
const btn = document.querySelector("#btn");
const form = document.querySelector(".contact__form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");
const tag = document.querySelector(".contact__sent");
const TIMER = 5000;
let utc = new Date().toLocaleString("en-GB");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (name.value === "" || email.value === "" || msg.value === "") {
    tag.innerText = "A field might be empty!";
    setTimeout(() => {
      tag.innerText = "";
    }, TIMER);
  } else {
    colDB
      .set({
        name: name.value,
        email: email.value,
        msg: msg.value,
        utc,
      })
      .then(() => {
        tag.innerText = "Sent successfully!";
        form.reset();

        setTimeout(() => {
          tag.innerText = "";
        }, TIMER);
      })
      .catch((error) => {
        console.log(error);
        tag.innerText = "Something went wrong, try again!";

        setTimeout(() => {
          tag.innerText = "";
        }, TIMER);
      });
  }
});

function getrandom() {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 17; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

sr.reveal(".home__title", {});
sr.reveal(".home__moto", { delay: 100 });
sr.reveal(".home__tag", { delay: 200 });

sr.reveal(".about__subtitle", {});
sr.reveal(".about__text", { delay: 200 });

sr.reveal(".giving__subtitle", {});
sr.reveal(".giving__text", {});
sr.reveal(".giving__data", { interval: 100 });
sr.reveal(".giving__img", { delay: 300 });

sr.reveal(".mobile__img", {});
sr.reveal(".mobile__subtitle", {});
sr.reveal(".mobile__text", { interval: 100 });
sr.reveal(".btns", { delay: 200 });

sr.reveal(".leader__img", { interval: 100 });

sr.reveal(".address", {});
sr.reveal(".contact__input", { interval: 100 });
