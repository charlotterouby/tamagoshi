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
				level: 3,
				xp: 50,
				money: 400,
				life: 100,
				food: 50,
				fun: 50,
				health: 50,
				img: "assets/img/pichu.gif"
			}
			return player;
		}
	}
}