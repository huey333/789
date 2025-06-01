<script setup lang="ts">
import KTHeader from '@/views/HelloKitty/KTHeader.vue'
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

            <img src="../../assets/BodyNoe/leftBig.png" class="leftBig"  />
            <img src="../../assets/BodyNoe/leftssmall.png" class="leftSmall"/>
          </div>
          <div class="center">
            <div class="title">
                Theme4.1
            </div>
              <div class="describe">
                Indulge in our My Little Pony birthday-themed
                sweet treats, adorned with cute pony motifs.
                From dreamy-hued birthday cake ice creams to
                Pony-shaped frosting toppings, every scoop is
              .
              </div>

            </div>
          <div class="right" >

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
  background: #f3ead8;
}

.centerContainer {
  display: flex;
  justify-content: left;
  width: 100%;
  max-width: 2000px;
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
  height: 400px;



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
    .leftBig{
      width: 250px;
      height: 300px;
    }
    .leftSmall{
      width: 150px;
      height: 150px;
      transform: translate(-30%,35%)  ;


    }
  }

  .center{
    width: 33.3%;
   display: flex;
    justify-content: center;
    flex-direction: column;
    .title{
      text-align: center;
      font-size: 90px;
      font-family: Bodytitle;
    }
    .describe{

      text-align: center;
    }

  }

  .right {

    width: 33.3%;
  }
}
</style>
