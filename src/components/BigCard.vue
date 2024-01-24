<template>
    <header class="py-5">
        <div class="container px-lg-5">
            <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
                <div class="m-4 m-lg-5">
                    <h1 class="display-5 fw-bold">Qui possiamo mettere il gioco</h1>
                    <p class="fs-4">Descrizione di come funziona il gioco</p>
                    <a class="btn  btn-lg" href="#!" :class="(store.selectedCharacterId && store.selectedItemId && store.selectedTypeId) ? 'btn-success' : 'btn-primary'">Pulsante che avvia la partita</a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { store } from "../store.js";
export default {
    name: 'BigCard',
    data(){
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped></style>