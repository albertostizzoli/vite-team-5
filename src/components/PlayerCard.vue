<template>
    <div class="wrapper">
        <div class="d-flex align-items-end my-effects">
            <div class="card-container">
                <div class=" me-2">
                    <div class="my-card">
                        <div>
                            <img src="http://localhost:8000/storage/images/characters/image1x1.png" alt="Character name"
                                class="card-img">
                        </div>

                        <div class="my-card-content">
                            <div class="inner-cont">
                                <h4 class=" text-center">Gideon</h4>
                            </div>

                        </div>
                    </div>
                    <div class="d-felx flex-column pt-2">
                        <div class="d-flex align-items-center">
                            <span><i class="fa-sharp fa-solid fa-heart fa-beat me-2"></i></span>
                            <h6 class="m-0">HP</h6>

                        </div>
                        <div class="health-bar">
                            <div class="bar" :data-total="store.totalPlayerHp" :data-value="store.playerHp"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item-card ms-2">
                <img src="http://localhost:8000/storage//images/items/dagger.png" alt="">
            </div>
        </div>

    </div>
</template>
            <!-- store.imgPath + character.image -->
                <!-- {{ character.name }} -->

<script>
import { store } from '../store.js';
export default {
    name: 'PlayerCard',
    data() {
        return {
            store,

        }
    },
    methods: {

    },
    computed: {
        healthBarLen() {
            return Math.floor((Math.max(this.store.playerHp, 0) / this.store.totalPlayerHp) * 100);
        }
    }
}
</script>

<style lang="scss" scoped>
.card-container {
    padding: 10px;
    width: 270px;

    i {
        color: red;
    }

    .my-card {
        width: 250px;
        background-color: rgb(32, 12, 7);
        border-radius: 25px;
        background: #f5f5f5;
        box-shadow: 25px 25px 50px #d0d0d0,
            -25px -25px 50px #ffffff;
        overflow: hidden;


        img {
            width: 100%;
        }

        h4 {
            color: rgb(192, 183, 187);
            padding: 10px;
        }

        .my-card-content {
            padding: 10px 40px;

            .inner-cont {
                padding: 0;
                border: 1px solid rgb(192, 183, 187);
                border-radius: 15px;

                .h4 {
                    margin-bottom: 0 !important;
                }

                .text-center {
                    padding: 0;
                    margin-bottom: 0 !important;
                }
            }
        }
    }

    .health-bar {
        margin-top: 25x;
        width: 100%;
        height: 20px;
        background: #ddd;
        border-radius: 5px;
        box-sizing: border-box;
    }

    .bar {
        background: #c54;
        height: 100%;
        border-radius: 4px;
        transition: width 0.5s ease-in-out;
    }
}

.item-card {
    width: 100px;
    padding: 10px;

    img {
        width: 100%;
    }
}

.my-effects {
    transition: transform 0.3s ease;
    background-color: transparent;

    &:hover {
        transform: rotate(5deg) translateX(150px);
    }
}

template {
    background-color: transparent;
}

.wrapper {
    background-color: transparent;
}
</style>