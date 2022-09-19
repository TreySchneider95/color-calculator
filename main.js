const prompt = require('prompt-sync')({sigint: true});

// Color object that has the constructed color as the key and the colors to construct as the value
colorObj = {
    'purple': ['red', 'blue'],
    'orange': ['red', 'yellow'],
    'green': ['blue', 'yellow'],
}
console.log("Color calculator.. you can input color and if you can deconstruct it will otherwise you can input one more to combine")

// first color prompt
let colorInOne = prompt("Color > ")

if(Object.keys(colorObj).includes(colorInOne)){
    // checks if you can deconstruct color or if it needs to be constructed
    console.log(`${colorInOne} = ${colorObj[colorInOne][0]} + ${colorObj[colorInOne][1]}`)
}else if(Object.values(colorObj).find(el => el[0] === colorInOne)){
    // Checks if color is valid construction color then takes in second color
    let colorInTwo = prompt("Color > ")
    // this gets the correct value in the color object or if there is not one errors
    var combo = Object.values(colorObj).find(el => el[0] === colorInOne && el[1] === colorInTwo)
    // check if combo                                Finds the key based on the combo found earlier                else           console log error
    combo ? console.log(`${combo[0]} + ${combo[1]} = ${Object.keys(colorObj).find(key => colorObj[key] === combo)}`) : console.log("Error: second color input not in calculator or not a valid color used for contructing")
}else{
    console.log("Error: first color input not in calculator")
}