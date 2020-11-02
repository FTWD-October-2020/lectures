

//for loops traditional 

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i])
// }

// for (let student of students) {
//     console.log(student)
// }


//ForEach? 
// students.forEach(logEvenStudents)

// function logEvenStudents(eachStudent, i) {
//     if (i % 2 === 0) {
//         console.log(eachStudent, i)
//     }
// }

let numbers = [100, 200, 300, 400, 500]

let students = [
    { name: 'vivi', age: 1, },
    { name: 'mike', age: 2 },
    { name: 'brandon', age: 3 },
    { name: 'ana', age: 4 },
    { name: 'valentino', age: 5 }
]

console.log("FOR EACH:")

students.forEach((eachStudent) => {
    // console.log(eachStudent.name)
})




console.log("MAP:")
let mapStudents = students.map((eachStudent) => {
    //First change the value 
    eachStudent.name = eachStudent.name.toUpperCase()

    //return the whole object
    return eachStudent
})
// console.log(mapStudents)



console.log("FILTER:")
let filterdStudents = students.filter((eachStudent, i) => {

    //Condition 
    if (eachStudent.age < 3000 && eachStudent.name.includes("I")) {

        //Return the whole object
        return eachStudent
    }
})
// console.log(filterdStudents)


console.log("REDUCE:")

// let reducedStudents = students.reduce((acc, cur) => {
//     console.log(acc, cur)
//     return acc += cur.age
// }, 0)




console.log("SORT:")

let sortedStudents = students.sort((a, b) => {
    if (a.name < b.name) {
        return -1
    }
    if (a.name > b.name) {
        return 1
    }
    else {
        return 0
    }
    // return a.name.localeCompare(b.name)
})
console.log(sortedStudents)


























// let reducedStudents = students.reduce((anyStudent, i) => {
//     //console.log(anyStudent, i)
//     return anyStudent + i + ' '
// }, 'Start:')
// console.log(reducedStudents)

// let reduceNumbers = numbers.reduce((acc, cur) => {
//     return acc - cur
// }, 0)
// console.log(reduceNumbers)



// let sortedStudents = students.sort((a, b) => {
//     console.log(a, b)
//     if (a > b) {
//         return 1
//     }
//     if (a < b) {
//         return -1
//     }
//     return 0
// })

