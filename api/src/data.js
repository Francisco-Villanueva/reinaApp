const prices = {
  //PRECIOS DE LAS DOBLES
  blue: 1260,
  mid2: 1230,
  mid1: 1200,
  low: 1140,
};
const cheeseSimple = {
  id: "chsID",
  name: "cheese simple",
  description: "descripcion",
  price: prices.low - 120,
  "dietType:": ["carne", "vegge"],
};
const cheese = {
  id: "chID",
  name: "cheese",
  description: "descripcion",
  price: prices.low,
  "dietType:": ["carne", "vegge"],
};
const cheeseTriple = {
  id: "chtID",
  name: "cheese triple",
  description: "descripcion",
  price: prices.low + 200,
  "dietType:": ["carne", "vegge"],
};
const blueSimple = {
  id: "bluesID",
  name: "blue simple",
  description: "descripcion",
  price: prices.blue -120,
  dietType: ["carne", "vegge"],
};
const blue = {
  id: "blueID",
  name: "blue",
  description: "descripcion",
  price: prices.blue,
  dietType: ["carne", "vegge"],
};

const blueTriple = {
  id: "bluetID",
  name: "blue triple",
  description: "descripcion",
  price: prices.blue + 200,
  dietType: ["carne", "vegge"],
};
const lifeSimple = {
  id: "lifesID",
  name: "life simple",
  description: "descripcion",
  price: prices.mid2-120,
  dietType: ["carne", "vegge"],
};
const life = {
  id: "lifeID",
  name: "life",
  description: "descripcion",
  price: prices.mid2,
  dietType: ["carne", "vegge"],
};
const lifeTriple = {
  id: "lifetID",
  name: "life triple",
  description: "descripcion",
  price: prices.mid2+200,
  dietType: ["carne", "vegge"],
};
const baconSimple = {
  id: "baconsID",
  name: "bacon simple",
  description: "descripcion",
  price: prices.mid2 - 120,
  dietType: ["carne", "vegge"],
};
const bacon = {
  id: "baconID",
  name: "bacon",
  description: "descripcion",
  price: prices.mid2,
  dietType: ["carne", "vegge"],
};

const baconTriple = {
  id: "bacontID",
  name: "bacon triple",
  description: "descripcion",
  price: prices.mid2 + 200,
  dietType: ["carne", "vegge"],
};

const clasicaSimpe = {
  id: "clasicasID",
  name: "clasica simple",
  description: "descripcion",
  price: prices.mid1 - 120,
  dietType: ["carne", "vegge"],
};
const clasica = {
  id: "clasicaID",
  name: "clasica",
  description: "descripcion",
  price: prices.mid1,
  dietType: ["carne", "vegge"],
};

const clasicaTriple = {
  id: "clasicatID",
  name: "clasica triple",
  description: "descripcion",
  price: prices.mid1 + 200,
  dietType: ["carne", "vegge"],
};
const cuartoSimple = {
  id: "cuartosID",
  name: "cuarto simple",
  description: "descripcion",
  price: prices.mid1 - 120,
  dietType: ["carne", "vegge"],
};
const cuarto = {
  id: "cuartoID",
  name: "cuarto",
  description: "descripcion",
  price: prices.mid1,
  dietType: ["carne", "vegge"],
};
const cuartoTriple = {
  id: "cuartotID",
  name: "cuarto triple",
  description: "descripcion",
  price: prices.mid1 + 200,
  dietType: ["carne", "vegge"],
};

const data2 = [ cheeseSimple,cheese,cheeseTriple,blueSimple, blue,blueTriple,lifeSimple, life,lifeTriple,clasicaSimpe, clasica, clasicaTriple,baconSimple, bacon,baconTriple,cuartoSimple, cuarto, cuartoTriple];
module.exports = { data2 };
