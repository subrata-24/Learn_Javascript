// ------------------------------
    // Basic Event Handling - onclick
    // ------------------------------
    // When the owl image is clicked, an alert will pop up.
    // This is a simple way to assign an event handler directly.
    document.getElementById('owl').onclick = function(){
        alert('Owl clicked!');
    }

    // ------------------------------
    // addEventListener Method
    // ------------------------------
    // It allows attaching multiple event handlers to a single element.
    // Syntax: element.addEventListener(event, handler, useCapture)

    // Add an event listener to the entire <ul> container with id 'images'
    // This demonstrates event bubbling (default behavior where events propagate from child to parent).
    document.getElementById('images').addEventListener('click', function(e){
        console.log("Clicked inside the image!");
    }, false);  // false => use bubbling phase

    // Another listener for the specific owl image.
    // This one calls stopPropagation() to prevent the event from bubbling up to the parent.
    document.getElementById('owl').addEventListener('click', function(e){
        console.log("Clicked the Owl!");
        e.stopPropagation();  // Prevents the parent (ul#images) from receiving the click
    }, false);

    // ------------------------------
    // Event Capturing Phase Example
    // ------------------------------
    // By setting the third parameter to `true`, these listeners trigger during the capturing phase
    // (from top -> down the DOM tree), rather than the default bubbling phase (from bottom -> up)

    // Uncomment these to test capturing behavior instead of bubbling

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("Captured click on image container (capturing phase)");
    // }, true);  // true = use capturing

    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("Captured click on Owl image (capturing phase)");
    // }, true);  // true = use capturing



    // ------------------------------
    // Link Handling
    // ------------------------------
    // When the Google link is clicked:
    // - stopPropagation() prevents parent event
    // - preventDefault() stops the link from navigating to Google
    document.getElementById('google').addEventListener('click', function(e){
        console.log("Clicked the Google!");
        e.preventDefault();     // Stops default link behavior
        e.stopPropagation();    // Stops bubbling to parent
    });

    // ------------------------------
    // Dynamic Image Removal
    // ------------------------------
    // This listener is also added to the <ul> container.
    // When any image inside it is clicked, we check if the target is an IMG,
    // then we remove its parent <li> from the DOM.

    document.querySelector('#images').addEventListener('click', (e) => {
        console.log(e.target.tagName);  // Logs the clicked element’s tag (e.g., IMG)

        if(e.target.tagName === 'IMG'){
            let removeIt = e.target.parentNode; // Target's parent <li>
            removeIt.remove();  // Removes the <li> from the DOM
        }

        // Alternative method (older):
        // removeIt.parentNode.removeChild(removeIt);
    });

    // --------------------------------------
    // Event Object Notes:
    // --------------------------------------
    // e.type => type of the event (e.g., 'click')
    // e.timestamp => when the event occurred
    // e.defaultPrevented => true if preventDefault() was called
    // e.target => actual element that triggered the event
    // e.currentTarget => element the event listener is attached to
    // e.clientX, e.clientY => mouse position relative to the viewport
    // e.screenX, e.screenY => mouse position relative to the screen
    // e.altKey, e.ctrlKey, e.shiftKey => true if those keys were held during the event
    // e.keyCode => code of the key pressed (for keyboard events)
