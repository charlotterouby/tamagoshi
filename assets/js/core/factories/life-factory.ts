// PlayerFactory
/// <reference path="../angular.d.ts"/>
/// <reference path="player-factory.ts"/>

module Application.Factories {

	export class LifeFactory{

		constructor (){
			console.log('Life Factory loaded');
		}

	 	wash( goshi: any , msg: string): any{
	 		if (goshi.health === 100) {
				msg = 'Je suis tout propre !';
				console.log(msg);
	 		} else if (goshi.money === 0){
				msg = "Vous n'avez plus d'argent pour payer le toiletteur";
				console.log(msg);
	 		} else {
			  	goshi.health += 10;
				goshi.life += 5;
			  	goshi.money -= 20;
				msg = goshi.name + ' se lave';
			 	console.log(msg);
	 		}
		};

		eat( goshi: any, msg: string): any{
			if (goshi.life === 100){
				msg = "J'ai bien mangé, je vais faire une petite sieste !";
				console.log(msg);
			} else if (goshi.food === 0){
				msg = "Il n'y a plus rien à manger ! On va faire les courses ?";
				console.log(msg);
			} else {
				goshi.food -= 10;
				goshi.life += 5;
				msg = goshi.name + ' mange';
				console.log(msg);
			}
		};

		buyFood( goshi: any, msg: string): any{
			if (goshi.food ===100){
				msg = "Votre stock de nourriture est plein !";
				console.log(msg);
			} else if (goshi.money === 0) {
				msg = "Vous n'avez plus d'argent !";
				console.log(msg);
			} else {
				msg = goshi.name + ' fait les courses';
				goshi.food += 10;
				goshi.money -= 15;
				console.log(msg);
			}
		};
	}
}