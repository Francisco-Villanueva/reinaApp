const prices = {
  //PRECIOS DE LAS DOBLES
  blue: 1350,
  mid2: 1350,
  mid1: 1300,
  low: 1240,
};
const cheeseSimple = {
  id: "chsID",
  name: "cheese Simple",
  description: "pan, cheddar",
  price: prices.low - 120,
  "dietType:": ["carne", "vegge"],
};
const cheese = {
  id: "chID",
  name: "cheese",
  description: "pan y cheddar",
  price: prices.low,
  "dietType:": ["carne", "vegge"],
};
const cheeseTriple = {
  id: "chtID",
  name: "cheese Triple",
  description: "pan y cheddar",
  price: prices.low + 200,
  "dietType:": ["carne", "vegge"],
};
const blueSimple = {
  id: "bluesID",
  name: "blue Simple",
  description: "Queso, azul, cebolla caramelizada y alioli",
  price: prices.blue - 120,
  dietType: ["carne", "vegge"],
};
const blue = {
  id: "blueID",
  name: "blue",
  description: "Queso, azul, cebolla caramelizada y alioli",
  price: prices.blue,
  dietType: ["carne", "vegge"],
};

const blueTriple = {
  id: "bluetID",
  name: "blue Triple",
  description: "Queso, azul, cebolla caramelizada y alioli",
  price: prices.blue + 200,
  dietType: ["carne", "vegge"],
};
const lifeSimple = {
  id: "lifesID",
  name: "life Simple",
  description: "Panceta ahumada, cheddar, cebolla morad y salsa Life",
  price: prices.mid2 - 120,
  dietType: ["carne", "vegge"],
};
const life = {
  id: "lifeID",
  name: "life",
  description: "Panceta ahumada, cheddar, cebolla morad y salsa Life",
  price: prices.mid2,
  dietType: ["carne", "vegge"],
};
const lifeTriple = {
  id: "lifetID",
  name: "life Triple",
  description: "Panceta ahumada, cheddar, cebolla morad y salsa Life",
  price: prices.mid2 + 200,
  dietType: ["carne", "vegge"],
};
const baconSimple = {
  id: "baconsID",
  name: "bacon Simple",
  description: "Panceta ahumada, cheddar y thousand island",
  price: prices.mid2 - 120,
  dietType: ["carne", "vegge"],
};
const bacon = {
  id: "baconID",
  name: "bacon",
  description: "Panceta ahumada, cheddar y thousand island",
  price: prices.mid2,
  dietType: ["carne", "vegge"],
};

const baconTriple = {
  id: "bacontID",
  name: "bacon Triple",
  description: "Panceta ahumada, cheddar y thousand island",
  price: prices.mid2 + 200,
  dietType: ["carne", "vegge"],
};

const clasicaSimpe = {
  id: "clasicasID",
  name: "clasica Simple",
  description: "Cheddar, tomate, lechuga, cebolla, y thousand island",
  price: prices.mid1 - 120,
  dietType: ["carne", "vegge"],
};
const clasica = {
  id: "clasicaID",
  name: "clasica",
  description: "Cheddar, tomate, lechuga, cebolla, y thousand island",
  price: prices.mid1,
  dietType: ["carne", "vegge"],
};

const clasicaTriple = {
  id: "clasicatID",
  name: "clasica Triple",
  description: "Cheddar, tomate, lechuga, cebolla, y thousand island",
  price: prices.mid1 + 200,
  dietType: ["carne", "vegge"],
};
const cuartoSimple = {
  id: "cuartosID",
  name: "cuarto Simple",
  description: "Cheddar, salsa cuarto de libra",
  price: prices.mid1 - 120,
  dietType: ["carne", "vegge"],
};
const cuarto = {
  id: "cuartoID",
  name: "cuarto",
  description: "Cheddar, salsa cuarto de libra",
  price: prices.mid1,
  dietType: ["carne", "vegge"],
};
const cuartoTriple = {
  id: "cuartotID",
  name: "cuarto Triple",
  description: "Cheddar, salsa cuarto de libra",
  price: prices.mid1 + 200,
  dietType: ["carne", "vegge"],
};

const data2 = [
  cheeseSimple,
  cheese,
  cheeseTriple,
  blueSimple,
  blue,
  blueTriple,
  lifeSimple,
  life,
  lifeTriple,
  clasicaSimpe,
  clasica,
  clasicaTriple,
  baconSimple,
  bacon,
  baconTriple,
  cuartoSimple,
  cuarto,
  cuartoTriple,
];

const data3 = {
  ch: { name: "Cheese Burger", size: [cheeseSimple, cheese, cheeseTriple] },
  blu: [blueSimple, blue, blueTriple],
  cuart: [cuartoSimple, cuarto, cuartoTriple],
  lif: [lifeSimple, life, lifeTriple],
  clasic: [clasicaSimpe, clasica, clasicaTriple],
  baco: [baconSimple, bacon, baconTriple],
};

module.exports = { data3, data2 };
