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
			// Angular Services


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
			//scope.msgType = "alert-info";

		};


		// Vérification des stats du player pour lancement des msg alertes et des progress-bar
		updateStats( player, msg) {

			$('.overlay').fadeOut('slow');

			// this.msgType = "alert-success";
			//console.log(this.scope);

			var verifStats = function(scope, player, msg) {
				// Mise à jour des progress-bars
				$('#playerXp .progress-bar').css("width", player.xp + "%").attr("aria-valuenow", player.xp);
				$('#playerLife .progress-bar').css("width", player.life + "%").attr("aria-valuenow", player.life);
				$('#playerFood .progress-bar').css("width", player.food + "%").attr("aria-valuenow", player.food);
				$('#playerHealth .progress-bar').css("width", player.health + "%").attr("aria-valuenow", player.health);
				$('#playerFun .progress-bar').css("width", player.fun + "%").attr("aria-valuenow", player.fun);



				//console.log(player);
				//scope.msgType = "alert-warning";

				// Msg a afficher du moins important au plus important
				// Fun
				if(player.fun <= 40){
					msg = "Tu joue avec moi ?";
					$('.msgSystem').html(msg);
					scope.msgType = "alert-info";
					//console.log(scope);

					// Methode $apply du scope force à réévaluer les binding donc normalement les ng-class
					//this.$apply(() => scope.msgType = "alert-success");
				}
				// Health
				if(player.health <= 40){
					msg = "Tu peux me donner un bain ?";
					scope.msgType = "alert-info";
					$('.msgSystem').html(msg);
				}
				// Food
				if(player.food <= 40){
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
					// msg = "Oh non ! Tamagoshu est mort. Voulez-vous recommencer la partie ?";
					// scope.msgType = "alert-danger";
					// $('.msgSystem').html(msg);
					this.stopGame();

					$('.frontpage').html('Oh non ! Tamagoshu est mort. Voulez-vous recommencer la partie ?');
					$('.overlay').fadeIn('slow');
				}


				//console.log(msg);
			};

			var sc = this.scope.hc;

			var verifInterval = this.interval(function(){verifStats( sc, player, msg)}, 1000) ;
			this.stopGame = () => {this.interval.cancel(verifInterval)};
		};

		decStats( player ){

			let decVars = function(player){

				//console.log('dec');

				player.life--;
				player.fun -= 5;
				player.health -= 2;

			}

			var decInterval = this.interval( function(){ decVars(player) }, 3000);

		};


	}	

}
