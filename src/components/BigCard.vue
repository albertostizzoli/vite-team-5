<template>
    <header class="py-5">
        <div class="container px-lg-5">
            <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
                <div class="m-4 m-lg-5">
                    <h1 class="display-5 fw-bold">Qui possiamo mettere il gioco</h1>
                    <p class="fs-4">Descrizione di come funziona il gioco</p>
                    <div class="w-100 bg-transparent  d-flex flex-row justify-content-between align-items-center p-2 my-0 " style="height: 700px;">
                     <!-- template card -->
                     <div class="card">
                        <div class="rectangle left-top"></div>
                        <div class="rectangle right-top"></div>
                        <div class="rectangle left-bottom"></div>
                        <div class="rectangle right-bottom"></div>
                        <div class="image">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svg">
                            <path
                                d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"
                            ></path>
                            </svg>
                        </div>
                        <div class="love">
                            <h5 class="text-white text-nowrap text-center w-100">{{ store.selectedCharacter.name ?? 'character' }}</h5>
                        </div>
                        <div class="category flex-wrap">
                            <button class="button" v-if="store.selectedCharacter.life">LIFE:&nbsp;{{store.selectedCharacter.life}}</button>
                            <button class="button" v-if="store.selectedCharacter.attack">ATTACK:&nbsp; {{ store.selectedCharacter.attack}}</button>
                            <button class="button" v-if="store.selectedCharacter.defence">DEFENCE:&nbsp; {{ store.selectedCharacter.defence}}</button>
                            <button class="button" v-if="store.selectedCharacter.speed">SPEED:&nbsp; {{store.selectedCharacter.speed}}</button>
                        </div>
                        <button class="action" :class="store.selectedCharacterId ? 'cambia' : 'scegli'">
                            <router-link :to="{ name: 'characters' }" class="nav-link" active-class="active">
                                {{  store.selectedCharacterId ? 'cambia' :  'scegli'}}
                            </router-link>
                        </button>
                    </div>
                    <!-- endtemplate -->

                    <!-- template card -->
                    <div class="card">
                        <div class="rectangle left-top"></div>
                        <div class="rectangle right-top"></div>
                        <div class="rectangle left-bottom"></div>
                        <div class="rectangle right-bottom"></div>
                        <div class="image">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svg">
                            <path
                                d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"
                            ></path>
                            </svg>
                        </div>
                        <div class="love">
                            <h5 class="text-white text-center w-100">{{ store.selectedItem.name ?? 'item' }}</h5>
                        </div>
                        <div class="category flex-wrap">
                            <button class="button" v-if="store.selectedItem.type">TYPE: {{ store.selectedItem.type }}</button>
                            <button class="button" v-if="store.selectedItem.weight">WEIGHT: {{ store.selectedItem.weight }}</button>
                            <button class="button" v-if="store.selectedItem.cost">COST: {{ store.selectedItem.cost }}</button>
                        </div>
                        <button class="action" :class="store.selectedItemId ?  ' cambia' : ' scegli'">
                            <router-link :to="{ name: 'items' }" class="nav-link" active-class="active">
                                {{  store.selectedItemId ? 'cambia' :  'scegli'}}
                            </router-link>
                        </button>
                    </div>
                    <!-- endtemplate -->

                    <!-- template card -->
                    <div class="card">
                        <div class="rectangle left-top"></div>
                        <div class="rectangle right-top"></div>
                        <div class="rectangle left-bottom"></div>
                        <div class="rectangle right-bottom"></div>
                        <div class="image">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svg">
                            <path
                                d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"
                            ></path>
                            </svg>
                        </div>
                        <div class="love">
                            <h5 class="text-white text-center w-100 ">{{ store.selectedType.name ?? 'type' }}</h5>
                        </div>
                        <div class="category">
                        </div>
                        <button class="action" :class="store.selectedTypeId ? ' cambia' : ' scegli'">
                            <router-link :to="{ name: 'types' }" class="nav-link" active-class="active">
                                {{ store.selectedTypeId ? 'cambia'  : 'scegli'}}
                            </router-link>
                        </button>
                    </div>
                    <!-- endtemplate -->
                </div>
                <a class="btn mt-2 btn-lg" href="#!" :class="(store.selectedCharacterId && store.selectedItemId && store.selectedTypeId) ? 'btn-success' : 'btn-primary'">Pulsante che avvia la partita</a>
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

<style lang="scss" scoped>

.scegli{
    background-color: var(--red-400)!important;
}

.cambia{
    background-color: yellow!important;
}


// template card css

.card {
  --pink-500: #fda8ff;
  --red-400: #f56767;
  --sky-300: #bbefff;
  --blue-500: #00a3fe;

  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;

  padding: 1rem;
  width: 14rem;
  height: auto;
  background-color: black;

  border-radius: 0.5rem;
}

.card .rectangle {
  position: absolute;

  width: 0.925rem;
  aspect-ratio: 1 / 1;
  background-color: white;

  opacity: 0;
  box-shadow: 0rem 0rem 0rem 0.175rem black;
}
.card:hover .rectangle {
  opacity: 1;
}

.card .rectangle.left-top {
  top: -0.25rem;
  left: -0.25rem;
}
.card .rectangle.right-top {
  top: -0.25rem;
  right: -0.25rem;
}
.card .rectangle.left-bottom {
  bottom: -0.25rem;
  left: -0.25rem;
}
.card .rectangle.right-bottom {
  bottom: -0.25rem;
  right: -0.25rem;
}

.card .image {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.25rem;
  width: 100%;
  height: 17.25rem;
  background-color: var(--pink-500);

  border-radius: 0.25rem;
}

.card .image .svg {
  width: 2.5rem;
  fill: black;
}

.card .title {
  position: relative;
  z-index: 10;

  font-size: 1.25rem;
  color: white;
  font-weight: bold;
}

.card .love {
  display: flex;
  align-items: center;
  gap: 0.375rem;

  font-size: 1rem;
  font-weight: bold;
  color: white;
}

.card .love .svg {
  width: 1.25rem;
  fill: var(--red-400);
}

.card .category {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  height: 55px;
}

.card .category .button {
  cursor: pointer;

  padding: 0.25rem 0.5rem;
  background-color: #d9d9d9;

  font-size: 0.5rem;
  color: black;

  border: 2px solid transparent;
  border-radius: 9999px;
  transition: all 0.3s ease-in-out;
}
.card .category .button:hover {
  border: 2px solid var(--blue-500);
}

.card .action {
  padding-block: 0.375rem;
  margin-top: 0.75rem;
  background-color: var(--sky-300);

  font-size: 0.75rem;
  font-weight: 700;
  color: black;

  border: 2px solid transparent;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
}
.card .action:hover {
  border: 2px solid var(--blue-500);
}

// end template card css
</style>