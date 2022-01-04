/* WINDOW - represents the browser's window.
    - all global JavaScript objects, functions and variables automatically      become part of the WINDOW object.

    calling window.
        - accesses everything in the in that particular window.

    links - https://www.w3schools.com/js/js_window.asp
    https://developer.mozilla.org/en-US/docs/Web/API/Window
*/


/* ADD EVENT LISTENER - is a method that attaches a event handler to a HTML element.

    syntax
        - HTML element.addEventListener("event", function(){
            useCapture
        });

            - 1st parameter is the type of event
                - click
                - onClick
                - many many more
            
            2nd parameter is the function we want to call when the event occurs

            3rd- is OPTIONAL the parameter is a boolean value deciding to use event bubbling or event capturing.
            
                Bubbling - inner most element is handled first
                Capturing - the outer most element is handled first

*/
// PART 1 ----------------------------------------------------------------------

/* adds an event listener to the window and logs the event.
    event - keydown - when a key is pressed 
        - console log the keycode.

*/

// window.addEventListener("keydown", function(event){
//     console.log(event.keyCode);
// });

// PART 1 END ------------------------------------------------------------------


// PART 2 ----------------------------------------------------------------------

/* assigns a variable to an element that has a data-key attribute
- console logs the variable.

the [] around the data-key = "${event.keyCode}" is how you use attribute selector.
        - select the attribute of the audio element
*/

// window.addEventListener("keydown", function(event){
//     const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
//     console.log(audio);
// });

// PART 2 END ------------------------------------------------------------------


// PART 3 ----------------------------------------------------------------------

/* checks if there is no audio element
        - then return

    if there is an audio element
        - play audio.

    sets audio time to 0

    assigns a variable to an element that has a data-key attribute
        - console logs the variable.

*/

// window.addEventListener("keydown", function(event) {
//     const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key = "${event.keyCode}"]`);
//     console.log(key);
//     if (!audio) return;
//     audio.currentTime = 0;
//     audio.play();
// });

// PART 3 END ------------------------------------------------------------------


// PART 4 ----------------------------------------------------------------------

window.addEventListener("keydown", function(event) {
    const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${event.keyCode}"]`);
    console.log(key);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();


    key.classList.add("playing"); //adds css classlist 
});

// PART 4 END ------------------------------------------------------------------
