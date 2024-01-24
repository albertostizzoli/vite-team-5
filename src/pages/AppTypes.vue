<template>
    <section class="pt-4 ">
        <div class="container px-lg-5">
            <h2 class="mb-5">Choose a Type</h2>
            <div class="row gx-lg-5">
                <div class="col-lg-6 col-xxl-4 mb-5" v-for=" tipo in store.types" :key="tipo.id">
                    <div class="card bg-light border-0 h-100">
                        <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i
                                    class="bi bi-collection"></i></div>
                            <h2 class="fs-4 fw-bold">
                                {{ tipo.name }}
                            </h2>
                            <button class="bottone " @click="selectType(tipo)"
                                :class="(store.selectedTypeId == tipo.id) ? 'bottone-pieno' : 'bottone-vuoto'">
                                {{(store.selectedTypeId == tipo.id) ?'Selezionato' : 'Seleziona'}}
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
import { store } from '../store.js';
export default {

    name: "AppTypes",
    data() {
        return {
            store,
        }
    },
    methods: {
        selectType(type) {
            if(store.selectedTypeId === type.id){
                store.selectedTypeId = "";
                store.selectedType = {};
                return
            }
            this.store.selectedType = type;
            this.store.selectedTypeId = type.id;
            console.log(this.store.selectedType);
        },

    },
    mounted() {

    }
}
</script>

<style lang="scss" scoped></style>