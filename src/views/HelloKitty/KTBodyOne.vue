<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import KTHeader from '@/views/HelloKitty/KTHeader.vue'
import { ref, onMounted, onBeforeMount } from 'vue'
import { computed } from 'vue'
import KTBodyTwo from '@/views/HelloKitty/KTBodyTwo.vue'
import Music from '@/views/HelloKitty/Music.vue'

// 计算属性：当前音乐封面（默认图 + 动态切换）

// 引用：左侧大/小图片元素（用于动画监听）
const leftBig = ref(null)
const leftSmall = ref(null)

</script>

<template>

  <!-- 顶部导航栏组件 -->
  <div class="KTHeader">
    <KTHeader></KTHeader>

  </div>

  <!-- 主体内容容器 -->
  <div class="BodyOne_mainContainer">
    <div class="centerContainer">
      <div class="body">
        <!-- 主题展示模块 -->
        <div class="theme">
          <!-- 左侧装饰图片区域 -->
          <div class="left">
            <!-- 左侧大图片，带底部进入动画 -->
            <img
              ref="leftBig"
              src="../../assets/BodyNoe/leftBig.png"
              :class="['leftBig', 'animateBottom']"
            />
            <!-- 左侧小图片，带顶部进入动画 -->
            <img
              ref="leftSmall"
              src="../../assets/BodyNoe/leftssmall.png"
              :class="['leftSmall', 'animateTop']"
            />
          </div>

          <!-- 中心内容区域 -->
          <div class="center">
            <!-- 主题标题 -->
            <div class="title">Theme4.1</div>
            <!-- 主题描述文本 -->
            <div class="describe">
              Indulge in our My Little Pony birthday-themed sweet treats, adorned with cute pony
              motifs. From dreamy-hued birthday cake ice creams to Pony-shaped frosting toppings,
              every scoop is .
            </div>
            <!-- 按钮容器 -->
            <div class="buttonContainer">
              <div class="themeButton">
                <!-- 主题按钮文字（换行显示） -->
                <div class="happyTitle">
                  Theme<br />
                  Happy<br />Birthday
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧装饰图片区域 -->
          <div class="right">
            <!-- 右侧大图片（背景色覆盖），带底部进入动画 -->
            <img
              ref="leftBig"
              style="background: #9fb5dc"
              src="@/assets/BodyNoe/rightBIg.png"
              :class="['leftBig', 'animateBottom']"
            />
            <!-- 右侧小图片，带顶部进入动画 -->
            <img
              ref="leftSmall"
              src="@/assets/BodyNoe/rightSmall.png"
              :class="['rightSmall', 'animateTop']"
            />
          </div>
        </div>

        <!-- 音乐播放模块 -->
        <div class="music">
          <!-- 音乐描述文本区域 -->
          <div class="musicDescribe">
            <span class="Popular">Popular and</span>
            <span class="Famous">Famous Online Radio</span>
            <span class="Popular">Stations</span>
            <span class="Listen">Listen to All Music on Radio FM -</span>
            <span class="number">102.1</span>
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
    background-image: url('src/assets/BodyNoe/EB7E1141EFA02FD565A22E071DD64CB1_副本.jpg');
    background-size: 100%;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    width: 100%;

    span {
      position: relative;
      left: 200px;
    }

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
}

</style>
