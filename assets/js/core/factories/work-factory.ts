// WorkFactory
/// <reference path="../angular.d.ts"/>
/// /// <reference path="work-factory.ts"/>

module Application.Factories {
	export class Work{
		
		constructor (){}

		combat(player) {
			let win: number = Math.random();

			if(win === 0){
				alert('Pikachu perd le combat');
				player.life = player.life - 5;
				player.health = player.health - 5;
				player.money = player.money - 15;
			} else {
				alert('Pikachu gagne le combat');
				player.xp = player.xp + 5;
				player.money = player.money + 15;
			}
		};

		training(player){
			alert('Pikachu gagne en expérience');
			player.xp = player.xp + 5;
		}

		updateLevel(player){
			if(player.level === 3 && player.xp === 100){
				alert('You win !');
			} else if(player.xp === 100){
				alert("Votre Tamagoshi monte d'un niveau");
				player.level += 1;
				player.xp = 0;
			}

			if(player.level === 2){
				player.name = "Pikachu";
				alert("Votre tamagoshi évolue ! Il devient " + player.name);
			} else if (player.level === 3){
				player.name = "Raichu";
				alert("Votre tamagoshi évolue ! Il devient " + player.name);
			}
		}
	}
}