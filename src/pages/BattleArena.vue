<template>
    <div class="battle">
        <div class=" bg-body contatore">
            <h2 class="text-center">25</h2>
        </div>
        <main class="d-flex align-items-center">
            <div class="bg-dark text-white p-1">
                <h3>Nome Personaggio (Type)</h3>
                <p>(133 / 200 hp)</p>
            </div>
            <div class="card protagonista" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Carta Giocatore</p>
                    <ul>
                        <li>Nome</li>
                        <li>Type</li>
                        <li>Items</li>
                    </ul>
                </div>
            </div>
            <div class="card avversario" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Carta PC</p>
                    <ul>
                        <li>Nome</li>
                        <li>Type</li>
                        <li>Items</li>
                    </ul>
                </div>
            </div>
            <div class="bg-dark text-white p-1 avversario-2">
                <h3>Nome Personaggio (Type)</h3>
                <p>(133 / 200 hp)</p>
            </div>
        </main>
    </div>
</template>

<script>
import { store } from '../store.js';
export default {
    name: "BattleArena",
    data() {
        return {
            store,
        }
    },
}
</script>

<style lang="scss">
.battle {
    background-image: url('../images/battlearena.jpg');
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    position: relative;
}

.protagonista {
    position: absolute;
    left: 150px;
    bottom: 100px;
}

.avversario {
    position: absolute;
    top: 140px;
    right: 150px;
}

.contatore {
    width: 70px;
    position: absolute;
    left: 700px;
}

.avversario-2{
    position: absolute;
    right: 0;
    top: 0;
}
</style>