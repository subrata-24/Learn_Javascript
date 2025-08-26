const dog = {
    name: "Doggie",
    leg: "2",
    speaks: "Bhow bhow",
};

const cat = {
    name: "Pussy",
    leg: "2",
    speaks: "Mew mew",
};

function printabout(animal) {
    console.log("animal " + animal["name"] + " speaks " + animal["speaks"]);
}

printabout(dog);
printabout(cat);
