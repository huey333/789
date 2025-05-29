<script setup lang="ts">


let welcome="welcome to Hello Kitty shoping ! ping"
let title="Adorable Hello Kitty  Inspired Ice Cream Delights"
let describe="Indulge in our sweet treats, adorned with cute Hello Kitty motifs. " +
  "From pastel - colored ice creams to Kitty - shaped toppings, every scoop is a whimsical adventure. Whether you're a long - time fan or new to the Hello Kitty world," +
  " our ice creams promise a magical taste experience."
import KTNavigation from './KTNavigation.vue'
</script>

<template>

<div class="mainContainer">
  <div class="centerContainer">
    <div class="leftBox">
      <div class=" leftText">
        <p class="welcome">{{welcome}}</p>
        <h3 class="title">{{title}}</h3>
        <p class="describe">{{describe}}</p>
        <button class="getButton">Book Now</button>
      </div>
    </div>

    <img class="rightImage" src="../../assets/KTHeader/right_.png" /></div>





</div>
</template>

<style scoped lang="scss">
.mainContainer{

  background-image: url("src/assets/KTHeader/background.png");
  background-size: 80%; /* 保持图片原始尺寸比例 */
  background-repeat: repeat-x; /* 平铺背景图 */

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 753px;

}
.centerContainer{
  display: flex;
  width: 80%;
  height: 80%;
  max-width: 1300px;
 max-height: 700px;
  align-items: flex-start;
  position: relative;
  flex-wrap: wrap;
}
.leftBox{
  width: 58%;

  max-width: 90%;
  border: 4px dashed #fd8caf;
  border-right: none;
  border-bottom:none ;
  position: relative;
  padding: 30px 30px;
  display: flex;
  flex-wrap: wrap;

  .leftText{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
    .welcome{
      color: #9fb5dc;
      font-weight: bold;
    }
    .title{
      font-size: 40px;
      width: 90%;
      color: #f2a5d4;
      font-weight: bold;

      animation: slideInFromRight 1s ease-out forwards;

      opacity: 0;
    }
    .describe{
      color: #7559a4;
      animation: slideInFromLeft 1s ease-out forwards;
      opacity: 0;
    font-weight: 400;
      animation-delay: 0.8s;
    }


  }
}
.leftBox::after {
  content: '';
  position: absolute;
  bottom: -4px; /* 与边框宽度一致 */
  left: 0;
  width: 50%; /* 只显示左侧一半宽度 */
  height: 4px; /* 与边框宽度一致 */
  border-bottom: 4px dashed #fd8caf; /* 保持相同的虚线样式 */
}
.getButton {
  border: #9fb5dc solid;
  width: 130px;
  height: 40px;
  position: relative;
  color: #9fb5dc;
  font-weight: bold;
  background-size: contain;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* 基础阴影增强立体感 */
  animation: slideInFromBottom 0.8s ease-out forwards;
  animation-delay: 1s;
  opacity: 0;
}
.getButton::after{
  content: "";
  position: absolute;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: center;
  transition: 0.5s ease-out;
  background-image: url("src/assets/KTHeader/button.png") ;
  background-position: center;
  background-size: contain;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); /* 使用物理惯性曲线 */
  opacity: 0.7; /* 降低不透明度，避免覆盖文本 */

}
.getButton:hover::after {
  transform: scaleX(1); /* 悬停时水平展开 */

}

.rightImage{
  width: 393px;
  height: 355px;
  position: absolute;
  left:62%;
  top: 30%;
  animation: slideInFromRight 1s ease-out forwards;
  animation-delay: 0.8s;
  opacity: 0;
}

@media (max-width: 990px){
  .leftBox{
    transform: scale(0.7);// 直接等比例放大120%整个容器内容
    bottom: 14%;
  }


  .rightImage{
    width: 243px;
    height: 205px;
    }
}
@media (max-width: 400px){
  .mainContainer{background-size: 300%}
  .rightImage{
    display: none;
    width: 243px;
    height: 205px;
  }
  }

</style>
