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

// const wishlist = document.querySelector(".wishlist");
// const emptyHearth = document.querySelector(".emptyHearth");
// const fullHearth = document.querySelector(".fullHearth");

// wishlist.addEventListener("click", () => {
//   emptyHearth.style.display = "none";
//   fullHearth.style.display = "block";
// });

//source image change
const mainImage = document.querySelector(".mainImage");
const otherImages = document.querySelectorAll(".otherImg");

otherImages.forEach((otherImage) => {
  otherImage.addEventListener("click", function () {
    mainImage.classList.add("displayImg");
    mainImage.src = this.src;
  });
  //   console.log(mainImage);
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

cta.addEventListener("click", () => {
  cart.style.color = "var(--green)";
  cart.style.transform = "scale(1.5)";
  setTimeout(() => {
    cart.style.color = "";
    cart.style.transform = "";
  }, 1000);
});
