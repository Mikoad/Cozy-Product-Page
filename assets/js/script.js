// const searchBarContainer = document.querySelector(".searchBar");
// const searchBar = searchBarContainer.querySelector("input");
// const searchIcon = document.querySelector(".search");
// searchIcon.addEventListener("click", () => {
//   searchBarContainer.style.display = "";
// });

const burgerLogo = document.querySelector(".burgerLogo");
const navBurger = document.querySelector(".navBurger");

burgerLogo.addEventListener("click", () => {
  navBurger.classList.toggle("displayBurger");
});

const minQuantity = document.getElementById("minQuantity");
const quantityNumber = document.getElementById("quantityNumber");
const plusQuantity = document.getElementById("plusQuantity");

minQuantity.addEventListener("click", () => {
  let currentQuantity = parseInt(quantityNumber.textContent);
  if (currentQuantity > 1) {
    currentQuantity--;
  }
  quantityNumber.textContent = currentQuantity;
});

plusQuantity.addEventListener("click", () => {
  let currentQuantity = parseInt(quantityNumber.textContent);
  currentQuantity++;
  quantityNumber.textContent = currentQuantity;
});

//source image change..
const mainImage = document.querySelector(".mainImage");
const otherImages = document.querySelectorAll(".otherImg");
const nextImg = document.querySelector(".nextImg");
const previousImg = document.querySelector(".previousImg");
let currentIndexImg = 0;

//..with next and previous arrows
nextImg.addEventListener("click", () => {
  currentIndexImg++;
  if (currentIndexImg >= otherImages.length) {
    currentIndexImg = 0;
  }
  mainImage.src = otherImages[currentIndexImg].src;
  mainImage.classList.add("displayImg");
});
previousImg.addEventListener("click", () => {
  if (currentIndexImg > 0) {
    currentIndexImg--;
    mainImage.classList.add("displayImg");
  }
  // if (currentIndexImg <= 0) {
  //   currentIndexImg = 3;
  // }
  mainImage.src = otherImages[currentIndexImg].src;
});
//..or click on image
otherImages.forEach((otherImage) => {
  otherImage.addEventListener("click", function () {
    //add class with displayImg animation
    mainImage.classList.add("displayImg");
    mainImage.src = this.src;
  });
});
mainImage.addEventListener("animationend", () => {
  mainImage.classList.remove("displayImg");
});

//click animation green border
const imagesContainer = document.querySelector(".imagesContainer");
const images = imagesContainer.querySelectorAll("div");

images.forEach((img) => {
  img.addEventListener("click", function () {
    images.forEach((otherImg) => {
      otherImg.style.border = "none";
    });
    this.style.border = "2px solid var(--green)";
  });
});

const cta = document.querySelector(".cta");
const cart = document.querySelector(".cart");
const cartAddContainer = document.querySelector(".cartAddContainer");

cta.addEventListener("click", () => {
  cart.style.color = "var(--green)";
  cart.style.transform = "scale(1.5)";
  setTimeout(() => {
    cart.style.color = "";
    cart.style.transform = "";
  }, 1700);
  // à changer par un classlist add (opacity, z-index)
  cartAddContainer.style.transform = "translateX(0)";
  cartAddContainer.style.display = "block";
  setTimeout(() => {
    //pareil classlist
    cartAddContainer.style.transform = "translateX(450px)";
    cartAddContainer.style.display = "none";
  }, 1700);
});

//récuperer quantité choisi dans le panier (cartAddContainer)
const quantityCart = document.querySelector(".quantityCart");

cta.addEventListener("click", () => {
  let currentQuantity = parseInt(quantityNumber.textContent);
  quantityCart.textContent = currentQuantity;
});
