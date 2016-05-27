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
                    name: "Pikachu",
                    life: 15,
                    food: 20,
                    fun: 5,
                    xp: 4,
<<<<<<< HEAD
                    money: 400
=======
                    money: 400,
                    health: 40
>>>>>>> 8a04422d62256644f6ffbffc463430aac5b47cca
                };
                this.name = 'Pikachu';
                return player;
            };
            return Player;
        }());
        Factories.Player = Player;
    })(Factories = Application.Factories || (Application.Factories = {}));
})(Application || (Application = {}));

<<<<<<< HEAD
/// <reference path="../core/angular.d.ts"/>
/// <reference path="../app.ts"/>
/// <reference path="../core/factories/player-factory.ts"/>
var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($scope, Player, Life) {
                this.scope = $scope;
                this.player = new Player;
                this.lifeFactory = new Life;
                //console.log(this.player);
                this.lifeFactory.wash(this.player);
=======
// WorkFactory
/// <reference path="../angular.d.ts"/>
var Application;
(function (Application) {
    var Factories;
    (function (Factories) {
        var Work = (function () {
            function Work() {
                return this.ennemy;
>>>>>>> 8a04422d62256644f6ffbffc463430aac5b47cca
            }
            Work.prototype.combat = function (player) {
            };
            ;
            Work.prototype.createEnnemi = function () {
            };
            return Work;
        }());
        Factories.Work = Work;
    })(Factories = Application.Factories || (Application.Factories = {}));
})(Application || (Application = {}));

/// <reference path="core/angular.d.ts"/>
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
<<<<<<< HEAD
// LifeFactory
tamagoshiApp.factory("Life", function () { return Application.Factories.LifeFactory; });
// HomeController
tamagoshiApp.controller('HomeController', ['$scope', 'Player', 'Life', function ($scope, Player, Life) {
        return new Application.Controllers.HomeController($scope, Player, Life);
    }
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZmFjdG9yaWVzL3BsYXllci1mYWN0b3J5LnRzIiwiY29udHJvbGxlcnMvbWFpbi1jb250cm9sbGVyLnRzIiwiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQix1Q0FBdUM7QUFFdkMsSUFBTyxXQUFXLENBMEJqQjtBQTFCRCxXQUFPLFdBQVc7SUFBQyxJQUFBLFNBQVMsQ0EwQjNCO0lBMUJrQixXQUFBLFNBQVMsRUFBQyxDQUFDO1FBQzdCO1lBTUM7Z0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM1QixDQUFDO1lBRU8sNkJBQVksR0FBcEI7Z0JBQ0MsSUFBSSxNQUFNLEdBQUc7b0JBQ1osSUFBSSxFQUFFLFNBQVM7b0JBQ2YsSUFBSSxFQUFFLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLENBQUM7b0JBQ04sRUFBRSxFQUFFLENBQUM7b0JBQ0wsS0FBSyxFQUFFLEdBQUc7aUJBQ1YsQ0FBQTtnQkFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztnQkFFdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNmLENBQUM7WUFDRixhQUFDO1FBQUQsQ0F4QkEsQUF3QkMsSUFBQTtRQXhCWSxnQkFBTSxTQXdCbEIsQ0FBQTtJQUNGLENBQUMsRUExQmtCLFNBQVMsR0FBVCxxQkFBUyxLQUFULHFCQUFTLFFBMEIzQjtBQUFELENBQUMsRUExQk0sV0FBVyxLQUFYLFdBQVcsUUEwQmpCOztBQzdCRCw0Q0FBNEM7QUFDNUMsaUNBQWlDO0FBQ2pDLDJEQUEyRDtBQUUzRCxJQUFPLFdBQVcsQ0FvQmpCO0FBcEJELFdBQU8sV0FBVztJQUFDLElBQUEsV0FBVyxDQW9CN0I7SUFwQmtCLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFDL0I7WUFLQyx3QkFBWSxNQUFpQixFQUFFLE1BQVcsRUFBRSxJQUFTO2dCQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQztnQkFFekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQztnQkFFNUIsMkJBQTJCO2dCQUUzQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFJcEMsQ0FBQztZQUNGLHFCQUFDO1FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtRQWxCWSwwQkFBYyxpQkFrQjFCLENBQUE7SUFDRixDQUFDLEVBcEJrQixXQUFXLEdBQVgsdUJBQVcsS0FBWCx1QkFBVyxRQW9CN0I7QUFBRCxDQUFDLEVBcEJNLFdBQVcsS0FBWCxXQUFXLFFBb0JqQjs7QUN4QkQseUNBQXlDO0FBQ3pDLHNEQUFzRDtBQUN0RCx3REFBd0Q7QUFDeEQsc0RBQXNEO0FBRXRELElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRXRELGdCQUFnQjtBQUNoQixZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9CLE9BQUEsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0lBQTVCLENBQTRCO0NBQzVCLENBQUMsQ0FBQztBQUVILGNBQWM7QUFDZCxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxjQUFNLE9BQUEsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQWpDLENBQWlDLENBQUUsQ0FBQztBQUV2RSxpQkFBaUI7QUFDakIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJO1FBQzNGLE9BQUEsSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQztJQUFoRSxDQUFnRTtDQUNoRSxDQUFDLENBQUMiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBsYXllckZhY3Rvcnlcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9hbmd1bGFyLmQudHNcIi8+XG5cbm1vZHVsZSBBcHBsaWNhdGlvbi5GYWN0b3JpZXMge1xuXHRleHBvcnQgY2xhc3MgUGxheWVye1xuXHRcdHByaXZhdGUgcGxheWVyOiBhbnk7XG5cblx0XHRuYW1lOiBzdHJpbmc7XG5cblxuXHRcdGNvbnN0cnVjdG9yICgpe1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlUGxheWVyKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBjcmVhdGVQbGF5ZXIoKTogYW55e1xuXHRcdFx0bGV0IHBsYXllciA9IHtcblx0XHRcdFx0bmFtZTogXCJQaWthY2h1XCIsXG5cdFx0XHRcdGxpZmU6IDE1LFxuXHRcdFx0XHRmb29kOiAyMCxcblx0XHRcdFx0ZnVuOiA1LFxuXHRcdFx0XHR4cDogNCxcblx0XHRcdFx0bW9uZXk6IDQwMFxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLm5hbWUgPSAnUGlrYWNodSc7XG5cblx0XHRcdHJldHVybiBwbGF5ZXI7XG5cdFx0fVxuXHR9XG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2NvcmUvYW5ndWxhci5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2FwcC50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9jb3JlL2ZhY3Rvcmllcy9wbGF5ZXItZmFjdG9yeS50c1wiLz5cblxubW9kdWxlIEFwcGxpY2F0aW9uLkNvbnRyb2xsZXJzIHtcblx0ZXhwb3J0IGNsYXNzIEhvbWVDb250cm9sbGVyIHtcblx0XHRzY29wZTogYW55O1xuXHRcdHBsYXllcjogYW55O1xuXHRcdGxpZmVGYWN0b3J5OiBhbnk7XG5cblx0XHRjb25zdHJ1Y3Rvcigkc2NvcGU6IG5nLklTY29wZSwgUGxheWVyOiBhbnksIExpZmU6IGFueSkge1xuXHRcdFx0dGhpcy5zY29wZSA9ICRzY29wZTtcblx0XHRcdHRoaXMucGxheWVyID0gbmV3IFBsYXllcjtcblxuXHRcdFx0dGhpcy5saWZlRmFjdG9yeSA9IG5ldyBMaWZlO1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKHRoaXMucGxheWVyKTtcblxuXHRcdFx0dGhpcy5saWZlRmFjdG9yeS53YXNoKHRoaXMucGxheWVyKTtcblxuXG5cblx0XHR9XG5cdH1cbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9hbmd1bGFyLmQudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiY29yZS9mYWN0b3JpZXMvbGlmZS1mYWN0b3J5LnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZmFjdG9yaWVzL3BsYXllci1mYWN0b3J5LnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvbnRyb2xsZXJzL21haW4tY29udHJvbGxlci50c1wiLz5cblxudmFyIHRhbWFnb3NoaUFwcCA9IGFuZ3VsYXIubW9kdWxlKCd0YW1hZ29zaGlBcHAnLCBbXSk7XG5cbi8vIFBsYXllckZhY3RvcnlcbnRhbWFnb3NoaUFwcC5mYWN0b3J5KFwiUGxheWVyXCIsIFsoKSA9PlxuXHRBcHBsaWNhdGlvbi5GYWN0b3JpZXMuUGxheWVyXG5dKTtcblxuLy8gTGlmZUZhY3RvcnlcbnRhbWFnb3NoaUFwcC5mYWN0b3J5KFwiTGlmZVwiLCAoKSA9Plx0QXBwbGljYXRpb24uRmFjdG9yaWVzLkxpZmVGYWN0b3J5ICk7XG5cbi8vIEhvbWVDb250cm9sbGVyXG50YW1hZ29zaGlBcHAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBbJyRzY29wZScsICdQbGF5ZXInLCAnTGlmZScsICgkc2NvcGUsIFBsYXllciwgTGlmZSkgPT5cblx0bmV3IEFwcGxpY2F0aW9uLkNvbnRyb2xsZXJzLkhvbWVDb250cm9sbGVyKCRzY29wZSwgUGxheWVyLCBMaWZlKVxuXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
=======
// WorkFactory
tamagoshiApp.factory("Work", [function () {
        return Application.Factories.Work;
    }
]);
// HomeController
tamagoshiApp.controller('HomeController', ['$scope', 'Player', 'Work', function ($scope, Player, Work) {
        return new Application.Controllers.HomeController($scope, Player, Work);
    }
]);

/// <reference path="../core/angular.d.ts"/>
/// <reference path="../app.ts"/>
var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($scope, Player, Work) {
                this.scope = $scope;
                this.player = new Player;
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application || (Application = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZmFjdG9yaWVzL3BsYXllci1mYWN0b3J5LnRzIiwiY29yZS9mYWN0b3JpZXMvd29yay1mYWN0b3J5LnRzIiwiYXBwLnRzIiwiY29udHJvbGxlcnMvbWFpbi1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQix1Q0FBdUM7QUFFdkMsSUFBTyxXQUFXLENBc0JqQjtBQXRCRCxXQUFPLFdBQVc7SUFBQyxJQUFBLFNBQVMsQ0FzQjNCO0lBdEJrQixXQUFBLFNBQVMsRUFBQyxDQUFDO1FBQzdCO1lBR0M7Z0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM1QixDQUFDO1lBRU8sNkJBQVksR0FBcEI7Z0JBQ0MsSUFBSSxNQUFNLEdBQUc7b0JBQ1osSUFBSSxFQUFFLFNBQVM7b0JBQ2YsSUFBSSxFQUFFLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLENBQUM7b0JBQ04sRUFBRSxFQUFFLENBQUM7b0JBQ0wsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsTUFBTSxFQUFFLEVBQUU7aUJBQ1YsQ0FBQTtnQkFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2YsQ0FBQztZQUNGLGFBQUM7UUFBRCxDQXBCQSxBQW9CQyxJQUFBO1FBcEJZLGdCQUFNLFNBb0JsQixDQUFBO0lBQ0YsQ0FBQyxFQXRCa0IsU0FBUyxHQUFULHFCQUFTLEtBQVQscUJBQVMsUUFzQjNCO0FBQUQsQ0FBQyxFQXRCTSxXQUFXLEtBQVgsV0FBVyxRQXNCakI7O0FDekJELGNBQWM7QUFDZCx1Q0FBdUM7QUFFdkMsSUFBTyxXQUFXLENBaUJqQjtBQWpCRCxXQUFPLFdBQVc7SUFBQyxJQUFBLFNBQVMsQ0FpQjNCO0lBakJrQixXQUFBLFNBQVMsRUFBQyxDQUFDO1FBQzdCO1lBR0M7Z0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDcEIsQ0FBQztZQUVELHFCQUFNLEdBQU4sVUFBTyxNQUFNO1lBRWIsQ0FBQzs7WUFFTywyQkFBWSxHQUFwQjtZQUVBLENBQUM7WUFFRixXQUFDO1FBQUQsQ0FmQSxBQWVDLElBQUE7UUFmWSxjQUFJLE9BZWhCLENBQUE7SUFDRixDQUFDLEVBakJrQixTQUFTLEdBQVQscUJBQVMsS0FBVCxxQkFBUyxRQWlCM0I7QUFBRCxDQUFDLEVBakJNLFdBQVcsS0FBWCxXQUFXLFFBaUJqQjs7QUNwQkQseUNBQXlDO0FBQ3pDLHdEQUF3RDtBQUN4RCxzREFBc0Q7QUFDdEQsc0RBQXNEO0FBRXRELElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRXRELGdCQUFnQjtBQUNoQixZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9CLE9BQUEsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0lBQTVCLENBQTRCO0NBQzVCLENBQUMsQ0FBQztBQUVILGNBQWM7QUFDZCxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzdCLE9BQUEsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJO0lBQTFCLENBQTBCO0NBQzFCLENBQUMsQ0FBQztBQUVILGlCQUFpQjtBQUNqQixZQUFZLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUk7UUFDM0YsT0FBQSxJQUFJLFdBQVcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDO0lBQWhFLENBQWdFO0NBQ2hFLENBQUMsQ0FBQzs7QUNwQkgsNENBQTRDO0FBQzVDLGlDQUFpQztBQUVqQyxJQUFPLFdBQVcsQ0FVakI7QUFWRCxXQUFPLFdBQVc7SUFBQyxJQUFBLFdBQVcsQ0FVN0I7SUFWa0IsV0FBQSxXQUFXLEVBQUMsQ0FBQztRQUMvQjtZQUlDLHdCQUFZLE1BQWlCLEVBQUUsTUFBVSxFQUFFLElBQVE7Z0JBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO2dCQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDO1lBQzFCLENBQUM7WUFDRixxQkFBQztRQUFELENBUkEsQUFRQyxJQUFBO1FBUlksMEJBQWMsaUJBUTFCLENBQUE7SUFDRixDQUFDLEVBVmtCLFdBQVcsR0FBWCx1QkFBVyxLQUFYLHVCQUFXLFFBVTdCO0FBQUQsQ0FBQyxFQVZNLFdBQVcsS0FBWCxXQUFXLFFBVWpCIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvYW5ndWxhci5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZmFjdG9yaWVzL3BsYXllci1mYWN0b3J5LnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImNvcmUvZmFjdG9yaWVzL3dvcmstZmFjdG9yeS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb250cm9sbGVycy9tYWluLWNvbnRyb2xsZXIudHNcIi8+XG5cbnZhciB0YW1hZ29zaGlBcHAgPSBhbmd1bGFyLm1vZHVsZSgndGFtYWdvc2hpQXBwJywgW10pO1xuXG4vLyBQbGF5ZXJGYWN0b3J5XG50YW1hZ29zaGlBcHAuZmFjdG9yeShcIlBsYXllclwiLCBbKCkgPT5cblx0QXBwbGljYXRpb24uRmFjdG9yaWVzLlBsYXllclxuXSk7XG5cbi8vIFdvcmtGYWN0b3J5XG50YW1hZ29zaGlBcHAuZmFjdG9yeShcIldvcmtcIiwgWygpID0+XG5cdEFwcGxpY2F0aW9uLkZhY3Rvcmllcy5Xb3JrXG5dKTtcblxuLy8gSG9tZUNvbnRyb2xsZXJcbnRhbWFnb3NoaUFwcC5jb250cm9sbGVyKCdIb21lQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJ1BsYXllcicsICdXb3JrJywgKCRzY29wZSwgUGxheWVyLCBXb3JrKSA9PlxuXHRuZXcgQXBwbGljYXRpb24uQ29udHJvbGxlcnMuSG9tZUNvbnRyb2xsZXIoJHNjb3BlLCBQbGF5ZXIsIFdvcmspXG5dKTsiLG51bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
>>>>>>> 8a04422d62256644f6ffbffc463430aac5b47cca
