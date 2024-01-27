<template>
    <div class="wrapper">
        <div class="d-flex align-items-end my-effects">
            <div class="item-card ms-2">
                <img src="http://localhost:8000/storage//images/items/speav.png" alt="">
            </div>
            <div class="card-container">
                <div class=" me-2">
                    <div class="my-card">
                        <img src="http://localhost:8000/storage/images/characters/image1x2.png" alt="Character name"
                            class="card-img">
                        <div class="my-card-content">
                            <div class="inner-cont">
                                <h4 class=" text-center">Gideon</h4>
                            </div>

                        </div>
                    </div>
                    <div class="d-felx flex-column pt-2">
                        <div class="d-flex align-items-center justify-content-end">
                            <h6 class="m-0">HP</h6>
                            <span><i class="fa-sharp fa-solid fa-heart fa-beat ms-2"></i></span>

                        </div>
                        <div class="health-bar">
                            <div class="bar"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>
            <!-- store.imgPath + character.image -->
                <!-- {{ character.name }} -->

<script>
import { store } from '../store.js';
export default {
    name: 'EnemyCard',
    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
.card-container {
    padding: 10px;
    width: 200px;


    .my-card {
        width: 180px;
        background-color: rgb(139, 0, 0);
        box-shadow: 0 0 6px 3px rgb(139, 0, 0);

        img {
            width: 100%;
        }

        .card-img {
            border-radius: 5px 5px 0 0;
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

    &:hover {
        transform: rotate(-5deg) translateX(-150px);
    }
}
</style>