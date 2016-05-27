// Msg Directive
// 
/// <reference path="../angular.d.ts" />
var Application;
(function (Application) {
    var Directives;
    (function (Directives) {
        var MsgDirective = (function () {
            function MsgDirective() {
                var ret = this.factory();
                console.log('hello from Msg directive');
                console.log(ret);
                return ret;
            }
            MsgDirective.prototype.factory = function () {
                return {
                    //template: '<h2>{{ bobname }}</h2>',
                    templateUrl: 'templates/msg-template.html',
                    restrict: 'EA',
                    scope: {
                        sysMsg: '='
                    }
                };
            };
            return MsgDirective;
        }());
        Directives.MsgDirective = MsgDirective;
    })(Directives = Application.Directives || (Application.Directives = {}));
})(Application || (Application = {}));

// Stats Directive
// 
/// <reference path="../angular.d.ts"/>
var Application;
(function (Application) {
    var Directives;
    (function (Directives) {
        var statsDirective = (function () {
            function statsDirective() {
                console.log("statsDirective");
                return this.instanceDirective();
            }
            statsDirective.prototype.instanceDirective = function () {
                return {
                    templateUrl: 'templates/stats-template.html',
                    restrict: 'A',
                    scope: {
                        player: "="
                    }
                };
            };
            return statsDirective;
        }());
        Directives.statsDirective = statsDirective;
    })(Directives = Application.Directives || (Application.Directives = {}));
})(Application || (Application = {}));

// PlayerFactory
/// <reference path="../angular.d.ts"/>
var Application;
(function (Application) {
    var Factories;
    (function (Factories) {
        var Player = (function () {
            function Player() {
                return this.createPlayer();
            }
            Player.prototype.createPlayer = function () {
                var player = {
                    name: "Pichu",
                    life: 15,
                    food: 20,
                    fun: 5,
                    xp: 0,
                    money: 400,
                    health: 40,
                    level: 1
                };
                return player;
            };
            return Player;
        }());
        Factories.Player = Player;
    })(Factories = Application.Factories || (Application.Factories = {}));
})(Application || (Application = {}));

// PlayerFactory
/// <reference path="../angular.d.ts"/>
/// <reference path="player-factory.ts"/>
var Application;
(function (Application) {
    var Factories;
    (function (Factories) {
        var LifeFactory = (function () {
            function LifeFactory() {
                console.log('Life Factory loaded');
                //return this;
            }
            LifeFactory.prototype.wash = function (goshi) {
                console.log(goshi.name + ' is washing');
                //return player;
            };
            LifeFactory.prototype.eat = function (goshi) {
                console.log(goshi.name + ' is eating');
            };
            LifeFactory.prototype.buyFood = function (goshi) {
                console.log(goshi.name + ' is buying food');
            };
            return LifeFactory;
        }());
        Factories.LifeFactory = LifeFactory;
    })(Factories = Application.Factories || (Application.Factories = {}));
})(Application || (Application = {}));

// WorkFactory
/// <reference path="../angular.d.ts"/>
/// /// <reference path="work-factory.ts"/>
var Application;
(function (Application) {
    var Factories;
    (function (Factories) {
        var Work = (function () {
            function Work() {
            }
            Work.prototype.combat = function (player) {
                var win = Math.random();
                if (win === 0) {
                    alert('Pikachu perd le combat');
                    player.life = player.life - 5;
                    player.health = player.health - 5;
                    player.money = player.money - 15;
                }
                else {
                    alert('Pikachu gagne le combat');
                    player.xp = player.xp + 5;
                    player.money = player.money + 15;
                }
            };
            ;
            Work.prototype.training = function (player) {
                alert('Pikachu gagne en expérience');
                player.xp = player.xp + 5;
            };
            Work.prototype.updateLevel = function (player) {
                if (player.level === 3 && player.xp === 100) {
                    alert('You win !');
                }
                else if (player.xp === 100) {
                    alert("Votre Tamagoshi monte d'un niveau");
                    player.level += 1;
                    player.xp = 0;
                }
                if (player.level === 2) {
                    player.name = "Pikachu";
                    alert("Votre tamagoshi évolue ! Il devient " + player.name);
                }
                else if (player.level === 3) {
                    player.name = "Raichu";
                    alert("Votre tamagoshi évolue ! Il devient " + player.name);
                }
            };
            return Work;
        }());
        Factories.Work = Work;
    })(Factories = Application.Factories || (Application.Factories = {}));
})(Application || (Application = {}));

/// <reference path="core/angular.d.ts"/>
/// <reference path="core/directives/msg-directive.ts"/>
/// <reference path="core/directives/stats-directive.ts"/>
/// <reference path="core/factories/life-factory.ts"/>
/// <reference path="core/factories/player-factory.ts"/>
/// <reference path="core/factories/work-factory.ts"/>
/// <reference path="controllers/main-controller.ts"/>
var tamagoshiApp = angular.module('tamagoshiApp', []);
// PlayerFactory
tamagoshiApp.factory("Player", [function () {
        return Application.Factories.Player;
    }
]);
// Msg Directive
tamagoshiApp.directive("msgDirective", function () {
    return new Application.Directives.MsgDirective();
});
// Stats Directive
tamagoshiApp.directive("statsDirective", function () {
    return new Application.Directives.statsDirective();
});
// LifeFactory
tamagoshiApp.factory("Life", function () { return Application.Factories.LifeFactory; });
// WorkFactory
tamagoshiApp.factory("Work", [function () {
        return Application.Factories.Work;
    }
]);
// HomeController
tamagoshiApp.controller('HomeController', ['$scope', 'Player', 'Work', 'Life', function ($scope, Player, Work, Life) {
        return new Application.Controllers.HomeController($scope, Player, Work, Life);
    }
]);

/// <reference path="../core/angular.d.ts"/>
/// <reference path="../app.ts"/>
/// <reference path="../core/factories/player-factory.ts"/>
var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($scope, Player, Work, Life) {
                this.scope = $scope;
                this.player = new Player;
                this.lifeFactory = new Life;
                this.sysMsg = "Hello " + this.player.name + " !";
                console.log(this.player);
                this.lifeFactory.wash(this.player);
                //$('.container').fadeOut('slow');
            }
            HomeController.prototype.updateStats = function (player) {
                // Vérification des stats du player pour lancement des msg alertes et des progress-bar
                var verifStats = function () {
                    $('#playerLife .progress-bar').css("width", player.life + "%").attr("aria-valuenow", player.life);
                    $('#playerFood .progress-bar').css("width", player.food + "%").attr("aria-valuenow", player.food);
                    $('#playerHealth .progress-bar').css("width", player.health + "%").attr("aria-valuenow", player.health);
                    $('playerFun .progress-bar').css("width", player.fun + "%").attr("aria-valuenow", player.fun);
                    console.log("verifStats");
                };
                var verifInterval = setInterval(verifStats, 1000);
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application || (Application = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZGlyZWN0aXZlcy9tc2ctZGlyZWN0aXZlLnRzIiwiY29yZS9kaXJlY3RpdmVzL3N0YXRzLWRpcmVjdGl2ZS50cyIsImNvcmUvZmFjdG9yaWVzL3BsYXllci1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvbGlmZS1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvd29yay1mYWN0b3J5LnRzIiwiYXBwLnRzIiwiY29udHJvbGxlcnMvbWFpbi1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQixHQUFHO0FBQ0gsd0NBQXdDO0FBRXhDLElBQU8sV0FBVyxDQTRCakI7QUE1QkQsV0FBTyxXQUFXO0lBQUMsSUFBQSxVQUFVLENBNEI1QjtJQTVCa0IsV0FBQSxVQUFVLEVBQUMsQ0FBQztRQUU5QjtZQUVDO2dCQUVDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUVqQixNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ1osQ0FBQztZQUVELDhCQUFPLEdBQVA7Z0JBRUMsTUFBTSxDQUFDO29CQUNOLHFDQUFxQztvQkFDckMsV0FBVyxFQUFFLDZCQUE2QjtvQkFDMUMsUUFBUSxFQUFFLElBQUk7b0JBQ2QsS0FBSyxFQUFFO3dCQUNOLE1BQU0sRUFBRSxHQUFHO3FCQUNYO2lCQUNELENBQUM7WUFFSCxDQUFDO1lBRUYsbUJBQUM7UUFBRCxDQXhCQSxBQXdCQyxJQUFBO1FBeEJZLHVCQUFZLGVBd0J4QixDQUFBO0lBRUYsQ0FBQyxFQTVCa0IsVUFBVSxHQUFWLHNCQUFVLEtBQVYsc0JBQVUsUUE0QjVCO0FBQUQsQ0FBQyxFQTVCTSxXQUFXLEtBQVgsV0FBVyxRQTRCakI7O0FDaENELGtCQUFrQjtBQUNsQixHQUFHO0FBQ0gsdUNB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RyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5RixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMzQixDQUFDLENBQUM7Z0JBRUYsSUFBSSxhQUFhLEdBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuRCxDQUFDO1lBQ0YscUJBQUM7UUFBRCxDQXJDQSxBQXFDQyxJQUFBO1FBckNZLDBCQUFjLGlCQXFDMUIsQ0FBQTtJQUVGLENBQUMsRUF4Q2tCLFdBQVcsR0FBWCx1QkFBVyxLQUFYLHVCQUFXLFFBd0M3QjtBQUFELENBQUMsRUF4Q00sV0FBVyxLQUFYLFdBQVcsUUF3Q2pCIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvYW5ndWxhci5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZGlyZWN0aXZlcy9tc2ctZGlyZWN0aXZlLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZGlyZWN0aXZlcy9zdGF0cy1kaXJlY3RpdmUudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9mYWN0b3JpZXMvbGlmZS1mYWN0b3J5LnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZmFjdG9yaWVzL3BsYXllci1mYWN0b3J5LnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZmFjdG9yaWVzL3dvcmstZmFjdG9yeS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb250cm9sbGVycy9tYWluLWNvbnRyb2xsZXIudHNcIi8+XG5cbnZhciB0YW1hZ29zaGlBcHAgPSBhbmd1bGFyLm1vZHVsZSgndGFtYWdvc2hpQXBwJywgW10pO1xuXG4vLyBQbGF5ZXJGYWN0b3J5XG50YW1hZ29zaGlBcHAuZmFjdG9yeShcIlBsYXllclwiLCBbKCkgPT5cblx0QXBwbGljYXRpb24uRmFjdG9yaWVzLlBsYXllclxuXSk7XG5cbi8vIE1zZyBEaXJlY3RpdmVcbnRhbWFnb3NoaUFwcC5kaXJlY3RpdmUoXCJtc2dEaXJlY3RpdmVcIiwgKCkgPT5cblx0bmV3IEFwcGxpY2F0aW9uLkRpcmVjdGl2ZXMuTXNnRGlyZWN0aXZlKClcbik7XG5cbi8vIFN0YXRzIERpcmVjdGl2ZVxudGFtYWdvc2hpQXBwLmRpcmVjdGl2ZShcInN0YXRzRGlyZWN0aXZlXCIsICgpID0+XG5cdG5ldyBBcHBsaWNhdGlvbi5EaXJlY3RpdmVzLnN0YXRzRGlyZWN0aXZlKClcbik7XG5cbi8vIExpZmVGYWN0b3J5XG50YW1hZ29zaGlBcHAuZmFjdG9yeShcIkxpZmVcIiwgKCkgPT5cdEFwcGxpY2F0aW9uLkZhY3Rvcmllcy5MaWZlRmFjdG9yeSApO1xuXG4vLyBXb3JrRmFjdG9yeVxudGFtYWdvc2hpQXBwLmZhY3RvcnkoXCJXb3JrXCIsIFsoKSA9PlxuXHRBcHBsaWNhdGlvbi5GYWN0b3JpZXMuV29ya1xuXSk7XG5cblxuLy8gSG9tZUNvbnRyb2xsZXJcbnRhbWFnb3NoaUFwcC5jb250cm9sbGVyKCdIb21lQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJ1BsYXllcicsICdXb3JrJywgJ0xpZmUnLCAoJHNjb3BlLCBQbGF5ZXIsIFdvcmssIExpZmUpID0+XG5cdG5ldyBBcHBsaWNhdGlvbi5Db250cm9sbGVycy5Ib21lQ29udHJvbGxlcigkc2NvcGUsIFBsYXllciwgV29yaywgTGlmZSlcbl0pOyAiLG51bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
