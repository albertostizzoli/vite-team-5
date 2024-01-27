<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container px-lg-5">
            <h1 class="navbar-brand mt-2">Team_5</h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                    class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- UL ARENA -->
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0"
                    v-if="store.selectedCharacterId && store.selectedItemId && store.selectedTypeId">
                    <li class="nav-item text-white mt-2 mx-5 cp" @click="noArena">
                        Combatterò dopo</li>
                    <li class="nav-item text-white" @click="goArena">
                        <router-link :to="{ name: 'home' }" class="nav-link" active-class="active">
                            Arena</router-link>
                    </li>
                </ul>
                <!-- UL V-FOR LIST NAVBAR -->
                <ul v-else class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-for="item in menu">
                        <router-link :to="{ name: item.name }" class="nav-link" active-class="active">
                            {{ item.label }}</router-link>
                    </li>


                    <!-- PAGINA DI PROVA -->
                    <li class="nav-item">
                        <router-link :to="{ name: 'testcard' }" class="nav-link" active-class="active">
                            Pagina test card</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- SELECTED CHARACTERS -->
    <Transition name="fade">
        <div class="d-flex page-bg" v-if="store.selectedCharacterId || store.selectedItemId || store.selectedTypeId">
            <section id="bottom-bar" class="bg-blur border-0 w-50">
                <div class="container text-primary px-4 mt-3 d-flex justify-content-between ">
                    <div class="d-flex gx-5 x">
                        <div>
                            <h6>Il tuo eroe</h6>
                            <h5 class="text-white">{{ store.selectedCharacter.name }}</h5>
                        </div>
                    </div>
                    <div>
                        <h6>La tua arma</h6>
                        <h5 class="text-white">{{ store.selectedItem.name }}</h5>
                    </div>
                    <div>
                        <h6>La tua classe</h6>
                        <h5 class="text-white">{{ store.selectedType.name }}</h5>
                    </div>
                </div>
            </section>
            <!-- RESTART CHOOSE BUTTON -->
            <div @click="noArena" class="one-div">
                <div class="text text-black">Restart</div>
            </div>

            <!--  -->
            <section v-if="store.selectedCharacter.name || store.selectedItem.name || store.selectedType.name"
                class="bg-blur border-0 w-50">
                <div class="container  text-danger px-4 mt-3 d-flex justify-content-between ">
                    <div class="d-flex gx-5 x">
                        <div>
                            <h6>Eroe avversario</h6>
                            <h5 class="text-white">{{ store.CPUCharacter.name }}</h5>
                        </div>
                    </div>
                    <div>
                        <h6>Arma dell'arversario</h6>
                        <h5 class="text-white">{{ store.CPUItem.name }}</h5>
                    </div>
                    <div>
                        <h6>La classe avversaria</h6>
                        <h5 class="text-white">{{ store.CPUType.name }}</h5>
                    </div>
                </div>
            </section>

        </div>
    </Transition>
</template>

<script>
import { store } from "../store.js";
export default {
    name: "AppHeader",
    data() {
        return {
            store,
            menu: [
                {
                    label: "Home",
                    name: "home",
                },
                {
                    label: "Characters",
                    name: "characters",
                },
                {
                    label: "Items",
                    name: "items",
                },
                {
                    label: "Types",
                    name: "types",
                },
            ],
        }
    },
    methods: {
        noArena() {
            this.store.selectedCharacterId = null;
            this.store.selectedItemId = null;
            this.store.selectedTypeId = null;
            this.store.selectedCharacter = {};
            this.store.selectedItem = {};
            this.store.selectedType = {};
            this.store.showStartButton = false;
        },
        goArena() {
            this.store.showStartButton = true;
        }
    },

}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

h5 {
    transition: 2s;
}

//button restart
.one-div {
    max-height: 70px;
    position: relative;
    margin-top: 10px;
    height: 70px;
    width: 60px;
    background-color: rgb(15, 15, 15);
    transform-style: preserve-3d;
    animation: rot 2s infinite ease;
    border-radius: 20px;
    box-shadow: 0 0 50px 0px, inset 0 0 90px 0px;
    color: white;
    transition: 1s;
    display: flex;
    justify-content: center;
    align-items: center;
}



@keyframes rot {
    0% {
        transform: rotateX(-15deg) translateY(0px);
    }

    50% {
        transform: rotateX(-15deg) translateY(-10px);
    }

    100% {
        transform: rotateX(-15deg) translateY(0px);
    }
}
</style>



