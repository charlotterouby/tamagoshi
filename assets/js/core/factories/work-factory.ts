// WorkFactory
/// <reference path="../angular.d.ts"/>

module Application.Factories {
	export class Work{
		
		constructor (){
			console.log('WorkFactory Loaded');
		}


		getRandomIntInclusive(min, max){
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		combat(player, msg, msgType) {
			let win: number = this.getRandomIntInclusive(0,1);

			if(win === 0){
				msg = 'Pikachu perd le combat';
				msgType = "alert-warning";
				player.life = player.life - 5;
				player.health = player.health - 5;
				player.money = player.money - 15;
				console.log(msg);
			} else {
				msg = 'Pikachu gagne le combat';
				msgType = "alert-success";
				player.xp = player.xp + 50;
				player.money = player.money + 15;
				console.log(msg);
			}

			$('.msgSystem').html(msg);

			this.updateLevel(player, msg, msgType);
		};

		training(player, msg, msgType) {
			msg ='Pikachu gagne en expérience';
			msgType = "alert-info";
			player.xp = player.xp + 5;
			console.log(msg);
			console.log(player.xp);

			$('.msgSystem').html(msg);

			this.updateLevel(player, msg, msgType);
		}


		updateLevel(player, msg, msgType){
			if(player.level === 3 && player.xp >=100){
				msg = "Vous avez gagné la partie !";
				console.log('gagné');
				msgType = "alert-success";
				$('.frontpage').html('<h2>Vous avez gagné la partie !<br> Votre pokémon a atteint son niveau max.</h2>');
				$('.overlay').fadeIn('slow');
				// @ insérer la fonction clearInterval pour stopper la boucle de updateStats lancée en début de partie
			} else if(player.xp === 100){
				msg = "Tamagochu monte d'un niveau !";
				msgType = "alert-success";
				player.level += 1;
				player.xp = 0;
			}

			if(player.level === 2){
				player.name = "Pikachu";
				player.img = "assets/img/pikachu.gif";
				msg = "Tamagochu évolue ! Il devient " + player.name;
				msgType = "alert-success";
				
			} else if (player.level === 3){
				player.name = "Raichu";
				player.img = "assets/img/raichu.gif";				
				msg = "Tamagochu évolue ! Il devient " + player.name;
				msgType = "alert-success";
				
			}

			$('.msgSystem').html(msg);
		}
	}
}