<template>
    <div>
        hello
        <ul>
            <li v-for=" character in characters ">{{ characters.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "AppCharacters",
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