<template>
    <section class="page-bg vh-100 py-5">
        <div class="container p-5 bg-blur">
            <div v-if="item">
                <div class="mb-5">
                    <h1 class="display-3 text-white text-center">{{ item.name }}</h1>
                </div>
                <div class="mb-3">
                </div>
                <div class="mb-5 w-100 d-flex flex-row justify-content-between ">
                    <div class="card overflow-hidden my-shadow "><img :src="store.imgPath + item.image" alt=""></div>
                    <p class="fs-3 text-white text-center">{{ item.category }}</p>
                </div>
                <div class="mb-3 w-100 d-flex flex-row justify-content-between ">
                    <div v-for="param in parameters" class=" form-label bg-warning card p-1">
                        {{ param }}:
                        {{ item[param] }}
                    </div>
                </div>
                <div class="mb-3 d-flex "></div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    name: "ShowItem",
    data() {
        return {
            store,
            item: null,
            parameters: [
                'type',
                'weight',
                'cost',
            ]
        }
    },
    methods: {
        getProjectData() {
            // console.log(this.$route);
            axios.get(`${store.apiUrl}/items/${this.$route.params.id}`).then((res) => {
                console.log(res);
                if (res.data.results) {
                    this.item = res.data.results;
                    console.log(`item`, this.item);
                } else {
                    this.$router.push({ name: 'not-found' });
                }
            });
        },
    },
    created() {
        this.getProjectData();
    },

}
</script>

<style lang="scss" scoped></style>