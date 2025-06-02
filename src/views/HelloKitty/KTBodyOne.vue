<script setup lang="ts">
import KTHeader from '@/views/HelloKitty/KTHeader.vue'
import { ref, onMounted, onBeforeMount } from 'vue'

const leftBig = ref(null)
const leftSmall = ref(null)
let observer

/*onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if(entry.target ===leftBig.value)
        { entry.target.classList.add('animateBottom')}
        else if(entry.target === leftSmall.value)
        {entry.target.classList.add('animateTop')}
      } else {
        entry.target.classList.remove('animateTop')
        entry.target.classList.remove('animateBottom')
      }
    })
  },
    {threshold:0.2}
  )
  if (leftBig.value)observer.observe(leftBig.value)
  if (leftBig.value)observer.observe(leftSmall.value)
})
onBeforeMount(()=>{
  if (leftBig.value)observer.unobeserve(leftBig.value)
  if (leftSmall.value)observer.unobeserve(leftBig.value)
})

onBeforeMount(()=>{})*/
</script>

<template>
  <div class="KTHeader">
    <KTHeader></KTHeader>
  </div>
  <div class="BodyOne_mainContainer">
    <div class="centerContainer">
      <div class="body">
        <div class="theme">
          <div class="left">
            <img ref="leftBig" src="../../assets/BodyNoe/leftBig.png" :class="['leftBig',' animateBottom']" />
            <img ref="leftSmall" src="../../assets/BodyNoe/leftssmall.png" :class="['leftSmall','animateTop']" />
          </div>
          <div class="center">
            <div class="title">Theme4.1</div>
            <div class="describe">
              Indulge in our My Little Pony birthday-themed sweet treats, adorned with cute pony
              motifs. From dreamy-hued birthday cake ice creams to Pony-shaped frosting toppings,
              every scoop is .
            </div >
            <div class="buttonContainer">
            <div class="themeButton" >
              <div class="happyTitle">
                Theme<br>
                Happy<br>Birthday
              </div>
            </div>
            </div>
          </div>
          <div class="right">
            <img ref="leftBig"  style="background: #9fb5dc" src="@/assets/BodyNoe/rightBIg.png" :class="['leftBig',' animateBottom']" />
            <img ref="leftSmall" src="@/assets/BodyNoe/rightSmall.png" :class="['rightSmall','animateTop']" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.BodyOne_mainContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background: #f9d2d2;
}

.centerContainer {
  display: flex;
  justify-content: left;
  width: 100%;
  max-width: 1700px;
  max-height: 700px;
  position: relative;
  flex-wrap: wrap;
}

.body {

  width: 100%;
  display: flex;
  flex-direction: column;
}

.theme {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 600px;

  img {
    width: 500px;
    height: 300px;
  }

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.3%;
    height: 100%;
    position: relative;
    padding-top: 5%;
    left: 30px;

  }
  .leftBig {
    width: 250px;
    height: 300px;
    animation-iteration-count: infinite;
    animation-delay: 2s;


  }

  .leftSmall {
    width: 150px;
    height: 150px;
    position: absolute;
    right: 40px;
  }
  .rightSmall{

   width: 150px;
   height: 150px;
   position: absolute;
   left: 40px;
 }

  .animateTop{
    animation: BodyOne_slideInFromTop 2s
    cubic-bezier(0.68, -0.55, 0.27, 1.55)
    infinite alternate;
    animation-iteration-count: infinite;
    animation-delay: 3s;
  }
  .animateBottom{

    animation:BodyOne_slideInFromBottom
    2s cubic-bezier(0.68, -0.55, 0.27, 1.55)
    infinite alternate;
    animation-iteration-count: infinite;
    animation-delay: 4s;
  }
  .center {
    width: 33.3%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
   bottom: 100px;

    .title {
      text-align: center;
      font-size: 90px;
      font-family: Bodytitle;
      color: #fd8caf;
    }
    .describe {
      text-align: center;
      color: #7559a4;
    }
    .buttonContainer{
      display: flex;
      justify-content: center !important;
      align-items: center;

    }

      .themeButton{
        border-radius: 50%;
        border: #f2a5d4 solid 6px;
        width: 175px;
        position: relative;
        top: 100px;
        height:175px;
        background: #fd8caf;
        font-family: FontLovely;
        font-size: 20px;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        transition:
          transform 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        .happyTitle{
          color: #7559a4;
          transition:
            transform 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);

        }



    }
  }

  .themeButton:hover {
    cursor: pointer;
    transform: translateY(-6px) scale(1.2);
  }
  .themeButton:hover .happyTitle {
    transform: translateY(-6px) scale(1.4);




  }
  .right {
    padding-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.3%;
    height: 100%;
    position: relative;
    right: 30px;
  }
}
</style>
