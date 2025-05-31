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
          <div class="summerTheme">
            <img src="../../assets/BodyNoe/summer.png" />
          </div>
          <div class="birthdayTheme">
            <img src="../../assets/BodyNoe/Hellokitty.png" />
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
  margin-top: 5%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.theme {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content:flex-start;
  height: 400px;


  img {
    width: 500px;
    height: 300px;
  }

  .summerTheme {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #9fb5dc;
    width: 40%;
    height: 100%;
  }

  .birthdayTheme {
    margin-left: 200px;
    width: 40%;
  }
}
</style>
