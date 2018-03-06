var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];

var cardsInPlay = [];

var score = 0

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("score-box").innerHTML = ("Your Score: " + score);
});


var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	score = score + 1;
	document.getElementById("score-box").innerHTML = ("Your Score: " + score);
	console.log(score);
	} else {
	alert("Sorry, try again.");
	}
	}
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	//console.log(cards[cardId].suit);
	//console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
}

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

window.onload = createBoard();

var reset = function () {
	document.getElementById('game-board').innerHTML = "";
	var button = document.getElementById("button");
	button.addEventListener("click", createBoard());
	cardsInPlay = [];
}



