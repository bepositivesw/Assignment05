/*eslint-env browser*/

var employees = [];
var employee = [];
var counter;
var form;
var table;
var buttons;
var i;


var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};



function addEmployee() {
    "use strict";
    var required, msg, name, title, extension, name_error, title_error, extension_error, message, row, cell1, cell2, cell3, cell4;

    required = '<span>Required!</span>';
    msg = 'Please complete all required fields.';
    name = $('name').value;
    title = $('title').value;
    extension = $('extension').value;
    name_error = $('name_error');
    title_error = $('title_error');
    extension_error = $('extension_error');
    message = $('message').textContent;

    // validation for each of 3 text boxes
    // if not passing validation, then show error messages in red
    // if passing validation, then add it to employee array
    if (name === "") {
        name_error.innerHTML = required;
        name_error.style.color = 'red';
        message = msg;
    } else {
        employee.push(name);
    }

    if (title === "") {
        title_error.innerHTML = required;
        title_error.style.color = 'red';
        message = msg;
    } else {
        employee.push(title);
    }

    if (extension === "") {
        extension_error.innerHTML = required;
        extension_error.style.color = 'red';
        message = msg;
    } else {
        extension = parseInt(extension, 10);
        employee.push(extension);
    }

    // after passing all of validations
    $('message').innerHTML = message;
    if (message !== msg) {
        // submit the employee form        
        form.submit();
        // add new employee to employees array 
        employees.push(employee);
        window.console.log(employee);
        window.console.log(employees);

        // update the number of employees in header
        counter += 1;
        $('counter').textContent = counter;
        // add new employee to emplyees table         
        row = table.insertRow(counter - 1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);
        cell1.textContent = name;
        cell2.textContent = title;
        cell3.textContent = extension;
        cell4.innerHTML = "<button>Belete</button>";
    } else {
        // show error message in red         
        $('message').style.color = 'red';
    }
}




var deleteEmployee = function () {
    "use strict";

    function delRows(e) {
        e.currentTarget.closest('tr').innerHTML = '';
        counter -= 1;
        $('counter').textContent = counter;
    }

    // to make it work, must double-click on one of the orginal delete button, then remove the new added employee
    for (i = 0; i < employees.length; i += 1) {
        buttons[i].addEventListener('click', delRows);
    }
};




// start with 5 employees
function init() {
    "use strict";
    employees = [["Fred Franklin", "Accountant", 1122],
                 ["Sally Smith", "Quality Assurance", 3423],
                 ["Mark Martin", "VP Sales", 3346],
                 ["Bob Walson", "Marketing", 3232],
                 ["Jane Taylor", "Customer Service", 4411]];

    // display the number of employees
    counter = employees.length;
    $('counter').textContent = counter;

    form = $('employee_form');
    table = $('employees_table');
    //buttons = window.document.getElementsByTagName('button');
}



window.addEventListener("load", function () {
    "use strict";
    init();
    $("add").addEventListener("click", addEmployee);
    // delete an employee from employees table when click on a delete button
    buttons = window.document.getElementsByTagName('button');
    for (i = 0; i < employees.length; i += 1) {
        buttons[i].addEventListener("click", deleteEmployee);
    }

    $("name").focus();
});
