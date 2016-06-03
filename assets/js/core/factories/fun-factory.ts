// FunFactory
/// <reference path="../angular.d.ts"/>

module Application.Factories {
	export class Fun{
		constructor(){
			console.log('FunFactory Loaded');
		}

		valBetween(v, min, max) {
			console.log(v);
			return (Math.min(max, Math.max(min, v)));
		}

		playBall(player, msg, sc){
			msg = player.name + ' joue au ballon';
			player.fun = this.valBetween(player.fun + 5, 0, 100);			
			player.money = this.valBetween(player.money -20, 0, 10000000);			

			$('.msgSystem').html(msg);
			sc.msgType = "alert-success";
			
			//$('.avatar').animateCss('animated swing');

			console.log(msg);
		}

		playWithFriend(player, msg, sc){
			msg = player.name + ' joue avec un ami';
			player.fun = this.valBetween(player.fun + 20, 0, 100);
			player.money = this.valBetween(player.money - 50, 0, 10000000);				

			$('.msgSystem').html(msg);
			sc.msgType = "alert-success";

			console.log(msg);
		}

		playWithToy(player, msg, sc){
			msg = player.name + ' joue avec une peluche qui fait du bruit !';
			player.fun = this.valBetween(player.fun + 10, 0, 100);
			player.money = this.valBetween(player.money - 30, 0, 10000000);					

			$('.msgSystem').html(msg);
			sc.msgType = "alert-success";

			console.log(msg);
		}
	}
}