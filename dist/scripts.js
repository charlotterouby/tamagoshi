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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZGlyZWN0aXZlcy9zdGF0cy1kaXJlY3RpdmUudHMiLCJjb3JlL2ZhY3Rvcmllcy9mdW4tZmFjdG9yeS50cyIsImNvcmUvZmFjdG9yaWVzL3BsYXllci1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvbGlmZS1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvd29yay1mYWN0b3J5LnRzIiwiYXBwLnRzIiwiY29udHJvbGxlcnMvbWFpbi1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQixHQUFHO0FBQ0gsdUNBQXVDO0FBRXZDLElBQU8sV0FBVyxDQWtCakI7QUFsQkQsV0FBTyxXQUFXO0lBQUMsSUFBQSxVQUFVLENBa0I1QjtJQWxCa0IsV0FBQSxVQUFVLEVBQUMsQ0FBQztRQUM5QjtZQUNDO2dCQUVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ2pDLENBQUM7WUFFRCwwQ0FBaUIsR0FBakI7Z0JBQ0MsTUFBTSxDQUFDO29CQUNOLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFFBQVEsRUFBRSxJQUFJO29CQUNkLEtBQUssRUFBRTt3QkFDTixNQUFNLEVBQUUsR0FBRztxQkFDWDtpQkFDRCxDQUFDO1lBQ0gsQ0FBQztZQUNGLHFCQUFDO1FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtRQWhCWSx5QkFBYyxpQkFnQjFCLENBQUE7SUFDRixDQUFDLEVBbEJrQixVQUFVLEdBQVYsc0JBQVUsS0FBVixzQkFBVSxRQWtCNUI7QUFBRCxDQUFDLEVBbEJNLFdBQVcsS0FBWCxXQUFXLFFBa0JqQjs7QUN0QkQsYUFBYTtBQUNiLHVDQUF1QztBQUV2QyxJQUFPLFdBQVcsQ0FvQ2pCO0FBcENELFdBQU8sV0FBVztJQUFDLElBQUEsU0FBUyxDQW9DM0I7SUFwQ2tCLFdBQUEsU0FBUyxFQUFDLENBQUM7UUFDN0I7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QUFFLGNBQVksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXZFLENBQUM7WUFHRixxQkFBQztRQUFELENBekZBLEFBeUZDLElBQUE7UUF6RlksMEJBQWMsaUJBeUYxQixDQUFBO0lBRUYsQ0FBQyxFQTVGa0IsV0FBVyxHQUFYLHVCQUFXLEtBQVgsdUJBQVcsUUE0RjdCO0FBQUQsQ0FBQyxFQTVGTSxXQUFXLEtBQVgsV0FBVyxRQTRGakIiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9hbmd1bGFyLmQudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9kaXJlY3RpdmVzL3N0YXRzLWRpcmVjdGl2ZS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2ZhY3Rvcmllcy9saWZlLWZhY3RvcnkudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9mYWN0b3JpZXMvcGxheWVyLWZhY3RvcnkudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9mYWN0b3JpZXMvd29yay1mYWN0b3J5LnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZmFjdG9yaWVzL2Z1bi1mYWN0b3J5LnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvbnRyb2xsZXJzL21haW4tY29udHJvbGxlci50c1wiLz5cblxudmFyIHRhbWFnb3NoaUFwcCA9IGFuZ3VsYXIubW9kdWxlKCd0YW1hZ29zaGlBcHAnLCBbXSk7XG5cbi8vIFBsYXllckZhY3RvcnlcbnRhbWFnb3NoaUFwcC5mYWN0b3J5KFwiUGxheWVyXCIsICgpID0+XG5cdEFwcGxpY2F0aW9uLkZhY3Rvcmllcy5QbGF5ZXJcbik7XG5cbi8vIExpZmVGYWN0b3J5XG50YW1hZ29zaGlBcHAuZmFjdG9yeShcIkxpZmVcIiwgKCkgPT5cdEFwcGxpY2F0aW9uLkZhY3Rvcmllcy5MaWZlRmFjdG9yeSApO1xuXG4vLyBXb3JrRmFjdG9yeVxudGFtYWdvc2hpQXBwLmZhY3RvcnkoXCJXb3JrXCIsICgpID0+XG5cdEFwcGxpY2F0aW9uLkZhY3Rvcmllcy5Xb3JrXG4pO1xuXG4vLyBXb3JrRmFjdG9yeVxudGFtYWdvc2hpQXBwLmZhY3RvcnkoXCJGdW5cIiwgKCkgPT5cblx0QXBwbGljYXRpb24uRmFjdG9yaWVzLkZ1blxuKTtcblxuLy8gU3RhdHMgRGlyZWN0aXZlXG50YW1hZ29zaGlBcHAuZGlyZWN0aXZlKFwic3RhdHNEaXJlY3RpdmVcIiwgKCkgPT5cblx0bmV3IEFwcGxpY2F0aW9uLkRpcmVjdGl2ZXMuc3RhdHNEaXJlY3RpdmUoKVxuKTtcblxuLy8gSG9tZUNvbnRyb2xsZXJcbnRhbWFnb3NoaUFwcC5jb250cm9sbGVyKCdIb21lQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICdQbGF5ZXInLCAnV29yaycsICdMaWZlJywgJ0Z1bicsICgkc2NvcGUsICRpbnRlcnZhbCwgUGxheWVyLCBXb3JrLCBMaWZlLCBGdW4pID0+XG5cdG5ldyBBcHBsaWNhdGlvbi5Db250cm9sbGVycy5Ib21lQ29udHJvbGxlcigkc2NvcGUsICRpbnRlcnZhbCwgUGxheWVyLCBXb3JrLCBMaWZlLCBGdW4pXG5dKTsgIixudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
