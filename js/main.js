const firebaseConfig = {
    /* Replace with your details */
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  //======================= CONTACT ==========================
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
  
  /*===== MENU SHOW =====*/
  
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
  
  /*===== ACTIVE AND REMOVE MENU =====*/
  const navLink = document.querySelectorAll(".nav__link");
  
  function linkAction() {
    /*Active link*/
    navLink.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");
  
    /*Remove menu mobile*/
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));
  
  /*===== SCROLL REVEAL ANIMATION =====*/
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 600,
    reset: true,
  });
  
  //========= SCROLL HOME
  sr.reveal(".home__title", {});
  sr.reveal(".home__moto", { delay: 100 });
  sr.reveal(".home__tag", { delay: 200 });
  
  //========== SCROLL ABOUT
  sr.reveal(".about__subtitle", {});
  sr.reveal(".about__text", { delay: 200 });
  
  //========== SCROLL GIVING
  sr.reveal(".giving__subtitle", {});
  sr.reveal(".giving__text", {});
  sr.reveal(".giving__data", { interval: 100 });
  
  //========== SCROLL MOBILE
  sr.reveal(".mobile__subtitle", {});
  sr.reveal(".mobile__text", { interval: 100 });
  sr.reveal(".btns", { delay: 200 });
  
  //========== SCROLL CONTACT
  sr.reveal(".address", {});