<template>
    <div>
        <ul>
            <li v-for=" item in items">{{ items.name }}
            <li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "AppItems",
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<style lang="scss" scoped></style>