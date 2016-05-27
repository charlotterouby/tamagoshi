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
                        clearInterval(verifInterval);
                    }
                    player.life--;
                    console.log(msg);
                };
                var verifInterval = setInterval(function () {
                    verifStats(player, msg);
                }, 1000);
            };
            ;
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application || (Application = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZGlyZWN0aXZlcy9tc2ctZGlyZWN0aXZlLnRzIiwiY29yZS9kaXJlY3RpdmVzL3N0YXRzLWRpcmVjdGl2ZS50cyIsImNvcmUvZmFjdG9yaWVzL3BsYXllci1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvbGlmZS1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvd29yay1mYWN0b3J5LnRzIiwiYXBwLnRzIiwiY29udHJvbGxlcnMvbWFpbi1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQixHQUFHO0FBQ0gsd0NBQXdDO0FBRXhDLElBQU8sV0FBVyxDQTRCakI7QUE1QkQsV0FBTyxXQUFXO0lBQUMsSUFBQSxVQUFVLENBNEI1QjtJQTVCa0IsV0FBQSxVQUFVLEVBQUMsQ0FBQztRQUU5QjtZQUVDO2dCQUVDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUVqQixNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ1osQ0FBQztZQUVELDhCQUFPLEdBQVA7Z0JBRUMsTUFBTSxDQUFDO29CQUNOLHFDQUFxQztvQkFDckMsV0FBVyxFQUFFLDZCQUE2QjtvQkFDMUMsUUFBUSxFQUFFLElBQUk7b0JBQ2QsS0FBSyxFQUFFO3dCQUNOLE1BQU0sRUFBRSxHQUFHO3FCQUNYO2lCQUNELENBQUM7WUFFSCxDQUFDO1lBRUYsbUJBQUM7UUFBRCxDQXhCQSxBQXdCQyxJQUFBO1FBeEJZLHVCQUFZLGVBd0J4QixDQUFBO0lBRUYsQ0FBQyxFQTVCa0IsVUFBVSxHQUFWLHNCQUFVLEtBQVYsc0JBQVUsUUE0QjVCO0FBQUQsQ0FBQyxFQTVCTSxXQUFXLEtBQVgsV0FBVyxRQTRCakI7O0FDaENELGtCQUFrQjtBQUNsQixHQUFHO0FBQ0gsdUNB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SSxhQUFhLEdBQUcsV0FBVyxDQUM5QjtvQkFDQyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFBO2dCQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDWCxDQUFDOztZQUNGLHFCQUFDO1FBQUQsQ0E3REEsQUE2REMsSUFBQTtRQTdEWSwwQkFBYyxpQkE2RDFCLENBQUE7SUFFRixDQUFDLEVBaEVrQixXQUFXLEdBQVgsdUJBQVcsS0FBWCx1QkFBVyxRQWdFN0I7QUFBRCxDQUFDLEVBaEVNLFdBQVcsS0FBWCxXQUFXLFFBZ0VqQiIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2FuZ3VsYXIuZC50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2RpcmVjdGl2ZXMvbXNnLWRpcmVjdGl2ZS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2RpcmVjdGl2ZXMvc3RhdHMtZGlyZWN0aXZlLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZmFjdG9yaWVzL2xpZmUtZmFjdG9yeS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2ZhY3Rvcmllcy9wbGF5ZXItZmFjdG9yeS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2ZhY3Rvcmllcy93b3JrLWZhY3RvcnkudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29udHJvbGxlcnMvbWFpbi1jb250cm9sbGVyLnRzXCIvPlxuXG52YXIgdGFtYWdvc2hpQXBwID0gYW5ndWxhci5tb2R1bGUoJ3RhbWFnb3NoaUFwcCcsIFtdKTtcblxuLy8gUGxheWVyRmFjdG9yeVxudGFtYWdvc2hpQXBwLmZhY3RvcnkoXCJQbGF5ZXJcIiwgWygpID0+XG5cdEFwcGxpY2F0aW9uLkZhY3Rvcmllcy5QbGF5ZXJcbl0pO1xuXG4vLyBNc2cgRGlyZWN0aXZlXG50YW1hZ29zaGlBcHAuZGlyZWN0aXZlKFwibXNnRGlyZWN0aXZlXCIsICgpID0+XG5cdG5ldyBBcHBsaWNhdGlvbi5EaXJlY3RpdmVzLk1zZ0RpcmVjdGl2ZSgpXG4pO1xuXG4vLyBTdGF0cyBEaXJlY3RpdmVcbnRhbWFnb3NoaUFwcC5kaXJlY3RpdmUoXCJzdGF0c0RpcmVjdGl2ZVwiLCAoKSA9PlxuXHRuZXcgQXBwbGljYXRpb24uRGlyZWN0aXZlcy5zdGF0c0RpcmVjdGl2ZSgpXG4pO1xuXG4vLyBMaWZlRmFjdG9yeVxudGFtYWdvc2hpQXBwLmZhY3RvcnkoXCJMaWZlXCIsICgpID0+XHRBcHBsaWNhdGlvbi5GYWN0b3JpZXMuTGlmZUZhY3RvcnkgKTtcblxuLy8gV29ya0ZhY3RvcnlcbnRhbWFnb3NoaUFwcC5mYWN0b3J5KFwiV29ya1wiLCBbKCkgPT5cblx0QXBwbGljYXRpb24uRmFjdG9yaWVzLldvcmtcbl0pO1xuXG5cbi8vIEhvbWVDb250cm9sbGVyXG50YW1hZ29zaGlBcHAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBbJyRzY29wZScsICdQbGF5ZXInLCAnV29yaycsICdMaWZlJywgKCRzY29wZSwgUGxheWVyLCBXb3JrLCBMaWZlKSA9PlxuXHRuZXcgQXBwbGljYXRpb24uQ29udHJvbGxlcnMuSG9tZUNvbnRyb2xsZXIoJHNjb3BlLCBQbGF5ZXIsIFdvcmssIExpZmUpXG5dKTsgIixudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
