var a = null;
var b = null;
var symbol = "";

//event listener for buttons
$('.buttons').on('click', function() {
    if ($(event.target).text() === "C") {
        clearScreen();
    } else if ($('#screen').text() === "Error") {
        return;
    } else if ($(event.target).text() === "=") {
        b = $("#screen").text();
        evaluate(a, b, symbol);
        displayResult();
    } else {
        appendScreen();
    }
});

//append screen and save inputs to variables
function appendScreen() {
    var input = $(event.target).text();
    if ($(event.target).hasClass('operator')) {
        a = $('#screen').text();
        $('#screen').text("");
        $('#screen').append(input);
        symbol = $(event.target).text();
    } else {
        if (a === null) {
            $('#screen').append(input);
        } else {
            $('#screen').append(input);
            b = $(event.target).text();
        }
    }
    return input;
}

//clears user screen and sets variables to zero
function clearScreen() {
    //set variables to null
    a = null;
    b = null;
    symbol = null;
    //clear screen
    $('#screen').text('');
    return;
}


//displays result and resets variables
function displayResult() {
    //display result
    $('#screen').text(result);
    //set variables to null
    a = null;
    b = null;
    symbol = null;
}

function evaluate(a, b, symbol) {
    var aInt = parseFloat(a);
    var bInt = parseFloat(b.substring(1, b.length));
    switch (symbol) {
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
            if (bInt === 0) {
                result = "Error";
            }
            break;
        default:
    }
    return result;
}
