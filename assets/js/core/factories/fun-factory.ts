// FunFactory
/// <reference path="../angular.d.ts"/>

module Application.Factories {
	export class Fun{
		constructor(){
			console.log('FunFactory Loaded');
		}

		playBall(player, msg, msgType){
			msg = player.name + ' joue au ballon';
			player.fun += 5;
			player.money -= 20;

			$('.msgSystem').html(msg);
			msgType = "alert-success";
			
			//$('.avatar').animateCss('animated swing');

			console.log(msg);
		}

		playWithFriend(player, msg, msgType){
			msg = player.name + ' joue avec un ami';
			player.fun += 20;
			player.money -= 50;

			$('.msgSystem').html(msg);
			msgType = "alert-success";

			console.log(msg);
		}

		playWithToy(player, msg, msgType){
			msg = player.name + ' joue avec une peluche qui fait du bruit !';
			player.fun += 10;
			player.money -= 30;

			$('.msgSystem').html(msg);
			msgType = "alert-success";

			console.log(msg);
		}
	}
}