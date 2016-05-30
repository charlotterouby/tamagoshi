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
            LifeFactory.prototype.wash = function (goshi) {
                if (goshi.health === 100) {
                    console.log('Je suis tout propre !');
                }
                else if (goshi.money === 0) {
                    console.log("Vous n'avez plus d'argent pour payer le toiletteur");
                }
                else {
                    goshi.health += 10;
                    goshi.life += 5;
                    goshi.money -= 20;
                    console.log(goshi.name + ' is washing');
                }
            };
            ;
            LifeFactory.prototype.eat = function (goshi) {
                if (goshi.life === 100) {
                    console.log("J'ai bien mangé, je vais faire une petite sieste !");
                }
                else if (goshi.food === 0) {
                    console.log("Il n'y a plus rien à manger ! On va faire les courses ?");
                }
                else {
                    goshi.food -= 10;
                    goshi.life += 5;
                    console.log(goshi.name + ' is eating');
                }
            };
            ;
            LifeFactory.prototype.buyFood = function (goshi) {
                if (goshi.food === 100) {
                    console.log("Votre stock de nourriture est plein !");
                }
                else if (goshi.money === 0) {
                    console.log("Vous n'avez plus d'argent !");
                }
                else {
                    goshi.food += 10;
                    goshi.money -= 15;
                    console.log(goshi.name + ' is buying food');
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
/// /// <reference path="work-factory.ts"/>
var Application;
(function (Application) {
    var Factories;
    (function (Factories) {
        var Work = (function () {
            function Work() {
                console.log('WorkFactory Loaded');
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
                // Angular Services
                this.scope = $scope;
                this.interval = $interval;
                // Player Factory
                this.player = new Player;
                // Life Factory
                this.lifeFactory = new Life;
                // Work Factory
                this.workFactory = new Work;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZGlyZWN0aXZlcy9tc2ctZGlyZWN0aXZlLnRzIiwiY29yZS9kaXJlY3RpdmVzL3N0YXRzLWRpcmVjdGl2ZS50cyIsImNvcmUvZmFjdG9yaWVzL3BsYXllci1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvbGlmZS1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvd29yay1mYWN0b3J5LnRzIiwiYXBwLnRzIiwiY29udHJvbGxlcnMvbWFpbi1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQixHQUFHO0FBQ0gsd0NBQXdDO0FBRXhDLElBQU8sV0FBVyxDQTRCakI7QUE1QkQsV0FBTyxXQUFXO0lBQUMsSUFBQSxVQUFVLENBNEI1QjtJQTVCa0IsV0FBQSxVQUFVLEVBQUMsQ0FBQztRQUU5QjtZQUVDO2dCQUVDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUVqQixNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ1osQ0FBQztZQUVELDhCQUFPLEdBQVA7Z0JBRUMsTUFBTSxDQUFDO29CQUNOLHFDQUFxQztvQkFDckMsV0FBVyxFQUFFLDZCQUE2QjtvQkFDMUMsUUFBUSxFQUFFLElBQUk7b0JBQ2QsS0FBSyxFQUFFO3dCQUNOLE1BQU0sRUFBRSxHQUFHO3FCQUNYO2lCQUNELENBQUM7WUFFSCxDQUFDO1lBRUYsbUJBQUM7UUFBRCxDQXhCQSxBQXdCQyxJQUFBO1FBeEJZLHVCQUFZLGVBd0J4QixDQUFBO0lBRUYsQ0FBQyxFQTVCa0IsVUFBVSxHQUFWLHNCQUFVLEtBQVYsc0JBQVUsUUE0QjVCO0FBQUQsQ0FBQyxFQTVCTSxXQUFXLEtBQVgsV0FBVyxRQTRCakI7O0FDaENELGtCQUFrQjtBQUNsQixHQUFHO0FBQ0gsdUNBQXVDO0FBRXZDLElBQU8sV0FBVyxDQWtCakI7QUFsQkQsV0FBTyxXQUFXO0lBQUMsSUFBQSxVQUFVLENBa0I1QjtJQWxCa0IsV0FBQSxVQUFVLEVBQUMsQ0FBQztRQUM5QjtZQUNDO2dCQUVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ2pDLENBQUM7WUFFRCwwQ0FBaUIsR0FBakI7Z0JBQ0MsTUFBTSxDQUFDO29CQUNOLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFFBQVEsRUFBRSxJQUFJO29CQUNkLEtBQUssRUFBRTt3QkFDTixNQUFNLEVBQUUsR0FBRztxQkFDWDtpQkFDRCxDQUFDO1lBQ0gsQ0FBQztZQUNGLHFCQUFDO1FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtRQWhCWSx5QkFBYyxpQkFnQjFCLENBQUE7SUFDRixDQUFDLEVBbEJrQixVQUFVLEdBQVYsc0JBQVUsS0FBVixzQkFBVSxRQWtCNUI7QUFBRCxDQUFDLEVBbEJNLFdBQVcsS0FBWCxXQUFXLFFBa0JqQjs7QUN0QkQsZ0JBQWdCO0FBQ2hCLHVDQUF1QztBQUV2QyxJQUFPLFdBQVcsQ0FzQmpCO0FBdEJELFdBQU8sV0FBVztJQUFDLElBQUEsU0FBUyxDQXNCM0I7SUF0QmtCLFdBQUEsU0FBUyxFQUFDLENBQUM7UUFDN0I7WUFHQztnQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzVCLENBQUM7WUFFTyw2QkFBWSxHQUFwQjtnQkFDQyxJQUFJLE1BQU0sR0FBRztvQkFDWixJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLLEVBQUUsQ0FBQztvQkFDUixFQUFFLEVBQUUsRUFBRTtvQkFDTixLQUFLLEVBQUUsR0FBRztvQkFDVixJQUFJLEVBQUUsR0FBRztvQkFDVCxJQUFJLEVBQUUsRUFBRTtvQkFDUixHQUFHLEVBQUUsRUFBRTtvQkFDUCxNQUFNLEVBQUUsRUFBRTtpQkFDVixDQUFBO2dCQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDZixDQUFDO1lBQ0YsYUFBQztRQUFELENBcEJBLEFBb0JDLElBQUE7UUFwQlksZ0JBQU0sU0FvQmxCLENBQUE7SUFDRixDQUFDLEVBdEJrQixTQUFTLEdBQVQscUJBQVMsS0FBVCxxQkFBUyxRQXNCM0I7QUFBRCxDQUFDLEVBdEJNLFdBQVcsS0FBWCxXQUFXLFFBc0JqQjs7QUN6QkQsZ0JBQWdCO0FBQ2hCLHVDQUF1QztBQUN2Qyx5Q0FBeUM7QUFFekMsSUFBTyxXQUFXLENBNkNqQjtBQTdDRCxXQUFPLFdBQVc7SUFBQyxJQUFBLFNBQVMsQ0E2QzNCO0lBN0NrQixXQUFBLFNBQVMsRUFBQyxDQUFDO1FBRTdCO1lBRUM7Z0JBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFFQSwwQkFBSSxHQUFKLFVBQU0sS0FBVTtnQkFDZixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDckMsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7b0JBQ3JCLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO29CQUNkLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUM7Z0JBQzFDLENBQUM7WUFDSCxDQUFDOztZQUVELHlCQUFHLEdBQUgsVUFBSyxLQUFVO2dCQUNkLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUEsQ0FBQztvQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO2dCQUNuRSxDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMseURBQXlELENBQUMsQ0FBQztnQkFDeEUsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDUCxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDakIsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7b0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztZQUNGLENBQUM7O1lBRUQsNkJBQU8sR0FBUCxVQUFTLEtBQVU7Z0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUksR0FBRyxDQUFDLENBQUEsQ0FBQztvQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO2dCQUN0RCxDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDUCxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDakIsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO1lBQ0YsQ0FBQzs7WUFDRixrQkFBQztRQUFELENBMUNBLEFBMENDLElBQUE7UUExQ1kscUJBQVcsY0EwQ3ZCLENBQUE7SUFDRixDQUFDLEVBN0NrQixTQUFTLEdBQVQscUJBQVMsS0FBVCxxQkFBUyxRQTZDM0I7QUFBRCxDQUFDLEVBN0NNLFdBQVcsS0FBWCxXQUFXLFFBNkNqQjs7QUNqREQsY0FBYztBQUNkLHVDQUF1QztBQUN2QywyQ0FBMkM7QUFFM0MsSUFBTyxXQUFXLENBc0RqQjtBQXRERCxXQUFPLFdBQVc7SUFBQyxJQUFBLFNBQVMsQ0FzRDNCO0lBdERrQixXQUFBLFNBQVMsRUFBQyxDQUFDO1FBQzdCO1lBRUM7Z0JBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ25DLENBQUM7WUFFRCxxQkFBTSxHQUFOLFVBQU8sTUFBTSxFQUFFLEdBQUc7Z0JBQ2pCLElBQUksR0FBRyxHQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFaEMsRUFBRSxDQUFBLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7b0JBQ2IsR0FBRyxHQUFHLHdCQUF3QixDQUFDO29CQUMvQixNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUNsQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNsQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNQLEdBQUcsR0FBRyx5QkFBeUIsQ0FBQztvQkFDaEMsTUFBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDMUIsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDbEMsQ0FBQztnQkFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMvQixDQUFDOztZQUVELHVCQUFRLEdBQVIsVUFBUyxNQUFNLEVBQUUsR0FBRztnQkFDbkIsR0FBRyxHQUFFLDZCQUE2QixDQUFDO2dCQUNuQyxNQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFFdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDL0IsQ0FBQztZQUVELDBCQUFXLEdBQVgsVUFBWSxNQUFNLEVBQUUsR0FBRztnQkFDdEIsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQSxDQUFDO29CQUMzQyxHQUFHLEdBQUcsNkJBQTZCLENBQUM7Z0JBRXJDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUEsQ0FBQztvQkFDNUIsR0FBRyxHQUFHLCtCQUErQixDQUFDO29CQUN0QyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQztnQkFFRCxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7b0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO29CQUN4QixHQUFHLEdBQUcsZ0NBQWdDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFFdEQsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUM5QixNQUFNLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztvQkFDdkIsR0FBRyxHQUFHLGdDQUFnQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBRXRELENBQUM7WUFDRixDQUFDO1lBQ0YsV0FBQztRQUFELENBcERBLEFBb0RDLElBQUE7UUFwRFksY0FBSSxPQW9EaEIsQ0FBQTtJQUNGLENBQUMsRUF0RGtCLFNBQVMsR0FBVCxxQkFBUyxLQUFULHFCQUFTLFFBc0QzQjtBQUFELENBQUMsRUF0RE0sV0FBVyxLQUFYLFdBQVcsUUFzRGpCOztBQzFERCx5Q0FBeUM7QUFDekMsd0RBQXdEO0FBQ3hELDBEQUEwRDtBQUMxRCxzREFBc0Q7QUFDdEQsd0RBQXdEO0FBQ3hELHNEQUFzRDtBQUN0RCxzREFBc0Q7QUFFdEQsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFdEQsZ0JBQWdCO0FBQ2hCLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO0lBQzlCLE9BQUEsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQTVCLENBQTRCLENBQzVCLENBQUM7QUFFRixjQUFjO0FBQ2QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsY0FBTSxPQUFBLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFqQyxDQUFpQyxDQUFFLENBQUM7QUFFdkUsY0FBYztBQUNkLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO0lBQzVCLE9BQUEsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJO0FBQTFCLENBQTBCLENBQzFCLENBQUM7QUFFRixnQkFBZ0I7QUFDaEIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUU7SUFDdEMsT0FBQSxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFO0FBQXpDLENBQXlDLENBQ3pDLENBQUM7QUFFRixrQkFBa0I7QUFDbEIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtJQUN4QyxPQUFBLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7QUFBM0MsQ0FBMkMsQ0FDM0MsQ0FBQztBQUVGLGlCQUFpQjtBQUNqQixZQUFZLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQ2pJLE9BQUEsSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQWpGLENBQWlGO0NBQ2pGLENBQUMsQ0FBQzs7QUNwQ0gsNENBQTRDO0FBQzVDLGlDQUFpQztBQUNqQywyREFBMkQ7QUFFM0QsSUFBTyxXQUFXLENBb0VqQjtBQXBFRCxXQUFPLFdBQVc7SUFBQyxJQUFBLFdBQVcsQ0FvRTdCO0lBcEVrQixXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQy9CO1lBUUMsd0JBQVksTUFBaUIsRUFBRSxTQUE4QixFQUFFLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBUztnQkFDL0YsbUJBQW1CO2dCQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7Z0JBQzFCLGlCQUFpQjtnQkFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQztnQkFDekIsZUFBZTtnQkFDZixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDO2dCQUM1QixlQUFlO2dCQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUM7Z0JBQzVCLGdCQUFnQjtnQkFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUUsSUFBSSxDQUFDO2dCQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQixDQUFDOztZQUVELHNGQUFzRjtZQUN0RixvQ0FBVyxHQUFYLFVBQVksTUFBTSxFQUFFLEdBQUc7Z0JBQXZCLGlCQXNDQztnQkFyQ0EsSUFBSSxVQUFVLEdBQUcsVUFBUyxNQUFNLEVBQUUsR0FBRztvQkFDcEMsZ0NBQWdDO29CQUNoQyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzVGLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEcsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsRyxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hHLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFL0Ysc0JBQXNCO29CQUV0QixzREFBc0Q7b0JBQ3RELG9FQUFvRTtvQkFDcEUsTUFBTTtvQkFDTixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQ25CLEdBQUcsR0FBRyxvQkFBb0IsQ0FBQztvQkFDNUIsQ0FBQztvQkFDRCxTQUFTO29CQUNULEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDdEIsR0FBRyxHQUFHLDZCQUE2QixDQUFDO29CQUNyQyxDQUFDO29CQUNELE9BQU87b0JBQ1AsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUNwQixHQUFHLEdBQUcsYUFBYSxDQUFDO29CQUNyQixDQUFDO29CQUNELE9BQU87b0JBQ1AsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUN6QyxHQUFHLEdBQUcsOERBQThELENBQUM7b0JBQ3RFLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsR0FBRyxHQUFHLGtFQUFrRSxDQUFDO3dCQUN6RSxRQUFRLEVBQUUsQ0FBQztvQkFDWixDQUFDO29CQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQztnQkFFRixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQVcsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQSxDQUFBLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDN0UsSUFBSSxRQUFRLEdBQUcsY0FBTyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQztZQUM1RCxDQUFDOztZQUdGLHFCQUFDO1FBQUQsQ0FqRUEsQUFpRUMsSUFBQTtRQWpFWSwwQkFBYyxpQkFpRTFCLENBQUE7SUFFRixDQUFDLEVBcEVrQixXQUFXLEdBQVgsdUJBQVcsS0FBWCx1QkFBVyxRQW9FN0I7QUFBRCxDQUFDLEVBcEVNLFdBQVcsS0FBWCxXQUFXLFFBb0VqQiIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2FuZ3VsYXIuZC50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2RpcmVjdGl2ZXMvbXNnLWRpcmVjdGl2ZS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2RpcmVjdGl2ZXMvc3RhdHMtZGlyZWN0aXZlLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZmFjdG9yaWVzL2xpZmUtZmFjdG9yeS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2ZhY3Rvcmllcy9wbGF5ZXItZmFjdG9yeS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb3JlL2ZhY3Rvcmllcy93b3JrLWZhY3RvcnkudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29udHJvbGxlcnMvbWFpbi1jb250cm9sbGVyLnRzXCIvPlxuXG52YXIgdGFtYWdvc2hpQXBwID0gYW5ndWxhci5tb2R1bGUoJ3RhbWFnb3NoaUFwcCcsIFtdKTtcblxuLy8gUGxheWVyRmFjdG9yeVxudGFtYWdvc2hpQXBwLmZhY3RvcnkoXCJQbGF5ZXJcIiwgKCkgPT5cblx0QXBwbGljYXRpb24uRmFjdG9yaWVzLlBsYXllclxuKTtcblxuLy8gTGlmZUZhY3RvcnlcbnRhbWFnb3NoaUFwcC5mYWN0b3J5KFwiTGlmZVwiLCAoKSA9Plx0QXBwbGljYXRpb24uRmFjdG9yaWVzLkxpZmVGYWN0b3J5ICk7XG5cbi8vIFdvcmtGYWN0b3J5XG50YW1hZ29zaGlBcHAuZmFjdG9yeShcIldvcmtcIiwgKCkgPT5cblx0QXBwbGljYXRpb24uRmFjdG9yaWVzLldvcmtcbik7XG5cbi8vIE1zZyBEaXJlY3RpdmVcbnRhbWFnb3NoaUFwcC5kaXJlY3RpdmUoXCJtc2dEaXJlY3RpdmVcIiwgKCkgPT5cblx0bmV3IEFwcGxpY2F0aW9uLkRpcmVjdGl2ZXMuTXNnRGlyZWN0aXZlKClcbik7XG5cbi8vIFN0YXRzIERpcmVjdGl2ZVxudGFtYWdvc2hpQXBwLmRpcmVjdGl2ZShcInN0YXRzRGlyZWN0aXZlXCIsICgpID0+XG5cdG5ldyBBcHBsaWNhdGlvbi5EaXJlY3RpdmVzLnN0YXRzRGlyZWN0aXZlKClcbik7XG5cbi8vIEhvbWVDb250cm9sbGVyXG50YW1hZ29zaGlBcHAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBbJyRzY29wZScsICckaW50ZXJ2YWwnLCAnUGxheWVyJywgJ1dvcmsnLCAnTGlmZScsICgkc2NvcGUsICRpbnRlcnZhbCwgUGxheWVyLCBXb3JrLCBMaWZlKSA9PlxuXHRuZXcgQXBwbGljYXRpb24uQ29udHJvbGxlcnMuSG9tZUNvbnRyb2xsZXIoJHNjb3BlLCAkaW50ZXJ2YWwsIFBsYXllciwgV29yaywgTGlmZSlcbl0pOyAiLG51bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
