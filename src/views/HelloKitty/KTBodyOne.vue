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
            <img
              ref="leftBig"
              src="../../assets/BodyNoe/leftBig.png"
              :class="['leftBig', ' animateBottom']"
            />
            <img
              ref="leftSmall"
              src="../../assets/BodyNoe/leftssmall.png"
              :class="['leftSmall', 'animateTop']"
            />
          </div>
          <div class="center">
            <div class="title">Theme4.1</div>
            <div class="describe">
              Indulge in our My Little Pony birthday-themed sweet treats, adorned with cute pony
              motifs. From dreamy-hued birthday cake ice creams to Pony-shaped frosting toppings,
              every scoop is .
            </div>
            <div class="buttonContainer">
              <div class="themeButton">
                <div class="happyTitle">
                  Theme<br />
                  Happy<br />Birthday
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <img
              ref="leftBig"
              style="background: #9fb5dc"
              src="@/assets/BodyNoe/rightBIg.png"
              :class="['leftBig', ' animateBottom']"
            />
            <img
              ref="leftSmall"
              src="@/assets/BodyNoe/rightSmall.png"
              :class="['rightSmall', 'animateTop']"
            />
          </div>
        </div>
        <div class="music">
          <div class="musicDescribe">
            <span class="Popular">Popular and</span>
            <span class="Famous">Famous Online Radio</span>
            <span class="Popular">Stations</span>
            <span class="Listen">Listen to All Music on Radio FM -</span>
            <span class="number">102.1</span>
          </div>
          <div class="musicRadio">
            <div class="RadioLeft">
              <div class="RadioTitle">
                <img src="../../assets/BodyNoe/Music.png" height="50" width="60" /> Music
              </div>
              <div class="RadioLike">I like the most</div>
              <div class="RadioRecommen">Radio recommendations</div>

              <div class="RadioAnimation"></div>
              <div class="RadioBottom">
                <img src="../../assets/BodyNoe/leftBig.png" height="1996" width="1456" />
                <div class="control">
                  <i :class="['fa fa-step-backward', 'iconStyle']"></i>
                  <i :class="['fa fa-play', 'iconStyle']"></i>
                  <i :class="['fa fa-step-forward', 'iconStyle']"></i>
                  <el-icon class="iconStyle">
                    <Expand />
                  </el-icon>
                </div>
              </div>
            </div>
            <div class="RadioRight"></div>
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
  height: 900px;
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
  height: 500px;
  position: relative;

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
  .rightSmall {
    width: 150px;
    height: 150px;
    position: absolute;
    left: 40px;
  }

  .animateTop {
    animation: BodyOne_slideInFromTop 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate;
    animation-iteration-count: infinite;
    animation-delay: 3s;
  }
  .animateBottom {
    animation: BodyOne_slideInFromBottom 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate;
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
    .buttonContainer {
      display: flex;
      justify-content: center !important;
      align-items: center;
    }

    .themeButton {
      border-radius: 50%;
      border: #f2a5d4 solid 6px;
      width: 175px;
      position: relative;
      top: 100px;
      height: 175px;
      background: #fd8caf;
      font-family: FontLovely;
      font-size: 20px;
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      transition: transform 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      .happyTitle {
        color: #7559a4;
        transition: transform 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
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

.music {
  display: flex;
  flex-direction: column;
  position: relative;
  .musicDescribe {
    display: flex;
    flex-direction: column;
    position: relative;
    left: 200px;
    .Popular {
      font-size: 44px;
      font-weight: bold;
      color: #7559a4;
      font-family: Bodytitle;
    }
    .Famous {
      font-size: 65px;
      color: #f2a5d4;
      font-family: FontLovely_2;
    }
    .Listen {
      color: #9fb5dc;
      font-family: FontLovely_1;
    }
    .number {
      color: hotpink;
      font-family: FontLovely_2;
    }
  }
  .musicRadio {
    display: flex;
    flex-wrap: wrap;
    width: 850px;
    height: 500px;

    position: absolute;
    left: 600px;
    top: 200px;

    .RadioLeft {
      border-radius: 50px;
      width: 25%;
      height: 85%;
      background-color: #f6f7f8;
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      position: relative;
      .RadioTitle {
        display: flex;
        align-items: center;
        font-family: FontLovely_2;
        color: #fd8caf;
        margin-right: 50px;
      }
      .RadioLike {
        width: 100%;
        font-family: FontLovely_2;
        color: #7559a4;
        background-color: #fd8caf;
      }
      .RadioRecommen {
        font-family: FontLovely_2;
        color: #7559a4;
      }
    }
    .RadioRight {
      width: 75%;
      height: 72%;
      background-color: #9fb5dc;
      margin-top: 43px;
      border-radius: 50px;
    }
    .RadioAnimation {
      width: 80%;
      background-color: rgba(242, 165, 212, 0.5);
      height: 15%;
      display: flex;
      position: absolute;
      top: 300px;
    }
    .RadioBottom {
      width: 100%;
      background-color: rgba(242, 165, 212, 0.78);
      height: 15%;
      display: flex;
      position: absolute;
      top: 360px;
      border-radius: 50px;
      img {
        position: absolute;
        height: 60px;
        width: 60px;
        left: 20px;
        border-radius: 50%;
        bottom: 30px;
        border: #fd8caf solid 4px;
        animation: rotate 5s linear infinite;
      }
      .control {
        display: flex;
        position: relative;
        left: 95px;
        font-size: 20px;
        top: 27px;
        gap: 15px;
        .iconStyle {
          color: #7559a4;
          cursor: pointer;
        height: 20px;
          width: auto;
        }
        .iconStyle:hover{

          color: hotpink;
        }
      }
    }
  }
}
</style>
