<template>
    <section v-if="isActive">
        <div v-show="store.closePopUp" class="code-editor floating"
            v-if="store.selectedCharacterId || store.selectedItemId || store.selectedTypeId">
            <div class="header">
                <span class="title ">Ottima Scelta!</span>
                <svg @click="store.closePopUp = false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="icon">
                    <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                    <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path>
                        <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path>
                    </g>
                </svg>
            </div>
            <div class="editor-content">
                <p v-if="!store.selectedCharacterId">
                    Selezione un
                    <router-link v-if="store.selectedItemId || store.selectedTypeId" :to="{ name: 'characters' }"
                        class="fw-bold nav-link d-inline border-bottom">
                        Eroe
                    </router-link>
                </p>
                <p v-if="!store.selectedItemId">
                    Selezione un'
                    <router-link v-if="store.selectedCharacterId || store.selectedTypeId" :to="{ name: 'items' }"
                        class="fw-bold nav-link d-inline border-bottom">
                        Arma
                    </router-link>
                </p>
                <p v-if="!store.selectedTypeId">
                    Selezione una
                    <router-link v-if="store.selectedItemId || store.selectedCharacterId" :to="{ name: 'types' }"
                        class="fw-bold nav-link d-inline border-bottom">
                        Categoria
                    </router-link>
                </p>
            </div>
        </div>
        <div>
        </div>
    </section>
</template>

<script>
import { store } from '../store.js'
export default {
    props: ['isActive'],
    name: "PopUp",
    data() {
        return {
            store,

        }
    },
}
</script>

<style lang="scss" scoped>
.floating {
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
}

@keyframes floating {
    from {
        transform: translate(0, 0px);
    }

    65% {
        transform: translate(0, 15px);
    }

    to {
        transform: translate(0, -0px);
    }
}

.code-editor {
    max-width: 300px;
    background-color: #1d1e22;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    padding: 2px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
}

.title {
    font-family: Lato, sans-serif;
    font-weight: 900;
    font-size: 14px;
    letter-spacing: 1.57px;
    color: rgb(212 212 212);
}

.icon {
    width: 20px;
    transition: .2s ease;
}

.icon:hover {
    cursor: pointer;
    border-radius: 50px;
    background-color: #6e7281;
}

.editor-content {
    margin: 0 10px 10px;
    color: white;
}

.property {
    margin-left: 30px;
}

.property:hover {
    cursor: text;
}

.editor-content .color-0 {
    color: rgb(86 156 214);
}

.editor-content .color-1 {
    color: rgb(182 206 168);
}

.editor-content .color-2 {
    color: rgb(156 220 254);
}

.editor-content .color-3 {
    color: rgb(207 146 120);
}

.color-preview-1,
.color-preview-2 {
    height: 8px;
    width: 8px;
    border: 1px solid #fff;
    display: inline-block;
    margin-right: 3px;
}

.color-preview-1 {
    background-color: #1d1e22;
}

.color-preview-1 {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>