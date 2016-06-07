// Msg Directive
// 
/// <reference path="../angular.d.ts"/>
var Application;
(function (Application) {
    var Directives;
    (function (Directives) {
        var msgDirective = (function () {
            function msgDirective() {
                console.log("msgDirective");
                return this.instanceDirective();
            }
            msgDirective.prototype.instanceDirective = function () {
                return {
                    templateUrl: 'templates/msg-template.html',
                    restrict: 'EA',
                    scope: {
                        msgText: "=",
                        msgType: "="
                    }
                };
            };
            return msgDirective;
        }());
        Directives.msgDirective = msgDirective;
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

// FunFactory
/// <reference path="../angular.d.ts"/>
var Application;
(function (Application) {
    var Factories;
    (function (Factories) {
        var Fun = (function () {
            function Fun() {
                console.log('FunFactory Loaded');
            }
            Fun.prototype.valBetween = function (v, min, max) {
                console.log(v);
                return (Math.min(max, Math.max(min, v)));
            };
            Fun.prototype.playBall = function (player, msg, sc) {
                msg = player.name + ' joue au ballon';
                player.fun = this.valBetween(player.fun + 5, 0, 100);
                player.money = this.valBetween(player.money - 20, 0, 10000000);
                $('.msgSystem').html(msg);
                sc.msgType = "alert-success";
                //$('.avatar').animateCss('animated swing');
                console.log(msg);
            };
            Fun.prototype.playWithFriend = function (player, msg, sc) {
                msg = player.name + ' joue avec un ami';
                player.fun = this.valBetween(player.fun + 20, 0, 100);
                player.money = this.valBetween(player.money - 50, 0, 10000000);
                $('.msgSystem').html(msg);
                sc.msgType = "alert-success";
                console.log(msg);
            };
            Fun.prototype.playWithToy = function (player, msg, sc) {
                msg = player.name + ' joue avec une peluche qui fait du bruit !';
                player.fun = this.valBetween(player.fun + 10, 0, 100);
                player.money = this.valBetween(player.money - 30, 0, 10000000);
                $('.msgSystem').html(msg);
                sc.msgType = "alert-success";
                console.log(msg);
            };
            return Fun;
        }());
        Factories.Fun = Fun;
    })(Factories = Application.Factories || (Application.Factories = {}));
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
                    xp: 50,
                    money: 400,
                    life: 100,
                    food: 50,
                    fun: 50,
                    health: 50,
                    img: "assets/img/pichu.gif"
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
            }
            LifeFactory.prototype.valBetween = function (v, min, max) {
                console.log(v);
                return (Math.min(max, Math.max(min, v)));
            };
            LifeFactory.prototype.wash = function (goshi, msg, sc) {
                if (goshi.health === 100) {
                    msg = 'Je suis tout propre !';
                    sc.msgType = "alert-success";
                    console.log(msg);
                }
                else if (goshi.money === 0) {
                    msg = "Vous n'avez plus d'argent pour payer le toiletteur";
                    sc.msgType = "alert-danger";
                    console.log(msg);
                }
                else {
                    goshi.health = this.valBetween(goshi.health + 10, 0, 100);
                    goshi.life = this.valBetween(goshi.life + 5, 0, 100);
                    goshi.money = this.valBetween(goshi.money - 20, 0, 10000000);
                    msg = goshi.name + ' se lave';
                    sc.msgType = "alert-success";
                    console.log(msg);
                }
                $('.msgSystem').html(msg);
            };
            ;
            LifeFactory.prototype.eat = function (goshi, msg, sc) {
                if (goshi.life === 100) {
                    msg = "J'ai bien mangé, je vais faire une petite sieste !";
                    sc.msgType = "alert-success";
                    console.log(msg);
                }
                else if (goshi.food === 0) {
                    msg = "Il n'y a plus rien à manger ! On va faire les courses ?";
                    sc.msgType = "alert-warning";
                    console.log(msg);
                }
                else {
                    goshi.food = this.valBetween(goshi.food - 10, 0, 10000);
                    goshi.life = this.valBetween(goshi.life + 5, 0, 100);
                    msg = goshi.name + ' mange';
                    sc.msgType = "alert-info";
                    console.log(msg);
                }
                $('.msgSystem').html(msg);
            };
            ;
            LifeFactory.prototype.buyFood = function (goshi, msg, sc) {
                if (goshi.food === 100) {
                    msg = "Votre stock de nourriture est plein !";
                    sc.msgType = "alert-success";
                    console.log(msg);
                }
                else if (goshi.money === 0) {
                    msg = "Vous n'avez plus d'argent !";
                    sc.msgType = "warning";
                    console.log(msg);
                }
                else {
                    msg = goshi.name + ' fait les courses';
                    sc.msgType = "alert-info";
                    goshi.food = this.valBetween(goshi.food + 10, 0, 10000);
                    goshi.money = this.valBetween(goshi.money - 15, 0, 10000000);
                    console.log(msg);
                }
                $('.msgSystem').html(msg);
            };
            ;
            return LifeFactory;
        }());
        Factories.LifeFactory = LifeFactory;
    })(Factories = Application.Factories || (Application.Factories = {}));
})(Application || (Application = {}));

// WorkFactory
/// <reference path="../angular.d.ts"/>
var Application;
(function (Application) {
    var Factories;
    (function (Factories) {
        var Work = (function () {
            function Work() {
                console.log('WorkFactory Loaded');
            }
            Work.prototype.getRandomIntInclusive = function (min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            };
            Work.prototype.combat = function (player, msg, sc) {
                var win = this.getRandomIntInclusive(0, 1);
                if (win === 0) {
                    msg = 'Pikachu perd le combat';
                    sc.msgType = "alert-warning";
                    player.life = player.life - 5;
                    player.health = player.health - 5;
                    player.money = player.money - 15;
                    console.log(msg);
                }
                else {
                    msg = 'Pikachu gagne le combat';
                    sc.msgType = "alert-success";
                    player.xp = player.xp + 20;
                    player.money = player.money + 15;
                    console.log(msg);
                }
                $('.msgSystem').html(msg);
                this.updateLevel(player, msg, sc);
            };
            ;
            Work.prototype.training = function (player, msg, sc) {
                msg = 'Pikachu gagne en expérience';
                sc.msgType = "alert-success";
                player.xp = player.xp + 5;
                console.log(msg);
                console.log(player.xp);
                console.log(sc);
                $('.msgSystem').html(msg);
                this.updateLevel(player, msg, sc);
            };
            Work.prototype.updateLevel = function (player, msg, sc) {
                if (player.level === 3 && player.xp >= 100) {
                    // msg = "Vous avez gagné la partie !";
                    // console.log('gagné');
                    // sc.msgType = "alert-success";
                    $('.frontpage').html('<h2>Vous avez gagné la partie !<br> Votre pokémon a atteint son niveau max.</h2>');
                    $('.overlay').fadeIn('slow');
                }
                else if (player.xp >= 100) {
                    msg = "Tamagochu monte d'un niveau !";
                    sc.msgType = "alert-success";
                    player.level += 1;
                    player.xp = 0;
                }
                if (player.level === 2 && player.xp === 0) {
                    player.name = "Pikachu";
                    player.img = "assets/img/pikachu.gif";
                    msg = "Tamagochu évolue ! Il devient " + player.name;
                    sc.msgType = "alert-success";
                }
                else if (player.level === 3 && player.xp === 0) {
                    player.name = "Raichu";
                    player.img = "assets/img/raichu.gif";
                    msg = "Tamagochu évolue ! Il devient " + player.name;
                    sc.msgType = "alert-success";
                }
                $('.msgSystem').html(msg);
            };
            return Work;
        }());
        Factories.Work = Work;
    })(Factories = Application.Factories || (Application.Factories = {}));
})(Application || (Application = {}));

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
tamagoshiApp.factory("Player", function () {
    return Application.Factories.Player;
});
// LifeFactory
tamagoshiApp.factory("Life", function () { return Application.Factories.LifeFactory; });
// WorkFactory
tamagoshiApp.factory("Work", function () {
    return Application.Factories.Work;
});
// WorkFactory
tamagoshiApp.factory("Fun", function () {
    return Application.Factories.Fun;
});
// Stats Directive
tamagoshiApp.directive("statsDirective", function () {
    return new Application.Directives.statsDirective();
});
// Msg Directive
tamagoshiApp.directive("msgDirective", function () {
    return new Application.Directives.msgDirective();
});
// HomeController
tamagoshiApp.controller('HomeController', ['$scope', '$interval', 'Player', 'Work', 'Life', 'Fun', function ($scope, $interval, Player, Work, Life, Fun) {
        return new Application.Controllers.HomeController($scope, $interval, Player, Work, Life, Fun);
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
            function HomeController($scope, $interval, Player, Work, Life, Fun) {
                // Angular Service
                $scope.$watch('msgType', function () {
                    console.log('hey, myVar has changed!');
                });
                this.scope = $scope;
                this.interval = $interval;
                // Player Factory
                this.player = new Player;
                // Life Factory
                this.lifeFactory = new Life;
                // Work Factory
                this.workFactory = new Work;
                // Fun Factory
                this.funFactory = new Fun;
            }
            ;
            // Vérification des stats du player pour lancement des msg alertes
            HomeController.prototype.updateStats = function (player, msg) {
                var _this = this;
                $('.overlay').fadeOut('slow');
                var verifStats = function (scope, player, msg) {
                    // Msg a afficher du moins important au plus important
                    // Fun
                    if (player.fun <= 40) {
                        msg = "Tu joue avec moi ?";
                        $('.msgSystem').html(msg);
                        scope.msgType = "alert-info";
                    }
                    // Health
                    if (player.health <= 40) {
                        msg = "Tu peux me donner un bain ?";
                        scope.msgType = "alert-info";
                        $('.msgSystem').html(msg);
                    }
                    // Food
                    if (player.life <= 40) {
                        msg = "J'ai faim !";
                        scope.msgType = "alert-warning";
                        $('.msgSystem').html(msg);
                    }
                    // Life
                    if (player.life <= 15 && player.life !== 0) {
                        msg = "Attention votre tamagoshu n'a presque plus de point de vie !";
                        scope.msgType = "alert-danger";
                        $('.msgSystem').html(msg);
                    }
                    else if (player.life <= 0) {
                        // @ pblm avec fonction stopGame qui n'est pas reconnue
                        this.stopGame();
                        $('.frontpage').html('Oh non ! Tamagoshu est mort. Voulez-vous recommencer la partie ?');
                        $('.overlay').fadeIn('slow');
                    }
                };
                var sc = this.scope.hc;
                var verifInterval = this.interval(function () { verifStats(sc, player, msg); }, 1000);
                this.stopGame = function () { _this.interval.cancel(verifInterval); };
            };
            ;
            HomeController.prototype.decStats = function (player) {
                var decVars = function (player) {
                    player.life--;
                    player.fun -= 5;
                    player.health -= 2;
                };
                var decInterval = this.interval(function () { decVars(player); }, 3000);
            };
            ;
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application || (Application = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZGlyZWN0aXZlcy9tc2ctZGlyZWN0aXZlLnRzIiwiY29yZS9kaXJlY3RpdmVzL3N0YXRzLWRpcmVjdGl2ZS50cyIsImNvcmUvZmFjdG9yaWVzL2Z1bi1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvcGxheWVyLWZhY3RvcnkudHMiLCJjb3JlL2ZhY3Rvcmllcy9saWZlLWZhY3RvcnkudHMiLCJjb3JlL2ZhY3Rvcmllcy93b3JrLWZhY3RvcnkudHMiLCJhcHAudHMiLCJjb250cm9sbGVycy9tYWluLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCLEdBQUc7QUFDSCx1Q0FBdUM7QUFFdkMsSUFBTyxXQUFXLENBbUJqQjtBQW5CRCxXQUFPLFdBQVc7SUFBQyxJQUFBLFVBQVUsQ0FtQjVCO0lBbkJrQixXQUFBLFVBQVUsRUFBQyxDQUFDO1FBQzlCO1lBQ0M7Z0JBRUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ2pDLENBQUM7WUFFRCx3Q0FBaUIsR0FBakI7Z0JBQ0MsTUFBTSxDQUFDO29CQUNOLFdBQVcsRUFBRSw2QkFBNkI7b0JBQzFDLFFBQVEsRUFBRSxJQUFJO29CQUNkLEtBQUssRUFBRTt3QkFDTixPQUFPLEVBQUUsR0FBRzt3QkFDWixPQUFPLEVBQUUsR0FBRztxQkFDWjtpQkFDRCxDQUFDO1lBQ0gsQ0FBQztZQUNGLG1CQUFDO1FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtRQWpCWSx1QkFBWSxlQWlCeEIsQ0FBQTtJQUNGLENBQUMsRUFuQmtCLFVBQVUsR0FBVixzQkFBVSxLQUFWLHNCQUFVLFFBbUI1QjtBQUFELENBQUMsRUFuQk0sV0FBVyxLQUFYLFdBQVcsUUFtQmpCOztBQ3ZCRCxrQkFBa0I7QUFDbEIsR0FBRztBQUNILHVDQUF1QztBQUV2QyxJQUFPLFdBQVcsQ0FrQmpCO0FBbEJE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QyxNQUFNLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2RSxDQUFDOztZQUNGLHFCQUFDO1FBQUQsQ0FuRkEsQUFtRkMsSUFBQTtRQW5GWSwwQkFBYyxpQkFtRjFCLENBQUE7SUFDRixDQUFDLEVBckZrQixXQUFXLEdBQVgsdUJBQVcsS0FBWCx1QkFBVyxRQXFGN0I7QUFBRCxDQUFDLEVBckZNLFdBQVcsS0FBWCxXQUFXLFFBcUZqQiIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvYW5ndWxhci5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZGlyZWN0aXZlcy9zdGF0cy1kaXJlY3RpdmUudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9kaXJlY3RpdmVzL21zZy1kaXJlY3RpdmUudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9mYWN0b3JpZXMvbGlmZS1mYWN0b3J5LnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZmFjdG9yaWVzL3BsYXllci1mYWN0b3J5LnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZmFjdG9yaWVzL3dvcmstZmFjdG9yeS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2ZhY3Rvcmllcy9mdW4tZmFjdG9yeS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb250cm9sbGVycy9tYWluLWNvbnRyb2xsZXIudHNcIi8+XG5cbnZhciB0YW1hZ29zaGlBcHAgPSBhbmd1bGFyLm1vZHVsZSgndGFtYWdvc2hpQXBwJywgW10pO1xuXG4vLyBQbGF5ZXJGYWN0b3J5XG50YW1hZ29zaGlBcHAuZmFjdG9yeShcIlBsYXllclwiLCAoKSA9PlxuXHRBcHBsaWNhdGlvbi5GYWN0b3JpZXMuUGxheWVyXG4pO1xuXG4vLyBMaWZlRmFjdG9yeVxudGFtYWdvc2hpQXBwLmZhY3RvcnkoXCJMaWZlXCIsICgpID0+XHRBcHBsaWNhdGlvbi5GYWN0b3JpZXMuTGlmZUZhY3RvcnkgKTtcblxuLy8gV29ya0ZhY3RvcnlcbnRhbWFnb3NoaUFwcC5mYWN0b3J5KFwiV29ya1wiLCAoKSA9PlxuXHRBcHBsaWNhdGlvbi5GYWN0b3JpZXMuV29ya1xuKTtcblxuLy8gV29ya0ZhY3RvcnlcbnRhbWFnb3NoaUFwcC5mYWN0b3J5KFwiRnVuXCIsICgpID0+XG5cdEFwcGxpY2F0aW9uLkZhY3Rvcmllcy5GdW5cbik7XG5cbi8vIFN0YXRzIERpcmVjdGl2ZVxudGFtYWdvc2hpQXBwLmRpcmVjdGl2ZShcInN0YXRzRGlyZWN0aXZlXCIsICgpID0+XG5cdG5ldyBBcHBsaWNhdGlvbi5EaXJlY3RpdmVzLnN0YXRzRGlyZWN0aXZlKClcbik7XG5cbi8vIE1zZyBEaXJlY3RpdmVcbnRhbWFnb3NoaUFwcC5kaXJlY3RpdmUoXCJtc2dEaXJlY3RpdmVcIiwgKCkgPT5cblx0bmV3IEFwcGxpY2F0aW9uLkRpcmVjdGl2ZXMubXNnRGlyZWN0aXZlKClcbik7XG5cbi8vIEhvbWVDb250cm9sbGVyXG50YW1hZ29zaGlBcHAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnUGxheWVyJywgJ1dvcmsnLCAnTGlmZScsICdGdW4nLCAoJHNjb3BlLCAkaW50ZXJ2YWwsIFBsYXllciwgV29yaywgTGlmZSwgRnVuKSA9PlxuXHRuZXcgQXBwbGljYXRpb24uQ29udHJvbGxlcnMuSG9tZUNvbnRyb2xsZXIoJHNjb3BlLCAkaW50ZXJ2YWwsIFBsYXllciwgV29yaywgTGlmZSwgRnVuKVxuXSk7IFxuIixudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
