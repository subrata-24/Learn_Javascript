// Named IIFE (Immediately Invoked Function Expression).Beacuse it has a name "suvro"
(function suvro() {
    console.log("Run Immediately"); // This function runs immediately after being defined
})();

// Anonymous IIFE with a parameter.becuse it has not no name.
((name) => {
    console.log(`Run Immediately it ${name}`); // This function runs immediately with an argument
})("Subrata");
