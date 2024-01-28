<template>
    <section class="position-relative">
        <AppHeader />
        <div id="back-snow">
            <BackgroundSnow />
        </div>
        <!-- modifica branch 5 -->
        <!-- <BattleLogic /> -->
        <router-view class="router"></router-view>
    </section>
    <FooterComponent id="footer-com" />
</template>

<script>
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import FooterComponent from './components/FooterComponent.vue';
//modifica branch 5
import BattleLogic from './test5/BattleLogic.vue';
import BackgroundSnow from '../src/components/partials/BackgroundSnow.vue';
export default {
    name: 'App',
    components: {
        AppHeader,
        FooterComponent,
        // modifica branch 5
        BattleLogic,
        BackgroundSnow
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
#footer-com {
    margin-top: 70px;
}

#back-snow {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
}
</style>
