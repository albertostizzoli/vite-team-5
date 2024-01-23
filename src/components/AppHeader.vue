<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="item in menu">
                        <router-link :to="{ name: item.name }" class="nav-link" active-class="active">
                            {{ item.label }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "AppHeader",
    data() {
        return {
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