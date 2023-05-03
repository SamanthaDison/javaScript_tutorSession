const materials = [
    { name: 'brick' },
    { name: 'stone' },
    { name: 'plaster' },
    { name: 'sheetrock' }
]

let green = true
let red = false

// NOTE when the user, tells you to build a wall, you should expect to be told what material to make this wall out of
function buildWall(materialName) {
    // my job is to build a wall
    console.log('building a wall', materialName);
    let foundMaterial = materials.find(m => m.name == materialName)
    if (foundMaterial) {
        console.log('building that wall')
    } else {
        console.log("don't have that material");
    }
}

function orderPizza(topping) {
    console.log('making pizza', topping)
}

// NOTE whatever is inside the () is called the 'condition'
if (red == false) {
    console.log('red is false!');
} else {
    console.log('red is NOT false');
}

// NOTE whatever comes before the '?' is the condition that I'm checking
// NOTE whatever comes right after the '?' is what I want to happen, if the condition is true
// NOTE whatever comes after the ':' is what I want to happen if the condition is false
red == false ? console.log('red is false!') : console.log('red is NOT false');


document.getElementById('header-html').innerHTML = `<h1 class="${red ? 'bg-danger' : 'bg-success'}">${materials[0].name}</h1>`

// NOTE innerHTML is for when I want to write actual HTML elements such as <p>, <h1>, etc....

document.getElementById('header-text').innerText = 'This is the COOLEST header'

// NOTE innerText is for when I don't alter any HTML, just the text inside of <>

document.getElementById('emoji').innerText = '🤠'