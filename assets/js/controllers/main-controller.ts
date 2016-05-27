/// <reference path="../core/angular.d.ts"/>
/// <reference path="../app.ts"/>
/// <reference path="../core/factories/player-factory.ts"/>

module Application.Controllers {
	export class HomeController {
		scope: any;
		player: any;
		lifeFactory: any;

<<<<<<< HEAD
		constructor($scope: ng.IScope, Player: any, Life: any) {
=======
		constructor($scope: ng.IScope, Player:any, Work:any) {
>>>>>>> 8a04422d62256644f6ffbffc463430aac5b47cca
			this.scope = $scope;
			this.player = new Player;

			this.lifeFactory = new Life;

			//console.log(this.player);

			this.lifeFactory.wash(this.player);



		}
	}
}