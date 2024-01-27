<template>
    <section class="position-relative">
        
        <!-- BUTTON START GAME -->
        <div v-if="store.showStartButton" class="mt-5 container d-flex flex-column justify-content-center ">

            <!-- pulsante preparazione/ reset -->
            <a @click="chooseAsset" class="btn mt-2 btn-lg" href="#!"
                :class="(store.selectedCharacterId && store.selectedItemId && store.selectedTypeId) ? 'btn-success' : 'btn-primary'">
                Start A Game
            </a>

            <!-- pulsante battaglia -->
            <a class="btn btn-warning my-4" @click="round">{{ roundPlayer1 ? 'attacca': 'difendi' }}</a>
            
            <!-- sezione statistiche -->
            <div class="d-flex flex-row w-100 justify-content-evenly ">
                <div class="card bg-white p-5">
                    PLAYER <br/>
                    vita totale: {{ lifeTotaleGiocatore }} <br/>
                    attacco: {{ playerCharacter.attack }} <br/>
                    difesa: {{ playerCharacter.defence }} <br/>
                    velocita: {{ playerCharacter.speed }} <br/>

                    vita rimasta: {{ playerCharacter.life > 0 ? playerCharacter.life : '0'}} <br/>
                </div>
                <div class="card bg-white p-5">
                    PC <br/>
                    vita totale: {{ lifeTotalePC }} <br/>
                    attacco: {{cpuCharacter.attack }} <br/>
                    difesa: {{cpuCharacter.defence }} <br/>
                    velocita: {{cpuCharacter.speed }} <br/>
                    
                    vita rimasta: {{cpuCharacter.life > 0 ? cpuCharacter.life : '0'}} <br/>
                </div>
            </div>
            <!-- round -->
            <div class="my-3 text-light ">
                round: {{ roundCount }}
            </div>

            <!-- sezione vittoria -->
            <div class="btn btn-warning" id="vincitore">Vincitore: {{ vincitore }}</div>
            <div class="btn btn-danger" id="vincitore">Vincitore: {{ vincitore == 'PC' ? store.CPUCharacter.name :
                store.selectedCharacter.name }}
            </div>

        </div>
        
        <router-view class="router"></router-view>
    </section>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'BattleLogic',
    components: {
    },
    data() {
        return {
            store,
            lifeTotaleGiocatore: 0,
            lifeTotalePC: 0,
            vincitore: null,

            playerCharacter: {},
            cpuCharacter: {},

            roundCount: 0,
            roundPlayer1: true,
        }
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

                this.lifeTotaleGiocatore = this.playerCharacter.life;
                this.lifeTotalePC = this.cpuCharacter.life;

                console.log('fine selezione ',this.lifeTotaleGiocatore);

                this.vincitore = null;
                this.roundCount = 0;

                // this.lifeTotaleGiocatore = 0;
                // this.lifeTotalePC = 0;
                //     this.playerCharacter = {}; 
                //     this.cpuCharacter = {}
                //scelta casuale turno iniziale
                this.roundPlayer1 = Boolean(Math.round(Math.random));
                
            }
        },
        round(){
            // se la vita totale del giocatore è stata assegnata, significa che la partita è iniziata
            console.log('vincitore ',this.vincitore)
            if  (this.playerCharacter.life > 0 && this.cpuCharacter.life > 0 && !this.vincitore) {
                
                if (this.roundPlayer1) {
                    this.fightTurn(this.playerCharacter, this.cpuCharacter);
                } else {
                    this.fightTurn(this.cpuCharacter, this.playerCharacter);
                }
                //aumento di 1 il numero totale dei round
                this.roundCount += 1;
                this.roundPlayer1 = !this.roundPlayer1;

                console.log('play selected life after', this.playerCharacter.life)
                console.log('play bot life after', this.cpuCharacter.life)

                //}
                
                //se qualcuno ha vinto 

                if( this.playerCharacter.life <= 0 || this.cpuCharacter.life <= 0){
                    this.vincitore = this.playerCharacter.life > 0 ? 'Giocatore' : 'PC';
                    console.log(this.vincitore)

                    //resettiamo ? 
                  
                }
              
            }
        },
    }

}
</script>

<style lang="scss" scoped>
.router {
    margin-bottom: 200px;
}
</style>
