/// <reference path="../core/angular.d.ts"/>
/// <reference path="../app.ts"/>
/// <reference path="../core/factories/player-factory.ts"/>

module Application.Controllers {
    export class HomeController {
        scope: any;
        interval: any;
timeout: any;
        player: any;
        lifeFactory: any;
        workFactory: any;
        funFactory: any;

        msgType: string;


constructor($scope: ng.IScope, $interval: ng.IIntervalService, $timeout:ng.ITimeoutService, Player: any, Work: any, Life: any, Fun: any) {
            this.scope = $scope;
            this.interval = $interval;
            this.timeout = $timeout;
            // Player Factory
            this.player = new Player;
            // Life Factory
            this.lifeFactory = new Life;
            // Work Factory
            this.workFactory = new Work;
            // Fun Factory
            this.funFactory = new Fun;
        }

        // Vérification des stats du player pour lancement des msg alertes
        updateStats( player, msg) {
            $('.overlay').fadeOut('slow');

            var verifStats = function(scope, player, msg) {
                // Fun
                if(player.fun <= 40){
                    msg = "Tu joue avec moi ?";
                    $('.msgSystem').html(msg);
                    scope.msgType = "alert-info";
                }
                // Health
                if(player.health <= 40){
                    msg = "Tu peux me donner un bain ?";
                    scope.msgType = "alert-info";
                    $('.msgSystem').html(msg);
                }
                // Food
                if(player.life <= 40){
                    msg = "J'ai faim !";
                    scope.msgType = "alert-warning";
                    $('.msgSystem').html(msg);
                }
                // Life
                if(player.life <= 15 && player.life !== 0){
                    msg = "Attention votre tamagoshu n'a presque plus de point de vie !";
                    scope.msgType = "alert-danger";
                    $('.msgSystem').html(msg);
                } else if (player.life <= 0) {
                    $('.frontpage').html('Oh non ! Tamagoshu est mort. Voulez-vous recommencer la partie ?');
                    $('.overlay').fadeIn('slow');

                    this.timeout(scope.interval.cancel(verifInterval), 2000);
                }
            };

            var sc = this.scope.hc;

            var verifInterval = this.interval(function(){verifStats(sc, player, msg)}, 1000) ;
        }


        //Modifications auto des stats du tamagoshu
        decStats( player ){
            var decVars = function(scope, player){
                //Si le jeu est gagné OU si le joueur est mort
                if(player.level === 3 && player.xp >= 100 || player.life <= 0){
                    console.log('stop game');
                    scope.interval.cancel(decInterval);
                //Sinon le jeu est en cours
                } else {
                    player.life--;

                    //Influence du fun sur les stats
                    if(player.fun > 0){
                        player.fun -= 5;
                    } else {
                        player.life -= 2;
                    }

                    //Influence de la santé sur les stats
                    if (player.health > 0){
                        player.health -= 2;
                    } else {
                        player.life -= 5;
                    }
                }
            };
            var sc = this.scope.hc;
            var decInterval = this.interval(function(){ decVars(sc, player) }, 3000);
        }
    }
}
