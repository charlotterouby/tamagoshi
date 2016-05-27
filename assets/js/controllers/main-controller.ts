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
			// Player Factory
			this.player = new Player;
			// Life Factory
			this.lifeFactory = new Life;
			this.lifeFactory.wash(this.player);
			// Msg Directive
			this.sysMsg = "Hello "+ this.player.name +" !";
			console.log(this.sysMsg);
		};


		// Vérification des stats du player pour lancement des msg alertes et des progress-bar
		updateStats(player, msg){
			let verifStats = function() {
				// Mise à jour des progress-bars
				$('#playerLife .progress-bar').css("width", player.life + "%").attr("aria-valuenow", player.life);
				$('#playerFood .progress-bar').css("width", player.food + "%").attr("aria-valuenow", player.food);
				$('#playerHealth .progress-bar').css("width", player.health + "%").attr("aria-valuenow", player.health);
				$('#playerFun .progress-bar').css("width", player.fun + "%").attr("aria-valuenow", player.fun);

				console.log("verifStats");

				// Msg a afficher du moins important au plus important
				// @ gérer visuellement les différents niveaux d'alerte des messages
				// Fun
				if(player.fun <= 5){
					msg = "Tu joue avec moi ?";
				}
				// Health
				if(player.health <= 5){
					msg = "Tu peux me donner un bain ?";
				}
				// Food
				if(player.food <= 5){
					msg = "J'ai faim !";
				}
				// Life
				if(player.life <= 5 && player.life !== 0){
					msg = "Attention votre tamagoshu n'a presque plus de point de vie !";
				} else if (player.life === 0) {
					msg = "Oh non ! Tamagoshu est mort. Voulez-vous recommencer la partie ?";
					clearInterval(verifInterval);
				}

				console.log(msg);
			};

		var verifInterval = setInterval(verifStats, 1000);
		};
	}	

}
