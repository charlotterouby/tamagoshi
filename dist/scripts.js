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
            Fun.prototype.playBall = function (player, msg) {
                msg = player.name + ' joue au ballon';
                player.fun += 5;
                player.money -= 20;
                $('.msgSystem').html(msg);
                //$('.avatar').animateCss('animated swing');
                console.log(msg);
            };
            Fun.prototype.playWithFriend = function (player, msg) {
                msg = player.name + ' joue avec un ami';
                player.fun += 20;
                player.money -= 50;
                $('.msgSystem').html(msg);
                console.log(msg);
            };
            Fun.prototype.playWithToy = function (player, msg) {
                msg = player.name + ' joue avec une peluche qui fait du bruit !';
                player.fun += 10;
                player.money -= 30;
                $('.msgSystem').html(msg);
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
            LifeFactory.prototype.wash = function (goshi, msg) {
                if (goshi.health === 100) {
                    msg = 'Je suis tout propre !';
                    console.log(msg);
                }
                else if (goshi.money === 0) {
                    msg = "Vous n'avez plus d'argent pour payer le toiletteur";
                    console.log(msg);
                }
                else {
                    goshi.health += 10;
                    goshi.life += 5;
                    goshi.money -= 20;
                    msg = goshi.name + ' se lave';
                    console.log(msg);
                }
                $('.msgSystem').html(msg);
            };
            ;
            LifeFactory.prototype.eat = function (goshi, msg) {
                if (goshi.life === 100) {
                    msg = "J'ai bien mangé, je vais faire une petite sieste !";
                    console.log(msg);
                }
                else if (goshi.food === 0) {
                    msg = "Il n'y a plus rien à manger ! On va faire les courses ?";
                    console.log(msg);
                }
                else {
                    goshi.food -= 10;
                    goshi.life += 5;
                    msg = goshi.name + ' mange';
                    console.log(msg);
                }
                $('.msgSystem').html(msg);
            };
            ;
            LifeFactory.prototype.buyFood = function (goshi, msg) {
                if (goshi.food === 100) {
                    msg = "Votre stock de nourriture est plein !";
                    console.log(msg);
                }
                else if (goshi.money === 0) {
                    msg = "Vous n'avez plus d'argent !";
                    console.log(msg);
                }
                else {
                    msg = goshi.name + ' fait les courses';
                    goshi.food += 10;
                    goshi.money -= 15;
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
            Work.prototype.combat = function (player, msg) {
                var win = this.getRandomIntInclusive(0, 1);
                if (win === 0) {
                    msg = 'Pikachu perd le combat';
                    player.life = player.life - 5;
                    player.health = player.health - 5;
                    player.money = player.money - 15;
                    console.log(msg);
                }
                else {
                    msg = 'Pikachu gagne le combat';
                    player.xp = player.xp + 5;
                    player.money = player.money + 15;
                    console.log(msg);
                }
                $('.msgSystem').html(msg);
                this.updateLevel(player, msg);
            };
            ;
            Work.prototype.training = function (player, msg) {
                msg = 'Pikachu gagne en expérience';
                player.xp = player.xp + 5;
                console.log(msg);
                console.log(player.xp);
                $('.msgSystem').html(msg);
                this.updateLevel(player, msg);
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
                    player.img = "assets/img/pikachu.gif";
                    msg = "Tamagochu évolue ! Il devient " + player.name;
                }
                else if (player.level === 3) {
                    player.name = "Raichu";
                    player.img = "assets/img/raichu.gif";
                    msg = "Tamagochu évolue ! Il devient " + player.name;
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
                // Angular Services
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
            // Vérification des stats du player pour lancement des msg alertes et des progress-bar
            HomeController.prototype.updateStats = function (player, msg) {
                var _this = this;
                $('.overlay').fadeOut('slow');
                var verifStats = function (player, msg) {
                    // Mise à jour des progress-bars
                    $('#playerXp .progress-bar').css("width", player.xp + "%").attr("aria-valuenow", player.xp);
                    $('#playerLife .progress-bar').css("width", player.life + "%").attr("aria-valuenow", player.life);
                    $('#playerFood .progress-bar').css("width", player.food + "%").attr("aria-valuenow", player.food);
                    $('#playerHealth .progress-bar').css("width", player.health + "%").attr("aria-valuenow", player.health);
                    $('#playerFun .progress-bar').css("width", player.fun + "%").attr("aria-valuenow", player.fun);
                    //console.log(player);
                    // Msg a afficher du moins important au plus important
                    // @ gérer visuellement les différents niveaux d'alerte des messages
                    // Fun
                    if (player.fun <= 40) {
                        msg = "Tu joue avec moi ?";
                        $('.msgSystem').html(msg);
                    }
                    // Health
                    if (player.health <= 40) {
                        msg = "Tu peux me donner un bain ?";
                        $('.msgSystem').html(msg);
                    }
                    // Food
                    if (player.food <= 40) {
                        msg = "J'ai faim !";
                        $('.msgSystem').html(msg);
                    }
                    // Life
                    if (player.life <= 15 && player.life !== 0) {
                        msg = "Attention votre tamagoshu n'a presque plus de point de vie !";
                        $('.msgSystem').html(msg);
                    }
                    else if (player.life === 0) {
                        msg = "Oh non ! Tamagoshu est mort. Voulez-vous recommencer la partie ?";
                        $('.msgSystem').html(msg);
                        stopGame();
                    }
                    //console.log(msg);
                };
                var verifInterval = this.interval(function () { verifStats(player, msg); }, 1000);
                var stopGame = function () { _this.interval.cancel(verifInterval); };
            };
            ;
            HomeController.prototype.decStats = function (player) {
                var decVars = function (player) {
                    //console.log('dec');
                    player.life--;
                    player.fun -= 5;
                    player.health -= 2;
                };
                var decInterval = this.interval(function () { decVars(player); }, 3000);
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application || (Application = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZGlyZWN0aXZlcy9zdGF0cy1kaXJlY3RpdmUudHMiLCJjb3JlL2ZhY3Rvcmllcy9mdW4tZmFjdG9yeS50cyIsImNvcmUvZmFjdG9yaWVzL3BsYXllci1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvbGlmZS1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvd29yay1mYWN0b3J5LnRzIiwiYXBwLnRzIiwiY29udHJvbGxlcnMvbWFpbi1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQixHQUFHO0FBQ0gsdUNBQXVDO0FBRXZDLElBQU8sV0FBVyxDQWtCakI7QUFsQkQsV0FBTyxXQUFXO0lBQUMsSUFBQSxVQUFVLENBa0I1QjtJQWxCa0IsV0FBQSxVQUFVLEVBQUMsQ0FBQztRQUM5QjtZQUNDO2dCQUVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ2pDLENBQUM7WUFFRCwwQ0FBaUIsR0FBakI7Z0JBQ0MsTUFBTSxDQUFDO29CQUNOLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFFBQVEsRUFBRSxJQUFJO29CQUNkLEtBQUssRUFBRTt3QkFDTixNQUFNLEVBQUUsR0FBRztxQkFDWDtpQkFDRCxDQUFDO1lBQ0gsQ0FBQztZQUNGLHFCQUFDO1FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtRQWhCWSx5QkFBYyxpQkFnQjFCLENBQUE7SUFDRixDQUFDLEVBbEJrQixVQUFVLEdBQVYsc0JBQVUsS0FBVixzQkFBVSxRQWtCNUI7QUFBRCxDQUFDLEVBbEJNLFdBQVcsS0FBWCxXQUFXLFFBa0JqQjs7QUN0QkQsYUFBYTtBQUNiLHVDQUF1QztBQUV2QyxJQUFPLFdBQVcsQ0FzQ2pCO0FBdENELFdBQU8sV0FBVztJQUFDLElBQUEsU0FBUyxDQXNDM0I7SUF0Q2tCLFdBQUEsU0FBUyxFQUFDLENBQUM7UUFDN0I7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TSxJQUFJLENBQUMsQ0FBQztnQkFFcEIsQ0FBQyxDQUFBO2dCQUVELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUUsY0FBWSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFdkUsQ0FBQztZQUdGLHFCQUFDO1FBQUQsQ0E1RkEsQUE0RkMsSUFBQTtRQTVGWSwwQkFBYyxpQkE0RjFCLENBQUE7SUFFRixDQUFDLEVBL0ZrQixXQUFXLEdBQVgsdUJBQVcsS0FBWCx1QkFBVyxRQStGN0I7QUFBRCxDQUFDLEVBL0ZNLFdBQVcsS0FBWCxXQUFXLFFBK0ZqQiIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2FuZ3VsYXIuZC50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2RpcmVjdGl2ZXMvc3RhdHMtZGlyZWN0aXZlLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZmFjdG9yaWVzL2xpZmUtZmFjdG9yeS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2ZhY3Rvcmllcy9wbGF5ZXItZmFjdG9yeS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2ZhY3Rvcmllcy93b3JrLWZhY3RvcnkudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9mYWN0b3JpZXMvZnVuLWZhY3RvcnkudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29udHJvbGxlcnMvbWFpbi1jb250cm9sbGVyLnRzXCIvPlxuXG52YXIgdGFtYWdvc2hpQXBwID0gYW5ndWxhci5tb2R1bGUoJ3RhbWFnb3NoaUFwcCcsIFtdKTtcblxuLy8gUGxheWVyRmFjdG9yeVxudGFtYWdvc2hpQXBwLmZhY3RvcnkoXCJQbGF5ZXJcIiwgKCkgPT5cblx0QXBwbGljYXRpb24uRmFjdG9yaWVzLlBsYXllclxuKTtcblxuLy8gTGlmZUZhY3RvcnlcbnRhbWFnb3NoaUFwcC5mYWN0b3J5KFwiTGlmZVwiLCAoKSA9Plx0QXBwbGljYXRpb24uRmFjdG9yaWVzLkxpZmVGYWN0b3J5ICk7XG5cbi8vIFdvcmtGYWN0b3J5XG50YW1hZ29zaGlBcHAuZmFjdG9yeShcIldvcmtcIiwgKCkgPT5cblx0QXBwbGljYXRpb24uRmFjdG9yaWVzLldvcmtcbik7XG5cbi8vIFdvcmtGYWN0b3J5XG50YW1hZ29zaGlBcHAuZmFjdG9yeShcIkZ1blwiLCAoKSA9PlxuXHRBcHBsaWNhdGlvbi5GYWN0b3JpZXMuRnVuXG4pO1xuXG4vLyBTdGF0cyBEaXJlY3RpdmVcbnRhbWFnb3NoaUFwcC5kaXJlY3RpdmUoXCJzdGF0c0RpcmVjdGl2ZVwiLCAoKSA9PlxuXHRuZXcgQXBwbGljYXRpb24uRGlyZWN0aXZlcy5zdGF0c0RpcmVjdGl2ZSgpXG4pO1xuXG4vLyBIb21lQ29udHJvbGxlclxudGFtYWdvc2hpQXBwLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGludGVydmFsJywgJ1BsYXllcicsICdXb3JrJywgJ0xpZmUnLCAnRnVuJywgKCRzY29wZSwgJGludGVydmFsLCBQbGF5ZXIsIFdvcmssIExpZmUsIEZ1bikgPT5cblx0bmV3IEFwcGxpY2F0aW9uLkNvbnRyb2xsZXJzLkhvbWVDb250cm9sbGVyKCRzY29wZSwgJGludGVydmFsLCBQbGF5ZXIsIFdvcmssIExpZmUsIEZ1bilcbl0pOyBcbiIsbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
