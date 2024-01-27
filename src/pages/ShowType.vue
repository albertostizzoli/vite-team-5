<template>
    <section class="page-bg vh-100 py-5">
        <div class="container p-5 bg-blur">
            <div v-if="type">
                <div class="mb-5">
                    <h1 class="display-3 text-white text-center">{{ type.name }}</h1>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="my-5 w-25">
                        <div class="card overflow-hidden my-shadow "><img :src="store.imgPath + type.image" alt=""></div>
                    </div>
                    <div class="mb-5 w-75 px-5 d-flex flex-row justify-content-between ">
                        <p class="fs-3 text-white text-center">{{ type.desc.length > 500 ? type.desc.substr(0, 500) + '...'
                            : type.desc }}</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    name: "ShowType",
    data() {
        return {
            store,
            type: null,

        }
    },
    methods: {
        getProjectData() {
            // console.log(this.$route);
            axios.get(`${store.apiUrl}/types/${this.$route.params.id}`).then((res) => {
                console.log(res);
                if (res.data.results) {
                    this.type = res.data.results;
                    console.log(`type`, this.type);
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