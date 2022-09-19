const prompt = require('prompt-sync')({sigint: true});

colorObj = {
    'purple': ['red', 'blue'],
    'orange': ['red', 'yellow'],
    'green': ['blue', 'yellow'],
}
console.log("Color calculator.. you can input color and if you can deconstruct it will otherwise you can input one more to combine")

let colorInOne = prompt("Color > ")
var exists = Object.values(colorObj).find(el => el[0] === colorInOne)

if(Object.keys(colorObj).includes(colorInOne)){
    console.log(`${colorInOne} = ${colorObj[colorInOne][0]} + ${colorObj[colorInOne][1]}`)
}else if(exists){
    let colorInTwo = prompt("Color > ")
    var combo = Object.values(colorObj).find(el => el[0] === colorInOne && el[1] === colorInTwo)
    if(combo){
        console.log(`${combo[0]} + ${combo[1]} = ${Object.keys(colorObj).find(key => colorObj[key] === combo)}`)
    }else{
        console.log("Error: second input not in calculator")
    }
}else{
    console.log("Error: first input not in calculator")
}