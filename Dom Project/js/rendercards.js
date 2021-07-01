"use strict";

const renderCards = (model = initialSortedArray(arrayOfCards)) => {
  sectionProductWrapper.innerHTML = "";

  model.forEach(item => {
    item.id = ++idCounter;

    const productContainer = document.createElement("div");
    productContainer.classList.add("container-card");
    sectionProductWrapper.append(productContainer);

    const productTitleWrapper = document.createElement("div");
    productTitleWrapper.classList.add("card-title__wrapper");
    productContainer.append(productTitleWrapper);

    const productPhoto = document.createElement("div");
    productPhoto.classList.add("card__image-container");
    productTitleWrapper.append(productPhoto);

    const photo = document.createElement("img");

    const productElementWrapper = document.createElement("div");
    productElementWrapper.classList.add("card__element-wrapper");
    productTitleWrapper.append(productElementWrapper);

    const editButton = document.createElement(`button`);
    editButton.classList.add("card__button");
    editButton.innerText = `Edit`;
    editButton.cardId = item.id;
    productElementWrapper.append(editButton);

    editButton.addEventListener("click", () => {
      mainContainer.style.display = "none";

      const elem = model.find(item => item.id === editButton.cardId);

      const editFormContainerWrapper = document.createElement("div");
      editFormContainerWrapper.classList.add(
        "main-container__edit-form-container"
      );
      document.body.append(editFormContainerWrapper);

      const editFormContainer = document.createElement("form");
      editFormContainer.classList.add("container-form");
      editFormContainerWrapper.append(editFormContainer);

      const editFieldForm = document.createElement("fieldset");
      editFieldForm.classList.add("container-form__fieldset");
      editFormContainer.append(editFieldForm);

      const legendForFieldEditForm = document.createElement("legend");
      legendForFieldEditForm.classList.add("form__legend");
      legendForFieldEditForm.innerText = "Edit Card";
      editFieldForm.append(legendForFieldEditForm);

      const fieldEditWrapper = document.createElement("div");
      fieldEditWrapper.classList.add("form__wrapper");
      editFieldForm.append(fieldEditWrapper);

      /* Photo + close button + last element*/

      const editTitleWrapper = document.createElement("div");
      editTitleWrapper.classList.add("card-title__wrapper");
      fieldEditWrapper.append(editTitleWrapper);

      const editPhoto = document.createElement("div");
      editPhoto.classList.add("card__image-container");
      editTitleWrapper.append(editPhoto);

      const photoImage = document.createElement("img");

      if (elem.picture) {
        photoImage.src = elem.picture;
        photoImage.onload = function() {
          photoImage.classList.add("card__image");
          editPhoto.append(photo);
        };
      }

      const editElementWrapper = document.createElement("div");
      editElementWrapper.classList.add("card__element-wrapper");
      editTitleWrapper.append(editElementWrapper);

      const closeButton = document.createElement(`button`);
      closeButton.classList.add("card__button-close");
      closeButton.innerText = `X`;
      editElementWrapper.append(closeButton);

      closeButton.addEventListener("click", () => {
        mainContainer.style.display = "flex";
        editFormContainerWrapper.style.display = "none";
        renderCards(model);
        event.preventDefault();
      });

      const lastElementEdit = document.createElement(`div`);
      lastElementEdit.classList.add("card__last-element");
      lastElementEdit.innerText = `Last One!`;
      editElementWrapper.append(lastElementEdit);
      lastElementEdit.hidden = true;

      if (elem.count === 1) lastElementEdit.hidden = false;

      /* Name */

      const inputEditNameWrapper = document.createElement("div");
      inputEditNameWrapper.classList.add("form__input-wrapper");
      fieldEditWrapper.append(inputEditNameWrapper);

      const inputEditName = document.createElement("input");
      inputEditName.type = "text";
      inputEditName.id = `inputName${elem.id}`;
      inputEditName.value = `${elem.name}`;
      inputEditName.classList.add("form__input");
      inputEditNameWrapper.append(inputEditName);

      const labelForEditName = document.createElement("label");
      labelForEditName.htmlFor = `inputName${elem.id}`;
      labelForEditName.innerText = "Name";
      labelForEditName.classList.add("input__label");
      inputEditNameWrapper.append(labelForEditName);

      const inputEditNameError = document.createElement("div");
      inputEditNameError.classList.add("form__input-error");
      inputEditNameError.innerText =
        "This input should contain at least 5 characters";
      inputEditNameError.hidden = true;
      inputEditNameWrapper.append(inputEditNameError);

      inputEditName.addEventListener("change", event => {
        const str = event.target.value;
        if (str.length < 5) {
          inputEditNameError.hidden = false;
        } else {
          inputEditNameError.hidden = true;
          elem.name = str;
        }
      });

      /* Article */

      const inputEditArticleWrapper = document.createElement("div");
      inputEditArticleWrapper.classList.add("form__input-wrapper");
      fieldEditWrapper.append(inputEditArticleWrapper);

      const inputEditArticle = document.createElement("input");
      inputEditArticle.type = "text";
      inputEditArticle.id = `inputArticle${elem.id}`;
      inputEditArticle.value = `${elem.article}`;
      inputEditArticle.classList.add("form__input");
      inputEditArticleWrapper.append(inputEditArticle);

      const labelForEditArticle = document.createElement("label");
      labelForEditArticle.htmlFor = `inputArticle${elem.id}`;
      labelForEditArticle.innerText = "Article";
      labelForEditArticle.classList.add("input__label");
      inputEditArticleWrapper.append(labelForEditArticle);

      const inputEditArticleError = document.createElement("div");
      inputEditArticleError.classList.add("form__input-error");
      inputEditArticleError.innerText =
        "This input should start with the capital letter and at least two numbers";
      inputEditArticleError.hidden = true;
      inputEditArticleWrapper.append(inputEditArticleError);

      inputEditArticle.addEventListener("change", event => {
        const str = event.target.value;
        if (str[0] >= "A" && str[0] <= "Z" && +str[1] && +str[2]) {
          inputEditArticleError.hidden = true;
          elem.article = str;
        } else inputEditArticleError.hidden = false;
      });

      /* Price */

      const inputEditPriceWrapper = document.createElement("div");
      inputEditPriceWrapper.classList.add("form__input-wrapper");
      fieldEditWrapper.append(inputEditPriceWrapper);

      const inputEditPrice = document.createElement("input");
      inputEditPrice.type = "text";
      inputEditPrice.id = `inputPrice${elem.id}`;
      inputEditPrice.value = `${elem.price}`;
      inputEditPrice.classList.add("form__input");
      inputEditPriceWrapper.append(inputEditPrice);

      const labelForEditPrice = document.createElement("label");
      labelForEditPrice.htmlFor = `inputPrice${elem.id}`;
      labelForEditPrice.innerText = "Price";
      labelForEditPrice.classList.add("input__label");
      inputEditPriceWrapper.append(labelForEditPrice);

      const inputEditPriceError = document.createElement("div");
      inputEditPriceError.classList.add("form__input-error");
      inputEditPriceError.innerText =
        "This input should not contain text symbols or less 0";
      inputEditPriceError.hidden = true;
      inputEditPriceWrapper.append(inputEditPriceError);

      inputEditPrice.addEventListener("change", event => {
        const num = +event.target.value;
        if (num >= 0) {
          inputEditPriceError.hidden = true;
          elem.price = num;
        } else {
          inputEditPriceError.hidden = false;
        }
      });

      /* Count */

      const inputEditCountWrapper = document.createElement("div");
      inputEditCountWrapper.classList.add("form__input-wrapper");
      fieldEditWrapper.append(inputEditCountWrapper);

      const inputEditCount = document.createElement("input");
      inputEditCount.type = "number";
      inputEditCount.min = 1;
      inputEditCount.id = `inputCount${elem.id}`;
      inputEditCount.value = `${elem.count}`;
      inputEditCount.classList.add("form__input");
      inputEditCountWrapper.append(inputEditCount);

      const labelForEditCount = document.createElement("label");
      labelForEditCount.htmlFor = `inputCount${elem.id}`;
      labelForEditCount.innerText = "Count";
      labelForEditCount.classList.add("input__label");
      inputEditCountWrapper.append(labelForEditCount);

      const inputEditCountError = document.createElement("div");
      inputEditCountError.classList.add("form__input-error");
      inputEditCountError.innerText =
        "This input should not contain text symbols, be less 1, not integer";
      inputEditCountError.hidden = true;
      inputEditCountWrapper.append(inputEditCountError);

      inputEditCount.addEventListener("change", event => {
        const str = event.target.value;
        const num = +event.target.value;
        if (num === 1) lastElementEdit.hidden = false;
        else lastElementEdit.hidden = true;
        if (num && num > 0 && !str.includes(".") && !str.includes(",")) {
          inputEditCountError.hidden = true;
          elem.count = num;
        } else {
          inputEditCountError.hidden = false;
        }
      });

      /* Picture */

      const inputEditPictureWrapper = document.createElement("div");
      inputEditPictureWrapper.classList.add("form__input-wrapper");
      fieldEditWrapper.append(inputEditPictureWrapper);

      const inputEditPicture = document.createElement("input");
      inputEditPicture.type = "text";
      inputEditPicture.id = `inputPicture${elem.id}`;
      if (elem.picture) inputEditPicture.value = `${elem.picture}`;
      inputEditPicture.classList.add("form__input");
      inputEditPictureWrapper.append(inputEditPicture);

      const labelForEditPicture = document.createElement("label");
      labelForEditPicture.htmlFor = `inputPicture${elem.id}`;
      labelForEditPicture.innerText = "Picture";
      labelForEditPicture.classList.add("input__label");
      inputEditPictureWrapper.append(labelForEditPicture);

      inputEditPicture.addEventListener("change", event => {
        elem.picture = event.target.value;
      });

      /* Buttons */

      const editButtonsWrapper = document.createElement("div");
      editButtonsWrapper.classList.add("card__buttons-wrapper");
      fieldEditWrapper.append(editButtonsWrapper);

      const buttonAccept = document.createElement("button");
      buttonAccept.innerText = "Accept Changes";
      buttonAccept.classList.add("card__button-edit");
      editButtonsWrapper.append(buttonAccept);

      buttonAccept.addEventListener("click", event => {
        event.preventDefault();
        if (
          inputEditNameError.hidden &&
          inputEditArticleError.hidden &&
          inputEditCountError.hidden &&
          inputEditPriceError.hidden
        ) {
          let date = new Date();
          let month = date.getMonth();
          if (month < 10) month = `0${month + 1}`;
          elem.date = `${date.getDate()}.${month}.${date.getFullYear()}`;
          renderCards(initialSortedArray(model));
          mainContainer.style.display = "flex";
          editFormContainerWrapper.style.display = "none";
        }
      });

      const buttonDelete = document.createElement("button");

      buttonDelete.innerText = "Delete Card";
      editButtonsWrapper.append(buttonDelete);
      buttonDelete.classList.add("card__button-edit");

      buttonDelete.addEventListener("click", event => {
        event.preventDefault();
        const popupDeleteWrapper = document.createElement("div");
        popupDeleteWrapper.classList.add("card__button-delete-wrapper");
        editFormContainerWrapper.append(popupDeleteWrapper);

        const popupDelete = document.createElement("div");
        popupDelete.classList.add("card__popup-delete");
        popupDelete.innerText = "Are you sure?";
        popupDeleteWrapper.append(popupDelete);

        const editButtonsPopupWrapper = document.createElement("div");
        editButtonsPopupWrapper.classList.add("card__buttons-wrapper");
        popupDelete.append(editButtonsPopupWrapper);

        const buttonPopupAccept = document.createElement("button");
        buttonPopupAccept.innerText = "Yes";
        buttonPopupAccept.classList.add("card__button-popup-edit");
        editButtonsPopupWrapper.append(buttonPopupAccept);

        buttonPopupAccept.addEventListener("click", () => {
          editFormContainerWrapper.style.display = "none";
          mainContainer.style.display = "flex";
          arrayOfCards = model.filter(item => {
            if (item.id !== elem.id) return true;
            return false;
          });
          renderCards(arrayOfCards);
        });

        const buttonPopupDecline = document.createElement("button");
        buttonPopupDecline.innerText = "No";
        editButtonsPopupWrapper.append(buttonPopupDecline);
        buttonPopupDecline.classList.add("card__button-popup-edit");

        buttonPopupDecline.addEventListener("click", () => {
          popupDeleteWrapper.style.display = "none";
        });
      });
    });

    const lastElement = document.createElement(`div`);
    lastElement.classList.add("card__last-element");
    lastElement.innerText = `Last One!`;
    productElementWrapper.append(lastElement);
    lastElement.hidden = true;

    if (item.count === 1) lastElement.hidden = false;

    if (item.picture) {
      photo.src = item.picture;
      photo.onload = function() {
        photo.classList.add("card__image");
        productPhoto.append(photo);
      };
    }

    radioButtonPriceCollection.forEach(elem => {
      if (elem.value === item.priceSegment) {
        productContainer.classList.add(`container-card_${item.priceSegment}`);
      }
    });

    for (let prop in item) {
      const cardWrapper = document.createElement("div");
      cardWrapper.classList.add("card__wrapper");
      productContainer.append(cardWrapper);

      const cardProperty = document.createElement("span");
      const cardValue = document.createElement("span");

      switch (prop) {
        case "name":
          cardValue.innerText = `${item[prop]}`;
          cardValue.style.fontWeight = "bold";
          cardWrapper.append(cardValue);
          break;

        case "price":
          cardProperty.innerText = `${prop}: `;
          cardWrapper.append(cardProperty);
          cardValue.innerText = `${item[prop]}$`;
          cardWrapper.append(cardValue);
          break;

        case "count":
          cardProperty.innerText = `${prop}: `;
          cardWrapper.append(cardProperty);
          cardValue.innerText = `${item[prop]}`;
          cardWrapper.append(cardValue);
          break;

        case "article":
          cardProperty.innerText = `${prop}: `;
          cardWrapper.append(cardProperty);
          cardValue.innerText = `${item[prop]}`;
          cardWrapper.append(cardValue);
          break;

        case "date":
          cardProperty.innerText = `${prop}: `;
          cardWrapper.append(cardProperty);
          cardValue.innerText = `${item[prop]}`;
          cardWrapper.append(cardValue);
          break;

        case "description":
          const cardPropertyDescription = document.createElement("button");
          cardPropertyDescription.innerText = `Hide Description`;
          cardPropertyDescription.classList.add("card__description");
          cardWrapper.append(cardPropertyDescription);
          const cardValueDescription = document.createElement("div");
          cardValueDescription.classList.add("card__description_data");
          cardValueDescription.classList.add("card__description_hidden");
          cardValueDescription.innerText = `${item[prop]}`;
          cardWrapper.append(cardValueDescription);

          cardPropertyDescription.addEventListener("click", () => {
            cardValueDescription.classList.toggle("card__description_hidden");
          });
      }
    }
  });
};
