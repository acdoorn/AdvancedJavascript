// GameController.js
module.exports = function($scope) {
	this.games = [
		{
		 layout: "snake", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
		 createdOn: "26-4-2015 21:15:23", // date + time
		 startedOn: "27-4-2015 18:55:41", // date + time
		 endedOn: "", // date + time
		 createdBy: {
		   id: "rdaelen", // Avans username
		   name: "Ruud van Daelen", // fullname
		   email: "rdaelen@avans.nl", // avans e-mail
		   nickname: "R v D 4" // maybe filled later?
		 },
		 minPlayers: "4", // 35 <= x >= 1, Required number of players to start
		 maxPlayers: "8",  // 35 <= x >= 1
		 players: [{
		   id: "rdaelen", // Avans username
		   name: "Ruud van Daelen", // fullname
		   email: "rdaelen@avans.nl", // avans e-mail
		   nickname: "R v D 4" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 },
		 {
		   id: "acdoorn", // Avans username
		   name: "Alexander van Doorn", // fullname
		   email: "acdoorn@avans.nl", // avans e-mail
		   nickname: "Acdoorn" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 },
		 {
		   id: "smdhaas", // Avans username
		   name: "Sander de Haas", // fullname
		   email: "sm.dehaas@avans.nl", // avans e-mail
		   nickname: "SanderDeHaas" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 },
		 {
		   id: "jphes", // Avans username
		   name: "Jelle van Es", // fullname
		   email: "jphes@avans.nl", // avans e-mail
		   nickname: "JelleVanEs" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 } 
		 ],
		 state: "playing" // -> 'open'|'playing'|'finished'
		},
		{
		 layout: "ram", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
		 createdOn: "25-3-2015 21:15:23", // date + time
		 startedOn: "30-3-2015 19:41:55", // date + time
		 endedOn: "15-4-2015 14:33:02", // date + time
		 createdBy: {
		   id: "acdoorn", // Avans username
		   name: "Alexander van Doorn", // fullname
		   email: "acdoorn@avans.nl", // avans e-mail
		   nickname: "Acdoorn" // maybe filled later?
		 },
		 minPlayers: "2", // 35 <= x >= 1, Required number of players to start
		 maxPlayers: "6",  // 35 <= x >= 1
		 players: [{
		   id: "acdoorn", // Avans username
		   name: "Alexander van Doorn", // fullname
		   email: "acdoorn@avans.nl", // avans e-mail
		   nickname: "Acdoorn" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 },
		 {
		   id: "rdaelen", // Avans username
		   name: "Ruud van Daelen", // fullname
		   email: "rdaelen@avans.nl", // avans e-mail
		   nickname: "R v D 4" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 },
		 {
		   id: "smdhaas", // Avans username
		   name: "Sander de Haas", // fullname
		   email: "sm.dehaas@avans.nl", // avans e-mail
		   nickname: "SanderDeHaas" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 },
		 {
		   id: "jphes", // Avans username
		   name: "Jelle van Es", // fullname
		   email: "jphes@avans.nl", // avans e-mail
		   nickname: "JelleVanEs" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 } 
		 ],
		 state: "finished" // -> 'open'|'playing'|'finished'
		},
		{
		 layout: "dragon", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
		 createdOn: "25-4-2015 21:15:23", // date + time
		 startedOn: "", // date + time
		 endedOn: "", // date + time
		 createdBy: {
		   id: "acdoorn", // Avans username
		   name: "Alexander van Doorn", // fullname
		   email: "acdoorn@avans.nl", // avans e-mail
		   nickname: "Acdoorn" // maybe filled later?
		 },
		 minPlayers: "6", // 35 <= x >= 1, Required number of players to start
		 maxPlayers: "16",  // 35 <= x >= 1
		 players: [{
		   id: "acdoorn", // Avans username
		   name: "Alexander van Doorn", // fullname
		   email: "acdoorn@avans.nl", // avans e-mail
		   nickname: "Acdoorn" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 },
		 {
		   id: "rdaelen", // Avans username
		   name: "Ruud van Daelen", // fullname
		   email: "rdaelen@avans.nl", // avans e-mail
		   nickname: "R v D 4" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 },
		 {
		   id: "smdhaas", // Avans username
		   name: "Sander de Haas", // fullname
		   email: "sm.dehaas@avans.nl", // avans e-mail
		   nickname: "SanderDeHaas" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 },
		 {
		   id: "jphes", // Avans username
		   name: "Jelle van Es", // fullname
		   email: "jphes@avans.nl", // avans e-mail
		   nickname: "JelleVanEs" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 },
		 {
		   id: "pjglaros", // Avans username
		   name: "Paul Laros", // fullname
		   email: "pjg.laros@avans.nl", // avans e-mail
		   nickname: "PaulLaros" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 },
		 {
		   id: "rgjvriel", // Avans username
		   name: "Rick van Riel", // fullname
		   email: "rgj.vanriel@avans.nl", // avans e-mail
		   nickname: "RickVanRiel" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 } 
		 ],
		 state: "open" // -> 'open'|'playing'|'finished'
		},
		{
		 layout: "monkey", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
		 createdOn: "25-4-2015 21:15:23", // date + time
		 startedOn: "", // date + time
		 endedOn: "", // date + time
		 createdBy: {
		   id: "rgjvriel", // Avans username
		   name: "Rick van Riel", // fullname
		   email: "rgj.vanriel@avans.nl", // avans e-mail
		   nickname: "RickVanRiel" // maybe filled later?
		 },
		 minPlayers: "4", // 35 <= x >= 1, Required number of players to start
		 maxPlayers: "16",  // 35 <= x >= 1
		 players: [{
		   id: "rgjvriel", // Avans username
		   name: "Rick van Riel", // fullname
		   email: "rgj.vanriel@avans.nl", // avans e-mail
		   nickname: "RickVanRiel" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 },
		 {
		   id: "acdoorn", // Avans username
		   name: "Alexander van Doorn", // fullname
		   email: "acdoorn@avans.nl", // avans e-mail
		   nickname: "Acdoorn" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 },
		 {
		   id: "rdaelen", // Avans username
		   name: "Ruud van Daelen", // fullname
		   email: "rdaelen@avans.nl", // avans e-mail
		   nickname: "R v D 4" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 },
		 {
		   id: "smdhaas", // Avans username
		   name: "Sander de Haas", // fullname
		   email: "sm.dehaas@avans.nl", // avans e-mail
		   nickname: "SanderDeHaas" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 },
		 {
		   id: "jphes", // Avans username
		   name: "Jelle van Es", // fullname
		   email: "jphes@avans.nl", // avans e-mail
		   nickname: "JelleVanEs" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 },
		 {
		   id: "pjglaros", // Avans username
		   name: "Paul Laros", // fullname
		   email: "pjg.laros@avans.nl", // avans e-mail
		   nickname: "PaulLaros" // maybe filled later?
		   // Properties like score and isWinner maybe filled later
		 }		  
		 ],
		 state: "open" // -> 'open'|'playing'|'finished'
		}
	];

	this.deactivateGame = function(game) {
		game.active = false;
	}
}