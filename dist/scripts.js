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
                    restrict: 'EA',
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
                    level: 1,
                    xp: 0,
                    money: 400,
                    life: 20,
                    food: 20,
                    fun: 5,
                    health: 40
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
            Work.prototype.combat = function (player, msg) {
                var win = Math.random();
                if (win === 0) {
                    msg = 'Pikachu perd le combat';
                    player.life = player.life - 5;
                    player.health = player.health - 5;
                    player.money = player.money - 15;
                }
                else {
                    msg = 'Pikachu gagne le combat';
                    player.xp = player.xp + 5;
                    player.money = player.money + 15;
                }
            };
            ;
            Work.prototype.training = function (player, msg) {
                msg = 'Pikachu gagne en expérience';
                player.xp = player.xp + 5;
            };
            Work.prototype.updateLevel = function (player, msg) {
                if (player.level === 3 && player.xp === 100) {
                    msg = "Vous avez gagné la partie !";
                }
                else if (player.xp === 100) {
                    msg = "Tamagochu monte d'un niveau !";
                    player.level += 1;
                    player.xp = 0;
                }
                if (player.level === 2) {
                    player.name = "Pikachu";
                    msg = "Tamagochu évolue ! Il devient " + player.name;
                }
                else if (player.level === 3) {
                    player.name = "Raichu";
                    msg = "Tamagochu évolue ! Il devient " + player.name;
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
tamagoshiApp.factory("Player", function () {
    return Application.Factories.Player;
});
// LifeFactory
tamagoshiApp.factory("Life", function () { return Application.Factories.LifeFactory; });
// WorkFactory
tamagoshiApp.factory("Work", function () {
    return Application.Factories.Work;
});
// Msg Directive
tamagoshiApp.directive("msgDirective", function () {
    return new Application.Directives.MsgDirective();
});
// Stats Directive
tamagoshiApp.directive("statsDirective", function () {
    return new Application.Directives.statsDirective();
});
// HomeController
tamagoshiApp.controller('HomeController', ['$scope', '$interval', 'Player', 'Work', 'Life', function ($scope, $interval, Player, Work, Life) {
        return new Application.Controllers.HomeController($scope, $interval, Player, Work, Life);
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
            function HomeController($scope, $interval, Player, Work, Life) {
                this.scope = $scope;
                this.interval = $interval;
                // Player Factory
                this.player = new Player;
                // Life Factory
                this.lifeFactory = new Life;
                this.lifeFactory.wash(this.player);
                // Msg Directive
                this.sysMsg = "Hello " + this.player.name + " !";
                console.log(this.sysMsg);
            }
            ;
            // Vérification des stats du player pour lancement des msg alertes et des progress-bar
            HomeController.prototype.updateStats = function (player, msg) {
                var _this = this;
                var verifStats = function (player, msg) {
                    // Mise à jour des progress-bars
                    $('#playerLife .progress-bar').css("width", player.life + "%").attr("aria-valuenow", player.life);
                    $('#playerFood .progress-bar').css("width", player.food + "%").attr("aria-valuenow", player.food);
                    $('#playerHealth .progress-bar').css("width", player.health + "%").attr("aria-valuenow", player.health);
                    $('#playerFun .progress-bar').css("width", player.fun + "%").attr("aria-valuenow", player.fun);
                    //console.log(player);
                    // Msg a afficher du moins important au plus important
                    // @ gérer visuellement les différents niveaux d'alerte des messages
                    // Fun
                    if (player.fun <= 5) {
                        msg = "Tu joue avec moi ?";
                    }
                    // Health
                    if (player.health <= 5) {
                        msg = "Tu peux me donner un bain ?";
                    }
                    // Food
                    if (player.food <= 5) {
                        msg = "J'ai faim !";
                    }
                    // Life
                    if (player.life <= 5 && player.life !== 0) {
                        msg = "Attention votre tamagoshu n'a presque plus de point de vie !";
                    }
                    else if (player.life === 0) {
                        msg = "Oh non ! Tamagoshu est mort. Voulez-vous recommencer la partie ?";
                        stopGame();
                    }
                    player.life--;
                    console.log(msg);
                };
                var verifInterval = this.interval(function () { verifStats(player, msg); }, 1000);
                var stopGame = function () { _this.interval.cancel(verifInterval); };
            };
            ;
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application || (Application = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZGlyZWN0aXZlcy9tc2ctZGlyZWN0aXZlLnRzIiwiY29yZS9kaXJlY3RpdmVzL3N0YXRzLWRpcmVjdGl2ZS50cyIsImNvcmUvZmFjdG9yaWVzL3BsYXllci1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvbGlmZS1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvd29yay1mYWN0b3J5LnRzIiwiYXBwLnRzIiwiY29udHJvbGxlcnMvbWFpbi1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQixHQUFHO0FBQ0gsd0NBQXdDO0FBRXhDLElBQU8sV0FBVyxDQTRCakI7QUE1QkQsV0FBTyxXQUFXO0lBQUMsSUFBQSxVQUFVLENBNEI1QjtJQTVCa0IsV0FBQSxVQUFVLEVBQUMsQ0FBQztRQUU5QjtZQUVDO2dCQUVDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUVqQixNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ1osQ0FBQztZQUVELDhCQUFPLEdBQVA7Z0JBRUMsTUFBTSxDQUFDO29CQUNOLHFDQUFxQztvQkFDckMsV0FBVyxFQUFFLDZCQUE2QjtvQkFDMUMsUUFBUSxFQUFFLElBQUk7b0JBQ2QsS0FBSyxFQUFFO3dCQUNOLE1BQU0sRUFBRSxHQUFHO3FCQUNYO2lCQUNELENBQUM7WUFFSCxDQUFDO1lBRUYsbUJBQUM7UUFBRCxDQXhCQSxBQXdCQyxJQUFBO1FBeEJZLHVCQUFZLGVBd0J4QixDQUFBO0lBRUYsQ0FBQyxFQTVCa0IsVUFBVSxHQUFWLHNCQUFVLEtBQVYsc0JBQVUsUUE0QjVCO0FBQUQsQ0FBQyxFQTVCTSxXQUFXLEtBQVgsV0FBVyxRQTRCakI7O0FDaENELGtCQUFrQjtBQUNsQixHQUFHO0FBQ0gsdUNB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QUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQztnQkFFRixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQVcsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQSxDQUFBLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDN0UsSUFBSSxRQUFRLEdBQUcsY0FBTyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQztZQUM1RCxDQUFDOztZQUNGLHFCQUFDO1FBQUQsQ0E3REEsQUE2REMsSUFBQTtRQTdEWSwwQkFBYyxpQkE2RDFCLENBQUE7SUFFRixDQUFDLEVBaEVrQixXQUFXLEdBQVgsdUJBQVcsS0FBWCx1QkFBVyxRQWdFN0I7QUFBRCxDQUFDLEVBaEVNLFdBQVcsS0FBWCxXQUFXLFFBZ0VqQiIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2FuZ3VsYXIuZC50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2RpcmVjdGl2ZXMvbXNnLWRpcmVjdGl2ZS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2RpcmVjdGl2ZXMvc3RhdHMtZGlyZWN0aXZlLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZmFjdG9yaWVzL2xpZmUtZmFjdG9yeS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2ZhY3Rvcmllcy9wbGF5ZXItZmFjdG9yeS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2ZhY3Rvcmllcy93b3JrLWZhY3RvcnkudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29udHJvbGxlcnMvbWFpbi1jb250cm9sbGVyLnRzXCIvPlxuXG52YXIgdGFtYWdvc2hpQXBwID0gYW5ndWxhci5tb2R1bGUoJ3RhbWFnb3NoaUFwcCcsIFtdKTtcblxuLy8gUGxheWVyRmFjdG9yeVxudGFtYWdvc2hpQXBwLmZhY3RvcnkoXCJQbGF5ZXJcIiwgKCkgPT5cblx0QXBwbGljYXRpb24uRmFjdG9yaWVzLlBsYXllclxuKTtcblxuLy8gTGlmZUZhY3RvcnlcbnRhbWFnb3NoaUFwcC5mYWN0b3J5KFwiTGlmZVwiLCAoKSA9Plx0QXBwbGljYXRpb24uRmFjdG9yaWVzLkxpZmVGYWN0b3J5ICk7XG5cbi8vIFdvcmtGYWN0b3J5XG50YW1hZ29zaGlBcHAuZmFjdG9yeShcIldvcmtcIiwgKCkgPT5cblx0QXBwbGljYXRpb24uRmFjdG9yaWVzLldvcmtcbik7XG5cbi8vIE1zZyBEaXJlY3RpdmVcbnRhbWFnb3NoaUFwcC5kaXJlY3RpdmUoXCJtc2dEaXJlY3RpdmVcIiwgKCkgPT5cblx0bmV3IEFwcGxpY2F0aW9uLkRpcmVjdGl2ZXMuTXNnRGlyZWN0aXZlKClcbik7XG5cbi8vIFN0YXRzIERpcmVjdGl2ZVxudGFtYWdvc2hpQXBwLmRpcmVjdGl2ZShcInN0YXRzRGlyZWN0aXZlXCIsICgpID0+XG5cdG5ldyBBcHBsaWNhdGlvbi5EaXJlY3RpdmVzLnN0YXRzRGlyZWN0aXZlKClcbik7XG5cbi8vIEhvbWVDb250cm9sbGVyXG50YW1hZ29zaGlBcHAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnUGxheWVyJywgJ1dvcmsnLCAnTGlmZScsICgkc2NvcGUsICRpbnRlcnZhbCwgUGxheWVyLCBXb3JrLCBMaWZlKSA9PlxuXHRuZXcgQXBwbGljYXRpb24uQ29udHJvbGxlcnMuSG9tZUNvbnRyb2xsZXIoJHNjb3BlLCAkaW50ZXJ2YWwsIFBsYXllciwgV29yaywgTGlmZSlcbl0pOyAiLG51bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
