<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import KTHeader from '@/views/HelloKitty/KTHeader.vue'
import { ref, onMounted, onBeforeMount } from 'vue'
import { computed } from 'vue'
import KTBodyTwo from '@/views/HelloKitty/KTBodyTwo.vue'

// 计算属性：当前音乐封面（默认图 + 动态切换）
const coverImg = computed(() => CurrentMusic.value.img || '/src/assets/BodyNoe/leftssmall.png')


// 播放状态相关
const isPlaying = ref(true)         // 是否正在播放
const isOpacity = ref(false)        // 播放状态切换时的透明度动画标记
const isRightOpen = ref(false)      // 右侧音乐列表展开状态
const isRightOpcity = ref(false)    // 右侧列表展开时的透明度动画
const isRightOpcityTwo = ref(false) // 备用透明度控制（可能未使用）
const isSelectEvent = ref(false)    // 音乐选择事件标记（防止重复触发）

// 音频实例 & 进度相关
const audio = ref(new Audio()) // 创建音频实例
const currentTime = ref(0)      // 当前播放时间（秒）
const duration = ref(0)         // 音频总时长（秒）

// 音乐列表数据
const MusicArr = [
  { id: 0, name: 'Music', singer: 'singer', Album: 'Album' }, // 占位数据
  { id: 1, name: 'Happy birthday', singer: 'Huey', Album: 'Huey' },
  {
    id: 2,
    name: '小镇爱',
    singer: 'asen/付思遥',
    Album: 'Thug Love',
    url: 'http://music.163.com/song/media/outer/url?id=2075583674.mp3',
    img: 'src/assets/BodyNoe/R-C.jpg',
  },
  {
    id: 3,
    name: '唯唯',
    singer: 'asen-艾志恒',
    Album: 'Life After Small Town',
    url: 'http://music.163.com/song/media/outer/url?id=2163619024.mp3',
    img: 'https://p1.music.126.net/VmFpmDv5TJwfKeKgHBdiZA==/109951169700047695.jpg',
  },
  {
    id: 4,
    name: "Baby Don't Cry",
    singer: 'EXO',
    Album: 'XOXO',
    url: "http://ws.stream.qqmusic.qq.com/C400003zPtkE2Jl4Xw.m4a?guid=968287063&vkey=FB8855F82A65DC1CE7EF3AEDA952F8FFA29784DB650A14599D9273AE528C27BA4C38282920923268C6B3B129BE950A973DC4BAC4148__v2b9ab89a&uin=&fromtag=120032&src=C400000K8lcU352dmH.m4a",
    img: "https://y.gtimg.cn/music/photo_new/T002R300x300M000000g5cRu1VNAt6.jpg"
  },
]
const CurrentMusic = ref(MusicArr[0]) // 当前播放的音乐（默认第一首）
// 右侧音乐列表展开/收起
const RightOpen = () => {
  isRightOpen.value = !isRightOpen.value // 切换展开状态
  if (isRightOpen.value) {
    // 展开时延迟显示内容（配合动画）
    setTimeout(() => {
      isRightOpcity.value = true
    }, 500)
  } else {
    isRightOpcity.value = false // 收起时立即隐藏
  }
  console.log('isRightOpen:', isRightOpen.value)
}

// 播放/暂停切换 & 图标动画
const switchIcon = () => {
  if (isSelectEvent.value === true) { // 音乐选择时的特殊逻辑
    isPlaying.value = !isPlaying.value
    isSelectEvent.value = false // 重置事件标记
    // 播放/暂停控制
    isPlaying.value ? audio.value.pause() : audio.value.play()
    // 延迟切换透明度动画（配合CSS过渡）
    setTimeout(() => {
      isOpacity.value = !isOpacity.value
    }, 250)
    console.log('isPlaying:', isPlaying.value)
    // ❗️注意：这里重复设置isPlaying为false可能存在逻辑问题
    setTimeout(() => {
      isPlaying.value = false
    }, 700)
  } else { // 常规播放状态切换
    isPlaying.value = !isPlaying.value
    isPlaying.value ? audio.value.pause() : audio.value.play()
    setTimeout(() => {
      isOpacity.value = !isOpacity.value
    }, 250)
    console.log('isPlaying:', isPlaying.value)
  }
  // ❗️注意：此处重复的播放逻辑可能导致状态混乱
  if (isPlaying.value === false) {
    isPlaying.value ? audio.value.pause() : audio.value.play()
    setTimeout(() => {
      isOpacity.value = !isOpacity.value
    }, 500)
    console.log('isPlaying:', isPlaying.value)
  }
}

// 音频进度相关事件
onMounted(() => {
  // 实时更新播放时间
  audio.value.addEventListener('timeupdate', () => {
    currentTime.value = audio.value.currentTime
  })
  // 加载完成后获取总时长
  audio.value.addEventListener('loadedmetadata', () => {
    duration.value = audio.value.duration
  })
})

// 进度条拖动时暂停并跳转
const onSeekInput = (e) => {
  audio.value.pause() // 拖动时暂停播放
  audio.value.currentTime = Number(e.target.value) // 直接跳转时间
}

// 进度条释放时恢复播放
const onSeekChange = () => {
  audio.value.play() // 恢复播放
}

// 选择具体音乐
const SelectMusic = (music) => {
  isSelectEvent.value = true // 标记音乐选择事件
  switchIcon() // 切换播放状态（可能触发播放）
  setTimeout(()=>{
    CurrentMusic.value = music // 更新当前音乐
  },350)

  audio.value.src = music.url // 加载新音乐地址
  audio.value.play() // 播放新音乐
}
</script>

<template>
  <!-- 顶部导航栏组件 -->


  <!-- 主体内容容器 -->
  <div class="BodyOne_mainContainer">
    <div class="centerContainer">
      <div class="body">
        <!-- 主题展示模块 -->
        <!-- 音乐播放模块 -->
        <div class="music">

          <div class="musicRadio">
            <!-- 左侧音乐控制区域 -->
            <div class="RadioLeft">
              <!-- 收音机标题（带图标） -->
              <div class="RadioTitle">
                <img src="../../assets/BodyNoe/Music.png" height="50" width="60" /> Music
              </div>
              <!-- 收藏状态文本 -->
              <div class="RadioLike">I like the most</div>
              <!-- 推荐电台文本 -->
              <div class="RadioRecommen">Radio recommendations</div>

              <!-- 音乐信息及进度条容器（带动画类） -->
              <div
                :class="[
                'RadioAnimationStatic',
                { RadioAnimationAction: isPlaying }, // 播放状态动画
                { RadioAnimationActionTwo: isOpacity }, // 透明度动画
              ]"
              >
                <!-- 音乐名称 -->
                <span class="musicName">{{ CurrentMusic.name }}</span>
                <!-- 歌手信息 -->
                <span class="musicSinger">{{ CurrentMusic.singer }}</span>
                <!-- 当前播放时间 -->
                <span class="currentTime">{{ Math.floor(currentTime / 60) }}:{{ String(Math.floor(currentTime % 60)).padStart(2, '0') }}</span>
                <!-- 总时长 -->
                <span class="durationTime">
                {{ Math.floor(duration / 60) }}:{{ String(Math.floor(duration % 60)).padStart(2, '0') }}
              </span>
                <!-- 进度条组件（双向绑定当前时间，带拖动和释放事件） -->
                <input
                  v-model="currentTime"
                  type="range"
                  min="0"
                  :max="duration"
                  step="0.1"
                  class="progress"
                  @input="onSeekInput"
                  @change="onSeekChange"
                />
              </div>

              <!-- 播放控制按钮区域 -->
              <div class="RadioBottom">
                <div class="img">
                  <!-- 当前音乐封面（动态切换） -->
                  <img :src="coverImg" width="65" height="52" />
                </div>
                <div class="control">
                  <!-- 上一首按钮（未实现具体逻辑） -->
                  <i :class="['fa fa-step-backward', 'iconStyle']"></i>
                  <!-- 播放/暂停按钮（根据播放状态切换图标） -->
                  <i
                    :class="isPlaying ? 'fa fa-play' : 'fa fa-pause'"
                    class="iconStyle"
                    @click="switchIcon"
                  ></i>
                  <!-- 下一首按钮（未实现具体逻辑） -->
                  <i :class="['fa fa-step-forward', 'iconStyle']"></i>
                  <!-- 右侧列表展开按钮（使用Element Plus图标，控制列表显隐） -->
                  <el-icon class="iconStyle" @click="RightOpen">
                    <component :is="isRightOpen ? 'Expand' : 'Fold'" />
                  </el-icon>
                </div>
              </div>
            </div>

            <!-- 右侧音乐列表区域（展开/收起效果） -->
            <div
              :class="[
              'RadioRight',
              isRightOpen ? 'RadioRightShow' : 'RadioRightHide', // 控制列表显示/隐藏
              { RadioRightOpacity: isRightOpcity }, // 展开时的透明度动画
              { RadioRightOpacityTwo: isRightOpcityTwo }, // 备用透明度动画类
            ]"
            >
              <!-- 音乐列表项（循环渲染，点击切换当前音乐） -->
              <div
                v-for="music in MusicArr"
                :key="music.id"
                @click="SelectMusic(music)"
                :class="['MusicArr', { 'no-hover': music.id === 0 }]"
              >
                <span>{{ music.name }}</span> <!-- 音乐名 -->
                <span> {{ music.singer }} </span> <!-- 歌手 -->
                <span> {{ music.Album }} </span> <!-- 专辑 -->
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
  width: auto;
  background: #f9d2d2;
  height: auto;
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
        opacity 0.5s cubic-bezier(0.68, 1, 0.27, 1),
          /* 使用自定义缓动函数 */ transform 0.5s cubic-bezier(0.68, 1, 0.27, 1); /* 平滑过渡 */
    }
    .MusicArr {
      margin-top: 20px;
      margin-left: 30px;
      margin-right: 20px;
      color: #181818;
      display: flex;
      gap: 50px;
      text-align: center;
      filter: contrast(0.2); // 对比度增强为 1.5 倍，可根据需要调整
      cursor: pointer;
      span {
        width: 150px;
      }
    }
    .MusicArr:hover {
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
    .RadioRightOpacity {
      opacity: 0.8;
    }
    .RadioRightOpacityTwo {
      opacity: 1;

      transition:
        opacity 0.5s cubic-bezier(0.68, 1, 0.27, 1),
          /* 使用自定义缓动函数 */ transform 0.5s cubic-bezier(0.68, 1, 0.27, 1); /* 平滑过渡 */
    }

    .RadioAnimationStatic {
      position: relative;
      justify-content: flex-start;
      span {
        position: relative;
        left: 60px;
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
        opacity 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55),
          /* 使用自定义缓动函数 */ transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* 平滑过渡 */

      .progress {
        accent-color: #f2a5d4;
        width: 60%;
        margin-left: 59px;
        height: 3px;
        position: relative;
        top: 15px;
        overflow: hidden;

      }
      .progress::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 20px; /* 滑块宽度 */
        height: 20px; /* 滑块高度 */
        transform: scale(0.8);
        background: #f2a5d4;
        border-radius: 50%;
        cursor: pointer;
      }

      .currentTime{
        top: 40px;
        left: 60px;
        height: auto;
        position: absolute;
        font-size: 10px!important;
      }
      .durationTime{
        top: 40px;
        left: 145px;
        height: auto;
        position: absolute;
        font-size: 10px!important;
      }

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

      transition:
        opacity 1s cubic-bezier(0.68, -0.55, 0.27, 1.55),
          /* 使用自定义缓动函数 */ transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      transform-origin: bottom;
    }

    .RadioBottom {
      filter: contrast(
          1.5
      ); // 对比度增强为 1.5 倍，可根据需要调整（会导致容器边距移动，无法正常对齐
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
