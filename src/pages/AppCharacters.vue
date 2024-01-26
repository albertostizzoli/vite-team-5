<template>
    <section class="pt-4 page-bg">
        <div class="container px-lg-5 p-3 rounded-3 bg-blur">

            <h2 class="mb-5 text-white">Choose a Characters</h2>
            <!-- PAGINATION -->
            <div class="d-flex justify-content-between mb-5 text-white">
                <button @click="previousPage" class="btn-next-prev"><span>Indietro</span></button>
                <h5 class="mt-3">Current page: <span class="fw-bold">{{ currentPage }}</span> of <span class="fw-bold">{{
                    lastPage }}</span></h5>
                <button @click="nextPage" class="btn-next-prev">Avanti</button>
            </div>
            <!-- END PAGINATION -->
            <div class="row gx-lg-5">
                <div class="col-lg-6 col-xxl-4 mb-5" v-for=" character in store.characters" :key="character.id">
                    <PopuP id="pop-up" class="pb-5 position-absolute bottom-50 "
                        :isActive="store.selectedCharacterId === character.id" />
                    <div class="card bg-light border-0 h-100">
                        <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div class="box-image feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                <img :src="store.imgPath + character.image" alt="">
                            </div>
                            <h2 class="fs-4 fw-bold">
                                <router-link class="text-secondary text-decoration-none "
                                    :to="{ name: 'show-character', params: { id: character.id } }">
                                    {{ character.name }}
                                </router-link>
                            </h2>
                            <button class="bottone " @click="selectCharacter(character)"
                                :class="(store.selectedCharacterId == character.id) ? 'bottone-pieno ' : (store.CPUCharacterId == character.id) ? 'bottone-avversario ' : 'bottone-vuoto '">{{
                                    (store.selectedCharacterId
                                        == character.id) ? 'Selezionato' : 'Seleziona' }}


                            </button>
                            <p class="mb-0">{{ character.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- PAGINATION -->
            <div class="d-flex justify-content-between mb-5 text-white">
                <button @click="previousPage" class="btn-next-prev"><span>Indietro</span></button>
                <h5 class="mt-3">Current page: <span class="fw-bold">{{ currentPage }}</span> of <span class="fw-bold">{{
                    lastPage }}</span></h5>
                <button @click="nextPage" class="btn-next-prev">Avanti</button>
            </div>
            <!-- END PAGINATION -->
        </div>
    </section>
</template>

<script>
import PopuP from '@/components/PopuP.vue';
import { store } from '../store.js';
import axios from "axios";

export default {
    name: "AppCharacters",
    data() {
        return {
            store,
            currentPage: 1,
            lastPage: 0,
        };
    },
    methods: {
        getAllCharacters() {
            axios.get(this.store.apiUrl + "/characters", { params: { page: this.currentPage } }).then((res) => {
                this.store.characters = res.data.results.data;

                /*  CURRENT E LAST PAGE */
                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
            });
        },
        selectCharacter(character) {
            if (store.selectedCharacterId === character.id) {
                store.selectedCharacterId = "";
                store.selectedCharacter = {};
                return;
            }
            this.store.selectedCharacter = character;
            this.store.selectedCharacterId = character.id;

            //richiamiamo scelta computer
            this.cpuSelection();
        },
        cpuSelection() {

            this.store.CPUCharacterId = false
            while (!this.store.CPUCharacterId || this.store.CPUCharacterId === this.store.selectedCharacterId && this.store.characters.length === 1) {
                this.store.CPUCharacterId = Math.floor(Math.random() * (this.store.characters.length)) + ((this.currentPage - 1) * 9) + 1
            }
            this.store.CPUCharacter = this.store.characters[this.store.CPUCharacterId - ((this.currentPage - 1) * 9) - 1];


        },
        nextPage() {
            if (this.currentPage < this.lastPage) {
                this.currentPage = this.currentPage + 1;
            }
            else {
                this.currentPage = 1;
            }
            this.getAllCharacters();
        },
        previousPage() {
            if (this.currentPage > 0) {
                this.currentPage -= 1;
                this.getAllCharacters();
            }
        }
    },
    mounted() {
        this.getAllCharacters();
    },
    components: { PopuP }
}
</script>

<style lang="scss" scoped></style>