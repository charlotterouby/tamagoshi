/// <reference path="../core/angular.d.ts"/>
/// <reference path="../app.ts"/>
/// <reference path="../core/factories/player-factory.ts"/>

module Application.Controllers {
	export class HomeController {

		scope: any;
		player: any;
		lifeFactory: any;
		sysMsg: string;

		constructor($scope: ng.IScope, Player: any, Work:any, Life: any) {

			this.scope = $scope;
			this.player = new Player;

			this.lifeFactory = new Life;

			this.sysMsg = "Hello "+ player.name +" !";

			console.log(this.player);

			this.lifeFactory.wash(this.player);

			//$('.container').fadeOut('slow');


		}
	}	

}
