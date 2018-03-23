/*eslint-env browser*/

var $ = function (id) {
    'use strict';
    return window.document.getElementById(id);
};


//STEP 1
function displayMessage() {
    'use strict';
    window.alert('I have been clicked');
}


//STEP 2
window.addEventListener('load', function () {
    'use strict';
    var btn2 = $("btn2");
    btn2.onclick = function displayMessage() {
        window.alert('I have been clicked');
    };
});


//STEP 3
window.addEventListener('load', function () {
    'use strict';
    var btn3 = $("btn3");
    btn3.addEventListener('click', function () {
        window.alert('I have been clicked');
    });
});


//STEP 4
window.addEventListener('load', function () {
    'use strict';
    var btn3 = $("btn3");
    btn3.addEventListener('click', displayMessage);
});


//STEP 5
// add script within the <head> tag as required


//STEP 6
window.addEventListener("load", function () {
    'use strict';
    var redirect = $('redirect');
    redirect.addEventListener('click', function (e) {
        window.alert('You clicked on the link, but the browser was prevented from redirecting to the Google site.');
        // redirect -> reload the same page without refreshing
        e.preventDefault();
    });
});


//STEP 7
window.addEventListener("load", function () {
    'use strict';
    var btnGo = $('btnGo'),
        inputText = $('inputText');
    btnGo.addEventListener('click', function () {
        window.alert(inputText.value);
        btnGo.disabled = true;
    });
});


//STEP 8
// add script within index.html & newpage.html


//STEP 9
window.addEventListener("load", function () {
    'use strict';
    var id,
        startBtn = $('startBtn'),
        stopBtn = $('stopBtn');

    function foo() {
        window.console.log('Learning JavaScript is fun!');
    }

    startBtn.addEventListener('click', function () {
        id = window.setInterval(foo, 2000);
        window.console.log(id);
    });

    stopBtn.addEventListener('click', function () {
        window.clearInterval(id);
    });
});



//STEP 10
window.addEventListener("load", function () {
    'use strict';
    var i, option,
        selectBtn = $('selectBtn'),
        selectList = $('selectList'),
        items = ['fish', 'vegetable', 'bread', 'steak'];

    // add options into adrop down list 
    for (i = 0; i < items.length; i += 1) {
        option = window.document.createElement("option");
        option.textContent = items[i];
        option.value = items[i];
        selectList.add(option, 1);
    }

    selectBtn.addEventListener('click', function () {
        // display the item selected 
        window.alert(selectList.value);
    });
});
