<template>
    <section class="position-relative">
        <div>
            <a @click="playResult" class="btn mt-2 btn-lg" href="#!" :class="(store.selectedCharacterId && store.selectedItemId && store.selectedTypeId) ? 'btn-success' : 'btn-primary'">Pulsante che avvia la partita</a>

            <div id="risultatoGiocatore">Risultato Giocatore: {{ risultatoGiocatore }}</div>
            <div id="risultatoComputer">Risultato Computer: {{ risultatoPC }}</div>
            <div id="vincitore">Vincitore: {{ vincitore }}</div>
        </div>
        <AppHeader />
        <router-view class="router"></router-view>
    </section>
</template>

<script>
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
        FooterComponent
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


//data() {
//         return {
//             store,
            
//         }
//     },
//     methods: {
//       playResult(){
//             if(this.store.selectedCharacterId && this.store.selectedItemId && this.store.selectedTypeId){
                
//                 let risultatoGiocatore = 0;
//                 let risultatoComputer = 0;

//                 while(risultatoGiocatore === risultatoComputer){
//                     risultatoGiocatore = this.startFight();
//                     risultatoComputer = this.startFight();
//                 } 
                
//                 //let risultatoComputer= determinaVincitore(risultatoGiocatore, risultatoPC);                
//                 this.$refs.risultatoComputer.innerHTML= 'risultato del computer' + ' ' + risultatoComputer;

//                 //let risultatoGiocatore= determinaVincitore(risultatoGiocatore, risultatoPC);                
//                 this.$refs.risultatoGiocatore.innerHTML= 'risultato del giocatore' + ' ' + risultatoGiocatore;

//                 let vincitore = this.determinaVincitore(risultatoGiocatore, risultatoComputer);                
//                 this.$refs.vincitore.innerHTML= 'vincitore'+ ' ' + vincitore;
                
//             }
//         },
        
//         startFight() {
//             //ritorna il risultato per un giocatore
//             return Math.floor(Math.random() * 6) + 1;
//         },

//         determinaVincitore(giocatore, pc) {
//          if (giocatore > pc) {
//             return 'Giocatore';
//         } else if (pc > giocatore) {
//             return 'PC';
//         } else if(pc === giocatore) {
//             return 'Pareggio';
            
//         }
//       }
//     },
//     mounted() {
//     },
// }