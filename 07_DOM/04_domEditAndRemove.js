<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Language List Manipulation</title>
    <style>
        body {
            background-color: #212121;
            color: aliceblue;
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
    <!-- Unordered list that will hold programming languages -->
    <ul class="Language">
        <li>JavaScript</li> <!-- Initial item -->
    </ul>
</body>

<script>
    // --- Function to add language using innerHTML (less secure and less optimal) ---
    function addLanguage(langName) {
        const lan = document.createElement('li');       // Create a new <li> element
        lan.innerHTML = `${langName}`;                  // Set content using innerHTML
        document.querySelector('.Language').appendChild(lan);  // Append it to the list
    }

    // Add languages using the less optimal method
    addLanguage("c++");
    addLanguage("typescript");

    // --- Function to add language using createTextNode (more secure and preferred) ---
    function addLanOpti(langName) {
        const lan = document.createElement('li');             // Create a new <li> element
        const addText = document.createTextNode(`${langName}`);  // Create a text node
        lan.appendChild(addText);                             // Append text node to <li>
        document.querySelector('.Language').appendChild(lan); // Append <li> to the list
    }

    // Add languages using the optimal method
    addLanOpti('golang');
    addLanOpti('python');

    // --- Replace 2nd list item (currently "c++") with "java" ---
    const targetLan = document.querySelector("li:nth-child(2)");
    const newLi = document.createElement('li');
    newLi.textContent = "java";         // Set text to "java"
    targetLan.replaceWith(newLi);       // Replace the old <li> with the new one

    // --- Replace 1st list item (currently "JavaScript") with "Ruby" using outerHTML ---
    const firstLan = document.querySelector("li:first-child");
    firstLan.outerHTML = '<li>Ruby</li>';  // Completely replace the first <li> element

    // --- Remove the last item in the list (currently "python") ---
    const lastEle = document.querySelector("li:last-child");
    lastEle.remove();  // Removes the last <li> from the list

    // --- Add: Insert a language at the beginning of the list ---
    const langList = document.querySelector(".Language");
    const newFirst = document.createElement("li");
    newFirst.textContent = "Kotlin";
    langList.insertBefore(newFirst, langList.firstChild);  // Insert as the first child

    // --- Add: Replace all list items with uppercase versions ---
    const allItems = document.querySelectorAll(".Language li");
    allItems.forEach(item => {
        item.textContent = item.textContent.toUpperCase(); // Make all text uppercase
    });

    // --- Add: Count and log the number of languages ---
    const totalItems = document.querySelectorAll(".Language li").length;
    console.log(`Total Languages in list: ${totalItems}`);
</script>
</html>
