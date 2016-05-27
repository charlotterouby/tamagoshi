// PlayerFactory
/// <reference path="../angular.d.ts"/>

module Application.Factories {
	export class Player{
		private player: any;

		name: string;


		constructor (){
			return this.createPlayer();
		}

		private createPlayer(): any{
			let player = {
				name: "Pikachu",
				life: 15,
				food: 20,
				fun: 5,
				xp: 4,
				money: 400,
				health: 40
			}

			this.name = 'Pikachu';

			return player;
		}
	}
}