/// <reference path="core/angular.d.ts"/>
/// <reference path="core/directives/msg-directive.ts"/>
/// <reference path="core/directives/stats-directive.ts"/>
/// <reference path="core/factories/life-factory.ts"/>
/// <reference path="core/factories/player-factory.ts"/>
/// <reference path="core/factories/work-factory.ts"/>
/// <reference path="controllers/main-controller.ts"/>

var tamagoshiApp = angular.module('tamagoshiApp', []);

// PlayerFactory
tamagoshiApp.factory("Player", () =>
	Application.Factories.Player
);

// LifeFactory
tamagoshiApp.factory("Life", () =>	Application.Factories.LifeFactory );

// WorkFactory
tamagoshiApp.factory("Work", () =>
	Application.Factories.Work
);

// Msg Directive
tamagoshiApp.directive("msgDirective", () =>
	new Application.Directives.MsgDirective()
);

// Stats Directive
tamagoshiApp.directive("statsDirective", () =>
	new Application.Directives.statsDirective()
);

// HomeController
tamagoshiApp.controller('HomeController', ['$scope', '$interval', 'Player', 'Work', 'Life', ($scope, $interval, Player, Work, Life) =>
	new Application.Controllers.HomeController($scope, $interval, Player, Work, Life)
]); 