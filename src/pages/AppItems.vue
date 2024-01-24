<template>
    <section class="pt-4">
        <div class="container px-lg-5">
            <h2 class="mb-5">Choose an Items</h2>
            <!-- PAGINATION -->
            <div class="d-flex justify-content-between mb-5">
                <button @click="previousPage" class="btn-next-prev"><span>Indietro</span></button>
                <h5 class="mt-3">Current page: <span class="fw-bold">{{ currentPage }}</span> of <span class="fw-bold">{{
                    lastPage }}</span></h5>
                <button @click="nextPage" class="btn-next-prev">Avanti</button>
            </div>
            <!-- END PAGINATION -->
            <div class="row gx-lg-5">
                <div class="col-lg-6 col-xxl-4 mb-5" v-for="item in store.items" :key="item.id">
                    <div class="card bg-light border-0 h-100">
                        <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                <i class="bi bi-collection"></i>
                            </div>
                            <h2 class="fs-4 fw-bold">
                                <router-link class="text-secondary text-decoration-none"
                                    :to="{ name: 'items', params: { id: item.id } }">
                                    {{ item.name }}
                                </router-link>
                            </h2>
                            <button class="btn " @click="selectItem(item)"
                                :class="(store.selectedItemId == item.id) ? 'btn-success' : 'btn-primary'">Seleziona</button>
                            <p class="mb-0">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from "../store.js";
import axios from "axios";

export default {
    name: "AppItems",
    data() {
        return {
            store,
            currentPage: 1,
            lastPage: 0,
        };
    },
    methods: {
        getAllItems() {
            axios
                .get(this.store.apiUrl + "/items", {
                    params: { page: this.currentPage },
                })
                .then((res) => {
                    this.store.items = res.data.results.data;
                    console.log(`items`, res.data);
                    console.log(this.store.items);
                    this.currentPage = res.data.results.current_page;
                    this.lastPage = res.data.results.last_page;
                });
        },
        selectItem(item) {
            if(store.selectedItemId === item.id){
                store.selectedItemId = "";
                store.selectedItem = {};
                return
            }
            this.store.selectedItem = item;
            this.store.selectedItemId = item.id;
            console.log(this.store.selectedItem);
        },
        nextPage() {
            if (this.currentPage < this.lastPage) {
                this.currentPage = this.currentPage + 1;
            } else {
                this.currentPage = 1;
            }
            this.getAllItems();
        },
        previousPage() {
            if (this.currentPage > 0) {
                this.currentPage -= 1;
                this.getAllItems();
            }
        },
    },
    mounted() {
        this.getAllItems();
    },
};
</script>

<style lang="scss" scoped></style>
