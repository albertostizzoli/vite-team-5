<template>
    <div class="container p-5">
        <div v-if="type">
            <div class="mb-5">
                <h1 class="display-3  text-center">{{ type.name }}</h1>
            </div>
            <div class="my-5 w-25">
                <div class="card overflow-hidden my-shadow "><img :src="store.imgPath + type.image" alt=""></div>
            </div>
            <div class="mb-5 w-100 d-flex flex-row justify-content-between ">
                
                <p class="fs-3 text-center">{{ type.desc }}</p>
            </div>
            
        </div>
    </div>
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