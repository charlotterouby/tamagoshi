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
                else if (goshi.money <= 0) {
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
                    $('.frontpage').html('<h2>Vous avez gagné la partie !<br> Votre pokémon a atteint son niveau max.</h2>');
                    $('.overlay').fadeIn('slow');
                }
                else if (player.xp >= 100) {
                    msg = "Tamagochu monte d'un niveau !";
                    sc.msgType = "alert-success";
                    player.level += 1;
                    player.xp = 0;
                }
                if (player.level === 2 && player.xp === 0 && player.name !== "Pikachu") {
                    player.name = "Pikachu";
                    player.img = "assets/img/pikachu.gif";
                    msg = "Tamagochu évolue ! Il devient " + player.name;
                    sc.msgType = "alert-success";
                }
                else if (player.level === 3 && player.xp === 0 && player.name !== "Raichu") {
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
            // Vérification des stats du player pour lancement des msg alertes
            HomeController.prototype.updateStats = function (player, msg) {
                $('.overlay').fadeOut('slow');
                var verifStats = function (scope, player, msg) {
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
                        // @ Arrêter le timer
                        scope.interval.cancel(verifInterval);
                        $('.frontpage').html('Oh non ! Tamagoshu est mort. Voulez-vous recommencer la partie ?');
                        $('.overlay').fadeIn('slow');
                    }
                };
                var sc = this.scope.hc;
                var verifInterval = this.interval(function () { verifStats(sc, player, msg); }, 1000);
            };
            //Modifications auto des stats du tamagoshu
            HomeController.prototype.decStats = function (player) {
                var decVars = function (scope, player) {
                    //Si le jeu est gagné OU si le joueur est mort
                    if (player.level === 3 && player.xp >= 100 || player.life <= 0) {
                        console.log('stop game');
                        scope.interval.cancel(decInterval);
                    }
                    else {
                        player.life--;
                        //Influence du fun sur les stats
                        if (player.fun !== 0) {
                            player.fun -= 5;
                        }
                        else {
                            player.life -= 2;
                        }
                        //Influence de la santé sur les stats
                        if (player.health !== 0) {
                            player.health -= 2;
                        }
                        else {
                            player.life -= 5;
                        }
                    }
                };
                var sc = this.scope.hc;
                var decInterval = this.interval(function () { decVars(sc, player); }, 3000);
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application || (Application = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZGlyZWN0aXZlcy9tc2ctZGlyZWN0aXZlLnRzIiwiY29yZS9kaXJlY3RpdmVzL3N0YXRzLWRpcmVjdGl2ZS50cyIsImNvcmUvZmFjdG9yaWVzL2Z1bi1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvcGxheWVyLWZhY3RvcnkudHMiLCJjb3JlL2ZhY3Rvcmllcy9saWZlLWZhY3RvcnkudHMiLCJjb3JlL2ZhY3Rvcmllcy93b3JrLWZhY3RvcnkudHMiLCJhcHAudHMiLCJjb250cm9sbGVycy9tYWluLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCLEdBQUc7QUFDSCx1Q0FBdUM7QUFFdkMsSUFBTyxXQUFXLENBbUJqQjtBQW5CRCxXQUFPLFdBQVc7SUFBQyxJQUFBLFVBQVUsQ0FtQjVCO0lBbkJrQixXQUFBLFVBQVUsRUFBQyxDQUFDO1FBQzlCO1lBQ0M7Z0JBRUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ2pDLENBQUM7WUFFRCx3Q0FBaUIsR0FBakI7Z0JBQ0MsTUFBTSxDQUFDO29CQUNOLFdBQVcsRUFBRSw2QkFBNkI7b0JBQzFDLFFBQVEsRUFBRSxJQUFJO29CQUNkLEtBQUssRUFBRTt3QkFDTixPQUFPLEVBQUUsR0FBRzt3QkFDWixPQUFPLEVBQUUsR0FBRztxQkFDWjtpQkFDRCxDQUFDO1lBQ0gsQ0FBQztZQUNGLG1CQUFDO1FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtRQWpCWSx1QkFBWSxlQWlCeEIsQ0FBQTtJQUNGLENBQUMsRUFuQmtCLFVBQVUsR0FBVixzQkFBVSxLQUFWLHNCQUFVLFFBbUI1QjtBQUFELENBQUMsRUFuQk0sV0FBVyxLQUFYLFdBQVcsUUFtQmpCOztBQ3ZCRCxrQkFBa0I7QUFDbEIsRUFBRTtBQUNGLHVDQUF1QztBQUV2QyxJQUFPLFdBQVcsQ0FpQmpCO0FBakJE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Q0FBQSxDQUFDOzRCQUNqQixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzt3QkFDcEIsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDSixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQzt3QkFDckIsQ0FBQzt3QkFFRCxxQ0FBcUM7d0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQzs0QkFDckIsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7d0JBQ3ZCLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ0osTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7d0JBQ3JCLENBQUM7b0JBQ0wsQ0FBQztnQkFDTCxDQUFDLENBQUM7Z0JBQ0YsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBWSxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdFLENBQUM7WUFDTCxxQkFBQztRQUFELENBL0ZBLEFBK0ZDLElBQUE7UUEvRlksMEJBQWMsaUJBK0YxQixDQUFBO0lBQ0wsQ0FBQyxFQWpHa0IsV0FBVyxHQUFYLHVCQUFXLEtBQVgsdUJBQVcsUUFpRzdCO0FBQUQsQ0FBQyxFQWpHTSxXQUFXLEtBQVgsV0FBVyxRQWlHakIiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2FuZ3VsYXIuZC50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZGlyZWN0aXZlcy9zdGF0cy1kaXJlY3RpdmUudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2RpcmVjdGl2ZXMvbXNnLWRpcmVjdGl2ZS50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZmFjdG9yaWVzL2xpZmUtZmFjdG9yeS50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZmFjdG9yaWVzL3BsYXllci1mYWN0b3J5LnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9mYWN0b3JpZXMvd29yay1mYWN0b3J5LnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9mYWN0b3JpZXMvZnVuLWZhY3RvcnkudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb250cm9sbGVycy9tYWluLWNvbnRyb2xsZXIudHNcIi8+XHJcblxyXG52YXIgdGFtYWdvc2hpQXBwID0gYW5ndWxhci5tb2R1bGUoJ3RhbWFnb3NoaUFwcCcsIFtdKTtcclxuXHJcbi8vIFBsYXllckZhY3RvcnlcclxudGFtYWdvc2hpQXBwLmZhY3RvcnkoXCJQbGF5ZXJcIiwgKCkgPT5cclxuXHRBcHBsaWNhdGlvbi5GYWN0b3JpZXMuUGxheWVyXHJcbik7XHJcblxyXG4vLyBMaWZlRmFjdG9yeVxyXG50YW1hZ29zaGlBcHAuZmFjdG9yeShcIkxpZmVcIiwgKCkgPT5cdEFwcGxpY2F0aW9uLkZhY3Rvcmllcy5MaWZlRmFjdG9yeSApO1xyXG5cclxuLy8gV29ya0ZhY3RvcnlcclxudGFtYWdvc2hpQXBwLmZhY3RvcnkoXCJXb3JrXCIsICgpID0+XHJcblx0QXBwbGljYXRpb24uRmFjdG9yaWVzLldvcmtcclxuKTtcclxuXHJcbi8vIFdvcmtGYWN0b3J5XHJcbnRhbWFnb3NoaUFwcC5mYWN0b3J5KFwiRnVuXCIsICgpID0+XHJcblx0QXBwbGljYXRpb24uRmFjdG9yaWVzLkZ1blxyXG4pO1xyXG5cclxuLy8gU3RhdHMgRGlyZWN0aXZlXHJcbnRhbWFnb3NoaUFwcC5kaXJlY3RpdmUoXCJzdGF0c0RpcmVjdGl2ZVwiLCAoKSA9PlxyXG5cdG5ldyBBcHBsaWNhdGlvbi5EaXJlY3RpdmVzLnN0YXRzRGlyZWN0aXZlKClcclxuKTtcclxuXHJcbi8vIE1zZyBEaXJlY3RpdmVcclxudGFtYWdvc2hpQXBwLmRpcmVjdGl2ZShcIm1zZ0RpcmVjdGl2ZVwiLCAoKSA9PlxyXG5cdG5ldyBBcHBsaWNhdGlvbi5EaXJlY3RpdmVzLm1zZ0RpcmVjdGl2ZSgpXHJcbik7XHJcblxyXG4vLyBIb21lQ29udHJvbGxlclxyXG50YW1hZ29zaGlBcHAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnUGxheWVyJywgJ1dvcmsnLCAnTGlmZScsICdGdW4nLCAoJHNjb3BlLCAkaW50ZXJ2YWwsIFBsYXllciwgV29yaywgTGlmZSwgRnVuKSA9PlxyXG5cdG5ldyBBcHBsaWNhdGlvbi5Db250cm9sbGVycy5Ib21lQ29udHJvbGxlcigkc2NvcGUsICRpbnRlcnZhbCwgUGxheWVyLCBXb3JrLCBMaWZlLCBGdW4pXHJcbl0pOyBcclxuIixudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
