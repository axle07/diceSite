var dice = {
    number: 2,
    sides: 6,
    roll: function() {
        var result = 0,
            number = this.number,
            sides = this.sides;
        while (number > 0 ){
            result += Math.floor(Math.random() * sides + 1);
            number--;
        }
        return result;
    }
}

/* TEST RESULTS */
var arr = [],
    numberOfDice = 2;

function numberOfRolls(num) {
    while (num > 0) {
        arr.push(dice.roll(numberOfDice));
        num--;
    }
    return arr;
}

function countOf(num) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == num) count++;
    }
    return count;
}

/* UI */
function showRoll() {
    //var numDice = document.getElementById("number").value;
    document.getElementById("results").innerHTML = dice.roll();
}
