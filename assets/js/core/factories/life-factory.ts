// PlayerFactory
/// <reference path="../angular.d.ts"/>
/// <reference path="player-factory.ts"/>

module Application.Factories {

	export class LifeFactory{

		constructor (){
			console.log('Life Factory loaded');
		}

	 	wash( goshi: any ): any{
	 		if (goshi.health === 100) {
				console.log('Je suis tout propre !');
	 		} else if (goshi.money === 0){
				console.log("Vous n'avez plus d'argent pour payer le toiletteur");
	 		} else {
			  	goshi.health += 10;
				goshi.life += 5;
			  	goshi.money -= 20;
			 	console.log( goshi.name + ' is washing');
	 		}
		};

		eat( goshi: any): any{
			if (goshi.life === 100){
				console.log("J'ai bien mangé, je vais faire une petite sieste !");
			} else if (goshi.food === 0){
				console.log("Il n'y a plus rien à manger ! On va faire les courses ?");
			} else {
				goshi.food -= 10;
				goshi.life += 5;
				console.log(goshi.name + ' is eating');
			}
		};

		buyFood( goshi: any): any{
			if (goshi.food ===100){
				console.log("Votre stock de nourriture est plein !");
			} else if (goshi.money === 0) {
				console.log("Vous n'avez plus d'argent !");
			} else {
				goshi.food += 10;
				goshi.money -= 15;
				console.log(goshi.name + ' is buying food');
			}
		};
	}
}