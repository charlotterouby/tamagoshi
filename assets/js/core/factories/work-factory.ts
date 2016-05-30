// WorkFactory
/// <reference path="../angular.d.ts"/>
/// /// <reference path="work-factory.ts"/>

module Application.Factories {
	export class Work{
		
		constructor (){
			console.log('WorkFactory Loaded');
		}

		combat(player, msg) {
			let win: number = Math.random();

			if(win === 0){
				msg = 'Pikachu perd le combat';
				player.life = player.life - 5;
				player.health = player.health - 5;
				player.money = player.money - 15;
			} else {
				msg = 'Pikachu gagne le combat';
				player.xp = player.xp + 5;
				player.money = player.money + 15;
			}

			this.updateLevel(player, msg);
		};

		training(player, msg){
			msg ='Pikachu gagne en expérience';
			player.xp = player.xp + 5;
			console.log(msg);
			console.log(player.xp);

			this.updateLevel(player, msg);
		}

		updateLevel(player, msg){
			if(player.level === 3 && player.xp === 100){
				msg = "Vous avez gagné la partie !";
				// @ insérer la fonction clearInterval pour stopper la boucle de updateStats lancée en début de partie
			} else if(player.xp === 100){
				msg = "Tamagochu monte d'un niveau !";
				player.level += 1;
				player.xp = 0;
			}

			if(player.level === 2){
				player.name = "Pikachu";
				msg = "Tamagochu évolue ! Il devient " + player.name;
				// @ insérer le changement d'avatar
			} else if (player.level === 3){
				player.name = "Raichu";
				msg = "Tamagochu évolue ! Il devient " + player.name;
				// @ insérer le changement d'avatar
			}
		}
	}
}