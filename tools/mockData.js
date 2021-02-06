const cards = [
  {
    id: 1,
    name: 'Dark Magician Girl',
    slug: 'dark-magician-girl',
    level: 5,
  },
  {
    id: 2,
    name: 'Dark Magician Girl the Dragon Knight',
    slug: 'dark-magician-girl-the-dragon-knight',
    level: 6,
  },
  {
    id: 3,
    name: 'Dark Magician',
    slug: 'dark-magician',
    level: 10,
  },
  {
    id: 4,
    name: 'Dark Paladin',
    slug: 'dark-paladin',
    level: 3,
  },
  {
    id: 5,
    name: 'Magician of Chaos',
    slug: 'magician-of-chaos',
    level: 4,
  },
];

// const authors = [
//   { id: 1, name: "Cory House" },
//   { id: 2, name: "Scott Allen" },
//   { id: 3, name: "Dan Wahlin" }
// ];

const newCard = {
  id: null,
  name: '',
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCard,
  cards,
};
