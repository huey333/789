<script setup lang="ts">

</script>

<template>
  <div class="mainContainer">
    <div class="centerContainer">
  <div class="windowBackground">
    <div class="window">
    </div>
  </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mainContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background: #f9d2d2;
  z-index: 0;
}
.centerContainer{
  display: flex;
  width: 80%;

  max-width: 1300px;
  max-height: 700px;
  align-items: flex-start;
  position: relative;
  flex-wrap: wrap;
}
.windowBackground{
  width: 100%;
  background-image: url("src/assets/BodyNoe/EB7E1141EFA02FD565A22E071DD64CB1_副本.jpg");
  background-size: 100%;
  z-index: 1;
  background-attachment: fixed
}
.window{
  width: 100%;
  height: 200px;
  opacity: 0;
  z-index: 2;
}
</style>
