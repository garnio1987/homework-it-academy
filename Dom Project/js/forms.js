'use strict'

function createElementByTag(tag, parent, id = '', text = '') {
    const elem = document.createElement(tag);
    elem.id = id;
    elem.innerText = text;
    parent.append(elem);
}

function createInput(parent, type, id = '', name = '', value = '') {
    const elem = document.createElement('input');
    elem.id = id;
    elem.type = type;
    elem.name = name;
    elem.value = value;
    parent.append(elem);
}

function createLabel(parent, inputId, id = '', text = '') {
    const elem = document.createElement('label');
    elem.id = id;
    elem.htmlFor = inputId;
    elem.innerText = text;
    parent.append(elem);
}

function getElement(elem) {
    return document.getElementById(elem);
}

/* Creation Form */
/* Main information */

const mainContainer = document.createElement("div");
mainContainer.classList.add('main-container');
document.body.append(mainContainer);

createElementByTag('div', mainContainer, 'formsWrapper');
formsWrapper.classList.add('main-container__form-wrapper');

createElementByTag('form', getElement('formsWrapper'), 'formCreateProduct');
formCreateProduct.classList.add('container-form');

createElementByTag('fieldset', getElement('formCreateProduct'), 'fieldInfo');
fieldInfo.classList.add('container-form__fieldset');

createElementByTag('legend', getElement('fieldInfo'), 'legendForFieldInfo', 'Main information');
legendForFieldInfo.classList.add('form__legend');

createElementByTag('div', getElement('fieldInfo'), 'fieldInfoWrapper');
fieldInfoWrapper.classList.add('form__wrapper');

createElementByTag('div', getElement('fieldInfoWrapper'), 'inputNameWrapper');
inputNameWrapper.classList.add('form__input-wrapper');

createInput(getElement('inputNameWrapper'), 'text', 'inputName');
inputName.classList.add('form__input');
inputName.required = true;

createLabel(getElement('inputNameWrapper'), 'inputName', 'labelName', 'Name');
labelName.classList.add('input__label');

createElementByTag('div', getElement('inputNameWrapper'), 'inputNameError', 'This input should contain at least 5 characters');
inputNameError.classList.add('form__input-error');
inputNameError.hidden = true;

createElementByTag('div', getElement('fieldInfoWrapper'), 'inputArticleWrapper');
inputArticleWrapper.classList.add('form__input-wrapper');

createInput(getElement('inputArticleWrapper'), 'text', 'inputArticle');
inputArticle.classList.add('form__input');
inputArticle.required = true;

createLabel(getElement('inputArticleWrapper'), 'inputArticle', 'labelArticle', 'Article');
labelArticle.classList.add('input__label');

createElementByTag('div', getElement('inputArticleWrapper'), 'inputArticleError', 'This input should start with the capital letter and at least two numbers');
inputArticleError.classList.add('form__input-error');
inputArticleError.hidden = true;

createElementByTag('div', getElement('fieldInfoWrapper'), 'inputCountWrapper');
inputCountWrapper.classList.add('form__input-wrapper');

createInput(getElement('inputCountWrapper'), 'number', 'inputCount');
inputCount.classList.add('form__input');
inputCount.required = true;
inputCount.min = 1;

createLabel(getElement('inputCountWrapper'), 'inputCount', 'labelCount', 'Count');
labelCount.classList.add('input__label');

createElementByTag('div', getElement('inputCountWrapper'), 'inputCountError', 'This input should not contain text symbols, be less 1, not integer');
inputCountError.classList.add('form__input-error');
inputCountError.hidden = true;

createElementByTag('div', getElement('fieldInfoWrapper'), 'inputPriceWrapper');
inputPriceWrapper.classList.add('form__input-wrapper');

createInput(getElement('inputPriceWrapper'), 'text', 'inputPrice');
inputPrice.classList.add('form__input');
inputPrice.required = true;

createLabel(getElement('inputPriceWrapper'), 'inputPrice', 'labelPrice', 'Price');
labelPrice.classList.add('input__label');

createElementByTag('div', getElement('inputPriceWrapper'), 'inputPriceError', 'This input should not contain text symbols or less 0');
inputPriceError.classList.add('form__input-error');
inputPriceError.hidden = true;

createElementByTag('div', getElement('fieldInfoWrapper'), 'inputDateWrapper');

createInput(getElement('inputDateWrapper'), 'date', 'inputDate');
inputDate.classList.add('form__input');
inputDate.required = true;

createLabel(getElement('inputDateWrapper'), 'inputDate', 'labelDate', 'Creation Date');
labelDate.classList.add('input__label');

/* Price segment */

createElementByTag('fieldset', getElement('formCreateProduct'), 'fieldPrice');
fieldPrice.classList.add('container-form__fieldset');

createElementByTag('legend', getElement('fieldPrice'), 'legendForFieldPrice', 'Price segment');
legendForFieldPrice.classList.add('form__legend');

createElementByTag('div', getElement('fieldPrice'), 'fieldPriceWrapper');
fieldPriceWrapper.classList.add('form__wrapper');

createElementByTag('div', getElement('fieldPriceWrapper'), 'inputRadioWrapperCheap');

createInput(getElement('inputRadioWrapperCheap'), 'radio', 'inputRadioCheap', 'radio', 'cheap');
inputRadioCheap.classList.add('form__input');
inputRadioCheap.required = true;
inputRadioCheap.setAttribute('checked', true);

createLabel(getElement('inputRadioWrapperCheap'), 'inputRadioCheap', 'labelRadioCheap', 'Cheap');
labelRadioCheap.classList.add('input__label');

createElementByTag('div', getElement('fieldPriceWrapper'), 'inputRadioWrapperOptimal');

createInput(getElement('inputRadioWrapperOptimal'), 'radio', 'inputRadioOptimal', 'radio', 'optimal');
inputRadioOptimal.classList.add('form__input');
inputRadioOptimal.required = true;

createLabel(getElement('inputRadioWrapperOptimal'), 'inputRadioOptimal', 'labelRadioOptimal', 'Optimal');
labelRadioOptimal.classList.add('input__label');

createElementByTag('div', getElement('fieldPriceWrapper'), 'inputRadioWrapperPremium');

createInput(getElement('inputRadioWrapperPremium'), 'radio', 'inputRadioPremium', 'radio', 'premium');
inputRadioPremium.classList.add('form__input');
inputRadioPremium.required = true;

createLabel(getElement('inputRadioWrapperPremium'), 'inputRadioPremium', 'labelRadioPremium', 'Premium');
labelRadioPremium.classList.add('input__label');

/* Secondary information */

createElementByTag('fieldset', getElement('formCreateProduct'), 'fieldSecondInfo');
fieldSecondInfo.classList.add('container-form__fieldset');

createElementByTag('legend', getElement('fieldSecondInfo'), 'legendForFieldSecondInfo', 'Secondary Information');
legendForFieldSecondInfo.classList.add('form__legend');

createElementByTag('div', getElement('fieldSecondInfo'), 'fieldSecondInfoWrapper');
fieldSecondInfoWrapper.classList.add('form__wrapper');

createElementByTag('div', getElement('fieldSecondInfoWrapper'), 'inputPictureWrapper');

createInput(getElement('inputPictureWrapper'), 'text', 'inputPicture');
inputPicture.classList.add('form__input');

createLabel(getElement('inputPictureWrapper'), 'inputPicture', 'labelPicture', 'Picture');
labelPicture.classList.add('input__label');

createElementByTag('div', getElement('fieldSecondInfoWrapper'), 'inputAreaWrapper');

createLabel(getElement('inputAreaWrapper'), 'areaDesc', 'labelDesc', 'Description');
labelDesc.classList.add('input__label_text-area');

createElementByTag('textarea', getElement('inputAreaWrapper'), 'areaDesc');
areaDesc.classList.add('form__input_text-area');
areaDesc.maxLength = '200';

createElementByTag('button', getElement('formCreateProduct'), 'submitButton', 'Submit');
submitButton.classList.add('form__button');
submitButton.type = 'submit';

/* Search Form */
/* Search */

createElementByTag('form', getElement('formsWrapper'), 'formSearch');
formSearch.classList.add('container-form');

createElementByTag('fieldset', getElement('formSearch'), 'fieldSearch');
fieldSearch.classList.add('container-form__fieldset');

createElementByTag('legend', getElement('fieldSearch'), 'legendForFieldSearch', 'Search');
legendForFieldSearch.classList.add('form__legend');

createElementByTag('div', getElement('fieldSearch'), 'fieldSearchWrapper');
fieldSearchWrapper.classList.add('form__wrapper');

createElementByTag('div', getElement('fieldSearchWrapper'), 'inputSearchWrapper');

createInput(getElement('inputSearchWrapper'), 'text', 'inputSearch');
inputSearch.classList.add('form__input');

createLabel(getElement('inputSearchWrapper'), 'inputSearch', 'labelSearch', 'OK, Google');
labelSearch.classList.add('input__label');

/* Filter by price segment checkbox*/

createElementByTag('fieldset', getElement('formSearch'), 'fieldFilterCheck');
fieldFilterCheck.classList.add('container-form__fieldset');

createElementByTag('legend', getElement('fieldFilterCheck'), 'legendForFieldFilterCheck', 'Filter by price segment');
legendForFieldFilterCheck.classList.add('form__legend');

createElementByTag('div', getElement('fieldFilterCheck'), 'fieldFilterWrapper');
fieldFilterWrapper.classList.add('form__wrapper');

createElementByTag('div', getElement('fieldFilterWrapper'), 'checkCheapWrapper');

createInput(getElement('checkCheapWrapper'), 'checkbox', 'checkCheap', 'checkCheap', 'cheap');
checkCheap.classList.add('form__input');

createLabel(getElement('checkCheapWrapper'), 'checkCheap', 'labelCheckCheap', 'Cheap');
labelCheckCheap.classList.add('input__label');

createElementByTag('div', getElement('fieldFilterWrapper'), 'checkOptimalWrapper');

createInput(getElement('checkOptimalWrapper'), 'checkbox', 'checkOptimal', 'checkOptimal', 'optimal');
checkOptimal.classList.add('form__input');

createLabel(getElement('checkOptimalWrapper'), 'checkOptimal', 'labelCheckOptimal', 'Optimal');
labelCheckOptimal.classList.add('input__label');

createElementByTag('div', getElement('fieldFilterWrapper'), 'checkPremiumWrapper');

createInput(getElement('checkPremiumWrapper'), 'checkbox', 'checkPremium', 'checkPremium', 'premium');
checkPremium.classList.add('form__input');

createLabel(getElement('checkPremiumWrapper'), 'checkPremium', 'labelCheckPremium', 'Premium');
labelCheckPremium.classList.add('input__label');

/* Filter by price segment radio*/

createElementByTag('fieldset', getElement('formSearch'), 'fieldFilterRadio');
fieldFilterRadio.classList.add('container-form__fieldset');

createElementByTag('legend', getElement('fieldFilterRadio'), 'legendForFieldFilterRadio', 'Filter by price segment');
legendForFieldFilterRadio.classList.add('form__legend');

createElementByTag('div', getElement('fieldFilterRadio'), 'fieldFilterRadioWrapper');
fieldFilterRadioWrapper.classList.add('form__wrapper');

createElementByTag('div', getElement('fieldFilterRadioWrapper'), 'inputRadioWrapperAlphabet');

createInput(getElement('inputRadioWrapperAlphabet'), 'radio', 'radioAlphabet', 'radio', 'name');
radioAlphabet.classList.add('form__input');
radioAlphabet.checked = true;
radioAlphabet.setAttribute('checked', true);

createLabel(getElement('inputRadioWrapperAlphabet'), 'radioAlphabet', 'labelRadioAlphabet', 'Alphabet');
labelRadioAlphabet.classList.add('input__label');

createElementByTag('div', getElement('fieldFilterRadioWrapper'), 'inputRadioWrapperPrice');

createInput(getElement('inputRadioWrapperPrice'), 'radio', 'radioPrice', 'radio', 'price');
radioPrice.classList.add('form__input');

createLabel(getElement('inputRadioWrapperPrice'), 'radioPrice', 'labelRadioPrice', 'Price');
labelRadioPrice.classList.add('input__label');

createElementByTag('div', getElement('fieldFilterRadioWrapper'), 'inputRadioWrapperCount');

createInput(getElement('inputRadioWrapperCount'), 'radio', 'radioCount', 'radio', 'count');
radioCount.classList.add('form__input');

createLabel(getElement('inputRadioWrapperCount'), 'radioCount', 'labelRadioCount', 'Count');
labelRadioCount.classList.add('input__label');

createElementByTag('div', getElement('fieldFilterRadioWrapper'), 'inputRadioWrapperDate');

createInput(getElement('inputRadioWrapperDate'), 'radio', 'radioDate', 'radio', 'date');
radioDate.classList.add('form__input');

createLabel(getElement('inputRadioWrapperDate'), 'radioDate', 'labelRadioDate', 'Date');
labelRadioDate.classList.add('input__label');

/* Product content */

createElementByTag('div', mainContainer, 'sectionProduct');
sectionProduct.classList.add('section-card');

createElementByTag('div', getElement('sectionProduct'), 'sectionProductWrapper');
sectionProductWrapper.classList.add('container-card__wrapper');