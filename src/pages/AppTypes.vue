<template>
    <section class="pt-4 ">
        <div class="container px-lg-5">
            <PopuP />
            <h2 class="mb-5">Choose a Type</h2>
            <div class="row gx-lg-5">
                <div class="col-lg-6 col-xxl-4 mb-5" v-for=" tipo in store.types" :key="tipo.id">
                    <div class="card bg-light border-0 h-100">
                        <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div class="box-image feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                <img :src="tipo.image ? (store.imgPath + tipo.image) : 'https://assetsio.reedpopcdn.com/news-videogiochi-patch-7-01-fortnite-spada-infinity-blade-modalita-creativa-tutti-i-dettagli-1544524547956.jpg?width=690&quality=75&format=jpg&auto=webp'"
                                    :alt="tipo.name">
                            </div>
                            <h2 class="fs-4 fw-bold">
                                {{ tipo.name }}
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
                console.log(`types`, this.store.types);
            });
        },
        selectType(type) {
            if (store.selectedTypeId === type.id) {
                store.selectedTypeId = "";
                store.selectedType = {};
                return;
            }
            this.store.selectedType = type;
            this.store.selectedTypeId = type.id;
            console.log(this.store.selectedType);
            console.log('non cambia', this.store.selectedTypeId);
            this.cpuSelection();
        },
        cpuSelection() {
            console.log('Before CPU Selection:', this.store.CPUTypeId, this.store.selectedTypeId);
            this.store.CPUTypeId = false;
            while (!this.store.CPUTypeId || this.store.CPUTypeId == this.store.selectedTypeId) {
                this.store.CPUTypeId = Math.floor(Math.random() * (this.store.types.length)) + 1;
                this.store.CPUTypeId = parseInt(this.store.CPUTypeId);
                this.store.selectedTypeId = parseInt(this.store.selectedTypeId);
            }
            console.log('After CPU Selection:', this.store.CPUTypeId, this.store.selectedTypeId);
            this.store.CPUType = this.store.types[this.store.CPUTypeId - 1];
            console.log('CPUType Object:', this.store.CPUType);
        }
    },
    mounted() {
        this.getAllTypes();
    },
    components: { PopuP }
}
</script>

<style lang="scss" scoped></style>
