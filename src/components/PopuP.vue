<template>
    <div v-if="store.selectedCharacterId || store.selectedItemId || store.selectedTypeId">
        Continua a scegliere un:
        <p>

        <p v-if="!store.selectedCharacterId">
            <router-link v-if="store.selectedItemId || store.selectedTypeId" :to="{ name: 'characters' }" class="nav-link"
                active-class="active">
                Characters
            </router-link>
        </p>

        <p v-if="!store.selectedItemId">
            <router-link v-if="store.selectedCharacterId || store.selectedTypeId" :to="{ name: 'items' }" class="nav-link"
                active-class="active">
                Item
            </router-link>
        </p>

        <p v-if="!store.selectedTypeId">
            <router-link v-if="store.selectedItemId || store.selectedCharacterId" :to="{ name: 'types' }" class="nav-link"
                active-class="active">
                Types
            </router-link>
        </p>

        </p>
    </div>
</template>

<script>
import { store } from '../store.js'
export default {
    name: "PopUp",
    data() {
        return {
            store,
        }
    },
}
</script>

<style lang="scss" scoped></style>