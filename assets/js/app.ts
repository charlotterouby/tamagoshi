/// <reference path="core/angular.d.ts"/>
/// <reference path="core/factories/life-factory.ts"/>
/// <reference path="core/factories/player-factory.ts"/>
/// <reference path="core/factories/work-factory.ts"/>
/// <reference path="controllers/main-controller.ts"/>

var tamagoshiApp = angular.module('tamagoshiApp', []);

// PlayerFactory
tamagoshiApp.factory("Player", [() =>
	Application.Factories.Player
]);

<<<<<<< HEAD
// LifeFactory
tamagoshiApp.factory("Life", () =>	Application.Factories.LifeFactory );

// HomeController
tamagoshiApp.controller('HomeController', ['$scope', 'Player', 'Life', ($scope, Player, Life) =>
	new Application.Controllers.HomeController($scope, Player, Life)
=======
// WorkFactory
tamagoshiApp.factory("Work", [() =>
	Application.Factories.Work
]);

// HomeController
tamagoshiApp.controller('HomeController', ['$scope', 'Player', 'Work', ($scope, Player, Work) =>
	new Application.Controllers.HomeController($scope, Player, Work)
>>>>>>> 8a04422d62256644f6ffbffc463430aac5b47cca
]);