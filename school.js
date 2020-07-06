const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

const partTimeInstructors = nashvilleSoftwareSchool.instructors.partTime
const fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime

for( let i = 0 ; i <partTimeInstructors.length; i++) {
    console.log(partTimeInstructors[i])
}

for( let i = 0 ; i <fullTimeInstructors.length; i++) {
    console.log(fullTimeInstructors[i])
}
