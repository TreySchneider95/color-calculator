const prompt = require('prompt-sync')({sigint: true});

colorObj = {
    'purple': ['red', 'blue'],
    'orange': ['red', 'yellow'],
    'green': ['blue', 'yellow'],
}
console.log("Color calculator.. you can input color and if you can deconstruct it will otherwise you can input one more to combine")

// first color prompt
let colorInOne = prompt("Color > ")
// checks if the color is a valid contruction color
var exists = Object.values(colorObj).find(el => el[0] === colorInOne)

if(Object.keys(colorObj).includes(colorInOne)){
    // checks if you can deconstruct color or if it needs to be constructed
    console.log(`${colorInOne} = ${colorObj[colorInOne][0]} + ${colorObj[colorInOne][1]}`)
}else if(exists){
    // this is for if it needs to be constructed and take in second color
    let colorInTwo = prompt("Color > ")
    // this gets the correct value in the color object or if there is not one errors
    var combo = Object.values(colorObj).find(el => el[0] === colorInOne && el[1] === colorInTwo)
    if(combo){
        console.log(`${combo[0]} + ${combo[1]} = ${Object.keys(colorObj).find(key => colorObj[key] === combo)}`)
    }else{
        console.log("Error: second input not in calculator")
    }
}else{
    console.log("Error: first input not in calculator")
}