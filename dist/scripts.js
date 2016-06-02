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
                    player.xp = player.xp + 10;
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
                if (player.level === 3 && player.xp === 100) {
                    msg = "Vous avez gagné la partie !";
                    msgType = "alert-success";
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
                        this.msgType = "alert-success";
                        this.$scope.$apply(function () { return _this.msgType = _this.msgType; });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZGlyZWN0aXZlcy9zdGF0cy1kaXJlY3RpdmUudHMiLCJjb3JlL2ZhY3Rvcmllcy9mdW4tZmFjdG9yeS50cyIsImNvcmUvZmFjdG9yaWVzL3BsYXllci1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvbGlmZS1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvd29yay1mYWN0b3J5LnRzIiwiYXBwLnRzIiwiY29udHJvbGxlcnMvbWFpbi1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQixHQUFHO0FBQ0gsdUNBQXVDO0FBRXZDLElBQU8sV0FBVyxDQWtCakI7QUFsQkQsV0FBTyxXQUFXO0lBQUMsSUFBQSxVQUFVLENBa0I1QjtJQWxCa0IsV0FBQSxVQUFVLEVBQUMsQ0FBQztRQUM5QjtZQUNDO2dCQUVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ2pDLENBQUM7WUFFRCwwQ0FBaUIsR0FBakI7Z0JBQ0MsTUFBTSxDQUFDO29CQUNOLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFFBQVEsRUFBRSxJQUFJO29CQUNkLEtBQUssRUFBRTt3QkFDTixNQUFNLEVBQUUsR0FBRztxQkFDWDtpQkFDRCxDQUFDO1lBQ0gsQ0FBQztZQUNGLHFCQUFDO1FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtRQWhCWSx5QkFBYyxpQkFnQjFCLENBQUE7SUFDRixDQUFDLEVBbEJrQixVQUFVLEdBQVYsc0JBQVUsS0FBVixzQkFBVSxRQWtCNUI7QUFBRCxDQUFDLEVBbEJNLFdBQVcsS0FBWCxXQUFXLFFBa0JqQjs7QUN0QkQsYUFBYTtBQUNiLHVDQUF1QztBQUV2QyxJQUFPLFdBQVcsQ0F5Q2pCO0FBekNELFdBQU8sV0FBVztJQUFDLElBQUEsU0FBUyxDQXlDM0I7SUF6Q2tCLFdBQUEsU0FBUyxFQUFDLENBQUM7UUFDN0I7WUFDQztnQkFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDbEMsQ0FBQztZQUVELHNCQUFRLEdBQVIsVUFBUyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU87Z0JBQzVCLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO2dCQUN0QyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDaEIsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7Z0JBRW5CLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sR0FBRyxlQUFlLENBQUM7Z0JBRTFCLDRDQUE0QztnQkFFNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixDQUFDO1lBRUQsNEJBQWMsR0FBZCxVQUFlLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTztnQkFDbEMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsbUJBQW1CLENBQUM7Z0JBQ3hDLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO2dCQUNqQixNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztnQkFFbkIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUIsT0FBTyxHQUFHLGVBQWUsQ0FBQztnQkFFMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixDQUFDO1lBRUQseUJBQVcsR0FBWCxVQUFZLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTztnQkFDL0IsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsNENBQTRDLENBQUM7Z0JBQ2pFLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO2dCQUNqQixNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztnQkFFbkIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUIsT0FBTyxHQUFHLGVBQWUsQ0FBQztnQkFFMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixDQUFDO1lBQ0YsVUFBQztRQUFELENBdkNBLEFBdUNDLElBQUE7UUF2Q1ksYUFBRyxNQXVDZixDQUFBO0lBQ0YsQ0FBQyxFQXpDa0IsU0FBUyxHQUFULHFCQUFTLEtBQVQscUJBQVMsUUF5QzNCO0FBQUQsQ0FBQyxFQXpDTSxXQUFXLEtBQVgsV0FBVyxRQXlDakI7O0FDNUNELGdCQUFnQjtBQUNoQix1Q0FBdUM7QUFFdkMsSUFBTyxXQUFXLENBdUJqQjtBQXZCRCxXQUFPLFdBQVc7SUFBQyxJQUFBLFNBQVMsQ0F1QjNCO0lBdkJrQixXQUFBLFNBQVMsRUFBQyxDQUFDO1FBQzdCO1lBR0M7Z0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM1QixDQUFDO1lBRU8sNkJBQVksR0FBcEI7Z0JBQ0MsSUFBSSxNQUFNLEdBQUc7b0JBQ1osSUFBSSxFQUFFLE9BQU87b0JBQ2IsS0FBSyxFQUFFLENBQUM7b0JBQ1IsRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLEdBQUc7b0JBQ1YsSUFBSSxFQUFFLEdBQUc7b0JBQ1QsSUFBSSxFQUFFLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLEVBQUU7b0JBQ1YsR0FBRyxFQUFFLHNCQUFzQjtpQkFDM0IsQ0FBQTtnQkFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2YsQ0FBQztZQUNGLGFBQUM7UUFBRCxDQXJCQSxBQXFCQyxJQUFBO1FBckJZLGdCQUFNLFNBcUJsQixDQUFBO0lBQ0YsQ0FBQyxFQXZCa0IsU0FBUyxHQUFULHFCQUFTLEtBQVQscUJBQVMsUUF1QjNCO0FBQUQsQ0FBQyxFQXZCTSxXQUFXLEtBQVgsV0FBVyxRQXVCakI7O0FDMUJELGdCQUFnQjtBQUNoQix1Q0FBdUM7QUFDdkMseUNBQXlDO0FBRXpDLElBQU8sV0FBVyxDQXFFakI7QUFyRUQsV0FBTyxXQUFXO0lBQUMsSUFBQSxTQUFTLENBcUUzQjtJQXJFa0IsV0FBQSxTQUFTLEVBQUMsQ0FBQztRQUU3QjtZQUVDO2dCQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBRUEsMEJBQUksR0FBSixVQUFNLEtBQVUsRUFBRyxHQUFXLEVBQUUsT0FBZTtnQkFDOUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUMzQixHQUFHLEdBQUcsdUJBQXVCLENBQUM7b0JBQzlCLE9BQU8sR0FBRyxlQUFlLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFDOUIsR0FBRyxHQUFHLG9EQUFvRCxDQUFDO29CQUMzRCxPQUFPLEdBQUcsY0FBYyxDQUFDO29CQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLEtBQUssQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO29CQUNyQixLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztvQkFDZCxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDcEIsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO29CQUM5QixPQUFPLEdBQUcsZUFBZSxDQUFDO29CQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixDQUFDO2dCQUVGLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQzs7WUFFRCx5QkFBRyxHQUFILFVBQUssS0FBVSxFQUFFLEdBQVcsRUFBRSxPQUFjO2dCQUMzQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFBLENBQUM7b0JBQ3ZCLEdBQUcsR0FBRyxvREFBb0QsQ0FBQztvQkFDM0QsT0FBTyxHQUFHLGVBQWUsQ0FBQztvQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEIsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUM1QixHQUFHLEdBQUcseURBQXlELENBQUM7b0JBQ2hFLE9BQU8sR0FBRyxlQUFlLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1AsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQ2pCLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO29CQUNoQixHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7b0JBQzVCLE9BQU8sR0FBRyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLENBQUM7Z0JBRUQsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDOztZQUVELDZCQUFPLEdBQVAsVUFBUyxLQUFVLEVBQUUsR0FBVyxFQUFFLE9BQWU7Z0JBQ2hELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUksR0FBRyxDQUFDLENBQUEsQ0FBQztvQkFDdEIsR0FBRyxHQUFHLHVDQUF1QyxDQUFDO29CQUM5QyxPQUFPLEdBQUcsZUFBZSxDQUFDO29CQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlCLEdBQUcsR0FBRyw2QkFBNkIsQ0FBQztvQkFDcEMsT0FBTyxHQUFHLFNBQVMsQ0FBQztvQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDUCxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxtQkFBbUIsQ0FBQztvQkFDdkMsT0FBTyxHQUFHLFlBQVksQ0FBQztvQkFDdkIsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQ2pCLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO29CQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixDQUFDO2dCQUVELENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQzs7WUFDRixrQkFBQztRQUFELENBbEVBLEFBa0VDLElBQUE7UUFsRVkscUJBQVcsY0FrRXZCLENBQUE7SUFDRixDQUFDLEVBckVrQixTQUFTLEdBQVQscUJBQVMsS0FBVCxxQkFBUyxRQXFFM0I7QUFBRCxDQUFDLEVBckVNLFdBQVcsS0FBWCxXQUFXLFFBcUVqQjs7QUN6RUQsY0FBYztBQUNkLHVDQUF1QztBQUV2QyxJQUFPLFdBQVcsQ0E0RWpCO0FBNUVELFdBQU8sV0FBVztJQUFDLElBQUEsU0FBUyxDQTRFM0I7SUE1RWtCLFdBQUEsU0FBUyxFQUFDLENBQUM7UUFDN0I7WUFFQztnQkFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUdELG9DQUFxQixHQUFyQixVQUFzQixHQUFHLEVBQUUsR0FBRztnQkFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUMxRCxDQUFDO1lBRUQscUJBQU0sR0FBTixVQUFPLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTztnQkFDMUIsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFFbEQsRUFBRSxDQUFBLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7b0JBQ2IsR0FBRyxHQUFHLHdCQUF3QixDQUFDO29CQUMvQixPQUFPLEdBQUcsZUFBZSxDQUFDO29CQUMxQixNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUNsQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNQLEdBQUcsR0FBRyx5QkFBeUIsQ0FBQztvQkFDaEMsT0FBTyxHQUFHLGVBQWUsQ0FBQztvQkFDMUIsTUFBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztvQkFDM0IsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEIsQ0FBQztnQkFFRCxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUUxQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDeEMsQ0FBQzs7WUFFRCx1QkFBUSxHQUFSLFVBQVMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPO2dCQUM1QixHQUFHLEdBQUUsNkJBQTZCLENBQUM7Z0JBQ25DLE9BQU8sR0FBRyxZQUFZLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUV2QixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUUxQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDeEMsQ0FBQztZQUVELDBCQUFXLEdBQVgsVUFBWSxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU87Z0JBQy9CLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUEsQ0FBQztvQkFDM0MsR0FBRyxHQUFHLDZCQUE2QixDQUFDO29CQUNwQyxPQUFPLEdBQUcsZUFBZSxDQUFDO2dCQUUzQixDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFBLENBQUM7b0JBQzVCLEdBQUcsR0FBRywrQkFBK0IsQ0FBQztvQkFDdEMsT0FBTyxHQUFHLGVBQWUsQ0FBQztvQkFDMUIsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ2xCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLENBQUM7Z0JBRUQsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUN0QixNQUFNLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztvQkFDeEIsTUFBTSxDQUFDLEdBQUcsR0FBRyx3QkFBd0IsQ0FBQztvQkFDdEMsR0FBRyxHQUFHLGdDQUFnQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ3JELE9BQU8sR0FBRyxlQUFlLENBQUM7Z0JBRTNCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFDOUIsTUFBTSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7b0JBQ3ZCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsdUJBQXVCLENBQUM7b0JBQ3JDLEdBQUcsR0FBRyxnQ0FBZ0MsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNyRCxPQUFPLEdBQUcsZUFBZSxDQUFDO2dCQUUzQixDQUFDO2dCQUVELENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQztZQUNGLFdBQUM7UUFBRCxDQTFFQSxBQTBFQyxJQUFBO1FBMUVZLGNBQUksT0EwRWhCLENBQUE7SUFDRixDQUFDLEVBNUVrQixTQUFTLEdBQVQscUJBQVMsS0FBVCxxQkFBUyxRQTRFM0I7QUFBRCxDQUFDLEVBNUVNLFdBQVcsS0FBWCxXQUFXLFFBNEVqQjs7QUMvRUQseUNBQXlDO0FBQ3pDLDBEQUEwRDtBQUMxRCxzREFBc0Q7QUFDdEQsd0RBQXdEO0FBQ3hELHNEQUFzRDtBQUN0RCxxREFBcUQ7QUFDckQsc0RBQXNEO0FBRXRELElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRXRELGdCQUFnQjtBQUNoQixZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtJQUM5QixPQUFBLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUE1QixDQUE0QixDQUM1QixDQUFDO0FBRUYsY0FBYztBQUNkLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLGNBQU0sT0FBQSxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBakMsQ0FBaUMsQ0FBRSxDQUFDO0FBRXZFLGNBQWM7QUFDZCxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtJQUM1QixPQUFBLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUExQixDQUEwQixDQUMxQixDQUFDO0FBRUYsY0FBYztBQUNkLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO0lBQzNCLE9BQUEsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHO0FBQXpCLENBQXlCLENBQ3pCLENBQUM7QUFFRixrQkFBa0I7QUFDbEIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtJQUN4QyxPQUFBLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7QUFBM0MsQ0FBMkMsQ0FDM0MsQ0FBQztBQUVGLGlCQUFpQjtBQUNqQixZQUFZLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUc7UUFDN0ksT0FBQSxJQUFJLFdBQVcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO0lBQXRGLENBQXNGO0NBQ3RGLENBQUMsQ0FBQzs7QUNwQ0gsNENBQTRDO0FBQzVDLGlDQUFpQztBQUNqQywyREFBMkQ7QUFFM0QsSUFBTyxXQUFXLENBd0dqQjtBQXhHRCxXQUFPLFdBQVc7SUFBQyxJQUFBLFdBQVcsQ0F3RzdCO0lBeEdrQixXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQy9CO1lBU0Msd0JBQVksTUFBaUIsRUFBRSxTQUE4QixFQUFFLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBUyxFQUFFLEdBQVE7Z0JBRjFHLFlBQU8sR0FBVyxZQUFZLENBQUM7Z0JBRzlCLG1CQUFtQjtnQkFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO2dCQUMxQixpQkFBaUI7Z0JBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUM7Z0JBQ3pCLGVBQWU7Z0JBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQztnQkFDNUIsZUFBZTtnQkFDZixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDO2dCQUM1QixjQUFjO2dCQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLENBQUM7WUFHM0IsQ0FBQzs7WUFFRCxzRkFBc0Y7WUFDdEYsb0NBQVcsR0FBWCxVQUFZLE1BQU0sRUFBRSxHQUFHO2dCQUF2QixpQkF3REM7Z0JBdERBLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRTlCLElBQUksVUFBVSxHQUFHLFVBQVMsTUFBTSxFQUFFLEdBQUc7b0JBQXBCLGlCQWdEaEI7b0JBL0NBLGdDQUFnQztvQkFDaEMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM1RixDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xHLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEcsQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4RyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRS9GLHNCQUFzQjtvQkFFdEIsc0RBQXNEO29CQUN0RCxvRUFBb0U7b0JBQ3BFLE1BQU07b0JBQ04sRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO3dCQUNwQixHQUFHLEdBQUcsb0JBQW9CLENBQUM7d0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUMxQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUUxQixJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQzt3QkFFL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO29CQUN2RCxDQUFDO29CQUNELFNBQVM7b0JBQ1QsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO3dCQUN2QixHQUFHLEdBQUcsNkJBQTZCLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO3dCQUMvQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMzQixDQUFDO29CQUNELE9BQU87b0JBQ1AsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO3dCQUNyQixHQUFHLEdBQUcsYUFBYSxDQUFDO3dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQzt3QkFDL0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0IsQ0FBQztvQkFDRCxPQUFPO29CQUNQLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDMUMsR0FBRyxHQUFHLDhEQUE4RCxDQUFDO3dCQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQzt3QkFDOUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0IsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixHQUFHLEdBQUcsa0VBQWtFLENBQUM7d0JBQ3pFLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO3dCQUM5QixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUMxQixRQUFRLEVBQUUsQ0FBQztvQkFDWixDQUFDO29CQUdELG1CQUFtQjtnQkFDcEIsQ0FBQyxDQUFDO2dCQUVGLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBVyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLFFBQVEsR0FBRyxjQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDO1lBQzVELENBQUM7O1lBRUQsaUNBQVEsR0FBUixVQUFVLE1BQU07Z0JBRWYsSUFBSSxPQUFPLEdBQUcsVUFBUyxNQUFNO29CQUU1QixxQkFBcUI7b0JBRXJCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDZCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDaEIsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7Z0JBRXBCLENBQUMsQ0FBQTtnQkFFRCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFFLGNBQVksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXZFLENBQUM7WUFHRixxQkFBQztRQUFELENBckdBLEFBcUdDLElBQUE7UUFyR1ksMEJBQWMsaUJBcUcxQixDQUFBO0lBRUYsQ0FBQyxFQXhHa0IsV0FBVyxHQUFYLHVCQUFXLEtBQVgsdUJBQVcsUUF3RzdCO0FBQUQsQ0FBQyxFQXhHTSxXQUFXLEtBQVgsV0FBVyxRQXdHakIiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9hbmd1bGFyLmQudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9kaXJlY3RpdmVzL3N0YXRzLWRpcmVjdGl2ZS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2ZhY3Rvcmllcy9saWZlLWZhY3RvcnkudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9mYWN0b3JpZXMvcGxheWVyLWZhY3RvcnkudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9mYWN0b3JpZXMvd29yay1mYWN0b3J5LnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZmFjdG9yaWVzL2Z1bi1mYWN0b3J5LnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvbnRyb2xsZXJzL21haW4tY29udHJvbGxlci50c1wiLz5cblxudmFyIHRhbWFnb3NoaUFwcCA9IGFuZ3VsYXIubW9kdWxlKCd0YW1hZ29zaGlBcHAnLCBbXSk7XG5cbi8vIFBsYXllckZhY3RvcnlcbnRhbWFnb3NoaUFwcC5mYWN0b3J5KFwiUGxheWVyXCIsICgpID0+XG5cdEFwcGxpY2F0aW9uLkZhY3Rvcmllcy5QbGF5ZXJcbik7XG5cbi8vIExpZmVGYWN0b3J5XG50YW1hZ29zaGlBcHAuZmFjdG9yeShcIkxpZmVcIiwgKCkgPT5cdEFwcGxpY2F0aW9uLkZhY3Rvcmllcy5MaWZlRmFjdG9yeSApO1xuXG4vLyBXb3JrRmFjdG9yeVxudGFtYWdvc2hpQXBwLmZhY3RvcnkoXCJXb3JrXCIsICgpID0+XG5cdEFwcGxpY2F0aW9uLkZhY3Rvcmllcy5Xb3JrXG4pO1xuXG4vLyBXb3JrRmFjdG9yeVxudGFtYWdvc2hpQXBwLmZhY3RvcnkoXCJGdW5cIiwgKCkgPT5cblx0QXBwbGljYXRpb24uRmFjdG9yaWVzLkZ1blxuKTtcblxuLy8gU3RhdHMgRGlyZWN0aXZlXG50YW1hZ29zaGlBcHAuZGlyZWN0aXZlKFwic3RhdHNEaXJlY3RpdmVcIiwgKCkgPT5cblx0bmV3IEFwcGxpY2F0aW9uLkRpcmVjdGl2ZXMuc3RhdHNEaXJlY3RpdmUoKVxuKTtcblxuLy8gSG9tZUNvbnRyb2xsZXJcbnRhbWFnb3NoaUFwcC5jb250cm9sbGVyKCdIb21lQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICdQbGF5ZXInLCAnV29yaycsICdMaWZlJywgJ0Z1bicsICgkc2NvcGUsICRpbnRlcnZhbCwgUGxheWVyLCBXb3JrLCBMaWZlLCBGdW4pID0+XG5cdG5ldyBBcHBsaWNhdGlvbi5Db250cm9sbGVycy5Ib21lQ29udHJvbGxlcigkc2NvcGUsICRpbnRlcnZhbCwgUGxheWVyLCBXb3JrLCBMaWZlLCBGdW4pXG5dKTsgXG4iLG51bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
