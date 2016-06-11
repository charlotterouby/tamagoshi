/// <reference path="core/angular.d.ts"/>
/// <reference path="core/directives/stats-directive.ts"/>
/// <reference path="core/directives/msg-directive.ts"/>
/// <reference path="core/factories/life-factory.ts"/>
/// <reference path="core/factories/player-factory.ts"/>
/// <reference path="core/factories/work-factory.ts"/>
/// <reference path="core/factories/fun-factory.ts"/>
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

// WorkFactory
tamagoshiApp.factory("Fun", () =>
    Application.Factories.Fun
);

// Stats Directive
tamagoshiApp.directive("statsDirective", () =>
    new Application.Directives.statsDirective()
);

// Msg Directive
tamagoshiApp.directive("msgDirective", () =>
    new Application.Directives.msgDirective()
);

// HomeController
tamagoshiApp.controller('HomeController', ['$scope', '$interval', '$timeout', 'Player', 'Work', 'Life', 'Fun', ($scope, $interval, $timeout, Player, Work, Life, Fun) =>
    new Application.Controllers.HomeController($scope, $interval, $timeout, Player, Work, Life, Fun)
]);
