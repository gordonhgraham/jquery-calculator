var a = null;
var b = null;
var operand = "";

$('.buttons').on('click', function() {
    if ($(event.target).text() === "C") {
        clearScreen();
    } else if ($('#screen').text() === "Error") {
        return;
    } else if ($(event.target).text() === "=") {
        evaluate(a, b, operand);
        displayResult();
    } else {
        appendScreen();
    }
});

function appendScreen() {
    var input = $(event.target).text();
    $('#screen').append(input);
    if ($(event.target).hasClass('operator')) {
        operand = $(event.target).text();
    } else {
        if (a === null) {
            a = $(event.target).text();
        } else {
            b = $(event.target).text();
        }
    }
    return input;
}

function clearScreen() {
    //set variables to null
    a = null;
    b = null;
    operand = null;
    //clear screen
    $('#screen').text('');
    return;
}

function displayResult() {
    //display result
    $('#screen').text(result);
    //set variables to null
    a = null;
    b = null;
    operand = null;
}

function evaluate(a, b, operand) {
    var aInt = parseFloat(a);
    var bInt = parseFloat(b);
    switch (operand) {
        case "+":
            result = aInt + bInt;
            break;
        case "-":
            result = aInt - bInt;
            break;
        case "x":
            result = aInt * bInt;
            break;
        case "÷":
            result = aInt / bInt;
            break;
        default:

    }
    return result;
}
