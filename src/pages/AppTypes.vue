<template>
    <section class="pt-4 page-bg">
        <div class="container px-lg-5 p-3 rounded-3 bg-blur mb-5">
            <!-- <PopuP /> -->
            <h2 class="mb-5 text-white">Choose a Type</h2>
            <div class="row gx-lg-5">
                <LoaderComponent v-if="store.types <= 0"/>
                <div class="col-lg-6 col-xxl-4 mb-5" v-for=" tipo in store.types" :key="tipo.id">
                    <PopuP id="pop-up" class="pb-5 position-absolute bottom-50 "
                        :isActive="store.selectedTypeId === tipo.id" />
                    <div class="card bg-light border-0 h-100">
                        <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div class="box-image feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                <img :src="tipo.image ? (store.imgPath + tipo.image) : 'https://assetsio.reedpopcdn.com/news-videogiochi-patch-7-01-fortnite-spada-infinity-blade-modalita-creativa-tutti-i-dettagli-1544524547956.jpg?width=690&quality=75&format=jpg&auto=webp'"
                                    :alt="tipo.name">
                            </div>
                            <h2 class="fs-4 fw-bold">
                                <router-link class="text-secondary text-decoration-none "
                                    :to="{ name: 'show-types', params: { id: tipo.id } }">
                                    {{ tipo.name }}
                                </router-link>

                            </h2>
                            <button class="bottone " @click="selectType(tipo)"
                                :class="(store.selectedTypeId == tipo.id) ? 'bottone-pieno' : (store.CPUTypeId == tipo.id) ? 'bottone-avversario ' : 'bottone-vuoto '">
                                {{ (store.selectedTypeId == tipo.id) ? 'Selezionato' : 'Seleziona' }}
                            </button>
                            <p class="mb-0">{{ tipo.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--  -->
</template>

<script>
import LoaderComponent from '../components/partials/LoaderComponent.vue';
import axios from 'axios';
import { store } from '../store.js';
import PopuP from '@/components/PopuP.vue';
export default {
    name: "AppTypes",
    data() {
        return {
            store,
        };
    },
    methods: {
        getAllTypes() {
            axios.get(this.store.apiUrl + "/types").then((res) => {
                this.store.types = res.data.results;

            })


        },
        selectType(type) {
            if (store.selectedTypeId === type.id) {
                store.selectedTypeId = "";
                store.selectedType = {};
                return;
            }
            this.store.selectedType = type;
            this.store.selectedTypeId = type.id;


            this.cpuSelection();
        },
        cpuSelection() {

            this.store.CPUTypeId = false;
            while (!this.store.CPUTypeId || this.store.CPUTypeId == this.store.selectedTypeId) {
                this.store.CPUTypeId = Math.floor(Math.random() * (this.store.types.length)) + 1;


                this.store.CPUTypeId = parseInt(this.store.CPUTypeId);
                this.store.selectedTypeId = parseInt(this.store.selectedTypeId);
            }




            this.store.CPUType = this.store.types[this.store.CPUTypeId - 1];
        }
    },
    mounted() {
        this.getAllTypes();
    },
    components: { PopuP, LoaderComponent }
}
</script>

<style lang="scss" scoped></style>


