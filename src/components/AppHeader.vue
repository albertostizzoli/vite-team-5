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
                    <li class="nav-item text-white mt-2 mx-5"><a class="" @click="noArena">Combatterò dopo</a></li>
                    <li class="nav-item text-white">
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
                </ul>
            </div>
        </div>
    </nav>
    <!-- SELECTED CHARACTERS -->
    <Transition name="fade">
        <div class="d-flex" v-if="store.selectedCharacterId || store.selectedItemId || store.selectedTypeId">
            <section id="bottom-bar" class="bg-primary w-50">
                <div class="container d-flex justify-content-between ">
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
            <section v-if="store.selectedCharacter.name || store.selectedItem.name || store.selectedType.name"
                class="bg-warning w-50">
                <div class="container d-flex justify-content-between ">
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
</style>



