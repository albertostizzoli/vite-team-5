<template>
    <div class="container p-5">
        <div v-if="character">
            <div class="mb-5">
                <h1 class="display-3  text-center">{{ character.name }}</h1>
            </div>
            <div class="mb-3">
            </div>
            <div class="mb-5 w-100 d-flex flex-row justify-content-between ">
                <div class="card overflow-hidden my-shadow "><img :src="store.imgPath + character.image" alt=""></div>
                <p class="fs-3 text-center">{{ character.description }}</p>
            </div>
            <div class="mb-3 w-100 d-flex flex-row justify-content-between ">
                <div v-for="param in parameters" class=" form-label bg-warning card p-1">
                    {{ param }}: 
                    {{ character[param] }}
                </div>
            </div>
            <div class="mb-3 d-flex "></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    name: "ShowCharacter",
    data() {
        return {
            store,
            character: null,
            parameters: [
                'attack',
                'defence',
                'speed',
                'life',
                'type_id'
            ]
        }
    },
    methods: {
        getProjectData() {
            // console.log(this.$route);
            axios.get(`${store.apiUrl}/characters/${this.$route.params.id}`).then((res) => {
                console.log(res);
                if (res.data.results) {
                    this.character = res.data.results;
                    console.log(`caratteri`, this.character);
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