// WorkFactory
/// <reference path="../angular.d.ts"/>

module Application.Factories {
    export class Work{

        constructor (){
            console.log('WorkFactory Loaded');
        }


        getRandomIntInclusive(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        combat(player, msg, sc) {
            let win: number = this.getRandomIntInclusive(0,1);

            if(win === 0){
                msg = 'Pikachu perd le combat';
                sc.msgType = "alert-warning";
                player.life = player.life - 5;
                player.health = player.health - 5;
                player.money = player.money - 15;
                console.log(msg);
            } else {
                msg = 'Pikachu gagne le combat';
                sc.msgType = "alert-success";
                player.xp = player.xp + 20;
                player.money = player.money + 15;
                console.log(msg);
            }

            $('.msgSystem').html(msg);

            this.updateLevel(player, msg, sc);
        }

        training(player, msg, sc) {
            msg ='Pikachu gagne en expérience';
            sc.msgType = "alert-success";
            player.xp = player.xp + 5;
            console.log(msg);
            console.log(player.xp);
            console.log(sc);

            $('.msgSystem').html(msg);

            this.updateLevel(player, msg, sc);
        }


        updateLevel(player, msg, sc){
            if(player.level === 3 && player.xp >=100){
                $('.frontpage').html('<h2>Vous avez gagné la partie !<br> Votre pokémon a atteint son niveau max.</h2>');
                $('.overlay').fadeIn('slow');

            } else if(player.xp >= 100){
                msg = "Tamagochu monte d'un niveau !";
                sc.msgType = "alert-success";
                player.level += 1;
                player.xp = 0;
            }

            if(player.level === 2 && player.xp === 0 && player.name !== "Pikachu"){
                player.name = "Pikachu";
                player.img = "assets/img/pikachu.gif";
                msg = "Tamagochu évolue ! Il devient " + player.name;
                sc.msgType = "alert-success";

            } else if (player.level === 3 && player.xp === 0 && player.name !== "Raichu") {
                player.name = "Raichu";
                player.img = "assets/img/raichu.gif";
                msg = "Tamagochu évolue ! Il devient " + player.name;
                sc.msgType = "alert-success";

            }

            $('.msgSystem').html(msg);
        }
    }
}
