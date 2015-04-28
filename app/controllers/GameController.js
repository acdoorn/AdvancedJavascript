// GameController.js
module.exports = function($scope) {
	this.games = [
		{
		 layout: "string", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
		 createdOn: "date", // date + time
		 startedOn: "date", // date + time
		 endedOn: "date", // date + time
		 createdBy: {
		   id: "string", // Avans username
		   name: "string", // fullname
		   email: "string", // avans e-mail
		   nickname: "string" // maybe filled later?
		 },
		 minPlayers: "number", // 35 <= x >= 1, Required number of players to start
		 maxPlayers: "number",  // 35 <= x >= 1
		 players: [{
		   id: "string", // Avans username
		   name: "string", // fullname
		   email: "string", // avans e-mail
		   nickname: "string" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 }],
		 state: "string" // -> 'open'|'playing'|'finished'
		}
	];

	this.deactivateGame = function(game) {
		game.active = false;
	}
}