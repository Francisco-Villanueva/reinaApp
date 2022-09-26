const prices = {
  //PRECIOS DE LAS DOBLES
  blue: 1260,
  mid2: 1230,
  mid1: 1200,
  low: 1140,
};

const cheese = {
  id: "chID",
  name: "cheese",
  description: "descripcion",
  price: [prices.low - 120, prices.low, prices.low + 200],
  "dietType:": ["carne", "vegge"],
};
const blue = {
  id: "blueID",
  name: "blue",
  description: "descripcion",
  price: [prices.blue - 120, prices.blue, prices.blue + 200],
  "dietType:": ["carne", "vegge"],
};
const life = {
  id: "lifeID",
  name: "life",
  description: "descripcion",
  price: [prices.mid2 - 120, prices.mid2, prices.mid2 + 200],
  "dietType:": ["carne", "vegge"],
};
const bacon = {
  id: "baconID",
  name: "bacon",
  description: "descripcion",
  price: [prices.mid2 - 120, prices.mid2, prices.mid2 + 200],
  "dietType:": ["carne", "vegge"],
};
const clasica = {
  id: "clasicaID",
  name: "clasica",
  description: "descripcion",
  price: [prices.mid1 - 120, prices.mid1, prices.mid1 + 200],
  "dietType:": ["carne", "vegge"],
};
const cuarto = {
  id: "cuartoID",
  name: "cuarto",
  description: "descripcion",
  price: [prices.mid1 - 120, prices.mid1, prices.mid1 + 200],
  "dietType:": ["carne", "vegge"],
};

const data2 = [cheese, blue, life, clasica, bacon, cuarto];
module.exports = { data2 };
