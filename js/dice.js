var dice = {
	number: 2,
	sides: 6,
	roll: function() {
		var results = [],
		number = this.number,
		sides = this.sides;
		while (number > 0 ){
			results.push(Math.floor(Math.random() * sides + 1));
			number--;
		}
		return results;
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
	var results = dice.roll();

	$('.dice').remove();

	for (var i = 0; i < results.length; i++) {
		$('#wrap').append('<table class="dice" id="table' + i + '"><tbody><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table>');
		switch (results[i]) {
			case 1:
				$('#table' + i + ' tr:nth-child(2) td:nth-child(2)').append('<div class="dot"></div>');
				break;
			case 2:
				$('#table' + i + ' tr:nth-child(1) td:nth-child(1)').append('<div class="dot"></div>');
				$('#table' + i + ' tr:nth-child(3) td:nth-child(3)').append('<div class="dot"></div>');
				break;
			case 3:
				$('#table' + i + ' tr:nth-child(1) td:nth-child(1)').append('<div class="dot"></div>');
				$('#table' + i + ' tr:nth-child(2) td:nth-child(2)').append('<div class="dot"></div>');
				$('#table' + i + ' tr:nth-child(3) td:nth-child(3)').append('<div class="dot"></div>');
				break;
			case 4:
				$('#table' + i + ' tr:nth-child(1) td:nth-child(1)').append('<div class="dot"></div>');
				$('#table' + i + ' tr:nth-child(3) td:nth-child(3)').append('<div class="dot"></div>');
				$('#table' + i + ' tr:nth-child(1) td:nth-child(3)').append('<div class="dot"></div>');
				$('#table' + i + ' tr:nth-child(3) td:nth-child(1)').append('<div class="dot"></div>');
				break;
			case 5:
				$('#table' + i + ' tr:nth-child(1) td:nth-child(1)').append('<div class="dot"></div>');
				$('#table' + i + ' tr:nth-child(1) td:nth-child(3)').append('<div class="dot"></div>');
				$('#table' + i + ' tr:nth-child(3) td:nth-child(1)').append('<div class="dot"></div>');
				$('#table' + i + ' tr:nth-child(3) td:nth-child(3)').append('<div class="dot"></div>');
				$('#table' + i + ' tr:nth-child(2) td:nth-child(2)').append('<div class="dot"></div>');
				break;
			case 6:
				$('#table' + i + ' tr:nth-child(1) td:nth-child(1)').append('<div class="dot"></div>');
				$('#table' + i + ' tr:nth-child(1) td:nth-child(3)').append('<div class="dot"></div>');
				$('#table' + i + ' tr:nth-child(3) td:nth-child(1)').append('<div class="dot"></div>');
				$('#table' + i + ' tr:nth-child(3) td:nth-child(3)').append('<div class="dot"></div>');
				$('#table' + i + ' tr:nth-child(2) td:nth-child(1)').append('<div class="dot"></div>');
				$('#table' + i + ' tr:nth-child(2) td:nth-child(3)').append('<div class="dot"></div>');
				break;
			default:

		}
	}
}
