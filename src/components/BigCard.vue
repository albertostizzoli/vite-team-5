<template>
  <header class="py-5">
    <div class="container px-lg-5">
      <div id="bg-op" class="p-4 p-lg-5  rounded-3 text-center">
        <div class="m-4 m-lg-5">
          <h1 class="display-5 fw-bold text-white">Squiddy Game</h1>
          <div v-if="store.selectedCharacterId && store.selectedItemId && store.selectedTypeId" class="fs-4 text-white">
            <p>Hai fatto la tua scelta!</p>
            <div>
              <router-link :to="{ name: 'arena' }">
                <button class="btn shake bg-danger ">
                  Inizia la battaglia!
                </button>
              </router-link>
            </div>
          </div>
          <div v-else>
            <p class="fs-4 text-white">Per giocare seleziona un eroe, un'arma e una categoria!</p>
            <p class="fs-4 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur dicta impedit
              iusto dolorum vel inventore quo distinctio eligendi minima? Magni nostrum eveniet ut aspernatur perferendis
              modi similique quibusdam, deserunt, aut maiores repellendus minus cupiditate aperiam numquam corporis
              incidunt sequi assumenda nesciunt nam. Libero voluptas repudiandae voluptatibus molestias amet fugiat
              ratione.</p>
          </div>


          <div class="w-100 bg-transparent  d-flex flex-row justify-content-between align-items-center p-2 my-0 "
            style="height: 500px;">
            <!-- CARD 1-->
            <section class="d-flex  w-100 mt-5 justify-content-between ">
              <div class="containerr mbb">
                <div v-if="store.selectedType.image" :data-text="store.selectedType.name" style="--r:-15;"
                  class="glass box-image">
                  <img :src="store.imgPath + store.selectedType.image" :alt="store.selectedType.name">
                </div>
                <div v-if="store.selectedItem.image" :data-text="store.selectedItem.name" style="--r:5;"
                  class="glass box-imagee">
                  <img :src="store.imgPath + store.selectedItem.image" :alt="store.selectedItem.name">
                </div>
                <div v-if="store.selectedCharacter.image" :data-text="store.selectedCharacter.name" style="--r:25;"
                  class="glass box-image">
                  <img :src="store.imgPath + store.selectedCharacter.image" :alt="store.selectedCharacter.name">
                </div>
              </div>
              <div v-if="store.selectedCharacterId && store.selectedItemId && store.selectedTypeId"
                class="box-image shake">
                <img class="img-fluid" src="../assets/images/vs.png" alt="versus image">
              </div>
              <!-- CARD 2 -->
              <div class="containerr mtt">
                <div v-if="store.CPUType.image" :data-text="store.CPUType.name" style="--r:15;" class="glass box-image">
                  <img :src="store.imgPath + store.CPUType.image" :alt="store.CPUType.name">
                </div>
                <div v-if="store.CPUItem.image" :data-text="store.CPUItem.name" style="--r:-5;" class="glass box-imagee">
                  <img :src="store.imgPath + store.CPUItem.image" :alt="store.CPUItem.name">
                </div>
                <div v-if="store.CPUCharacter.image" :data-text="store.CPUCharacter.name" style="--r:-25;"
                  class="glass box-image">
                  <img :src="store.imgPath + store.CPUCharacter.image" :alt="store.CPUCharacter.name">
                </div>
              </div>
            </section>
            <!-- END CARD -->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { store } from "../store.js";
export default {
  name: 'BigCard',
  data() {
    return {
      store
    }
  },
}
</script>

<style lang="scss" scoped>
.mbb {
  margin-bottom: 200px;
}

.mtt {
  margin-top: 200px;
}

.scegli {
  background-color: var(--red-400) !important;
}

.cambia {
  background-color: yellow !important;
}

#bg-op {
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.521);
}

/*  */
.containerr {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.containerr .glass {
  position: relative;
  width: 180px;
  height: 200px;
  background: linear-gradient(#fff2, transparent);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  border-radius: 10px;
  margin: 0 -45px;
  backdrop-filter: blur(10px);
  transform: rotate(calc(var(--r) * 1deg));
}

.containerr:hover .glass {
  transform: rotate(0deg);
  margin: 0 10px;
}

.containerr .glass::before {
  content: attr(data-text);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.containerr .glass svg {
  font-size: 2.5em;
  fill: #fff;
}

/*  */

// end template card css
//BTN START
.btn {
  outline: 0;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  background: #40B3A2;
  min-width: 200px;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .1);
  box-sizing: border-box;
  padding: 16px 20px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  overflow: hidden;
  cursor: pointer;
}

.btn:hover {
  opacity: .95;
}

.btn .animation {
  border-radius: 100%;
  animation: ripple 0.6s linear infinite;
}

@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1), 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1);
  }

  100% {
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1), 0 0 0 80px rgba(255, 255, 255, 0);
  }
}

.box-imagee {
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
}
</style>