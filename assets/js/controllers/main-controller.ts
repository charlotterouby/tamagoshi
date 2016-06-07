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
		
		msgType: string;
		stopGame: any;


		constructor($scope: ng.IScope, $interval: ng.IIntervalService, Player: any, Work: any, Life: any, Fun: any) {
			// Angular Service
			$scope.$watch('msgType', function() {
			    console.log('hey, myVar has changed!');
			});

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

		};


		// Vérification des stats du player pour lancement des msg alertes
		updateStats( player, msg) {
			$('.overlay').fadeOut('slow');

			var verifStats = function(scope, player, msg) {
				// Msg a afficher du moins important au plus important
				// Fun
				if(player.fun <= 40){
					msg = "Tu joue avec moi ?";
					$('.msgSystem').html(msg);
					scope.msgType = "alert-info";
				}
				// Health
				if(player.health <= 40){
					msg = "Tu peux me donner un bain ?";
					scope.msgType = "alert-info";
					$('.msgSystem').html(msg);
				}
				// Food
				if(player.life <= 40){
					msg = "J'ai faim !";
					scope.msgType = "alert-warning";
					$('.msgSystem').html(msg);
				}
				// Life
				if(player.life <= 15 && player.life !== 0){
					msg = "Attention votre tamagoshu n'a presque plus de point de vie !";
					scope.msgType = "alert-danger";
					$('.msgSystem').html(msg);
				} else if (player.life <= 0) {
					// @ pblm avec fonction stopGame qui n'est pas reconnue
					this.stopGame();
					$('.frontpage').html('Oh non ! Tamagoshu est mort. Voulez-vous recommencer la partie ?');
					$('.overlay').fadeIn('slow');
				}
			};

			var sc = this.scope.hc;

			var verifInterval = this.interval(function(){verifStats(sc, player, msg)}, 1000) ;
			this.stopGame = () => {this.interval.cancel(verifInterval)};
		};

		decStats( player ){
			let decVars = function(player){
				player.life--;
				player.fun -= 5;
				player.health -= 2;
			}
			var decInterval = this.interval( function(){ decVars(player) }, 3000);
		};
	}
}
