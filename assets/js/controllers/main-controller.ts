/// <reference path="../core/angular.d.ts"/>
/// <reference path="../app.ts"/>
/// <reference path="../core/factories/player-factory.ts"/>

module Application.Controllers {
	export class HomeController {
		scope: any;
		interval: any;
		player: any;
		lifeFactory: any;
		workFactory: any;
		funFactory: any;
		sysMsg: string;

		constructor($scope: ng.IScope, $interval: ng.IIntervalService, Player: any, Work: any, Life: any, Fun: any) {
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
			this.sysMsg = "Hello "+ this.player.name +" !";
			console.log(this.sysMsg);
		};

		// Vérification des stats du player pour lancement des msg alertes et des progress-bar
		updateStats(player, msg) {
			let verifStats = function(player, msg) {
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
					stopGame();
				}

				player.life--;

				$('.msgSystem').html(msg);
				
				console.log(msg);
			};

			var verifInterval = this.interval(function(){verifStats(player, msg)}, 1000);
			var stopGame = () => {this.interval.cancel(verifInterval)};
		};


	}	

}
