describe('GameController', function() {

  // Dummy respond data
  var game = {"_id":"55dc7144311e93110047086a","createdBy":{"_id":"ac.vandoorn@student.avans.nl","name":"Alexander van Doorn","__v":0},"createdOn":"2015-08-25T13:44:36.577Z","gameTemplate":{"_id":"Dragon","__v":0,"id":"Dragon"},"__v":0,"startedOn":"2015-08-25T13:44:39.813Z","players":[{"_id":"ac.vandoorn@student.avans.nl","name":"Alexander van Doorn","__v":0,"numberOfMatches":1}],"maxPlayers":1,"minPlayers":1,"state":"playing","id":"55dc7144311e93110047086a"};
  var tilesMatched = [{"xPos":29,"yPos":7,"zPos":2,"tile":{"_id":127,"suit":"Dragon","name":"Red","matchesWholeSuit":false,"__v":0,"id":"127"},"_id":"55dc7144311e9311004708e9","match":{"foundBy":"ac.vandoorn@student.avans.nl","otherTileId":"55dc7144311e9311004708e5","foundOn":"2015-08-25T13:47:46.937Z"}},{"xPos":29,"yPos":5,"zPos":2,"tile":{"_id":126,"suit":"Dragon","name":"Red","matchesWholeSuit":false,"__v":0,"id":"126"},"_id":"55dc7144311e9311004708e5","match":{"foundBy":"ac.vandoorn@student.avans.nl","otherTileId":"55dc7144311e9311004708e9","foundOn":"2015-08-25T13:47:46.937Z"}}];
  var gameTemplate = {"_id":"Dragon","__v":0,"tiles":[{"xPos":7,"yPos":1,"zPos":0,"_id":"5541019dcd22e511004ab14d"},{"xPos":9,"yPos":1,"zPos":0,"_id":"5541019dcd22e511004ab14e"},{"xPos":11,"yPos":2,"zPos":0,"_id":"5541019dcd22e511004ab14f"},{"xPos":13,"yPos":2,"zPos":0,"_id":"5541019dcd22e511004ab150"},{"xPos":22,"yPos":2,"zPos":0,"_id":"5541019dcd22e511004ab151"},{"xPos":5,"yPos":3,"zPos":0,"_id":"5541019dcd22e511004ab152"},{"xPos":7,"yPos":3,"zPos":0,"_id":"5541019dcd22e511004ab153"},{"xPos":9,"yPos":3,"zPos":0,"_id":"5541019dcd22e511004ab154"},{"xPos":27,"yPos":3,"zPos":0,"_id":"5541019dcd22e511004ab155"},{"xPos":2,"yPos":4,"zPos":0,"_id":"5541019dcd22e511004ab156"},{"xPos":13,"yPos":4,"zPos":0,"_id":"5541019dcd22e511004ab157"},{"xPos":19,"yPos":4,"zPos":0,"_id":"5541019dcd22e511004ab158"},{"xPos":21,"yPos":4,"zPos":0,"_id":"5541019dcd22e511004ab159"},{"xPos":25,"yPos":4,"zPos":0,"_id":"5541019dcd22e511004ab15a"},{"xPos":29,"yPos":4,"zPos":0,"_id":"5541019dcd22e511004ab15b"},{"xPos":1,"yPos":6,"zPos":0,"_id":"5541019dcd22e511004ab15c"},{"xPos":3,"yPos":6,"zPos":0,"_id":"5541019dcd22e511004ab15d"},{"xPos":11,"yPos":6,"zPos":0,"_id":"5541019dcd22e511004ab15e"},{"xPos":13,"yPos":6,"zPos":0,"_id":"5541019dcd22e511004ab15f"},{"xPos":18,"yPos":6,"zPos":0,"_id":"5541019dcd22e511004ab160"},{"xPos":20,"yPos":6,"zPos":0,"_id":"5541019dcd22e511004ab161"},{"xPos":25,"yPos":6,"zPos":0,"_id":"5541019dcd22e511004ab162"},{"xPos":29,"yPos":6,"zPos":0,"_id":"5541019dcd22e511004ab163"},{"xPos":5,"yPos":7,"zPos":0,"_id":"5541019dcd22e511004ab164"},{"xPos":23,"yPos":7,"zPos":0,"_id":"5541019dcd22e511004ab165"},{"xPos":2,"yPos":8,"zPos":0,"_id":"5541019dcd22e511004ab166"},{"xPos":7,"yPos":8,"zPos":0,"_id":"5541019dcd22e511004ab167"},{"xPos":10,"yPos":8,"zPos":0,"_id":"5541019dcd22e511004ab168"},{"xPos":12,"yPos":8,"zPos":0,"_id":"5541019dcd22e511004ab169"},{"xPos":17,"yPos":8,"zPos":0,"_id":"5541019dcd22e511004ab16a"},{"xPos":19,"yPos":8,"zPos":0,"_id":"5541019dcd22e511004ab16b"},{"xPos":21,"yPos":8,"zPos":0,"_id":"5541019dcd22e511004ab16c"},{"xPos":29,"yPos":8,"zPos":0,"_id":"5541019dcd22e511004ab16d"},{"xPos":15,"yPos":9,"zPos":0,"_id":"5541019dcd22e511004ab16e"},{"xPos":7,"yPos":10,"zPos":0,"_id":"5541019dcd22e511004ab16f"},{"xPos":9,"yPos":10,"zPos":0,"_id":"5541019dcd22e511004ab170"},{"xPos":11,"yPos":10,"zPos":0,"_id":"5541019dcd22e511004ab171"},{"xPos":13,"yPos":10,"zPos":0,"_id":"5541019dcd22e511004ab172"},{"xPos":17,"yPos":10,"zPos":0,"_id":"5541019dcd22e511004ab173"},{"xPos":19,"yPos":10,"zPos":0,"_id":"5541019dcd22e511004ab174"},{"xPos":21,"yPos":10,"zPos":0,"_id":"5541019dcd22e511004ab175"},{"xPos":28,"yPos":10,"zPos":0,"_id":"5541019dcd22e511004ab176"},{"xPos":4,"yPos":11,"zPos":0,"_id":"5541019dcd22e511004ab177"},{"xPos":15,"yPos":11,"zPos":0,"_id":"5541019dcd22e511004ab178"},{"xPos":23,"yPos":11,"zPos":0,"_id":"5541019dcd22e511004ab179"},{"xPos":7,"yPos":12,"zPos":0,"_id":"5541019dcd22e511004ab17a"},{"xPos":9,"yPos":12,"zPos":0,"_id":"5541019dcd22e511004ab17b"},{"xPos":11,"yPos":12,"zPos":0,"_id":"5541019dcd22e511004ab17c"},{"xPos":13,"yPos":12,"zPos":0,"_id":"5541019dcd22e511004ab17d"},{"xPos":19,"yPos":12,"zPos":0,"_id":"5541019dcd22e511004ab17e"},{"xPos":3,"yPos":13,"zPos":0,"_id":"5541019dcd22e511004ab17f"},{"xPos":5,"yPos":13,"zPos":0,"_id":"5541019dcd22e511004ab180"},{"xPos":23,"yPos":13,"zPos":0,"_id":"5541019dcd22e511004ab181"},{"xPos":25,"yPos":13,"zPos":0,"_id":"5541019dcd22e511004ab182"},{"xPos":19,"yPos":14,"zPos":0,"_id":"5541019dcd22e511004ab183"},{"xPos":4,"yPos":15,"zPos":0,"_id":"5541019dcd22e511004ab184"},{"xPos":15,"yPos":15,"zPos":0,"_id":"5541019dcd22e511004ab185"},{"xPos":17,"yPos":15,"zPos":0,"_id":"5541019dcd22e511004ab186"},{"xPos":24,"yPos":15,"zPos":0,"_id":"5541019dcd22e511004ab187"},{"xPos":26,"yPos":15,"zPos":0,"_id":"5541019dcd22e511004ab188"},{"xPos":7,"yPos":1,"zPos":1,"_id":"5541019dcd22e511004ab189"},{"xPos":9,"yPos":1,"zPos":1,"_id":"5541019dcd22e511004ab18a"},{"xPos":11,"yPos":2,"zPos":1,"_id":"5541019dcd22e511004ab18b"},{"xPos":13,"yPos":2,"zPos":1,"_id":"5541019dcd22e511004ab18c"},{"xPos":5,"yPos":3,"zPos":1,"_id":"5541019dcd22e511004ab18d"},{"xPos":7,"yPos":3,"zPos":1,"_id":"5541019dcd22e511004ab18e"},{"xPos":9,"yPos":3,"zPos":1,"_id":"5541019dcd22e511004ab18f"},{"xPos":27,"yPos":3,"zPos":1,"_id":"5541019dcd22e511004ab190"},{"xPos":2,"yPos":4,"zPos":1,"_id":"5541019dcd22e511004ab191"},{"xPos":13,"yPos":4,"zPos":1,"_id":"5541019dcd22e511004ab192"},{"xPos":20,"yPos":4,"zPos":1,"_id":"5541019dcd22e511004ab193"},{"xPos":25,"yPos":4,"zPos":1,"_id":"5541019dcd22e511004ab194"},{"xPos":29,"yPos":4,"zPos":1,"_id":"5541019dcd22e511004ab195"},{"xPos":1,"yPos":6,"zPos":1,"_id":"5541019dcd22e511004ab196"},{"xPos":3,"yPos":6,"zPos":1,"_id":"5541019dcd22e511004ab197"},{"xPos":11,"yPos":6,"zPos":1,"_id":"5541019dcd22e511004ab198"},{"xPos":13,"yPos":6,"zPos":1,"_id":"5541019dcd22e511004ab199"},{"xPos":18,"yPos":6,"zPos":1,"_id":"5541019dcd22e511004ab19a"},{"xPos":20,"yPos":6,"zPos":1,"_id":"5541019dcd22e511004ab19b"},{"xPos":25,"yPos":6,"zPos":1,"_id":"5541019dcd22e511004ab19c"},{"xPos":29,"yPos":6,"zPos":1,"_id":"5541019dcd22e511004ab19d"},{"xPos":23,"yPos":7,"zPos":1,"_id":"5541019dcd22e511004ab19e"},{"xPos":2,"yPos":8,"zPos":1,"_id":"5541019dcd22e511004ab19f"},{"xPos":7,"yPos":8,"zPos":1,"_id":"5541019dcd22e511004ab1a0"},{"xPos":10,"yPos":8,"zPos":1,"_id":"5541019dcd22e511004ab1a1"},{"xPos":12,"yPos":8,"zPos":1,"_id":"5541019dcd22e511004ab1a2"},{"xPos":17,"yPos":8,"zPos":1,"_id":"5541019dcd22e511004ab1a3"},{"xPos":19,"yPos":8,"zPos":1,"_id":"5541019dcd22e511004ab1a4"},{"xPos":21,"yPos":8,"zPos":1,"_id":"5541019dcd22e511004ab1a5"},{"xPos":29,"yPos":8,"zPos":1,"_id":"5541019dcd22e511004ab1a6"},{"xPos":15,"yPos":9,"zPos":1,"_id":"5541019dcd22e511004ab1a7"},{"xPos":7,"yPos":10,"zPos":1,"_id":"5541019dcd22e511004ab1a8"},{"xPos":9,"yPos":10,"zPos":1,"_id":"5541019dcd22e511004ab1a9"},{"xPos":11,"yPos":10,"zPos":1,"_id":"5541019dcd22e511004ab1aa"},{"xPos":13,"yPos":10,"zPos":1,"_id":"5541019dcd22e511004ab1ab"},{"xPos":17,"yPos":10,"zPos":1,"_id":"5541019dcd22e511004ab1ac"},{"xPos":19,"yPos":10,"zPos":1,"_id":"5541019dcd22e511004ab1ad"},{"xPos":21,"yPos":10,"zPos":1,"_id":"5541019dcd22e511004ab1ae"},{"xPos":28,"yPos":10,"zPos":1,"_id":"5541019dcd22e511004ab1af"},{"xPos":4,"yPos":11,"zPos":1,"_id":"5541019dcd22e511004ab1b0"},{"xPos":15,"yPos":11,"zPos":1,"_id":"5541019dcd22e511004ab1b1"},{"xPos":23,"yPos":11,"zPos":1,"_id":"5541019dcd22e511004ab1b2"},{"xPos":9,"yPos":12,"zPos":1,"_id":"5541019dcd22e511004ab1b3"},{"xPos":11,"yPos":12,"zPos":1,"_id":"5541019dcd22e511004ab1b4"},{"xPos":13,"yPos":12,"zPos":1,"_id":"5541019dcd22e511004ab1b5"},{"xPos":19,"yPos":12,"zPos":1,"_id":"5541019dcd22e511004ab1b6"},{"xPos":3,"yPos":13,"zPos":1,"_id":"5541019dcd22e511004ab1b7"},{"xPos":5,"yPos":13,"zPos":1,"_id":"5541019dcd22e511004ab1b8"},{"xPos":23,"yPos":13,"zPos":1,"_id":"5541019dcd22e511004ab1b9"},{"xPos":25,"yPos":13,"zPos":1,"_id":"5541019dcd22e511004ab1ba"},{"xPos":19,"yPos":14,"zPos":1,"_id":"5541019dcd22e511004ab1bb"},{"xPos":4,"yPos":15,"zPos":1,"_id":"5541019dcd22e511004ab1bc"},{"xPos":16,"yPos":15,"zPos":1,"_id":"5541019dcd22e511004ab1bd"},{"xPos":25,"yPos":15,"zPos":1,"_id":"5541019dcd22e511004ab1be"},{"xPos":8,"yPos":1,"zPos":2,"_id":"5541019dcd22e511004ab1bf"},{"xPos":10,"yPos":2,"zPos":2,"_id":"5541019dcd22e511004ab1c0"},{"xPos":12,"yPos":2,"zPos":2,"_id":"5541019dcd22e511004ab1c1"},{"xPos":6,"yPos":3,"zPos":2,"_id":"5541019dcd22e511004ab1c2"},{"xPos":8,"yPos":3,"zPos":2,"_id":"5541019dcd22e511004ab1c3"},{"xPos":13,"yPos":4,"zPos":2,"_id":"5541019dcd22e511004ab1c4"},{"xPos":2,"yPos":5,"zPos":2,"_id":"5541019dcd22e511004ab1c5"},{"xPos":25,"yPos":5,"zPos":2,"_id":"5541019dcd22e511004ab1c6"},{"xPos":29,"yPos":5,"zPos":2,"_id":"5541019dcd22e511004ab1c7"},{"xPos":12,"yPos":6,"zPos":2,"_id":"5541019dcd22e511004ab1c8"},{"xPos":19,"yPos":6,"zPos":2,"_id":"5541019dcd22e511004ab1c9"},{"xPos":2,"yPos":7,"zPos":2,"_id":"5541019dcd22e511004ab1ca"},{"xPos":29,"yPos":7,"zPos":2,"_id":"5541019dcd22e511004ab1cb"},{"xPos":11,"yPos":8,"zPos":2,"_id":"5541019dcd22e511004ab1cc"},{"xPos":18,"yPos":8,"zPos":2,"_id":"5541019dcd22e511004ab1cd"},{"xPos":20,"yPos":8,"zPos":2,"_id":"5541019dcd22e511004ab1ce"},{"xPos":10,"yPos":10,"zPos":2,"_id":"5541019dcd22e511004ab1cf"},{"xPos":12,"yPos":10,"zPos":2,"_id":"5541019dcd22e511004ab1d0"},{"xPos":15,"yPos":10,"zPos":2,"_id":"5541019dcd22e511004ab1d1"},{"xPos":18,"yPos":10,"zPos":2,"_id":"5541019dcd22e511004ab1d2"},{"xPos":20,"yPos":10,"zPos":2,"_id":"5541019dcd22e511004ab1d3"},{"xPos":4,"yPos":12,"zPos":2,"_id":"5541019dcd22e511004ab1d4"},{"xPos":10,"yPos":12,"zPos":2,"_id":"5541019dcd22e511004ab1d5"},{"xPos":12,"yPos":12,"zPos":2,"_id":"5541019dcd22e511004ab1d6"},{"xPos":4,"yPos":14,"zPos":2,"_id":"5541019dcd22e511004ab1d7"},{"xPos":8,"yPos":2,"zPos":3,"_id":"5541019dcd22e511004ab1d8"},{"xPos":19,"yPos":8,"zPos":3,"_id":"5541019dcd22e511004ab1d9"},{"xPos":11,"yPos":10,"zPos":3,"_id":"5541019dcd22e511004ab1da"},{"xPos":19,"yPos":10,"zPos":3,"_id":"5541019dcd22e511004ab1db"},{"xPos":11,"yPos":12,"zPos":3,"_id":"5541019dcd22e511004ab1dc"}],"id":"Dragon"};
  var tilesNotMatched = [{"xPos":11,"yPos":12,"zPos":3,"tile":{"_id":135,"suit":"Dragon","name":"White","matchesWholeSuit":false,"__v":0,"id":"135"},"_id":"55dc7144311e9311004708fa"},{"xPos":19,"yPos":10,"zPos":3,"tile":{"_id":50,"suit":"Bamboo","name":"4","matchesWholeSuit":false,"__v":0,"id":"50"},"_id":"55dc7144311e9311004708f9"},{"xPos":11,"yPos":10,"zPos":3,"tile":{"_id":6,"suit":"Circle","name":"2","matchesWholeSuit":false,"__v":0,"id":"6"},"_id":"55dc7144311e9311004708f8"},{"xPos":19,"yPos":8,"zPos":3,"tile":{"_id":129,"suit":"Dragon","name":"Green","matchesWholeSuit":false,"__v":0,"id":"129"},"_id":"55dc7144311e9311004708f7"},{"xPos":8,"yPos":2,"zPos":3,"tile":{"_id":98,"suit":"Character","name":"7","matchesWholeSuit":false,"__v":0,"id":"98"},"_id":"55dc7144311e9311004708f6"},{"xPos":4,"yPos":14,"zPos":2,"tile":{"_id":141,"suit":"Flower","name":"Orchid","matchesWholeSuit":true,"__v":0,"id":"141"},"_id":"55dc7144311e9311004708f5"},{"xPos":12,"yPos":12,"zPos":2,"tile":{"_id":5,"suit":"Circle","name":"2","matchesWholeSuit":false,"__v":0,"id":"5"},"_id":"55dc7144311e9311004708f4"},{"xPos":10,"yPos":12,"zPos":2,"tile":{"_id":91,"suit":"Character","name":"5","matchesWholeSuit":false,"__v":0,"id":"91"},"_id":"55dc7144311e9311004708f3"},{"xPos":4,"yPos":12,"zPos":2,"tile":{"_id":130,"suit":"Dragon","name":"Green","matchesWholeSuit":false,"__v":0,"id":"130"},"_id":"55dc7144311e9311004708f2"},{"xPos":20,"yPos":10,"zPos":2,"tile":{"_id":11,"suit":"Circle","name":"3","matchesWholeSuit":false,"__v":0,"id":"11"},"_id":"55dc7144311e9311004708f1"},{"xPos":18,"yPos":10,"zPos":2,"tile":{"_id":38,"suit":"Bamboo","name":"1","matchesWholeSuit":false,"__v":0,"id":"38"},"_id":"55dc7144311e9311004708f0"},{"xPos":15,"yPos":10,"zPos":2,"tile":{"_id":134,"suit":"Dragon","name":"White","matchesWholeSuit":false,"__v":0,"id":"134"},"_id":"55dc7144311e9311004708ef"},{"xPos":12,"yPos":10,"zPos":2,"tile":{"_id":34,"suit":"Circle","name":"9","matchesWholeSuit":false,"__v":0,"id":"34"},"_id":"55dc7144311e9311004708ee"},{"xPos":10,"yPos":10,"zPos":2,"tile":{"_id":56,"suit":"Bamboo","name":"6","matchesWholeSuit":false,"__v":0,"id":"56"},"_id":"55dc7144311e9311004708ed"},{"xPos":20,"yPos":8,"zPos":2,"tile":{"_id":115,"suit":"Wind","name":"East","matchesWholeSuit":false,"__v":0,"id":"115"},"_id":"55dc7144311e9311004708ec"},{"xPos":18,"yPos":8,"zPos":2,"tile":{"_id":69,"suit":"Bamboo","name":"9","matchesWholeSuit":false,"__v":0,"id":"69"},"_id":"55dc7144311e9311004708eb"},{"xPos":11,"yPos":8,"zPos":2,"tile":{"_id":71,"suit":"Bamboo","name":"9","matchesWholeSuit":false,"__v":0,"id":"71"},"_id":"55dc7144311e9311004708ea"},{"xPos":2,"yPos":7,"zPos":2,"tile":{"_id":64,"suit":"Bamboo","name":"8","matchesWholeSuit":false,"__v":0,"id":"64"},"_id":"55dc7144311e9311004708e8"},{"xPos":19,"yPos":6,"zPos":2,"tile":{"_id":61,"suit":"Bamboo","name":"7","matchesWholeSuit":false,"__v":0,"id":"61"},"_id":"55dc7144311e9311004708e7"},{"xPos":12,"yPos":6,"zPos":2,"tile":{"_id":113,"suit":"Wind","name":"East","matchesWholeSuit":false,"__v":0,"id":"113"},"_id":"55dc7144311e9311004708e6"},{"xPos":25,"yPos":5,"zPos":2,"tile":{"_id":4,"suit":"Circle","name":"2","matchesWholeSuit":false,"__v":0,"id":"4"},"_id":"55dc7144311e9311004708e4"},{"xPos":2,"yPos":5,"zPos":2,"tile":{"_id":137,"suit":"Season","name":"Winter","matchesWholeSuit":true,"__v":0,"id":"137"},"_id":"55dc7144311e9311004708e3"},{"xPos":13,"yPos":4,"zPos":2,"tile":{"_id":17,"suit":"Circle","name":"5","matchesWholeSuit":false,"__v":0,"id":"17"},"_id":"55dc7144311e9311004708e2"},{"xPos":8,"yPos":3,"zPos":2,"tile":{"_id":119,"suit":"Wind","name":"South","matchesWholeSuit":false,"__v":0,"id":"119"},"_id":"55dc7144311e9311004708e1"},{"xPos":6,"yPos":3,"zPos":2,"tile":{"_id":65,"suit":"Bamboo","name":"8","matchesWholeSuit":false,"__v":0,"id":"65"},"_id":"55dc7144311e9311004708e0"},{"xPos":12,"yPos":2,"zPos":2,"tile":{"_id":75,"suit":"Character","name":"1","matchesWholeSuit":false,"__v":0,"id":"75"},"_id":"55dc7144311e9311004708df"},{"xPos":10,"yPos":2,"zPos":2,"tile":{"_id":32,"suit":"Circle","name":"9","matchesWholeSuit":false,"__v":0,"id":"32"},"_id":"55dc7144311e9311004708de"},{"xPos":8,"yPos":1,"zPos":2,"tile":{"_id":62,"suit":"Bamboo","name":"7","matchesWholeSuit":false,"__v":0,"id":"62"},"_id":"55dc7144311e9311004708dd"},{"xPos":25,"yPos":15,"zPos":1,"tile":{"_id":112,"suit":"Wind","name":"East","matchesWholeSuit":false,"__v":0,"id":"112"},"_id":"55dc7144311e9311004708dc"},{"xPos":16,"yPos":15,"zPos":1,"tile":{"_id":109,"suit":"Wind","name":"North","matchesWholeSuit":false,"__v":0,"id":"109"},"_id":"55dc7144311e9311004708db"},{"xPos":4,"yPos":15,"zPos":1,"tile":{"_id":105,"suit":"Character","name":"9","matchesWholeSuit":false,"__v":0,"id":"105"},"_id":"55dc7144311e9311004708da"},{"xPos":19,"yPos":14,"zPos":1,"tile":{"_id":24,"suit":"Circle","name":"7","matchesWholeSuit":false,"__v":0,"id":"24"},"_id":"55dc7144311e9311004708d9"},{"xPos":25,"yPos":13,"zPos":1,"tile":{"_id":22,"suit":"Circle","name":"6","matchesWholeSuit":false,"__v":0,"id":"22"},"_id":"55dc7144311e9311004708d8"},{"xPos":23,"yPos":13,"zPos":1,"tile":{"_id":125,"suit":"Dragon","name":"Red","matchesWholeSuit":false,"__v":0,"id":"125"},"_id":"55dc7144311e9311004708d7"},{"xPos":5,"yPos":13,"zPos":1,"tile":{"_id":118,"suit":"Wind","name":"South","matchesWholeSuit":false,"__v":0,"id":"118"},"_id":"55dc7144311e9311004708d6"},{"xPos":3,"yPos":13,"zPos":1,"tile":{"_id":96,"suit":"Character","name":"7","matchesWholeSuit":false,"__v":0,"id":"96"},"_id":"55dc7144311e9311004708d5"},{"xPos":19,"yPos":12,"zPos":1,"tile":{"_id":26,"suit":"Circle","name":"7","matchesWholeSuit":false,"__v":0,"id":"26"},"_id":"55dc7144311e9311004708d4"},{"xPos":13,"yPos":12,"zPos":1,"tile":{"_id":60,"suit":"Bamboo","name":"7","matchesWholeSuit":false,"__v":0,"id":"60"},"_id":"55dc7144311e9311004708d3"},{"xPos":11,"yPos":12,"zPos":1,"tile":{"_id":87,"suit":"Character","name":"4","matchesWholeSuit":false,"__v":0,"id":"87"},"_id":"55dc7144311e9311004708d2"},{"xPos":9,"yPos":12,"zPos":1,"tile":{"_id":99,"suit":"Character","name":"7","matchesWholeSuit":false,"__v":0,"id":"99"},"_id":"55dc7144311e9311004708d1"},{"xPos":23,"yPos":11,"zPos":1,"tile":{"_id":20,"suit":"Circle","name":"6","matchesWholeSuit":false,"__v":0,"id":"20"},"_id":"55dc7144311e9311004708d0"},{"xPos":15,"yPos":11,"zPos":1,"tile":{"_id":55,"suit":"Bamboo","name":"5","matchesWholeSuit":false,"__v":0,"id":"55"},"_id":"55dc7144311e9311004708cf"},{"xPos":4,"yPos":11,"zPos":1,"tile":{"_id":33,"suit":"Circle","name":"9","matchesWholeSuit":false,"__v":0,"id":"33"},"_id":"55dc7144311e9311004708ce"},{"xPos":28,"yPos":10,"zPos":1,"tile":{"_id":110,"suit":"Wind","name":"North","matchesWholeSuit":false,"__v":0,"id":"110"},"_id":"55dc7144311e9311004708cd"},{"xPos":21,"yPos":10,"zPos":1,"tile":{"_id":68,"suit":"Bamboo","name":"9","matchesWholeSuit":false,"__v":0,"id":"68"},"_id":"55dc7144311e9311004708cc"},{"xPos":19,"yPos":10,"zPos":1,"tile":{"_id":0,"suit":"Circle","name":"1","matchesWholeSuit":false,"__v":0,"id":"0"},"_id":"55dc7144311e9311004708cb"},{"xPos":17,"yPos":10,"zPos":1,"tile":{"_id":131,"suit":"Dragon","name":"Green","matchesWholeSuit":false,"__v":0,"id":"131"},"_id":"55dc7144311e9311004708ca"},{"xPos":13,"yPos":10,"zPos":1,"tile":{"_id":88,"suit":"Character","name":"5","matchesWholeSuit":false,"__v":0,"id":"88"},"_id":"55dc7144311e9311004708c9"},{"xPos":11,"yPos":10,"zPos":1,"tile":{"_id":82,"suit":"Character","name":"3","matchesWholeSuit":false,"__v":0,"id":"82"},"_id":"55dc7144311e9311004708c8"},{"xPos":9,"yPos":10,"zPos":1,"tile":{"_id":40,"suit":"Bamboo","name":"2","matchesWholeSuit":false,"__v":0,"id":"40"},"_id":"55dc7144311e9311004708c7"},{"xPos":7,"yPos":10,"zPos":1,"tile":{"_id":54,"suit":"Bamboo","name":"5","matchesWholeSuit":false,"__v":0,"id":"54"},"_id":"55dc7144311e9311004708c6"},{"xPos":15,"yPos":9,"zPos":1,"tile":{"_id":45,"suit":"Bamboo","name":"3","matchesWholeSuit":false,"__v":0,"id":"45"},"_id":"55dc7144311e9311004708c5"},{"xPos":29,"yPos":8,"zPos":1,"tile":{"_id":121,"suit":"Wind","name":"West","matchesWholeSuit":false,"__v":0,"id":"121"},"_id":"55dc7144311e9311004708c4"},{"xPos":21,"yPos":8,"zPos":1,"tile":{"_id":3,"suit":"Circle","name":"1","matchesWholeSuit":false,"__v":0,"id":"3"},"_id":"55dc7144311e9311004708c3"},{"xPos":19,"yPos":8,"zPos":1,"tile":{"_id":48,"suit":"Bamboo","name":"4","matchesWholeSuit":false,"__v":0,"id":"48"},"_id":"55dc7144311e9311004708c2"},{"xPos":17,"yPos":8,"zPos":1,"tile":{"_id":72,"suit":"Character","name":"1","matchesWholeSuit":false,"__v":0,"id":"72"},"_id":"55dc7144311e9311004708c1"},{"xPos":12,"yPos":8,"zPos":1,"tile":{"_id":92,"suit":"Character","name":"6","matchesWholeSuit":false,"__v":0,"id":"92"},"_id":"55dc7144311e9311004708c0"},{"xPos":10,"yPos":8,"zPos":1,"tile":{"_id":138,"suit":"Season","name":"Spring","matchesWholeSuit":true,"__v":0,"id":"138"},"_id":"55dc7144311e9311004708bf"},{"xPos":7,"yPos":8,"zPos":1,"tile":{"_id":7,"suit":"Circle","name":"2","matchesWholeSuit":false,"__v":0,"id":"7"},"_id":"55dc7144311e9311004708be"},{"xPos":2,"yPos":8,"zPos":1,"tile":{"_id":63,"suit":"Bamboo","name":"7","matchesWholeSuit":false,"__v":0,"id":"63"},"_id":"55dc7144311e9311004708bd"},{"xPos":23,"yPos":7,"zPos":1,"tile":{"_id":13,"suit":"Circle","name":"4","matchesWholeSuit":false,"__v":0,"id":"13"},"_id":"55dc7144311e9311004708bc"},{"xPos":29,"yPos":6,"zPos":1,"tile":{"_id":94,"suit":"Character","name":"6","matchesWholeSuit":false,"__v":0,"id":"94"},"_id":"55dc7144311e9311004708bb"},{"xPos":25,"yPos":6,"zPos":1,"tile":{"_id":44,"suit":"Bamboo","name":"3","matchesWholeSuit":false,"__v":0,"id":"44"},"_id":"55dc7144311e9311004708ba"},{"xPos":20,"yPos":6,"zPos":1,"tile":{"_id":139,"suit":"Season","name":"Autumn","matchesWholeSuit":true,"__v":0,"id":"139"},"_id":"55dc7144311e9311004708b9"},{"xPos":18,"yPos":6,"zPos":1,"tile":{"_id":73,"suit":"Character","name":"1","matchesWholeSuit":false,"__v":0,"id":"73"},"_id":"55dc7144311e9311004708b8"},{"xPos":13,"yPos":6,"zPos":1,"tile":{"_id":83,"suit":"Character","name":"3","matchesWholeSuit":false,"__v":0,"id":"83"},"_id":"55dc7144311e9311004708b7"},{"xPos":11,"yPos":6,"zPos":1,"tile":{"_id":12,"suit":"Circle","name":"4","matchesWholeSuit":false,"__v":0,"id":"12"},"_id":"55dc7144311e9311004708b6"},{"xPos":3,"yPos":6,"zPos":1,"tile":{"_id":30,"suit":"Circle","name":"8","matchesWholeSuit":false,"__v":0,"id":"30"},"_id":"55dc7144311e9311004708b5"},{"xPos":1,"yPos":6,"zPos":1,"tile":{"_id":101,"suit":"Character","name":"8","matchesWholeSuit":false,"__v":0,"id":"101"},"_id":"55dc7144311e9311004708b4"},{"xPos":29,"yPos":4,"zPos":1,"tile":{"_id":76,"suit":"Character","name":"2","matchesWholeSuit":false,"__v":0,"id":"76"},"_id":"55dc7144311e9311004708b3"},{"xPos":25,"yPos":4,"zPos":1,"tile":{"_id":90,"suit":"Character","name":"5","matchesWholeSuit":false,"__v":0,"id":"90"},"_id":"55dc7144311e9311004708b2"},{"xPos":20,"yPos":4,"zPos":1,"tile":{"_id":51,"suit":"Bamboo","name":"4","matchesWholeSuit":false,"__v":0,"id":"51"},"_id":"55dc7144311e9311004708b1"},{"xPos":13,"yPos":4,"zPos":1,"tile":{"_id":133,"suit":"Dragon","name":"White","matchesWholeSuit":false,"__v":0,"id":"133"},"_id":"55dc7144311e9311004708b0"},{"xPos":2,"yPos":4,"zPos":1,"tile":{"_id":140,"suit":"Flower","name":"Plum","matchesWholeSuit":true,"__v":0,"id":"140"},"_id":"55dc7144311e9311004708af"},{"xPos":27,"yPos":3,"zPos":1,"tile":{"_id":37,"suit":"Bamboo","name":"1","matchesWholeSuit":false,"__v":0,"id":"37"},"_id":"55dc7144311e9311004708ae"},{"xPos":9,"yPos":3,"zPos":1,"tile":{"_id":86,"suit":"Character","name":"4","matchesWholeSuit":false,"__v":0,"id":"86"},"_id":"55dc7144311e9311004708ad"},{"xPos":7,"yPos":3,"zPos":1,"tile":{"_id":2,"suit":"Circle","name":"1","matchesWholeSuit":false,"__v":0,"id":"2"},"_id":"55dc7144311e9311004708ac"},{"xPos":5,"yPos":3,"zPos":1,"tile":{"_id":79,"suit":"Character","name":"2","matchesWholeSuit":false,"__v":0,"id":"79"},"_id":"55dc7144311e9311004708ab"},{"xPos":13,"yPos":2,"zPos":1,"tile":{"_id":16,"suit":"Circle","name":"5","matchesWholeSuit":false,"__v":0,"id":"16"},"_id":"55dc7144311e9311004708aa"},{"xPos":11,"yPos":2,"zPos":1,"tile":{"_id":58,"suit":"Bamboo","name":"6","matchesWholeSuit":false,"__v":0,"id":"58"},"_id":"55dc7144311e9311004708a9"},{"xPos":9,"yPos":1,"zPos":1,"tile":{"_id":67,"suit":"Bamboo","name":"8","matchesWholeSuit":false,"__v":0,"id":"67"},"_id":"55dc7144311e9311004708a8"},{"xPos":7,"yPos":1,"zPos":1,"tile":{"_id":39,"suit":"Bamboo","name":"1","matchesWholeSuit":false,"__v":0,"id":"39"},"_id":"55dc7144311e9311004708a7"},{"xPos":26,"yPos":15,"zPos":0,"tile":{"_id":74,"suit":"Character","name":"1","matchesWholeSuit":false,"__v":0,"id":"74"},"_id":"55dc7144311e9311004708a6"},{"xPos":24,"yPos":15,"zPos":0,"tile":{"_id":106,"suit":"Character","name":"9","matchesWholeSuit":false,"__v":0,"id":"106"},"_id":"55dc7144311e9311004708a5"},{"xPos":17,"yPos":15,"zPos":0,"tile":{"_id":132,"suit":"Dragon","name":"White","matchesWholeSuit":false,"__v":0,"id":"132"},"_id":"55dc7144311e9311004708a4"},{"xPos":15,"yPos":15,"zPos":0,"tile":{"_id":78,"suit":"Character","name":"2","matchesWholeSuit":false,"__v":0,"id":"78"},"_id":"55dc7144311e9311004708a3"},{"xPos":4,"yPos":15,"zPos":0,"tile":{"_id":53,"suit":"Bamboo","name":"5","matchesWholeSuit":false,"__v":0,"id":"53"},"_id":"55dc7144311e9311004708a2"},{"xPos":19,"yPos":14,"zPos":0,"tile":{"_id":89,"suit":"Character","name":"5","matchesWholeSuit":false,"__v":0,"id":"89"},"_id":"55dc7144311e9311004708a1"},{"xPos":25,"yPos":13,"zPos":0,"tile":{"_id":136,"suit":"Season","name":"Summer","matchesWholeSuit":true,"__v":0,"id":"136"},"_id":"55dc7144311e9311004708a0"},{"xPos":23,"yPos":13,"zPos":0,"tile":{"_id":122,"suit":"Wind","name":"West","matchesWholeSuit":false,"__v":0,"id":"122"},"_id":"55dc7144311e93110047089f"},{"xPos":5,"yPos":13,"zPos":0,"tile":{"_id":116,"suit":"Wind","name":"South","matchesWholeSuit":false,"__v":0,"id":"116"},"_id":"55dc7144311e93110047089e"},{"xPos":3,"yPos":13,"zPos":0,"tile":{"_id":128,"suit":"Dragon","name":"Green","matchesWholeSuit":false,"__v":0,"id":"128"},"_id":"55dc7144311e93110047089d"},{"xPos":19,"yPos":12,"zPos":0,"tile":{"_id":59,"suit":"Bamboo","name":"6","matchesWholeSuit":false,"__v":0,"id":"59"},"_id":"55dc7144311e93110047089c"},{"xPos":13,"yPos":12,"zPos":0,"tile":{"_id":103,"suit":"Character","name":"8","matchesWholeSuit":false,"__v":0,"id":"103"},"_id":"55dc7144311e93110047089b"},{"xPos":11,"yPos":12,"zPos":0,"tile":{"_id":29,"suit":"Circle","name":"8","matchesWholeSuit":false,"__v":0,"id":"29"},"_id":"55dc7144311e93110047089a"},{"xPos":9,"yPos":12,"zPos":0,"tile":{"_id":18,"suit":"Circle","name":"5","matchesWholeSuit":false,"__v":0,"id":"18"},"_id":"55dc7144311e931100470899"},{"xPos":7,"yPos":12,"zPos":0,"tile":{"_id":49,"suit":"Bamboo","name":"4","matchesWholeSuit":false,"__v":0,"id":"49"},"_id":"55dc7144311e931100470898"},{"xPos":23,"yPos":11,"zPos":0,"tile":{"_id":104,"suit":"Character","name":"9","matchesWholeSuit":false,"__v":0,"id":"104"},"_id":"55dc7144311e931100470897"},{"xPos":15,"yPos":11,"zPos":0,"tile":{"_id":27,"suit":"Circle","name":"7","matchesWholeSuit":false,"__v":0,"id":"27"},"_id":"55dc7144311e931100470896"},{"xPos":4,"yPos":11,"zPos":0,"tile":{"_id":15,"suit":"Circle","name":"4","matchesWholeSuit":false,"__v":0,"id":"15"},"_id":"55dc7144311e931100470895"},{"xPos":28,"yPos":10,"zPos":0,"tile":{"_id":35,"suit":"Circle","name":"9","matchesWholeSuit":false,"__v":0,"id":"35"},"_id":"55dc7144311e931100470894"},{"xPos":21,"yPos":10,"zPos":0,"tile":{"_id":111,"suit":"Wind","name":"North","matchesWholeSuit":false,"__v":0,"id":"111"},"_id":"55dc7144311e931100470893"},{"xPos":19,"yPos":10,"zPos":0,"tile":{"_id":123,"suit":"Wind","name":"West","matchesWholeSuit":false,"__v":0,"id":"123"},"_id":"55dc7144311e931100470892"},{"xPos":17,"yPos":10,"zPos":0,"tile":{"_id":85,"suit":"Character","name":"4","matchesWholeSuit":false,"__v":0,"id":"85"},"_id":"55dc7144311e931100470891"},{"xPos":13,"yPos":10,"zPos":0,"tile":{"_id":21,"suit":"Circle","name":"6","matchesWholeSuit":false,"__v":0,"id":"21"},"_id":"55dc7144311e931100470890"},{"xPos":11,"yPos":10,"zPos":0,"tile":{"_id":124,"suit":"Dragon","name":"Red","matchesWholeSuit":false,"__v":0,"id":"124"},"_id":"55dc7144311e93110047088f"},{"xPos":9,"yPos":10,"zPos":0,"tile":{"_id":23,"suit":"Circle","name":"6","matchesWholeSuit":false,"__v":0,"id":"23"},"_id":"55dc7144311e93110047088e"},{"xPos":7,"yPos":10,"zPos":0,"tile":{"_id":66,"suit":"Bamboo","name":"8","matchesWholeSuit":false,"__v":0,"id":"66"},"_id":"55dc7144311e93110047088d"},{"xPos":15,"yPos":9,"zPos":0,"tile":{"_id":52,"suit":"Bamboo","name":"5","matchesWholeSuit":false,"__v":0,"id":"52"},"_id":"55dc7144311e93110047088c"},{"xPos":29,"yPos":8,"zPos":0,"tile":{"_id":10,"suit":"Circle","name":"3","matchesWholeSuit":false,"__v":0,"id":"10"},"_id":"55dc7144311e93110047088b"},{"xPos":21,"yPos":8,"zPos":0,"tile":{"_id":117,"suit":"Wind","name":"South","matchesWholeSuit":false,"__v":0,"id":"117"},"_id":"55dc7144311e93110047088a"},{"xPos":19,"yPos":8,"zPos":0,"tile":{"_id":97,"suit":"Character","name":"7","matchesWholeSuit":false,"__v":0,"id":"97"},"_id":"55dc7144311e931100470889"},{"xPos":17,"yPos":8,"zPos":0,"tile":{"_id":8,"suit":"Circle","name":"3","matchesWholeSuit":false,"__v":0,"id":"8"},"_id":"55dc7144311e931100470888"},{"xPos":12,"yPos":8,"zPos":0,"tile":{"_id":77,"suit":"Character","name":"2","matchesWholeSuit":false,"__v":0,"id":"77"},"_id":"55dc7144311e931100470887"},{"xPos":10,"yPos":8,"zPos":0,"tile":{"_id":31,"suit":"Circle","name":"8","matchesWholeSuit":false,"__v":0,"id":"31"},"_id":"55dc7144311e931100470886"},{"xPos":7,"yPos":8,"zPos":0,"tile":{"_id":70,"suit":"Bamboo","name":"9","matchesWholeSuit":false,"__v":0,"id":"70"},"_id":"55dc7144311e931100470885"},{"xPos":2,"yPos":8,"zPos":0,"tile":{"_id":47,"suit":"Bamboo","name":"3","matchesWholeSuit":false,"__v":0,"id":"47"},"_id":"55dc7144311e931100470884"},{"xPos":23,"yPos":7,"zPos":0,"tile":{"_id":28,"suit":"Circle","name":"8","matchesWholeSuit":false,"__v":0,"id":"28"},"_id":"55dc7144311e931100470883"},{"xPos":5,"yPos":7,"zPos":0,"tile":{"_id":25,"suit":"Circle","name":"7","matchesWholeSuit":false,"__v":0,"id":"25"},"_id":"55dc7144311e931100470882"},{"xPos":29,"yPos":6,"zPos":0,"tile":{"_id":84,"suit":"Character","name":"4","matchesWholeSuit":false,"__v":0,"id":"84"},"_id":"55dc7144311e931100470881"},{"xPos":25,"yPos":6,"zPos":0,"tile":{"_id":46,"suit":"Bamboo","name":"3","matchesWholeSuit":false,"__v":0,"id":"46"},"_id":"55dc7144311e931100470880"},{"xPos":20,"yPos":6,"zPos":0,"tile":{"_id":41,"suit":"Bamboo","name":"2","matchesWholeSuit":false,"__v":0,"id":"41"},"_id":"55dc7144311e93110047087f"},{"xPos":18,"yPos":6,"zPos":0,"tile":{"_id":36,"suit":"Bamboo","name":"1","matchesWholeSuit":false,"__v":0,"id":"36"},"_id":"55dc7144311e93110047087e"},{"xPos":13,"yPos":6,"zPos":0,"tile":{"_id":93,"suit":"Character","name":"6","matchesWholeSuit":false,"__v":0,"id":"93"},"_id":"55dc7144311e93110047087d"},{"xPos":11,"yPos":6,"zPos":0,"tile":{"_id":14,"suit":"Circle","name":"4","matchesWholeSuit":false,"__v":0,"id":"14"},"_id":"55dc7144311e93110047087c"},{"xPos":3,"yPos":6,"zPos":0,"tile":{"_id":142,"suit":"Flower","name":"Chrysantememum","matchesWholeSuit":true,"__v":0,"id":"142"},"_id":"55dc7144311e93110047087b"},{"xPos":1,"yPos":6,"zPos":0,"tile":{"_id":120,"suit":"Wind","name":"West","matchesWholeSuit":false,"__v":0,"id":"120"},"_id":"55dc7144311e93110047087a"},{"xPos":29,"yPos":4,"zPos":0,"tile":{"_id":1,"suit":"Circle","name":"1","matchesWholeSuit":false,"__v":0,"id":"1"},"_id":"55dc7144311e931100470879"},{"xPos":25,"yPos":4,"zPos":0,"tile":{"_id":143,"suit":"Flower","name":"Bamboo","matchesWholeSuit":true,"__v":0,"id":"143"},"_id":"55dc7144311e931100470878"},{"xPos":21,"yPos":4,"zPos":0,"tile":{"_id":102,"suit":"Character","name":"8","matchesWholeSuit":false,"__v":0,"id":"102"},"_id":"55dc7144311e931100470877"},{"xPos":19,"yPos":4,"zPos":0,"tile":{"_id":81,"suit":"Character","name":"3","matchesWholeSuit":false,"__v":0,"id":"81"},"_id":"55dc7144311e931100470876"},{"xPos":13,"yPos":4,"zPos":0,"tile":{"_id":9,"suit":"Circle","name":"3","matchesWholeSuit":false,"__v":0,"id":"9"},"_id":"55dc7144311e931100470875"},{"xPos":2,"yPos":4,"zPos":0,"tile":{"_id":57,"suit":"Bamboo","name":"6","matchesWholeSuit":false,"__v":0,"id":"57"},"_id":"55dc7144311e931100470874"},{"xPos":27,"yPos":3,"zPos":0,"tile":{"_id":107,"suit":"Character","name":"9","matchesWholeSuit":false,"__v":0,"id":"107"},"_id":"55dc7144311e931100470873"},{"xPos":9,"yPos":3,"zPos":0,"tile":{"_id":19,"suit":"Circle","name":"5","matchesWholeSuit":false,"__v":0,"id":"19"},"_id":"55dc7144311e931100470872"},{"xPos":7,"yPos":3,"zPos":0,"tile":{"_id":42,"suit":"Bamboo","name":"2","matchesWholeSuit":false,"__v":0,"id":"42"},"_id":"55dc7144311e931100470871"},{"xPos":5,"yPos":3,"zPos":0,"tile":{"_id":43,"suit":"Bamboo","name":"2","matchesWholeSuit":false,"__v":0,"id":"43"},"_id":"55dc7144311e931100470870"},{"xPos":22,"yPos":2,"zPos":0,"tile":{"_id":100,"suit":"Character","name":"8","matchesWholeSuit":false,"__v":0,"id":"100"},"_id":"55dc7144311e93110047086f"},{"xPos":13,"yPos":2,"zPos":0,"tile":{"_id":95,"suit":"Character","name":"6","matchesWholeSuit":false,"__v":0,"id":"95"},"_id":"55dc7144311e93110047086e"},{"xPos":11,"yPos":2,"zPos":0,"tile":{"_id":114,"suit":"Wind","name":"East","matchesWholeSuit":false,"__v":0,"id":"114"},"_id":"55dc7144311e93110047086d"},{"xPos":9,"yPos":1,"zPos":0,"tile":{"_id":108,"suit":"Wind","name":"North","matchesWholeSuit":false,"__v":0,"id":"108"},"_id":"55dc7144311e93110047086c"},{"xPos":7,"yPos":1,"zPos":0,"tile":{"_id":80,"suit":"Character","name":"3","matchesWholeSuit":false,"__v":0,"id":"80"},"_id":"55dc7144311e93110047086b"}];

  beforeEach(module('AdvJS'));

  var $httpBackend,
    $controller,
    GameFactory,
    GameTemplateFactory,
    AuthFactory,
    stateParams;

  beforeEach(inject(function($rootScope, _$httpBackend_, _$controller_, _GameFactory_, _GameTemplateFactory_, _AuthFactory_){
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
    GameFactory = _GameFactory_;
    GameTemplateFactory = _GameTemplateFactory_;
    AuthFactory = _AuthFactory_;
	scope = $rootScope.$new();

    // Override alle requesten om zo de controller juist te testen
    httpBackend = $httpBackend;
    httpBackend.when("GET", "https://mahjongmayhem.herokuapp.com/games/" + game._id).respond(game);
    httpBackend.when("GET", "https://mahjongmayhem.herokuapp.com/games/" + game._id + "/tiles?matched=false").respond(tilesNotMatched);
    httpBackend.when("GET", "https://mahjongmayhem.herokuapp.com/games/" + game._id + "/tiles?matched=true").respond(tilesMatched);
    httpBackend.when("GET", "https://mahjongmayhem.herokuapp.com/gametemplates/" + game.gameTemplate._id).respond(gameTemplate);

    // Maak controller aan met benodigheden
    var GameController = $controller('GameController', {
		$scope: scope, 
        $stateParams: { 'gameId': '55dc7144311e93110047086a' },
        GameFactory: GameFactory,
        GameTemplateFactory: GameTemplateFactory,
        AuthFactory: AuthFactory
    });

  }));

  it('Controller game ID should match game ID', function(){
    httpBackend.flush();
    expect(scope.game._id).to.equal(game._id);
  });

  it('Controller game username should match game username', function(){
    httpBackend.flush();
    expect(scope.game.createdBy._id).to.equal(game.createdBy._id);
  });

  it('Try to select tile that is unselectable', function(){
    httpBackend.flush();
    
    // Circle 8, - Blocked by tile on top
    var tile1 = {
        "xPos": 7,
        "yPos": 1,
        "zPos": 0,
        "tile": {
            "_id": 29,
            "suit": "Circle",
            "name": "8",
            "matchesWholeSuit": false,
            "__v": 0,
            "id": "29"
        },
        "_id": "557c3da061ce3711004c290f"
    };

    scope.matchTile(tile1);

    expect(scope.selectedTile).to.be.null;

  });

   it('Try to select tile that is selectable', function(){
    httpBackend.flush();
    
    // Dragon Red (selectable)
    var tile1 = {
        "xPos": 2,
        "yPos": 5,
        "zPos": 2,
        "tile": {
            "_id": 124,
            "suit": "Dragon",
            "name": "Red",
            "matchesWholeSuit": false,
            "__v": 0,
            "id": "124"
        },
        "_id": "557c3da061ce3711004c2987"
    };

    scope.matchTile(tile1);

    expect(scope.selectedTile).to.not.be.null;

  });

  it('Match a tile', function(){
   	httpBackend.flush();

   	// Dragon Red (matchable)
    var tile1 = {"xPos":16,"yPos":15,"zPos":1,"tile":{"_id":109,"suit":"Wind","name":"North","matchesWholeSuit":false,"__v":0,"id":"109"},"_id":"55dc7144311e9311004708db"};

   	// Dragon Red 2 (matchable)
   	var tile2 = {"xPos":28,"yPos":10,"zPos":1,"tile":{"_id":110,"suit":"Wind","name":"North","matchesWholeSuit":false,"__v":0,"id":"110"},"_id":"55dc7144311e9311004708cd"};

    scope.matchTile(tile1);
    scope.matchTile(tile2);

    expect(scope.selectedTile).to.be.null;


   });
  
});