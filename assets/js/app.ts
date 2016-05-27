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

// LifeFactory
tamagoshiApp.factory("Life", () =>	Application.Factories.LifeFactory );

// WorkFactory
tamagoshiApp.factory("Work", [() =>
	Application.Factories.Work
]);

// HomeController
tamagoshiApp.controller('HomeController', ['$scope', 'Player', 'Work', 'Life', ($scope, Player, Work, Life) =>
	new Application.Controllers.HomeController($scope, Player, Work, Life)
]);