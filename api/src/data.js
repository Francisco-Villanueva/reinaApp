const prices = {
  //PRECIOS DE LAS DOBLES
  blue: 1260,
  mid2: 1230,
  mid1: 1200,
  low: 1140,
};

const data = {
  burgers: {
    cheese: {
      name: "nombre",
      description: "descripcion",
      price: [prices.low - 120, prices.low, prices.low + 200],
      "dietType:": ["carne", "vegge"],
    },
    blue: {
      name: "nombre",
      description: "descripcion",
      price: [prices.blue - 120, prices.blue, prices.blue + 200],
      "dietType:": ["carne", "vegge"],
    },
    life: {
      name: "nombre",
      description: "descripcion",
      price: [prices.mid2 - 120, prices.mid2, prices.mid2 + 200],
      "dietType:": ["carne", "vegge"],
    },
    bacon: {
      name: "nombre",
      description: "descripcion",
      price: [prices.mid2 - 120, prices.mid2, prices.mid2 + 200],
      "dietType:": ["carne", "vegge"],
    },
    clasica: {
      name: "nombre",
      description: "descripcion",
      price: [prices.mid1 - 120, prices.mid1, prices.mid1 + 200],
      "dietType:": ["carne", "vegge"],
    },
    cuarto: {
      name: "nombre",
      description: "descripcion",
      price: [prices.mid1 - 120, prices.mid1, prices.mid1 + 200],
      "dietType:": ["carne", "vegge"],
    },
  },
};

module.exports = { data };
