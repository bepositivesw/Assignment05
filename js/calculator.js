/*eslint-env browser*/

// add a div in HTML to cover all buttons
var buttons, result, equal;

// helper function that gets an element from the DOM 
var $ = function (id) {
    'use strict';
    return window.document.getElementById(id);
};



function calculate() {
    'use strict';
    result.value = eval(result.value);
    return result.value;
}



function enter(val) {
    'use strict';
    buttons.addEventListener('click', function (e) {
        // click each of 15 buttons to save its value to text box
        if (e.target.value !== "=") {
            val = e.target.value;
            result.value += val;

        } else if (e.target.value === "=") {
            // must double-click "=" to start claculating
            // then click once "=" to continue calculating
            // I don't know how to fix such problem.
            equal.addEventListener('click', calculate);
        } else {
            result.value = '';
        }
    });
}



function init() {
    'use strict';
    buttons = $('buttons');
    result = $('result');
    equal = $('equal');
    enter();
}



// adding an event listener to the window object 
window.addEventListener("load", init);
