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

			this.sysMsg = "Hello "+ this.player.name +" !";

			console.log(this.player);

			this.lifeFactory.wash(this.player);

			//$('.container').fadeOut('slow');


		}
		
		updateStats(player){
			// Vérification des stats du player pour lancement des msg alertes et des progress-bar
			let verifStats = function() {
				$('#playerLife .progress-bar').css("width", player.life + "%").attr("aria-valuenow", player.life);
				$('#playerFood .progress-bar').css("width", player.food + "%").attr("aria-valuenow", player.food);
				$('#playerHealth .progress-bar').css("width", player.health + "%").attr("aria-valuenow", player.health);
				$('playerFun .progress-bar').css("width", player.fun + "%").attr("aria-valuenow", player.fun);
				console.log("verifStats");
			};

			var verifInterval = setInterval(verifStats, 1000);
		}
	}	

}
