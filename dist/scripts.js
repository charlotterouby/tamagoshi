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
            Fun.prototype.playBall = function (player, msg, msgType) {
                msg = player.name + ' joue au ballon';
                player.fun += 5;
                player.money -= 20;
                $('.msgSystem').html(msg);
                msgType = "alert-success";
                //$('.avatar').animateCss('animated swing');
                console.log(msg);
            };
            Fun.prototype.playWithFriend = function (player, msg, msgType) {
                msg = player.name + ' joue avec un ami';
                player.fun += 20;
                player.money -= 50;
                $('.msgSystem').html(msg);
                msgType = "alert-success";
                console.log(msg);
            };
            Fun.prototype.playWithToy = function (player, msg, msgType) {
                msg = player.name + ' joue avec une peluche qui fait du bruit !';
                player.fun += 10;
                player.money -= 30;
                $('.msgSystem').html(msg);
                msgType = "alert-success";
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
                    level: 3,
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
            LifeFactory.prototype.wash = function (goshi, msg, msgType) {
                if (goshi.health === 100) {
                    msg = 'Je suis tout propre !';
                    msgType = "alert-success";
                    console.log(msg);
                }
                else if (goshi.money === 0) {
                    msg = "Vous n'avez plus d'argent pour payer le toiletteur";
                    msgType = "alert-danger";
                    console.log(msg);
                }
                else {
                    goshi.health += 10;
                    goshi.life += 5;
                    goshi.money -= 20;
                    msg = goshi.name + ' se lave';
                    msgType = "alert-success";
                    console.log(msg);
                }
                $('.msgSystem').html(msg);
            };
            ;
            LifeFactory.prototype.eat = function (goshi, msg, msgType) {
                if (goshi.life === 100) {
                    msg = "J'ai bien mangé, je vais faire une petite sieste !";
                    msgType = "alert-success";
                    console.log(msg);
                }
                else if (goshi.food === 0) {
                    msg = "Il n'y a plus rien à manger ! On va faire les courses ?";
                    msgType = "alert-warning";
                    console.log(msg);
                }
                else {
                    goshi.food -= 10;
                    goshi.life += 5;
                    msg = goshi.name + ' mange';
                    msgType = "alert-info";
                    console.log(msg);
                }
                $('.msgSystem').html(msg);
            };
            ;
            LifeFactory.prototype.buyFood = function (goshi, msg, msgType) {
                if (goshi.food === 100) {
                    msg = "Votre stock de nourriture est plein !";
                    msgType = "alert-success";
                    console.log(msg);
                }
                else if (goshi.money === 0) {
                    msg = "Vous n'avez plus d'argent !";
                    msgType = "warning";
                    console.log(msg);
                }
                else {
                    msg = goshi.name + ' fait les courses';
                    msgType = "alert-info";
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
            Work.prototype.combat = function (player, msg, msgType) {
                var win = this.getRandomIntInclusive(0, 1);
                if (win === 0) {
                    msg = 'Pikachu perd le combat';
                    msgType = "alert-warning";
                    player.life = player.life - 5;
                    player.health = player.health - 5;
                    player.money = player.money - 15;
                    console.log(msg);
                }
                else {
                    msg = 'Pikachu gagne le combat';
                    msgType = "alert-success";
                    player.xp = player.xp + 50;
                    player.money = player.money + 15;
                    console.log(msg);
                }
                $('.msgSystem').html(msg);
                this.updateLevel(player, msg, msgType);
            };
            ;
            Work.prototype.training = function (player, msg, msgType) {
                msg = 'Pikachu gagne en expérience';
                msgType = "alert-info";
                player.xp = player.xp + 5;
                console.log(msg);
                console.log(player.xp);
                $('.msgSystem').html(msg);
                this.updateLevel(player, msg, msgType);
            };
            Work.prototype.updateLevel = function (player, msg, msgType) {
                if (player.level === 3 && player.xp >= 100) {
                    msg = "Vous avez gagné la partie !";
                    console.log('gagné');
                    msgType = "alert-success";
                    $('.frontpage').html('<h2>Vous avez gagné la partie !<br> Votre pokémon a atteint son niveau max.</h2>');
                    $('.overlay').fadeIn('slow');
                }
                else if (player.xp === 100) {
                    msg = "Tamagochu monte d'un niveau !";
                    msgType = "alert-success";
                    player.level += 1;
                    player.xp = 0;
                }
                if (player.level === 2) {
                    player.name = "Pikachu";
                    player.img = "assets/img/pikachu.gif";
                    msg = "Tamagochu évolue ! Il devient " + player.name;
                    msgType = "alert-success";
                }
                else if (player.level === 3) {
                    player.name = "Raichu";
                    player.img = "assets/img/raichu.gif";
                    msg = "Tamagochu évolue ! Il devient " + player.name;
                    msgType = "alert-success";
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
                this.msgType = "alert-info";
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
                    var _this = this;
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
                        console.log(this.msgType);
                        $('.msgSystem').html(msg);
                        // Methode $apply du scope force à réévaluer les binding donc normalement les ng-class
                        this.$apply(function () { return _this.msgType = "alert-success"; });
                    }
                    // Health
                    if (player.health <= 40) {
                        msg = "Tu peux me donner un bain ?";
                        this.msgType = "alert-warning";
                        $('.msgSystem').html(msg);
                    }
                    // Food
                    if (player.food <= 40) {
                        msg = "J'ai faim !";
                        this.msgType = "alert-warning";
                        $('.msgSystem').html(msg);
                    }
                    // Life
                    if (player.life <= 15 && player.life !== 0) {
                        msg = "Attention votre tamagoshu n'a presque plus de point de vie !";
                        this.msgType = "alert-danger";
                        $('.msgSystem').html(msg);
                    }
                    else if (player.life === 0) {
                        msg = "Oh non ! Tamagoshu est mort. Voulez-vous recommencer la partie ?";
                        this.msgType = "alert-danger";
                        $('.msgSystem').html(msg);
                        this.stopGame();
                    }
                    //console.log(msg);
                };
                var verifInterval = this.interval(function () { verifStats(player, msg); }, 1000);
                this.stopGame = function () { _this.interval.cancel(verifInterval); };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZGlyZWN0aXZlcy9zdGF0cy1kaXJlY3RpdmUudHMiLCJjb3JlL2ZhY3Rvcmllcy9mdW4tZmFjdG9yeS50cyIsImNvcmUvZmFjdG9yaWVzL3BsYXllci1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvbGlmZS1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvd29yay1mYWN0b3J5LnRzIiwiYXBwLnRzIiwiY29udHJvbGxlcnMvbWFpbi1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQixHQUFHO0FBQ0gsdUNBQXVDO0FBRXZDLElBQU8sV0FBVyxDQWtCakI7QUFsQkQsV0FBTyxXQUFXO0lBQUMsSUFBQSxVQUFVLENBa0I1QjtJQWxCa0IsV0FBQSxVQUFVLEVBQUMsQ0FBQztRQUM5QjtZQUNDO2dCQUVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ2pDLENBQUM7WUFFRCwwQ0FBaUIsR0FBakI7Z0JBQ0MsTUFBTSxDQUFDO29CQUNOLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFFBQVEsRUFBRSxJQUFJO29CQUNkLEtBQUssRUFBRTt3QkFDTixNQUFNLEVBQUUsR0FBRztxQkFDWDtpQkFDRCxDQUFDO1lBQ0gsQ0FBQztZQUNGLHFCQUFDO1FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtRQWhCWSx5QkFBYyxpQkFnQjFCLENBQUE7SUFDRixDQUFDLEVBbEJrQixVQUFVLEdBQVYsc0JBQVUsS0FBVixzQkFBVSxRQWtCNUI7QUFBRCxDQUFDLEVBbEJNLFdBQVcsS0FBWCxXQUFXLFFBa0JqQjs7QUN0QkQsYUFBYTtBQUNiLHVDQUF1QztBQUV2QyxJQUFPLFdBQVcsQ0F5Q2pCO0FBekNELFdBQU8sV0FBVztJQUFDLElBQUEsU0FBUyxDQXlDM0I7SUF6Q2tCLFdBQUEsU0FBUyxFQUFDLENBQUM7UUFDN0I7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LGNBQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUM7WUFDN0QsQ0FBQzs7WUFFRCxpQ0FBUSxHQUFSLFVBQVUsTUFBTTtnQkFFZixJQUFJLE9BQU8sR0FBRyxVQUFTLE1BQU07b0JBRTVCLHFCQUFxQjtvQkFFckIsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNkLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO29CQUNoQixNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztnQkFFcEIsQ0FBQyxDQUFBO2dCQUVELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUUsY0FBWSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFdkUsQ0FBQztZQUdGLHFCQUFDO1FBQUQsQ0F0R0EsQUFzR0MsSUFBQTtRQXRHWSwwQkFBYyxpQkFzRzFCLENBQUE7SUFFRixDQUFDLEVBekdrQixXQUFXLEdBQVgsdUJBQVcsS0FBWCx1QkFBVyxRQXlHN0I7QUFBRCxDQUFDLEVBekdNLFdBQVcsS0FBWCxXQUFXLFFBeUdqQiIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2FuZ3VsYXIuZC50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2RpcmVjdGl2ZXMvc3RhdHMtZGlyZWN0aXZlLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZmFjdG9yaWVzL2xpZmUtZmFjdG9yeS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2ZhY3Rvcmllcy9wbGF5ZXItZmFjdG9yeS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2ZhY3Rvcmllcy93b3JrLWZhY3RvcnkudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9mYWN0b3JpZXMvZnVuLWZhY3RvcnkudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29udHJvbGxlcnMvbWFpbi1jb250cm9sbGVyLnRzXCIvPlxuXG52YXIgdGFtYWdvc2hpQXBwID0gYW5ndWxhci5tb2R1bGUoJ3RhbWFnb3NoaUFwcCcsIFtdKTtcblxuLy8gUGxheWVyRmFjdG9yeVxudGFtYWdvc2hpQXBwLmZhY3RvcnkoXCJQbGF5ZXJcIiwgKCkgPT5cblx0QXBwbGljYXRpb24uRmFjdG9yaWVzLlBsYXllclxuKTtcblxuLy8gTGlmZUZhY3RvcnlcbnRhbWFnb3NoaUFwcC5mYWN0b3J5KFwiTGlmZVwiLCAoKSA9Plx0QXBwbGljYXRpb24uRmFjdG9yaWVzLkxpZmVGYWN0b3J5ICk7XG5cbi8vIFdvcmtGYWN0b3J5XG50YW1hZ29zaGlBcHAuZmFjdG9yeShcIldvcmtcIiwgKCkgPT5cblx0QXBwbGljYXRpb24uRmFjdG9yaWVzLldvcmtcbik7XG5cbi8vIFdvcmtGYWN0b3J5XG50YW1hZ29zaGlBcHAuZmFjdG9yeShcIkZ1blwiLCAoKSA9PlxuXHRBcHBsaWNhdGlvbi5GYWN0b3JpZXMuRnVuXG4pO1xuXG4vLyBTdGF0cyBEaXJlY3RpdmVcbnRhbWFnb3NoaUFwcC5kaXJlY3RpdmUoXCJzdGF0c0RpcmVjdGl2ZVwiLCAoKSA9PlxuXHRuZXcgQXBwbGljYXRpb24uRGlyZWN0aXZlcy5zdGF0c0RpcmVjdGl2ZSgpXG4pO1xuXG4vLyBIb21lQ29udHJvbGxlclxudGFtYWdvc2hpQXBwLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGludGVydmFsJywgJ1BsYXllcicsICdXb3JrJywgJ0xpZmUnLCAnRnVuJywgKCRzY29wZSwgJGludGVydmFsLCBQbGF5ZXIsIFdvcmssIExpZmUsIEZ1bikgPT5cblx0bmV3IEFwcGxpY2F0aW9uLkNvbnRyb2xsZXJzLkhvbWVDb250cm9sbGVyKCRzY29wZSwgJGludGVydmFsLCBQbGF5ZXIsIFdvcmssIExpZmUsIEZ1bilcbl0pOyBcbiIsbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
