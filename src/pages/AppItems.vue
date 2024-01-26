<template>
    <section class="pt-4">
        <div class="container px-lg-5">
            <PopuP />
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
                <div class="col-lg-6 col-xxl-4 mb-5" v-for="item in   store.items  " :key="item.id">
                    <div class="card bg-light border-0 h-100">
                        <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div class="box-image-items  feature bg-primary bg-gradient text-white rounded-4 mb-4 mt-n4">
                                <img :src="store.imgPath + item.image" @error="setDefaultImage" :alt="item.name">
                            </div>
                            <h2 class="fs-4 fw-bold">
                                <router-link class="text-secondary text-decoration-none"
                                    :to="{ name: 'show-item', params: { id: item.id } }">
                                    {{ item.name }}
                                </router-link>
                                <!-- {{ item.name }} -->
                            </h2>
                            <button class="bottone " @click="selectItem(item)"
        :class="(store.selectedItemId == item.id) ? 'bottone-pieno ' : (store.CPUItemId == item.id) ? ' bottone-avversario ' : ' bottone-vuoto '">{{ (store.selectedItemId
                                    == item.id) ? 'Selezionato' : 'Seleziona' }}</button>

                            <p class="mb-0">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import PopuP from "@/components/PopuP.vue";
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
                    this.currentPage = res.data.results.current_page;
                    this.lastPage = res.data.results.last_page;
                });
        },

        selectItem(item) {
            if (store.selectedItemId === item.id) {
                store.selectedItemId = "";
                store.selectedItem = {};
                return;
            }
            this.store.selectedItem = item;
            this.store.selectedItemId = item.id;


            this.cpuSelection();
        },
        cpuSelection() {
            this.store.CPUItemId = false
            while (!this.store.CPUItemId || this.store.CPUItemId === this.store.selectedItemId && this.store.items.length === 1) {
                this.store.CPUItemId = Math.floor(Math.random() * (this.store.items.length)) + ((this.currentPage - 1) * 9) + 1

            }
            //console.log('id',this.store.CPUItemId  )
            this.store.CPUItem = this.store.items[this.store.CPUItemId - ((this.currentPage - 1) * 9) - 1];
            //console.log('obj',this.store.selectedItem )
        },
        nextPage() {
            if (this.currentPage < this.lastPage) {
                this.currentPage = this.currentPage + 1;
            }
            else {
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
        setDefaultImage(event) {
            event.target.src = '../public/images/default-item.png';
        }
    },
    mounted() {
        this.getAllItems();
    },
    components: { PopuP }
};
</script>

<style lang="scss" scoped>
.box-image-items {
    overflow: hidden;

    img {
        width: 200%;
        height: 200%;
        object-fit: cover;
    }
}
</style>
