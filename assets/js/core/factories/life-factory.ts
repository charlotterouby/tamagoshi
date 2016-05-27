// PlayerFactory
/// <reference path="../angular.d.ts"/>
/// <reference path="player-factory.ts"/>

module Application.Factories {

	export class LifeFactory{


		constructor (){
			
			console.log('Life Factory loaded');
			//return this;

		}

	 	wash( goshi: any ): any{

			 console.log( goshi.name + ' is washing');

			//return player;
		}

		eat( goshi: any): any{

			console.log(goshi.name + ' is eating');

		}

		buyFood( goshi: any): any{

			console.log(goshi.name + ' is buying food');

		}



	}
}