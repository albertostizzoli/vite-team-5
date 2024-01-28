<template>
    <div class="modal fade" id="endagame" tabindex="-1" aria-labelledby="endagameLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div v-if="(vittoria)" class="modal-body">
                    Congratulation, YOU WIN!!!!!! You are the strongest!
                </div>
                <div v-else="(!vittoria)" class="modal-body">
                    YOU LOSE!!!!!
                </div>
                <div>
                    <router-link :to="{ name: 'home' }" class="btn btn-primary" data-bs-dismiss="modal">Chose you
                        character</router-link>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalEndGame'
}
props['vittoria']
</script>

<style lang="scss" scoped></style>