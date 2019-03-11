// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

var planetsElement = document.getElementById ("planets");

planets.forEach(function ([planetName, factor]) {
    var planet = document.createElement ("option");
    planet.text = planetName;
    planet.value = planetName;
    planetsElement.appendChild (planet);
});

function calculateWeight (weight, planetName) {
    planets.forEach (function (planet) {
        if (planetName == planet [0]) {
            factor = planet [1];
        }
    })
    return weight*factor;
};

function handleClickEvent (e) {
    var userWeight = document.getElementById ("user-weight").value;
    var planetName = document.getElementById ("planets").value;
    var result = calculateWeight (userWeight, planetName);
    document.getElementById ("output").innerText = 
        "If you were on " + planetName + ", you would weigh " + result + "lbs!";
};
