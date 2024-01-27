<template>
    <section class="container">
        <div class="d-flex justify-content-between">

            <PlayerCard />
            <EnemyCard />
        </div>
    </section>
</template>

<script>
import PlayerCard from "../components/PlayerCard.vue";
import EnemyCard from "../components/EnemyCard.vue";

export default {
    name: 'PaginaTestCard',
    data() {
        return {

        };
    },
    components: {
        PlayerCard,
        EnemyCard
    },
}
</script>

<style lang="scss" scoped>
section {
    background-color: white;
    height: calc(100vh - 50px);
}
</style>