const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(empireStateBuilding.height, empireStateBuilding.stories, empireStateBuilding.squareFeet,
    empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength)

const address = 'address'
const construct = 'constructionDate'
const cost = 'cost'
const owner = 'owner'
const architect = 'architect'

const buildingAddress = empireStateBuilding[address]
const buildingConstruct = empireStateBuilding[construct]
const buildingCost = empireStateBuilding[cost]
const buildingOwner = empireStateBuilding[owner]
const buildingArchitect = empireStateBuilding[architect]

console.log(buildingAddress)
console.log(buildingConstruct)
console.log(buildingCost)
console.log(buildingOwner)
console.log(buildingArchitect)