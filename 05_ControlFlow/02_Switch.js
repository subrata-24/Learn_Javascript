// Template of a switch statement
// switch (key) {
//     case value:
//         // code block
//         break;
//     default:
//         // default block (optional, runs if no case matches)
//         break;
// }

// Example 1: Switch with number value
// const month = 3;
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
           //break;// Missing break here means it will continue to the next case
//     case 4:
//         console.log("April"); // This will also execute because of fall-through no matter its key is match or not
//         break;
//     default:
//         console.log("This month is not exist");
//         break;
// }

// Correct version: Using string-based switch to avoid fall-through
const month = "March"; // Assign the month as a string

switch (month) {
    case "January":
        console.log("January");
        break; // Exit switch after matching this case

    case "February":
        console.log("February");
        break;

    case "March":
        console.log("March");
        break;

    case "April":
        console.log("April");
        break;

    // If no matching case is found, this block will run
    default:
        console.log("This month is not exist");
        break;
}
