<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import KTHeader from '@/views/HelloKitty/KTHeader.vue'
import { ref, onMounted, onBeforeMount } from 'vue'
import { computed } from 'vue'
import KTBodyTwo from '@/views/HelloKitty/KTBodyTwo.vue'

const coverImg = computed(() => CurrentMusic.value.img || '/src/assets/BodyNoe/leftssmall.png')
const leftBig = ref(null)
const leftSmall = ref(null)
const isPlaying = ref(true)
const isOpacity =ref(false)
const isRightOpen=ref(false)
const isRightOpcity=ref(false)
const isRightOpcityTwo=ref(false)
const isSelectEvent =ref(false)
const audio = ref(new Audio()) // 创建音频实例
const RightOpen=()=>{


  isRightOpen.value=!isRightOpen.value

  if (isRightOpen.value) {
    setTimeout(() => {
      isRightOpcity.value = true
    }, 500)
  } else {
    isRightOpcity.value = false
  }
  console.log('isRightOpen:', isRightOpen.value)
}
const switchIcon = () => {
  if (isSelectEvent.value === true) {
    isPlaying.value = !isPlaying.value
    isSelectEvent.value=false
    if (!isPlaying.value) {
      audio.value.play() // 播放
    } else {
      audio.value.pause() // 暂停
    }            // 播放音乐
    setTimeout(() => {
      isOpacity.value = !isOpacity.value
    }, 250)
    console.log('isPlaying:', isPlaying.value)
    setTimeout(() => {
      isPlaying.value =false
    }, 700)
    if(isPlaying.value===false){
      if (!isPlaying.value) {
        audio.value.play() // 播放
      } else {
        audio.value.pause() // 暂停
      }            // 播放音乐
      setTimeout(() => {
        isOpacity.value = !isOpacity.value
      }, 500)
      console.log('isPlaying:', isPlaying.value)

    }
  } else {
    isPlaying.value = !isPlaying.value

    if (!isPlaying.value) {
      audio.value.play() // 播放
    } else {
      audio.value.pause() // 暂停
    }            // 播放音乐
    setTimeout(() => {
      isOpacity.value = !isOpacity.value
    }, 500)
    console.log('isPlaying:', isPlaying.value)
  }
  if(isPlaying.value===false){
    if (!isPlaying.value) {
      audio.value.play() // 播放
    } else {
      audio.value.pause() // 暂停
    }            // 播放音乐
    setTimeout(() => {
      isOpacity.value = !isOpacity.value
    }, 500)
    console.log('isPlaying:', isPlaying.value)}
}
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


const MusicArr=[
  {id:0,name:'Music',singer:'singer',Album:'Album'},
  {id:1,name:'Happy birthday',singer:'Huey',Album:'Huey'},
  {id:2,name:'小镇爱',singer:'asen/付思遥',Album:'Thug Love',
    url:'http://music.163.com/song/media/outer/url?id=2075583674.mp3',
    img:'src/assets/BodyNoe/R-C.jpg'},
  {id:3,name:'唯唯',singer:'asen-艾志恒',Album:'Life After Small Town',
  url:'http://music.163.com/song/media/outer/url?id=2163619024.mp3',
    img:'https://p1.music.126.net/VmFpmDv5TJwfKeKgHBdiZA==/109951169700047695.jpg'},
  {id:4,name:'Baby Don\'t Cry',singer:'EXO',Album:'XOXO'}

]
const CurrentMusic=ref(MusicArr[0])

const SelectMusic =(music)=>{
  isSelectEvent.value=true
  switchIcon()
  CurrentMusic.value= music
  audio.value.src = music.url    // 设置音乐URL
  audio.value.play()             // 播放音乐
}
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

                <div
                  :class="['RadioAnimationStatic', { RadioAnimationAction: isPlaying },{ RadioAnimationActionTwo:isOpacity}]"
                >
               <span class="musicName">{{CurrentMusic.name}}</span>
                <span class="musicSinger">{{CurrentMusic.singer}}</span>
                <span class="progress"> </span>
              </div>

              <div class="RadioBottom">
                <div class="img">
                <img :src="coverImg" width="65"height="52" />
                </div>
                <div class="control">
                  <i :class="['fa fa-step-backward', 'iconStyle']"></i>
                  <i
                    :class="isPlaying ? 'fa fa-play' : 'fa fa-pause'"
                    class="iconStyle"
                    @click="switchIcon"
                  ></i>

                  <i :class="['fa fa-step-forward', 'iconStyle']"></i>
                  <el-icon class="iconStyle" @click="RightOpen">
                    <component :is="isRightOpen ? 'Expand' : 'Fold'" />
                  </el-icon>
                </div>
              </div>
            </div>
            <div :class="[
              'RadioRight', isRightOpen ? 'RadioRightShow' : 'RadioRightHide'
              ,{RadioRightOpacity:isRightOpcity},{RadioRightOpacityTwo:isRightOpcityTwo}]"
            >
          <div v-for="music in MusicArr":key="music.id" @click="SelectMusic(music)":class="['MusicArr', { 'no-hover': music.id === 0 }]">
            <span >{{music.name}}</span>
            <span > {{music.singer}} </span >
            <span > {{music.Album}} </span >
          </div>

            </div>
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

  height: 885px;
  z-index: 100;

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
    background-image: url("src/assets/BodyNoe/EB7E1141EFA02FD565A22E071DD64CB1_副本.jpg");
    background-size: 100%;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    width: 100%;
   span{ position: relative;
     left: 200px;}
  width: 100%;
    .Popular {
      font-size: 44px;
      font-weight: bold;
      color: #7559a4;
      font-family: Bodytitle;
      width: 400px;
    }
    .Famous {
      font-size: 65px;
      color: #f2a5d4;
      font-family: FontLovely_2;
      width: 1000px;
    }
    .Listen {
      color: #9fb5dc;
      font-family: FontLovely_1;
      width: 400px;
    }
    .number {
      color: hotpink;
      font-family: FontLovely_2;
      width: 400px;
    }
  }
  .musicRadio {
    display: flex;
    flex-wrap: wrap;
    width: 850px;
    height: 500px;
z-index: 99;
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
      opacity: 0.8;
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
      display: flex;
      flex-direction: column;

      width: 75%;
      height: 72%;
      background-color: #f2a5d4;
      filter: contrast(2.5); // 对比度增强为 1.5 倍，可根据需要调整
      margin-top: 43px;
      border-radius: 50px;
      transform-origin: left;
      transition:
        opacity 0.5s cubic-bezier(0.68, 1, 0.27, 1), /* 使用自定义缓动函数 */
        transform 0.5s cubic-bezier(0.68,1, 0.27, 1); /* 平滑过渡 */
    }
    .MusicArr{
      margin-top: 20px;
      margin-left: 30px;
      margin-right: 20px;
    color: #181818;
     display: flex;
      gap: 50px;
      text-align: center;
      filter: contrast(0.2); // 对比度增强为 1.5 倍，可根据需要调整
      cursor: pointer;
      span{width:150px}
    }
    .MusicArr:hover{
    background: #fd8caf;
      filter: contrast(0.4); // 对比度增强为 1.5 倍，可根据需要调整
      border-radius: 10px;
    }
    .MusicArr.no-hover:hover {
      background: none;
      filter: none;
      border-radius: 0;
      cursor: default;
    }
    .RadioRightHide {
      opacity: 0;
      transform: scaleX(0);
    }
    .RadioRightShow {
      opacity: 0.2;
      transform: scaleX(1);
    }
    .RadioRightOpacity{
      opacity: 0.8;
    }
   .RadioRightOpacityTwo{
      opacity: 1;

     transition:
       opacity 0.5s cubic-bezier(0.68, 1, 0.27, 1), /* 使用自定义缓动函数 */
       transform 0.5s cubic-bezier(0.68,1, 0.27, 1); /* 平滑过渡 */
    }

    .RadioAnimationStatic {
      justify-content: flex-start;
      span{position: relative;
        left: 50px;
        font-size: 12px;
      }
      width: 80%;
      background-color: rgba(242, 165, 212, 0.8); /* 调整透明度，增加层次感 */
      height: 15%;
      display: flex;
      position: absolute;
      top: 298px;
      display: flex;
      flex-direction: column;
      opacity: 0.7; /* 默认透明度 */
      transform: scaleY(1); /* 默认缩放比例 */
      transform-origin: bottom; /* 缩放的起点设置为底部 */
      border-top-right-radius: 16px;
      border-top-left-radius: 16px; /* 添加圆角，提升视觉效果 */
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 添加阴影，增加立体感 */
      transition:
        opacity 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), /* 使用自定义缓动函数 */
        transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* 平滑过渡 */

    }

    /* 静态样式（隐藏） */
    .RadioAnimationAction {
      opacity: 0; /* 完全透明 */
      transform: scaleY(0); /* 垂直方向完全收缩 */
      box-shadow: none; /* 隐藏时移除阴影 */
    }
    .RadioAnimationActionTwo {
      opacity: 0.7 !important;
      background-color: #9fb5dc;

      transition: opacity 1s cubic-bezier(0.68, -0.55, 0.27, 1.55), /* 使用自定义缓动函数 */
      transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      transform-origin: bottom;
    }

      .RadioBottom {
        filter: contrast(1.5); // 对比度增强为 1.5 倍，可根据需要调整（会导致容器边距移动，无法正常对齐
      width: 100%;
      background-color: rgba(242, 165, 212, 0.78);
      height: 15%;
      display: flex;
      position: absolute;
      top: 360px;
      border-radius: 50px;
      .img {
        overflow: hidden;
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
          width: 15.72px;
        }
        .iconStyle:hover {
          color: hotpink;
        }
      }
    }
  }
}

</style>
