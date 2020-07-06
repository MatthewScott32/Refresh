const kennel = {
    name: "Nashville North Kennels",
    address: "100 Demonbreun Road",
    manager: "Harper Frankstone",
    capacity: 50,
    currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
}

const boardedAnimals = kennel.currentAnimals

for (let i =0; i < boardedAnimals.length; i++) {
    console.log(boardedAnimals[i])
}

console.log(kennel.currentAnimals[3])