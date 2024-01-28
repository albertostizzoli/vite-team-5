<template>
    <section class="page-bg vh-100 p-2">
        <div class="container p-5 bg-blur box">
            <div v-if="item">
                <div class="mb-5 d-flex justify-content-between align-items-center">
                    <router-link :to="{name: 'items'}" class="nav-link"><i class="fa-solid fa-left-long arrows"></i></router-link>
                    <h1 class="display-3 text-white text-center">{{ item.name }}</h1>
                </div>
                <div class="mb-5 w-100 d-flex flex-row justify-content-between ">
                    <div class="card overflow-hidden my-shadow "><img :src="store.imgPath + item.image" alt=""></div>
                    <p class="fs-3 text-white text-center mt-5">{{ item.category }}</p>
                </div>
                <div>
                    <h2 class="text-white text-center pb-2">Features</h2>
                    <ul class="d-flex justify-content-around align-items-center">
                        <li class="badge rounded-pill text-bg-warning p-3 fs-4" v-for="param in parameters">{{ param }}: {{ item[param] }}</li>
                    </ul>
                </div>
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

<style lang="scss" scoped>

.box{
    border-radius: 15px;
}
.arrows{
    font-size: 50px;
    color: white;
    border: 1px solid white;
    padding: 5px;
}
</style>