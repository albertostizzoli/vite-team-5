<template>
    <div id="battle">
        <!-- HEADER -->
        <header class="gradient-background">
            <div class="container">
                <div class="d-flex">
                    <div class="player-stats">
                        <h2 class="my-text-outline"> {{ playerCharacter.name }} </h2>
                        <ul>
                            <li><i class="fa-solid fa-heart my-text-outline"></i> {{ playerCharacter.life > 0 ?
                                playerCharacter.life : 0 }} / {{ store.lifeTotaleGiocatore }}</li>
                            <li><i class="fa-solid fa-hand-fist my-text-outline"></i> {{ playerCharacter.attack }} </li>
                            <li><i class="fa-solid fa-shield my-text-outline"></i> {{ playerCharacter.defence }}</li>
                            <li><i class=" fa-solid fa-person-running"></i> {{ playerCharacter.speed }} </li>
                        </ul>

                    </div>
                    <div class="counter mt-4 ">

                        <h2 class="text-center my-text-outline">{{ roundCount }}</h2>

                        <div v-if="vittoria">
                            <div class="text-center">
                                <div>
                                    <a @click="chooseAsset" class="btn mt-2 btn-lg" href="#!"
                                        :class="(store.selectedCharacterId && store.selectedItemId && store.selectedTypeId) ? 'btn-success' : 'btn-primary'">
                                        <i class="fa-solid fa-reply"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div v-else class="w-100">
                            <!-- PLAY -->
                            <div class="d-flex flex-column justify-content-center align-items-center h100">

                                <a class="btn my-4" :class="roundPlayer1 ? 'btn-danger' : 'btn-primary '" @click="round"
                                    style="font-size: 2em;"><i class="fa-solid "
                                        :class="roundPlayer1 ? 'fa-hand-fist' : ' fa-shield'"></i> </a>

                            </div>
                        </div>


                    </div>



                    <div class="enemy-stats d-flex flex-column align-items-end ">

                        <h2 class="my-text-outline"> {{ cpuCharacter.name }}</h2>
                        <ul class=" list-unstyled me-4 ">
                            <li><i class="fa-solid fa-heart my-text-outline"></i> {{ cpuCharacter.life > 0 ?
                                cpuCharacter.life : '0' }} / {{ store.lifeTotalePC }}</li>
                            <li><i class="fa-solid fa-hand-fist my-text-outline"></i> {{ cpuCharacter.attack }} </li>
                            <li><i class="fa-solid fa-shield my-text-outline"></i> {{ cpuCharacter.defence }}</li>
                            <li><i class=" fa-solid fa-person-running "></i> {{ cpuCharacter.speed }} </li>

                        </ul>
                    </div>
                </div>

            </div>

        </header>

        <!-- START GAME -->




        <!-- ARENA -->

        <main class="d-flex align-items-center pt-5 position-relative">
            <div class="container">
                <div class="row">
                    <!-- GIOCATORE -->
                    <div class="col-12 col-md-4">
                        <div class="protagonista margin-top-protagonista" ref="playerAnimation">
                            <PlayerCard />

                            <div class="health-bar">
                                <div class="bar" ref="playerHealth">

                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- ANIMAZIONI -->
                    <div class="col-12 col-md-4">



                    </div>

                    <!-- AVVERSARIO -->
                    <div class="col-12 col-md-4">
                        <div class="avversario" ref="enemyAnimation">
                            <EnemyCard />
                            <div class="health-bar ">
                                <div class="bar" ref="enemyHealth">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- MESSAGGIO VITTORIA -->

            <div class="position-absolute absolute-centered " v-if="vittoria">

                <div
                    class="my-win bg-blur d-flex flex-column justify-content-center align-items-center gap-2 rounded-3 floating">

                    <div v-if="playerCharacter.life > 0" class="fs-1">
                        Hai vinto <i class="fa-solid fa-trophy fa-beat" style="color: gold;"></i>
                    </div>
                    <div v-else class="fs-1">
                        Hai perso <i class="fa-solid fa-heart-crack fa-fade " style="color: red;"></i>
                    </div>
                    <div class=" d-flex flex-row justify-content-center align-items-center gap-3">
                        <a @click="chooseAsset" class="btn mt-2 btn-lg" href="#!"
                            :class="(store.selectedCharacterId && store.selectedItemId && store.selectedTypeId) ? 'btn-success' : 'btn-primary'">
                            <i class="fa-solid fa-reply"></i>
                        </a>

                        <router-link :to="{ name: 'home' }" class="btn mt-2 btn-lg btn-warning">
                            <i class="fa-solid fa-home "></i>
                        </router-link>
                    </div>
                </div>

            </div>
        </main>

    </div>
</template>

<script>
import { store } from '../store.js';
import PlayerCard from '../components/PlayerCard.vue';
import EnemyCard from '../components/EnemyCard.vue';
// import ModalEndGame from '../components/ModalEndGame.vue';



export default {
    name: "BattleArena",
    data() {
        return {
            store,


            barraPercentualeGiocatore: 100,
            barraPercentualeAvversario: 100,

            vincitore: null,

            playerCharacter: {},
            cpuCharacter: {},

            roundCount: 0,
            roundPlayer1: true,
            hitWidth: 0,
            vittoria: false
        }
    },
    components: {
        PlayerCard,
        EnemyCard,
        // ModalEndGame

    },
    methods: {

        calculateDamage(attack, defence) {
            console.log('attack: ', attack, ' defence: ', defence)


            return Math.max(attack - defence, 0);
        },

        calculateDodge(speed) {
            console.log(speed)
            console.log('dodge% :', speed * 0.8)

            return speed * 0.4;

        },

        applyItemEffects(character, item) {
            const modifiedCharacter = { ...character };
            modifiedCharacter.attack += item.weight;
            modifiedCharacter.speed -= item.weight * 2;
            console.log(item.weight)
            // modifiedCharacter.life *= 2;

            return modifiedCharacter;
        },

        fightTurn(attacker, defender) {
            let damage = this.calculateDamage(attacker.attack, defender.defence);
            let dodgeChance = this.calculateDodge(defender.speed);

            if (Math.random() * 100 < dodgeChance) {
                damage = 0;
            }

            defender.life -= damage;
            return defender.life <= 0;
        },

        chooseAsset() {

            if (this.store.selectedCharacterId && this.store.selectedItemId && this.store.selectedTypeId) {
                this.vittoria = false;

                this.playerCharacter = this.applyItemEffects(this.store.selectedCharacter, this.store.selectedItem);
                this.cpuCharacter = this.applyItemEffects(this.store.CPUCharacter, this.store.CPUItem);

                //player total hp per grafica 


                // per averli locali
                this.store.lifeTotaleGiocatore = this.playerCharacter.life;
                this.store.lifeTotalePC = this.cpuCharacter.life;


                console.log('fine selezione ', this.lifeTotaleGiocatore);

                this.vincitore = null;
                this.roundCount = 0;
                this.$refs.playerHealth.style.width = '100%';
                this.$refs.enemyHealth.style.width = '100%';


                this.roundPlayer1 = Boolean(Math.round(Math.random));

            }
        },
        round() {
            // se la vita totale del giocatore è stata assegnata, significa che la partita è iniziata
            console.log('vincitore ', this.vincitore)
            if (this.playerCharacter.life > 0 && this.cpuCharacter.life > 0 && !this.vincitore) {

                if (this.roundPlayer1) {
                    this.fightTurn(this.playerCharacter, this.cpuCharacter);



                    this.$refs.playerAnimation.style.transition = 'transform 0.3s ease';
                    this.$refs.playerAnimation.style.transform = 'rotate(5deg) translateX(150px)';
                    setTimeout(() => {
                        this.$refs.playerAnimation.style.transform = 'rotate(0deg) translateX(-50px)';
                    }, 300);




                } else {
                    this.fightTurn(this.cpuCharacter, this.playerCharacter);

                    this.$refs.enemyAnimation.style.transition = 'transform 0.3s ease';
                    this.$refs.enemyAnimation.style.transform = 'rotate(-5deg) translateX(-150px)';
                    setTimeout(() => {
                        this.$refs.enemyAnimation.style.transform = 'rotate(0deg) translateX(50px)';
                    }, 300);

                }
                //aumento di 1 il numero totale dei round
                this.roundCount += 1;
                this.roundPlayer1 = !this.roundPlayer1;


                this.store.playerHp = this.playerCharacter.life;
                this.store.enemyHp = this.cpuCharacter.life;

                //aggiorno barra hp
                this.barraPercentualeGiocatore = Math.floor(100 * (Math.max(0, this.playerCharacter.life) / this.store.lifeTotaleGiocatore));
                this.barraPercentualeAvversario = Math.floor(100 * (Math.max(0, this.cpuCharacter.life) / this.store.lifeTotalePC));


                this.$refs.enemyHealth.style.width = Math.floor(100 * (Math.max(0, this.cpuCharacter.life) / this.store.lifeTotalePC)) + '%';
                this.$refs.playerHealth.style.width = Math.floor(100 * (Math.max(0, this.playerCharacter.life) / this.store.lifeTotaleGiocatore)) + '%';


                //se qualcuno ha vinto 

                if (this.playerCharacter.life <= 0 || this.cpuCharacter.life <= 0) {
                    this.vincitore = this.playerCharacter.life > 0 ? 'Giocatore' : 'PC';
                    console.log(this.vincitore)

                    this.vittoria = true;
                    //resettiamo ? 

                }

            }
        },
    },
    mounted() {
        this.chooseAsset();
    }
}
</script>

<style lang="scss" scoped>
.absolute-centered {
    top: 50%;
    left: 50%;
    width: 400px;
    height: 400px;
    transform: translate(-50%, -50%);
}

.health-bar {
    background: #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    height: 20px;
}

.bar {
    background: #c54;
    height: 100%;
    border-radius: 4px;
    transition: width 0.5s ease-in-out;
}


#battle {
    background-image: url('../images/battlearena.jpg');
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 9999 !important;
}

header {
    /* background-color: rgba(0, 0, 0, 0.176); */
    // background: linear-gradient(180deg, #000000b0, transparent);
    // animation: gradient-animation;

    .player-stats {
        width: 40%;

        ul {
            li {
                list-style: none;
            }
        }
    }

    .enemy-stats {
        width: 40%;

        ul {
            li {
                text-decoration: none;
            }
        }
    }

    .counter {
        width: 20%;
    }



}

.avversario {
    width: 80%;
}

.my-text-outline {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
}

//spostare la logica di attacco nelle componenti superiori
.my-effects {
    transition: transform 0.3s ease;
    background-color: transparent;




}

.margin-top-protagonista {

    margin-top: 30px;

}




.gradient-background {
    background: linear-gradient(180deg, #000000, #80808069, transparent, transparent);
    background-size: 240% 240%;
    animation: gradient-animation 4s ease infinite;
}

@keyframes gradient-animation {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.my-win {
    padding: 20px;
}
</style>



