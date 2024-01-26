<template>
    <section class="position-relative bg-white">
        <AppHeader />
        <!-- BUTTON START GAME -->
        <div v-if="store.showStartButton" class="mt-5 container d-flex flex-column justify-content-center ">
            <a @click="playResult" class="btn mt-2 btn-lg" href="#!"
                :class="(store.selectedCharacterId && store.selectedItemId && store.selectedTypeId) ? 'btn-success' : 'btn-primary'">
                Start A Game</a>

            <div id="risultatoGiocatore">Risultato Giocatore: {{ risultatoGiocatore }}</div>
            <div id="risultatoComputer">Risultato Computer: {{ risultatoPC }}</div>
            <div id="vincitore">Vincitore: {{ vincitore }}</div>
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
            risultatoGiocatore: 0,
            risultatoPC: 0,
            vincitore: ''
        }
    },
    methods: {
        playResult() {
            if (this.store.selectedCharacterId && this.store.selectedItemId && this.store.selectedTypeId) {
                do {
                    this.risultatoGiocatore = this.startFight();
                    this.risultatoPC = this.startFight();
                } while (this.risultatoGiocatore === this.risultatoPC); // Continua fino a quando i punteggi non sono diversi

                this.vincitore = this.determinaVincitore(this.risultatoGiocatore, this.risultatoPC);
            }
        },

        startFight() {
            return Math.floor(Math.random() * 6) + 1;
        },

        determinaVincitore(giocatore, pc) {
            if (giocatore > pc) {
                return 'Giocatore';
            } else {
                return 'PC';
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.router {
    margin-bottom: 200px;
}
</style>
