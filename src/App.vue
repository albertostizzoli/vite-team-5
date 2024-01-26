<template>


    <section class="position-relative bg-white">
        <AppHeader />
        <!-- BUTTON START GAME -->
        <div v-if="store.showStartButton" class="mt-5 container d-flex flex-column justify-content-center ">
            <a @click="playResult" class="btn mt-2 btn-lg" href="#!"
                :class="(store.selectedCharacterId && store.selectedItemId && store.selectedTypeId) ? 'btn-success' : 'btn-primary'">
                Start A Game</a>

           <div class="btn btn-warning" id="vincitore">Vincitore: {{ vincitore }}</div>
            <div class="btn btn-danger" id="vincitore">Vincitore: {{ vincitore == 'PC' ? store.CPUCharacter.name :
                store.selectedCharacter.name }}
            </div>
 
        </div>
        <!--  -->
        <router-view class="router"></router-view>
    </section>
    <FooterComponent />
</template>

<script>
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
        FooterComponent,
    },
    data() {
        return {
            store,
            lifeTotaleGiocatore: '',
            lifeTotalePC: '',
            vincitore: '',
            //turno: ''
        }
    },
    methods: {


        calculateDamage(attack, defence) {
            console.log('attack: ', attack, ' defence: ', defence)


            return Math.max(attack - defence, 0);
        },

        calculateDodge(speed) {
            console.log(speed)
            console.log('dodge% :', speed * 0.4)

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

        playResult() {
            if (this.store.selectedCharacterId && this.store.selectedItemId && this.store.selectedTypeId) {
                const playerCharacter = this.applyItemEffects(this.store.selectedCharacter, this.store.selectedItem);
                const cpuCharacter = this.applyItemEffects(this.store.CPUCharacter, this.store.CPUItem);
                console.log('play selected', playerCharacter)
                console.log('play bot', cpuCharacter)

                //let playerTurn = true;
                let playerTurn = Math.round(Math.random());

                while (playerCharacter.life > 0 && cpuCharacter.life > 0) {
                    console.log('play selected life', playerCharacter.life)
                    console.log('play bot life', cpuCharacter.life)

                    if (playerTurn) {
                        this.fightTurn(playerCharacter, cpuCharacter);
                    } else {
                        this.fightTurn(cpuCharacter, playerCharacter);
                    }
                    playerTurn = !playerTurn;

                    console.log('play selected life after', playerCharacter.life)
                    console.log('play bot life after', cpuCharacter.life)

                }

                this.vincitore = playerCharacter.life > 0 ? 'Giocatore' : 'PC';
                console.log(this.vincitore)
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
