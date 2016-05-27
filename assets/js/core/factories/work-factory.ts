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


	}
}