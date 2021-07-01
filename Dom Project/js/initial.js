"use strict";

/* Array of Cards */

let arrayOfCards = [
  {
    name: "Bomber",
    price: 12,
    count: 3,
    article: "B89",
    date: "23.01.2020",
    picture:
      "https://upload.wikimedia.org/wikipedia/ru/c/c8/Bomberman_cover_DS.jpg",
    priceSegment: "cheap",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A laudantium eveniet ipsam perspiciatis! Magni iure consectetur eveniet accusamus corporis tempora expedita quia quae"
  },
  {
    name: "Alphatron",
    price: 85,
    count: 1,
    article: "A3344",
    date: "23.02.2020",
    picture:
      "https://cdnb.artstation.com/p/assets/images/images/027/634/333/large/jerry-mcclellan-alphatron-float-overcity.jpg?1592104378",
    priceSegment: "optimal"
  },
  {
    name: "Globus",
    price: 381,
    count: 7,
    article: "G667",
    date: "03.08.2019",
    picture:
      "https://i0.wp.com/www.aviasales.by/blog/wp-content/uploads/2020/04/photo_2020-04-27_09-29-38.jpg?ssl=1",
    priceSegment: "premium"
  },
  {
    name: "Rainbow",
    price: 38,
    count: 4,
    article: "R8889",
    date: "22.10.2020",
    picture:
      "https://static.wikia.nocookie.net/winxopedia/images/e/e3/%D0%A0%D1%8D%D0%B9%D0%BD%D0%B1%D0%BE%D1%83.jpg/revision/latest/scale-to-width-down/737?cb=20150926154922&path-prefix=ru",
    priceSegment: "optimal"
  },
  {
    name: "Tropico",
    price: 45,
    count: 10,
    article: "T89",
    date: "22.09.2020",
    picture: "https://coop-land.ru/uploads/posts/2019-03/1553499776_1.jpg",
    priceSegment: "optimal"
  },
  {
    name: "Zombie",
    price: 13,
    count: 2,
    article: "Z011",
    date: "18.05.2018",
    picture: "https://ychef.files.bbci.co.uk/976x549/p01kb9s7.jpg",
    priceSegment: "cheap"
  },
  {
    name: "Ranger",
    price: 101,
    count: 1,
    article: "R112",
    date: "02.01.2021",
    picture:
      "https://store-images.s-microsoft.com/image/apps.6557.14142822951378711.d4accbbd-2951-4d2b-b329-6d60ea0e2653.2ca80a23-425e-4f96-a6dd-6466f00d1f23?mode=scale&q=90&h=1080&w=1920&format=jpg",
    priceSegment: "premium"
  },
  {
    name: "Roller",
    price: 39,
    count: 7,
    article: "L221",
    date: "31.08.2020",
    picture: "https://sputnik.kz/images/07e5/01/07/15942483.jpg",
    priceSegment: "optimal"
  },
  {
    name: "Monkey",
    price: 8,
    count: 16,
    article: "M0011",
    date: "12.04.2021",
    picture:
      "https://cdn.cnn.com/cnnnext/dam/assets/160107100400-monkey-selfie-super-169.jpg",
    priceSegment: "cheap"
  },
  {
    name: "Dolly",
    price: 155,
    count: 5,
    article: "D888",
    date: "13.04.2021",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Dolly_face_closeup.jpg",
    priceSegment: "premium"
  }
];

let idCounter = 0;

let card = {
  name: "",
  price: "",
  count: "",
  article: "",
  date: "",
  picture: "",
  priceSegment: "",
  itemId: ""
};
