<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container px-lg-5">
            <h1 class="navbar-brand mt-2">Team_5</h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                    class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-for="item in menu">
                        <router-link :to="{ name: item.name }" class="nav-link" active-class="active">
                            {{ item.label }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- <div v-if="store.selectedCharacterId">Test</div> -->
</template>

<script>
/* import { store} from '../../store.js'; */
export default {
    name: "AppHeader",
    data() {
        return {
            // store,
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
    }
}
</script>

<style lang="scss" scoped></style>



