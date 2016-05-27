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
				level: 1,
				xp: 0,
				money: 400,
				life: 20,
				food: 20,
				fun: 5,
				health: 40
			}
			return player;
		}
	}
}