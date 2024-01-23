<template>
    <div>
        <ul>
            <li v-for="type in types">{{ type.name }}
            <li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "AppTypes",
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