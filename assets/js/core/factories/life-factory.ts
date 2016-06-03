// PlayerFactory
/// <reference path="../angular.d.ts"/>
/// <reference path="player-factory.ts"/>

module Application.Factories {

	export class LifeFactory{

		constructor (){
			console.log('Life Factory loaded');
		}


		valBetween(v, min, max) {
			console.log(v);
			return (Math.min(max, Math.max(min, v)));
		}

	 	wash( goshi: any , msg: string, msgType: string): any{
	 		if (goshi.health === 100) {
				msg = 'Je suis tout propre !';
				msgType = "alert-success";
				console.log(msg);
	 		} else if (goshi.money === 0){
				msg = "Vous n'avez plus d'argent pour payer le toiletteur";
				msgType = "alert-danger";
				console.log(msg);
	 		} else {
				goshi.health = this.valBetween(goshi.health + 10, 0, 100);
				goshi.life = this.valBetween(goshi.life + 5, 0, 100);
				goshi.money = this.valBetween(goshi.money -20, 0, 10000000);
				msg = goshi.name + ' se lave';
				msgType = "alert-success";
			 	console.log(msg);
	 		}

			$('.msgSystem').html(msg);
		};

		eat( goshi: any, msg: string, msgType:string): any{
			if (goshi.life === 100){
				msg = "J'ai bien mangé, je vais faire une petite sieste !";
				msgType = "alert-success";
				console.log(msg);
			} else if (goshi.food === 0){
				msg = "Il n'y a plus rien à manger ! On va faire les courses ?";
				msgType = "alert-warning";
				console.log(msg);
			} else {
				goshi.food = this.valBetween(goshi.food - 10, 0, 10000);				
				goshi.life = this.valBetween(goshi.life + 5, 0, 100);
				msg = goshi.name + ' mange';
				msgType = "alert-info";
				console.log(msg);
			}

			$('.msgSystem').html(msg);
		};

		buyFood( goshi: any, msg: string, msgType: string): any{
			if (goshi.food ===100){
				msg = "Votre stock de nourriture est plein !";
				msgType = "alert-success";
				console.log(msg);
			} else if (goshi.money === 0) {
				msg = "Vous n'avez plus d'argent !";
				msgType = "warning";
				console.log(msg);
			} else {
				msg = goshi.name + ' fait les courses';
				msgType = "alert-info";
				goshi.food = this.valBetween(goshi.food + 10, 0, 10000);	
				goshi.money = this.valBetween(goshi.money - 15, 0, 10000000);
				console.log(msg);
			}

			$('.msgSystem').html(msg);
		};
	}
}