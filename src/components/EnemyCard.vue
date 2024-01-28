<template>
    <div class="wrapper">
        <div class="d-flex align-items-end my-effects justify-content-evenly ">
            <div class="item-card ">
                <img :src="'http://localhost:8000/storage/'+store.CPUItem.image" alt="">
            </div>
            <div class="card-container">
                <div class=" me-2">
                    <div class="my-card overflow-hidden ">
                        <div>
                            <img :src="'http://localhost:8000/storage/'+store.CPUCharacter.image" alt="Character name"
                                class="card-img overflow-hidden">
                        </div>

                        <div class="my-card-content">
                            <div class="inner-cont">
                                <h4 class=" text-center">{{ this.store.CPUCharacter.name ?? 'name' }}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="d-felx flex-column pt-2">
                        <div class="d-flex align-items-center justify-content-end">
                            <h6 class="me-2">HP</h6>
                            <span><i class="fa-sharp fa-solid fa-heart fa-beat me-2"></i></span>

                        </div>
                        
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>







       

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


rgb(139, 0, 0)



<style lang="scss" scoped>
.card-container {
    padding: 10px;
    width: 220px;

    i {
        color: red;
    }

    .my-card {
        width: 200px;
        background-color: rgb(32, 12, 7);
        border-radius: 20px;
        background: #8b0000;
        box-shadow: 10px 10px 30px #640000,
            -10px -10px 30px #b20000;


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
                //border: 1px solid rgb(192, 183, 187);
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

// .my-effects {
//     transition: transform 0.3s ease;
//     background-color: transparent;

//     &:hover {
//         transform: rotate(-5deg) translateX(-150px);
//     }
// }

template {
    background-color: transparent;
}

.wrapper {
    background-color: transparent;
}
</style>