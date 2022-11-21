
// 8 kyu
// How many lightsabers do you own?
const howManyLightsabersDoYouOwn = name => name === "Zach" ? 18 : 0

// 8 kyu
// Grasshopper - Basic Function Fixer
const addFive = num => num + 5

// 8 kyu
// Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump

// 8 kyu
// String Templates - Bug Fixing #5
const buildString = (...template) => `I like ${template.join(', ')}!`

// 8 kyu
// Keep up the hoop
const hoopCount = n => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"

// 8 kyu
// Invert values
const invert = (array) => array.map(el => el * -1)

// 8 kyu
// Find Maximum and Minimum Values of a List
const min = function(list){

    list.sort((a, b) => a > b ? 1 : -1)

    return list[0];
}
const max = function(list){

    list.sort((a, b) => a < b ? 1 : -1)

    return list[0];
}