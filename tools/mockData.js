const cards = [
  {
    id: 1,
    name: 'Dark Magician Girl',
    slug: 'dark-magician-girl',
  },
  {
    id: 2,
    name: 'Dark Magician Girl the Dragon Knight',
    slug: 'dark-magician-girl-the-dragon-knight',
  },
  {
    id: 3,
    name: 'Dark Magician',
    slug: 'dark-magician',
  },
  {
    id: 4,
    name: 'Dark Paladin',
    slug: 'dark-paladin',
  },
  {
    id: 5,
    name: 'Magician of Chaos',
    slug: 'magician-of-chaos',
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
