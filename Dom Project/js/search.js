'use strict'

/* Search */

inputSearch.addEventListener("input", event => {

    const searchedCards = arrayOfCards.filter(item => {
        if (item.name.toLowerCase().includes(event.target.value.toLowerCase()))
            return true;
        return false;
    });

    const filteredCards = checkboxFilteredItems(searchedCards, objOfFilteredProperties);
    const sortedCards = sortedItems(filteredCards, valueOfRadioCollection);
    renderCards(sortedCards);
});

function searchInput(arr) {
    const filteredItems = arr.filter(item => {
        if (item.name.toLowerCase().includes(inputSearch.value.toLowerCase()))
            return true;
        return false;
    });
    if (!filteredItems.length)
        return arr;
    return filteredItems;
}

/* Filter checkbox */

const checkboxFilterCollection = fieldFilterWrapper.querySelectorAll("input");

let arrayOfFilteredItems = [];

let objOfFilteredProperties = {
    cheap: false,
    optimal: false,
    premium: false
}

checkboxFilterCollection.forEach(item => {
    item.addEventListener('change', event => {

        if (event.target.checked) {
            objOfFilteredProperties[event.target.value] = true;
            const searchCards = searchInput(arrayOfCards);
            const filteredCards = checkboxFilteredItems(searchCards, objOfFilteredProperties);
            const sortedCards = sortedItems(filteredCards, valueOfRadioCollection);
            renderCards(sortedCards);
        } else {
            objOfFilteredProperties[event.target.value] = false;
            const searchCards = searchInput(arrayOfCards);
            const filteredCards = checkboxFilteredItems(searchCards, objOfFilteredProperties);
            const sortedCards = sortedItems(filteredCards, valueOfRadioCollection);
            renderCards(sortedCards);
        }
    })
})

function checkboxFilteredItems(arr, value) {
    let filteredArray = [];
    let checkedProp = false;
    for (let prop in value) {
        if (value[prop]) {
            checkedProp = true;
            let filteredArr = arr.filter(item => {
                if (item.priceSegment === prop) {
                    return true;
                }
                return false;
            })
            filteredArray.push(...filteredArr)
        }
    }
    if (!filteredArray.length && !checkedProp)
        return arr;
    return filteredArray;
}

/* Sort */

function initialSortedArray(arr) {
    return [...arr].sort((a, b) => {
        return a.name > b.name ? 1 : -1;
    });
}

const radioFilterCollection = fieldFilterRadioWrapper.querySelectorAll("input");

let valueOfRadioCollection = '';

radioFilterCollection.forEach(item => {
    item.addEventListener('change', event => {
        valueOfRadioCollection = event.target.value;
        if (event.target.checked) {
            const searchCards = searchInput(arrayOfCards);
            const filteredCards = checkboxFilteredItems(searchCards, objOfFilteredProperties);
            let sortedCards = [];
            if (valueOfRadioCollection === 'date') {
                sortedCards = filteredCards.sort((a, b) => {
                    return new Date(a[valueOfRadioCollection].split('.').reverse().join('-')).getTime() > new Date(b[valueOfRadioCollection].split('.').reverse().join('-')).getTime() ? 1 : -1;
                });
            } else {
                sortedCards = filteredCards.sort((a, b) => {
                    return a[valueOfRadioCollection] > b[valueOfRadioCollection] ? 1 : -1;
                });
            }
            renderCards(sortedCards);
        } else {
            renderCards();
        }
    })
});

function sortedItems(arr, value) {
    let sortedArr = [];
    if (value) {
        let sortedCards = [];
        if (value === 'date') {
            sortedCards = arr.sort((a, b) => {
                return new Date(a[value].split('.').reverse().join('-')).getTime() > new Date(b[value].split('.').reverse().join('-')).getTime() ? 1 : -1;
            })
        } else {
            sortedCards = arr.sort((a, b) => {
                return a[value] > b[value] ? 1 : -1;
            })
        }
        sortedArr = sortedCards;
    } else {
        sortedArr = initialSortedArray(arr);
    }
    if (!sortedArr.length) {
        return initialSortedArray(arr);
    }
    return sortedArr;
}