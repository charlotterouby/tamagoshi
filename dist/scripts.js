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
                console.log(msg);
            };
            Fun.prototype.playWithFriend = function (player, msg) {
                msg = player.name + ' joue avec un ami';
                player.fun += 20;
                player.money -= 50;
                console.log(msg);
            };
            Fun.prototype.playWithToy = function (player, msg) {
                msg = player.name + ' joue avec une peluche qui fait du bruit !';
                player.fun += 10;
                player.money -= 30;
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
                    health: 50
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
                this.updateLevel(player, msg);
            };
            ;
            Work.prototype.training = function (player, msg) {
                msg = 'Pikachu gagne en expérience';
                player.xp = player.xp + 5;
                console.log(msg);
                console.log(player.xp);
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
// Msg Directive
tamagoshiApp.directive("msgDirective", function () {
    return new Application.Directives.MsgDirective();
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
                    $('#playerXp .progress-bar').css("width", player.xp + "%").attr("aria-valuenow", player.xp);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZGlyZWN0aXZlcy9tc2ctZGlyZWN0aXZlLnRzIiwiY29yZS9kaXJlY3RpdmVzL3N0YXRzLWRpcmVjdGl2ZS50cyIsImNvcmUvZmFjdG9yaWVzL2Z1bi1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvcGxheWVyLWZhY3RvcnkudHMiLCJjb3JlL2ZhY3Rvcmllcy9saWZlLWZhY3RvcnkudHMiLCJjb3JlL2ZhY3Rvcmllcy93b3JrLWZhY3RvcnkudHMiLCJhcHAudHMiLCJjb250cm9sbGVycy9tYWluLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCLEdBQUc7QUFDSCx3Q0FBd0M7QUFFeEMsSUFBTyxXQUFXLENBNEJqQjtBQTVCRCxXQUFPLFdBQVc7SUFBQyxJQUFBLFVBQVUsQ0E0QjVCO0lBNUJrQixXQUFBLFVBQVUsRUFBQyxDQUFDO1FBRTlCO1lBRUM7Z0JBRUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRWpCLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDWixDQUFDO1lBRUQsOEJBQU8sR0FBUDtnQkFFQyxNQUFNLENBQUM7b0JBQ04scUNBQXFDO29CQUNyQyxXQUFXLEVBQUUsNkJBQTZCO29CQUMxQyxRQUFRLEVBQUUsSUFBSTtvQkFDZCxLQUFLLEVBQUU7d0JBQ04sTUFBTSxFQUFFLEdBQUc7cUJBQ1g7aUJBQ0QsQ0FBQztZQUVILENBQUM7WUFFRixtQkFBQztRQUFELENBeEJBLEFBd0JDLElBQUE7UUF4QlksdUJBQVksZUF3QnhCLENBQUE7SUFFRixDQUFDLEVBNUJrQixVQUFVLEdBQVYsc0JBQVUsS0FBVixzQkFBVSxRQTRCNUI7QUFBRCxDQUFDLEVBNUJNLFdBQVcsS0FBWCxXQUFXLFFBNEJqQjs7QUNoQ0Qsa0JBQWtCO0FBQ2xCLEdBQUc7QUFDSCx1Q0FBdUM7QUFFdkMsSUFBTyxXQUFXLENBa0JqQjtBQWxCRCxXQUFPLFdBQVc7SUFBQyxJQUFBLFVBQVUsQ0FrQjVCO0lBbEJrQixXQUFBLFVBQVUsRUFBQyxDQUFDO1FBQzlCO1lBQ0M7Z0JBRUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDakMsQ0FBQztZQUVELDBDQUFpQixHQUFqQjtnQkFDQyxNQUFNLENBQUM7b0JBQ04sV0FBVyxFQUFFLCtCQUErQjtvQkFDNUMsUUFBUSxFQUFFLElBQUk7b0JBQ2QsS0FBSyxFQUFFO3dCQUNOLE1BQU0sRUFBRSxHQUFHO3FCQUNYO2lCQUNELENBQUM7WUFDSCxDQUFDO1lBQ0YscUJBQUM7UUFBRCxDQWhCQSxBQWdCQyxJQUFBO1FBaEJZLHlCQUFjLGlCQWdCMUIsQ0FBQTtJQUNGLENBQUMsRUFsQmtCLFVBQVUsR0FBVixzQkFBVSxLQUFWLHNCQUFVLFFBa0I1QjtBQUFELENBQUMsRUFsQk0sV0FBVyxLQUFYLFdBQVcsUUFrQmpCOztBQ3RCRCxhQUFhO0FBQ2IsdUNBQXVDO0FBRXZDLElBQU8sV0FBVyxDQTJCakI7QUEzQkQsV0FBTyxXQUFXO0lBQUMsSUFBQSxTQUFTLENBMkIzQjtJQTNCa0IsV0FBQSxTQUFTLEVBQUMsQ0FBQztRQUM3QjtZQUNDO2dCQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNsQyxDQUFDO1lBRUQsc0JBQVEsR0FBUixVQUFTLE1BQU0sRUFBRSxHQUFHO2dCQUNuQixHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztnQkFDdEMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFFRCw0QkFBYyxHQUFkLFVBQWUsTUFBTSxFQUFFLEdBQUc7Z0JBQ3pCLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLG1CQUFtQixDQUFDO2dCQUN4QyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztnQkFDakIsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsQ0FBQztZQUVELHlCQUFXLEdBQVgsVUFBWSxNQUFNLEVBQUUsR0FBRztnQkFDdEIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsNENBQTRDLENBQUM7Z0JBQ2pFLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO2dCQUNqQixNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixDQUFDO1lBQ0YsVUFBQztRQUFELENBekJBLEFBeUJDLElBQUE7UUF6QlksYUFBRyxNQXlCZixDQUFBO0lBQ0YsQ0FBQyxFQTNCa0IsU0FBUyxHQUFULHFCQUFTLEtBQVQscUJBQVMsUUEyQjNCO0FBQUQsQ0FBQyxFQTNCTSxXQUFXLEtBQVgsV0FBVyxRQTJCakI7O0FDOUJELGdCQUFnQjtBQUNoQix1Q0FBdUM7QUFFdkMsSUFBTyxXQUFXLENBc0JqQjtBQXRCRCxXQUFPLFdBQVc7SUFBQyxJQUFBLFNBQVMsQ0FzQjNCO0lBdEJrQixXQUFBLFNBQVMsRUFBQyxDQUFDO1FBQzdCO1lBR0M7Z0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM1QixDQUFDO1lBRU8sNkJBQVksR0FBcEI7Z0JBQ0MsSUFBSSxNQUFNLEdBQUc7b0JBQ1osSUFBSSxFQUFFLE9BQU87b0JBQ2IsS0FBSyxFQUFFLENBQUM7b0JBQ1IsRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLEdBQUc7b0JBQ1YsSUFBSSxFQUFFLEdBQUc7b0JBQ1QsSUFBSSxFQUFFLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLEVBQUU7aUJBQ1YsQ0FBQTtnQkFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2YsQ0FBQztZQUNGLGFBQUM7UUFBRCxDQXBCQSxBQW9CQyxJQUFBO1FBcEJZLGdCQUFNLFNBb0JsQixDQUFBO0lBQ0YsQ0FBQyxFQXRCa0IsU0FBUyxHQUFULHFCQUFTLEtBQVQscUJBQVMsUUFzQjNCO0FBQUQsQ0FBQyxFQXRCTSxXQUFXLEtBQVgsV0FBVyxRQXNCakI7O0FDekJELGdCQUFnQjtBQUNoQix1Q0FBdUM7QUFDdkMseUNBQXlDO0FBRXpDLElBQU8sV0FBVyxDQXNEakI7QUF0REQsV0FBTyxXQUFXO0lBQUMsSUFBQSxTQUFTLENBc0QzQjtJQXREa0IsV0FBQSxTQUFTLEVBQUMsQ0FBQztRQUU3QjtZQUVDO2dCQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBRUEsMEJBQUksR0FBSixVQUFNLEtBQVUsRUFBRyxHQUFXO2dCQUM3QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLEdBQUcsR0FBRyx1QkFBdUIsQ0FBQztvQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUM5QixHQUFHLEdBQUcsb0RBQW9ELENBQUM7b0JBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7b0JBQ3JCLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO29CQUNkLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO29CQUNwQixHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7b0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLENBQUM7WUFDSCxDQUFDOztZQUVELHlCQUFHLEdBQUgsVUFBSyxLQUFVLEVBQUUsR0FBVztnQkFDM0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQSxDQUFDO29CQUN2QixHQUFHLEdBQUcsb0RBQW9ELENBQUM7b0JBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFDNUIsR0FBRyxHQUFHLHlEQUF5RCxDQUFDO29CQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNQLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO29CQUNqQixLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztvQkFDaEIsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO29CQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixDQUFDO1lBQ0YsQ0FBQzs7WUFFRCw2QkFBTyxHQUFQLFVBQVMsS0FBVSxFQUFFLEdBQVc7Z0JBQy9CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUksR0FBRyxDQUFDLENBQUEsQ0FBQztvQkFDdEIsR0FBRyxHQUFHLHVDQUF1QyxDQUFDO29CQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlCLEdBQUcsR0FBRyw2QkFBNkIsQ0FBQztvQkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDUCxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxtQkFBbUIsQ0FBQztvQkFDdkMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQ2pCLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO29CQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixDQUFDO1lBQ0YsQ0FBQzs7WUFDRixrQkFBQztRQUFELENBbkRBLEFBbURDLElBQUE7UUFuRFkscUJBQVcsY0FtRHZCLENBQUE7SUFDRixDQUFDLEVBdERrQixTQUFTLEdBQVQscUJBQVMsS0FBVCxxQkFBUyxRQXNEM0I7QUFBRCxDQUFDLEVBdERNLFdBQVcsS0FBWCxXQUFXLFFBc0RqQjs7QUMxREQsY0FBYztBQUNkLHVDQUF1QztBQUV2QyxJQUFPLFdBQVcsQ0E2RGpCO0FBN0RELFdBQU8sV0FBVztJQUFDLElBQUEsU0FBUyxDQTZEM0I7SUE3RGtCLFdBQUEsU0FBUyxFQUFDLENBQUM7UUFDN0I7WUFFQztnQkFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUdELG9DQUFxQixHQUFyQixVQUFzQixHQUFHLEVBQUUsR0FBRztnQkFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUMxRCxDQUFDO1lBRUQscUJBQU0sR0FBTixVQUFPLE1BQU0sRUFBRSxHQUFHO2dCQUNqQixJQUFJLEdBQUcsR0FBVyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVsRCxFQUFFLENBQUEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFDYixHQUFHLEdBQUcsd0JBQXdCLENBQUM7b0JBQy9CLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7b0JBQzlCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQ2xDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1AsR0FBRyxHQUFHLHlCQUF5QixDQUFDO29CQUNoQyxNQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUMxQixNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixDQUFDO2dCQUVELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLENBQUM7O1lBRUQsdUJBQVEsR0FBUixVQUFTLE1BQU0sRUFBRSxHQUFHO2dCQUNuQixHQUFHLEdBQUUsNkJBQTZCLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUV2QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMvQixDQUFDO1lBRUQsMEJBQVcsR0FBWCxVQUFZLE1BQU0sRUFBRSxHQUFHO2dCQUN0QixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFBLENBQUM7b0JBQzNDLEdBQUcsR0FBRyw2QkFBNkIsQ0FBQztnQkFFckMsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQSxDQUFDO29CQUM1QixHQUFHLEdBQUcsK0JBQStCLENBQUM7b0JBQ3RDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUNsQixNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDO2dCQUVELEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFDdEIsTUFBTSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7b0JBQ3hCLEdBQUcsR0FBRyxnQ0FBZ0MsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUV0RCxDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7b0JBQzlCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO29CQUN2QixHQUFHLEdBQUcsZ0NBQWdDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFFdEQsQ0FBQztZQUNGLENBQUM7WUFDRixXQUFDO1FBQUQsQ0EzREEsQUEyREMsSUFBQTtRQTNEWSxjQUFJLE9BMkRoQixDQUFBO0lBQ0YsQ0FBQyxFQTdEa0IsU0FBUyxHQUFULHFCQUFTLEtBQVQscUJBQVMsUUE2RDNCO0FBQUQsQ0FBQyxFQTdETSxXQUFXLEtBQVgsV0FBVyxRQTZEakI7O0FDaEVELHlDQUF5QztBQUN6Qyx3REFBd0Q7QUFDeEQsMERBQTBEO0FBQzFELHNEQUFzRDtBQUN0RCx3REFBd0Q7QUFDeEQsc0RBQXNEO0FBQ3RELHFEQUFxRDtBQUNyRCxzREFBc0Q7QUFFdEQsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFdEQsZ0JBQWdCO0FBQ2hCLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO0lBQzlCLE9BQUEsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQTVCLENBQTRCLENBQzVCLENBQUM7QUFFRixjQUFjO0FBQ2QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsY0FBTSxPQUFBLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFqQyxDQUFpQyxDQUFFLENBQUM7QUFFdkUsY0FBYztBQUNkLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO0lBQzVCLE9BQUEsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJO0FBQTFCLENBQTBCLENBQzFCLENBQUM7QUFFRixjQUFjO0FBQ2QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7SUFDM0IsT0FBQSxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUc7QUFBekIsQ0FBeUIsQ0FDekIsQ0FBQztBQUVGLGdCQUFnQjtBQUNoQixZQUFZLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRTtJQUN0QyxPQUFBLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUU7QUFBekMsQ0FBeUMsQ0FDekMsQ0FBQztBQUVGLGtCQUFrQjtBQUNsQixZQUFZLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFO0lBQ3hDLE9BQUEsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTtBQUEzQyxDQUEyQyxDQUMzQyxDQUFDO0FBRUYsaUJBQWlCO0FBQ2pCLFlBQVksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRztRQUM3SSxPQUFBLElBQUksV0FBVyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7SUFBdEYsQ0FBc0Y7Q0FDdEYsQ0FBQyxDQUFDOztBQzFDSCw0Q0FBNEM7QUFDNUMsaUNBQWlDO0FBQ2pDLDJEQUEyRDtBQUUzRCxJQUFPLFdBQVcsQ0F1RWpCO0FBdkVELFdBQU8sV0FBVztJQUFDLElBQUEsV0FBVyxDQXVFN0I7SUF2RWtCLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFDL0I7WUFTQyx3QkFBWSxNQUFpQixFQUFFLFNBQThCLEVBQUUsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFTLEVBQUUsR0FBUTtnQkFDekcsbUJBQW1CO2dCQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7Z0JBQzFCLGlCQUFpQjtnQkFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQztnQkFDekIsZUFBZTtnQkFDZixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDO2dCQUM1QixlQUFlO2dCQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUM7Z0JBQzVCLGNBQWM7Z0JBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBQztnQkFDMUIsZ0JBQWdCO2dCQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRSxJQUFJLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLENBQUM7O1lBRUQsc0ZBQXNGO1lBQ3RGLG9DQUFXLEdBQVgsVUFBWSxNQUFNLEVBQUUsR0FBRztnQkFBdkIsaUJBc0NDO2dCQXJDQSxJQUFJLFVBQVUsR0FBRyxVQUFTLE1BQU0sRUFBRSxHQUFHO29CQUNwQyxnQ0FBZ0M7b0JBQ2hDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDNUYsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsRyxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xHLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEcsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUUvRixzQkFBc0I7b0JBRXRCLHNEQUFzRDtvQkFDdEQsb0VBQW9FO29CQUNwRSxNQUFNO29CQUNOLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDbkIsR0FBRyxHQUFHLG9CQUFvQixDQUFDO29CQUM1QixDQUFDO29CQUNELFNBQVM7b0JBQ1QsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUN0QixHQUFHLEdBQUcsNkJBQTZCLENBQUM7b0JBQ3JDLENBQUM7b0JBQ0QsT0FBTztvQkFDUCxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQ3BCLEdBQUcsR0FBRyxhQUFhLENBQUM7b0JBQ3JCLENBQUM7b0JBQ0QsT0FBTztvQkFDUCxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQ3pDLEdBQUcsR0FBRyw4REFBOEQsQ0FBQztvQkFDdEUsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixHQUFHLEdBQUcsa0VBQWtFLENBQUM7d0JBQ3pFLFFBQVEsRUFBRSxDQUFDO29CQUNaLENBQUM7b0JBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDO2dCQUVGLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBVyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLFFBQVEsR0FBRyxjQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDO1lBQzVELENBQUM7O1lBR0YscUJBQUM7UUFBRCxDQXBFQSxBQW9FQyxJQUFBO1FBcEVZLDBCQUFjLGlCQW9FMUIsQ0FBQTtJQUVGLENBQUMsRUF2RWtCLFdBQVcsR0FBWCx1QkFBVyxLQUFYLHVCQUFXLFFBdUU3QjtBQUFELENBQUMsRUF2RU0sV0FBVyxLQUFYLFdBQVcsUUF1RWpCIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9hbmd1bGFyLmQudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9kaXJlY3RpdmVzL21zZy1kaXJlY3RpdmUudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9kaXJlY3RpdmVzL3N0YXRzLWRpcmVjdGl2ZS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2ZhY3Rvcmllcy9saWZlLWZhY3RvcnkudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9mYWN0b3JpZXMvcGxheWVyLWZhY3RvcnkudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9mYWN0b3JpZXMvd29yay1mYWN0b3J5LnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZmFjdG9yaWVzL2Z1bi1mYWN0b3J5LnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvbnRyb2xsZXJzL21haW4tY29udHJvbGxlci50c1wiLz5cblxudmFyIHRhbWFnb3NoaUFwcCA9IGFuZ3VsYXIubW9kdWxlKCd0YW1hZ29zaGlBcHAnLCBbXSk7XG5cbi8vIFBsYXllckZhY3RvcnlcbnRhbWFnb3NoaUFwcC5mYWN0b3J5KFwiUGxheWVyXCIsICgpID0+XG5cdEFwcGxpY2F0aW9uLkZhY3Rvcmllcy5QbGF5ZXJcbik7XG5cbi8vIExpZmVGYWN0b3J5XG50YW1hZ29zaGlBcHAuZmFjdG9yeShcIkxpZmVcIiwgKCkgPT5cdEFwcGxpY2F0aW9uLkZhY3Rvcmllcy5MaWZlRmFjdG9yeSApO1xuXG4vLyBXb3JrRmFjdG9yeVxudGFtYWdvc2hpQXBwLmZhY3RvcnkoXCJXb3JrXCIsICgpID0+XG5cdEFwcGxpY2F0aW9uLkZhY3Rvcmllcy5Xb3JrXG4pO1xuXG4vLyBXb3JrRmFjdG9yeVxudGFtYWdvc2hpQXBwLmZhY3RvcnkoXCJGdW5cIiwgKCkgPT5cblx0QXBwbGljYXRpb24uRmFjdG9yaWVzLkZ1blxuKTtcblxuLy8gTXNnIERpcmVjdGl2ZVxudGFtYWdvc2hpQXBwLmRpcmVjdGl2ZShcIm1zZ0RpcmVjdGl2ZVwiLCAoKSA9PlxuXHRuZXcgQXBwbGljYXRpb24uRGlyZWN0aXZlcy5Nc2dEaXJlY3RpdmUoKVxuKTtcblxuLy8gU3RhdHMgRGlyZWN0aXZlXG50YW1hZ29zaGlBcHAuZGlyZWN0aXZlKFwic3RhdHNEaXJlY3RpdmVcIiwgKCkgPT5cblx0bmV3IEFwcGxpY2F0aW9uLkRpcmVjdGl2ZXMuc3RhdHNEaXJlY3RpdmUoKVxuKTtcblxuLy8gSG9tZUNvbnRyb2xsZXJcbnRhbWFnb3NoaUFwcC5jb250cm9sbGVyKCdIb21lQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRpbnRlcnZhbCcsICdQbGF5ZXInLCAnV29yaycsICdMaWZlJywgJ0Z1bicsICgkc2NvcGUsICRpbnRlcnZhbCwgUGxheWVyLCBXb3JrLCBMaWZlLCBGdW4pID0+XG5cdG5ldyBBcHBsaWNhdGlvbi5Db250cm9sbGVycy5Ib21lQ29udHJvbGxlcigkc2NvcGUsICRpbnRlcnZhbCwgUGxheWVyLCBXb3JrLCBMaWZlLCBGdW4pXG5dKTsgIixudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
