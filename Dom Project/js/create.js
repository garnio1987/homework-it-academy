"use strict";

/* Price segment */

const radioButtonPriceCollection = fieldPrice.querySelectorAll("input");

radioButtonPriceCollection.forEach(elem => {
  elem.addEventListener("change", event => {
    card.priceSegment = event.target.value;
  });
});

/* Picture */

inputPicture.addEventListener("change", event => {
  card.picture = event.target.value;
});

/* Description */

areaDesc.addEventListener("change", event => {
  card.description = event.target.value;
});

/* Validation */

inputName.addEventListener("change", event => {
  const str = event.target.value;
  if (str.length < 5) {
    inputNameError.hidden = false;
  } else {
    inputNameError.hidden = true;
    card.name = str;
  }
});

inputArticle.addEventListener("change", event => {
  const str = event.target.value;
  if (str[0] >= "A" && str[0] <= "Z" && +str[1] && +str[2]) {
    inputArticleError.hidden = true;
    card.article = str;
  } else inputArticleError.hidden = false;
});

inputCount.addEventListener("change", event => {
  const str = event.target.value;
  const num = +event.target.value;
  if (num && num > 0 && !str.includes(".") && !str.includes(",")) {
    inputCountError.hidden = true;
    card.count = num;
  } else {
    inputCountError.hidden = false;
  }
});

inputPrice.addEventListener("change", event => {
  const num = +event.target.value;
  if (num >= 0) {
    inputPriceError.hidden = true;
    card.price = num;
  } else {
    inputPriceError.hidden = false;
  }
});

inputDate.addEventListener("change", event => {
  const date = event.target.value.split("-");
  card.date = date.reverse().join(".");
});

/* Creation button */

formCreateProduct.addEventListener("submit", event => {
  event.preventDefault();
  if (
    inputNameError.hidden &&
    inputArticleError.hidden &&
    inputCountError.hidden &&
    inputPriceError.hidden
  ) {
    card.id = ++idCounter;
    radioButtonPriceCollection.forEach(elem => {
      if (elem.checked) {
        card.priceSegment = elem.value;
      }
    });
    arrayOfCards.push(card);
    renderCards(initialSortedArray(arrayOfCards));
    card = {
      name: "",
      price: "",
      count: "",
      article: "",
      date: "",
      picture: "",
      priceSegment: "",
      itemId: ""
    };
    formCreateProduct.reset();
    formSearch.reset();
  }
});

/* Show initial cards */

if (arrayOfCards.length) {
  renderCards();
}
