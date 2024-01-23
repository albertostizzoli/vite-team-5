<template>
    <div class="container p-5">
        <div v-if="character">
            <h1 class="display-3  text-center">{{ character.name }}</h1>
            <p class="fs-3  text-center">{{ character.body }}</p>
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