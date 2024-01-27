<template>
    <div id="battle">
        <!-- HEADER -->
        <header>
            <div class="container">
                <div class="d-flex">
                    <div class="player-stats">
                        <h2> Nome Personaggio Giocatore<!-- {{ character.name }}--> </h2>
                        <ul>
                            <li>vita totale: <!--{{ lifeTotaleGiocatore }} --></li>
                            <li>Attacco: <!--{{ playerCharacter.attack }} --> </li>
                            <li><i class="fa-solid fa-shield"></i> <!--{{ playerCharacter.defence }} --></li>
                            <li>Velocita: <!--{{ playerCharacter.speed }}  --></li>
                        </ul>

                    </div>
                    <div class="counter">

                        <h2 class="text-center">Turno: </h2>
                    </div>

                    <div class="enemy-stats">

                        <h2>Nome Personaggio Avversario <!-- {{ character.name }}--></h2>
                        <ul>
                            <li>vita totale: <!--{{ lifeTotalePC }} --></li>
                            <li>Attacco: <!--{{cpuCharacter.attack }} --> </li>
                            <li>Difesa: <!--{{ cpuCharacter.defence }} --></li>
                            <li>Velocita: <!--{{ cpuCharacter.speed }}  --></li>
                        </ul>
                        vita rimasta: {{ cpuCharacter.life > 0 ? cpuCharacter.life : '0' }}
                    </div>
                </div>

            </div>

        </header>

        <!-- START GAME -->
        <div class="text-center">
            <div>
                <a @click="chooseAsset" class="btn mt-2 btn-lg" href="#!"
                    :class="(store.selectedCharacterId && store.selectedItemId && store.selectedTypeId) ? 'btn-success' : 'btn-primary'">
                    Start A Game
                </a>
            </div>


        </div>



        <!-- ARENA -->

        <main class="d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <!-- GIOCATORE -->
                    <div class="col-12 col-md-4">
                        <div class="protagonista">
                            <PlayerCard />
                            
                            <div class="health-bar">
                                <div class="bar" ref="playerHealth">
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PLAY -->
                    <div class="col-12 col-md-4">

                        <div class="d-flex flex-column justify-content-end h100">
                            <a class="btn btn-warning my-4" @click="round">{{ roundPlayer1 ? 'attacca' : 'difendi' }}</a>
                        </div>
                    </div>


                    <div class="col-12 col-md-4">
                        <div class="avversario">
                            <EnemyCard />
                            <div class="health-bar" >
                                <div class="bar" ref="enemyHealth">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <!-- avversario stats -->
            <div class="bg-dark text-white p-1 avversario-2">

            </div>
        </main>
    </div>
</template>

<script>
import { store } from '../store.js';
import PlayerCard from '../components/PlayerCard.vue';
import EnemyCard from '../components/EnemyCard.vue';


export default {
    name: "BattleArena",
    data() {
        return {
            store,
            lifeTotaleGiocatore: 0,
            lifeTotalePC: 0,

            barraPercentualeGiocatore: 100,
            barraPercentualeAvversario: 100,

            vincitore: null,

            playerCharacter: {},
            cpuCharacter: {},

            roundCount: 0,
            roundPlayer1: true,
            hitWidth: 0,
        }
    },
    components: {
        PlayerCard,
        EnemyCard,

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
                } else {
                    this.fightTurn(this.cpuCharacter, this.playerCharacter);
                }
                //aumento di 1 il numero totale dei round
                this.roundCount += 1;
                this.roundPlayer1 = !this.roundPlayer1;

               
                this.store.playerHp = this.playerCharacter.life;
                this.store.enemyHp = this.cpuCharacter.life;

                //aggiorno barra hp
                this.barraPercentualeGiocatore = Math.floor(100 * (Math.max(0, this.playerCharacter.life) / this.store.lifeTotaleGiocatore));
                this.barraPercentualeAvversario = Math.floor(100 * (Math.max(0, this.cpuCharacter.life) / this.store.lifeTotalePC));

                
                this.$refs.enemyHealth.style.width = Math.floor(100 * (Math.max(0, this.cpuCharacter.life) / this.store.lifeTotalePC))+'%';
                this.$refs.playerHealth.style.width = Math.floor(100 * (Math.max(0, this.playerCharacter.life) / this.store.lifeTotaleGiocatore))+'%';
                
                
                //se qualcuno ha vinto 

                if (this.playerCharacter.life <= 0 || this.cpuCharacter.life <= 0) {
                    this.vincitore = this.playerCharacter.life > 0 ? 'Giocatore' : 'PC';
                    console.log(this.vincitore)

                    //resettiamo ? 

                }

            }
        },
    }
}
</script>

<style lang="scss">
.health-bar {
    margin-top: 25x;
    width: 100%;
    height: 20px;
    background: #ddd;
    border-radius: 5px;
    box-sizing: border-box;
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
}

header {
    background-color: rgba(0, 0, 0, 0.176);

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






// .counter {
//     width: 70px;
//     position: absolute;
//     left: 700px;
// }
</style>



<!-- round() {
  if (this.playerCharacter.life > 0 && this.cpuCharacter.life > 0 && !this.vincitore) {
    // ... il resto del tuo codice ...

    // Aggiornamento della percentuale di vita
    this.barraPercentualeGiocatore = (this.playerCharacter.life / this.lifeTotaleGiocatore) * 100;
    this.barraPercentualeAvversario = (this.cpuCharacter.life / this.lifeTotalePC) * 100;
    
    // ... il resto del tuo codice ...
  }
} -->