<template>
    <section class="home-section">
        <BigCard /> <!-- SEZIONE BIG-CARD -->

    </section>
</template>

<script>
import BigCard from '@/components/BigCard.vue';

export default {
    name: "Apphome",
    data() {
        return {};
    },
    methods: {},
    mounted() {
    },
    components: { BigCard }
}
</script>

<style lang="scss" scoped>
.home-section {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/images/back1.png');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>