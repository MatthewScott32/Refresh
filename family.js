const dad = {
    name: "Jim",
    job: "Car Salesman",
    age: 40
}

const mom = {
    name: "Thelma",
    job: "Doctor",
    age: 38
}

const daughter = {
    name: "Lisa",
    job: "Student",
    age: 17
}

const son = {
    name: "Mike",
    job: "Student",
    age: 14
}


const familyMembers = [dad, mom, daughter, son]

console.log(familyMembers)

console.log(`Dad's age is ${dad.age}`)

dad.weight = "185"

console.log(`Dad's weight is ${dad.weight}`)

console.log(mom['age'])

console.log(daughter.job)

const keyToLookUp = "job"

const sonJob = son[keyToLookUp]

console.log(sonJob)
