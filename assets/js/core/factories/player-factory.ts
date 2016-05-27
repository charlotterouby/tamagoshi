// PlayerFactory
/// <reference path="../angular.d.ts"/>

module Application.Factories {
	export class Player{
		private player: any;

		constructor (){
			return this.createPlayer();
		}

		private createPlayer(): any{
			let player = {
				name: "Pichu",
				life: 15,
				food: 20,
				fun: 5,
				xp: 0,
				money: 400,
				health: 40,
				level: 1
			}
			return player;
		}
	}
}