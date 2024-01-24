<template>
    <section class="pt-4 ">
        <div class="container px-lg-5">
            <h2 class="mb-5">Choose a Characters</h2>
            <div class="row gx-lg-5">
                <div class="col-lg-6 col-xxl-4 mb-5" v-for=" character in store.characters" :key="character.id">
                    <div class="card bg-light border-0 h-100">
                        <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i
                                    class="bi bi-collection"></i></div>
                            <h2 class="fs-4 fw-bold">
                                <router-link class="text-secondary text-decoration-none "
                                    :to="{ name: 'show-character', params: { id: character.id } }">
                                    {{ character.name }}
                                </router-link>
                            </h2>
                            <button class="btn " @click="selectCharacter(character)"
                                :class="(store.selectedId == character.id) ? 'btn-success' : 'btn-primary'">Seleziona</button>
                            <p class="mb-0">{{ character.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../store.js';
import axios from "axios";

export default {
    name: "AppCharacters",
    data() {
        return {
            store,

        }
    },
    methods: {
        getAllChar() {
            axios.get(`${this.store.apiUrl}/characters`).then((res) => {
                this.store.characters = res.data.results.data;
                console.log(`show dei caratteru`, this.store.characters);
            })
        },
        selectCharacter(character) {
            this.store.selectedCharacter = character;
            this.store.selectedId = character.id;
            console.log(this.store.selectedCharacter);

        }

    },
    mounted() {
        this.getAllChar();

    },

}
</script>

<style lang="scss" scoped>
// .my-active{
//     &:focus{
//         background-color: Green!important; 
//     }

// }
</style>