<script setup lang="ts">

import Header from '@/views/ShopView/Header.vue'
import Foot from '@/views/ShopView/Foot.vue'
const HeaderProps={
  title:'Login',
  describe:"Cloves, ginger, or pepper. Herbs are derived from green leaves and often grow in temperate climates. Common herbs are mint, rosemary."
}
</script>

<template>
  <Header v-bind="HeaderProps">
  </Header>
  <div class="mainContainer" >
    <div class="centerContainer">
      <div class="topText">
        <h1 class="title">Log<span class="titleTow">in</span></h1>

        <p class="describe">For the most part, chefs use the terms "spices and herbs" interchangeably,
          but there are differences. Spices that .</p>
      </div>
      <div class="coreContainer">
        <img src="../../assets/LoginView/loginimg.jpg" class="img" />
        <form class="form-login" @submit.prevent>
          <div class="background-color">
          <input type="email"   placeholder="Email" class="email-filed">
          <input type="password" placeholder="PassWord" class="password-filed">
          <div class="form-option">
            <input type="checkbox" class="checkbox" id="1">
            <label for="1" >Remember Me</label>
            <a href="#" >Forgot password?</a>
          </div>

            <button type="submit" class="submit-button">LOGIN</button>
            <button type="button" class="google-button">CONTINUE WITH GOOGLE</button>
          </div>
        </form>
      </div>
    </div>
  </div>


</template>


<style scoped lang="scss">
.mainContainer{

  display: flex;
  justify-content: center;

}
.centerContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1100px;
  .topText{
    display: flex;
    justify-content:center;
    width: 100%;
    flex-wrap: wrap;
    margin: 20px auto;
    h1{
      text-align: center;
      width: 100%;
      font-weight:bold;
      color: #1c1e22;
      font-size: 50px;

    }
    span{
      color: #ff9900;
      font-weight: bold;
      margin: 0 10px;
    }
    p{
      width: 100%;
      color: #999;
      font-size: 14px;
      text-align: center;
      width: 50%;

    }
  }
  .coreContainer{
    padding: 0 10px 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    .img{
    width: 50%;
      height: 50%;
  }
    .form-login{
      background-color: #fdfdfd;
      border-radius: 90px;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 500px;
      .background-color{

        background: white;
        width: 84%;
        height: 84%;
        display: flex;
        flex-direction: column;
        border-radius: 50px;
        align-items: center;
        justify-content: center;
      }
      .email-filed,
      .password-filed{

        background-color: #f4f5f8;
        border: 1px solid #ccc;
        margin: 7px;
        width: 80%;
        height:56px;
        color: #686a6f;
      }
      .form-option{

        width: 80%;
        a{
          color: #ff9900;
          text-decoration: none;
        }
        label{
          margin-right: 38%;
        }
      }
      .submit-button{
        color: white;
        border: white;
        background-color: #f27b10;
        border-radius: 80px;
        width: 80%;
        height: 12%;
        margin: 15px;
      }
      .google-button{
        color: white;
        border: white;
        background: #db4a38;
        border-radius: 80px;
        width: 80%;
        height: 12%;
      }

    }

  }

}
  button{
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
  }
  button::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0; /* 初始高度为0 */
    background-color: rgba(0, 0, 0, 0.15); /* 半透明黑色 */
    transition: height 0.3s ease-out; /* 高度变化的过渡效果 */
    z-index: 1; /* 确保在按钮内容之上 */
  }

  button:hover::after {
    height: 100%; /* 悬停时高度变为100% */
  }

  button:hover {
    cursor: pointer;
    transform: translateY(-2px); /* 轻微上浮效果 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影增强立体感 */
  }
@media (max-width: 900px) {
  .form-login {
    width: 70% !important;
  }
}
@media (max-width: 700px){
  .img{
    width: 100%!important;
    height: 50%!important;
  }
  .form-login{
    width: 100% !important;
    label{
      margin-right:30% !important;
    }
  }
}

</style>
