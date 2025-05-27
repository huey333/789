<template>

      <!-- Wishlist header 头部布局-->
      <div class="login-page">
        <div class="content">
          <h1 class="title1">Wishlist</h1>
          <p class="description1">
            Cloves, ginger, or pepper. Herbs are derived from green leaves and often grow in
            temperate climates. Common herbs are mint, rosemary.
          </p>
        </div>

        <div class="breadcrumb">
          <span class="breadcrumb-item">Home</span>
          <span class="breadcrumb-separator">/</span>
          <span class="current">Wishlist</span>
        </div>
      </div>

      <!-- Wishlist body页面布局 -->
      <div style="margin-bottom: 100px; max-width: 1200px">
        <!-- 商品表格 -->
        <table>
          <!-- 表格头部 -->
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Availability</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <!-- 表格内容 - 使用v-for指令循环渲染商品列表 -->
          <tbody>
            <tr v-for="(item, index) in products" :key="index">
              <!-- 删除商品按钮 -->
              <td>
                <buttonX @click="removeProduct(index)"
                  ><el-icon style="font-size: 28px"><Close /></el-icon
                ></buttonX>
              </td>
              <!-- 商品信息区域 -->
              <td>
                <!-- 商品图片 -->
                <img :src="item.image" alt="Product Image" class="BottleImage" />
                <!-- 商品名称 -->
                <div style="font-weight: bold">
                  {{ item.name }}
                  <!-- 动态显示商品数量单位 --><br />
                  <span v-if="item.quantity > 1">{{ item.quantity }} Pieces</span>
                  <span v-else>{{ item.quantity }} Piece</span>
                </div>
              </td>

              <!-- 商品单价（使用currency过滤器格式化） -->
              <td>{{ item.price | currency }}$</td>
              <!-- 商品数量输入框 -->
              <td>
                <!-- v-model双向绑定商品数量 -->
                <div
                  :style="{
                    'font-weight': 'bold',
                    color: item.Availability === 'In Stock' ? 'green' : 'red',
                  }"
                >
                  {{ item.Availability }}
                </div>
              </td>
              <!-- 商品小计（单价×数量） -->
              <td>{{ (item.price * item.quantity) | currency }}</td>
              <td><button>Add To Cart</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!--Wishlist foot底部布局-->
      <div class="main-container">
        <div class="FootBackGround"></div>
        <!-- 上半部分容器 -->
        <div class="upper-container">
          <!-- 左侧第一个容器 -->
          <div class="left-container">
            <img src="../../assets/LoginView/Log.png" height="117" width="293" />
            <p class="description">
              No matter the spices and herbs you are looking for be distracted by the readable.
            </p>
            <div class="social-icons">
              <a href="#" class="icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="icon">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="icon">
                <i class="fab fa-google"></i>
              </a>
            </div>
          </div>
          <!-- Solutions容器 -->
          <div class="solutions-container">
            <h3 class="section-title">Solutions</h3>
            <ul class="section-links">
              <li><a href="#">Ecommerce</a></li>
              <li><a href="#">Account</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="#">Register</a></li>
              <li><a href="#">Cart</a></li>
            </ul>
          </div>
          <!-- Company容器 -->
          <div class="company-container">
            <h3 class="section-title">Company</h3>
            <ul class="section-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contacts</a></li>
              <li><a href="#">Shop</a></li>
            </ul>
          </div>
          <!-- Latest News容器 -->
          <div class="news-container">
            <h3 class="section-title">Latest News</h3>
            <div class="news-item" v-for="(news, index) in newsList" :key="index">
              <img :src="news.image" alt="News Image" class="news-image" />
              <div class="news-details">
                <span class="news-number">{{ news.number }}</span>
                <h4 class="news-title">{{ news.title }}</h4>
                <p class="news-date">{{ news.date }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 下半部分容器 -->
        <div class="lower-container">
          <!-- 地址容器 -->
          <div class="address-container">
            <i class="fas fa-map-marker-alt"></i>

            <p>
              2416 Mapleview Drive<br />
              Tampa, FL 33634
            </p>
          </div>
          <!-- 邮箱容器 -->
          <div class="email-container">
            <i class="fas fa-envelope"></i>

            <p>
              Email : contact@website.com<br />
              Inquiries : info@mail.com
            </p>
          </div>
          <!-- 电话容器 -->
          <div class="phone-container">
            <i class="fas fa-phone"></i>
            <p>
              Telephone : 0029129102920<br />
              Mobile : 0029129102920
            </p>
          </div>
        </div>
        <div class="lower-container2"></div>
      </div>

</template>
<style scoped lang="scss">
/*Wishlist header头部属性.*/
.login-page {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('@/assets/LoginView/background.jpg'); /* 叠加暗色渐变 */
  background-size: cover;
  background-position: center;
  height: 400px;

  position: relative;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  color: white;
}

/* 其他样式保持不变 */
.title1 {
  font-size: 4em;

  position: absolute;
  top: 70px; /* 可选：增加顶部位置 */
  left: 170px;
  font-weight: bold; /* 设置字体加粗 */
}

.description1 {
  font-size: 1em;
  max-width: 500px;
  position: absolute;
  top: 150px; /* 可选：增加顶部位置 */
  left: 170px;
}

.breadcrumb {
  position: absolute;
  left: 1200px;
  bottom: 0px;
  background-color: white;
  width: 8%; /* 这里设置为占父容器宽度的20%，可根据实际调整 */
  height: 60px;
  padding: 15px 130px 15px 15px;
  border-radius: 0;
  color: black;
}

.breadcrumb-item {
  margin-right: 10px;
  color: coral;
  font-weight: bold; /* 设置字体加粗 */
  cursor: pointer; /* 鼠标悬停时显示手型指针 */
}

.current {
}

.breadcrumb-separator {
  margin: 0 5px;
  color: black; /* 设置分隔符颜色 */
}
/* body页面属性 */
/* 购物车表格样式 */
table {
  border-collapse: collapse; /* 合并单元格边框 */
  width: 100%; /* 表格宽度占满容器 */
  margin-top: 100px; /* 上边距 */
  margin-left: 30%; /* 左边距 */
  margin-right: 30px; /* 右边距 */
  margin-bottom: 13px;
  padding: 8px 80px 8px 80px; /* 内边距 */
}
.BottleImage {
  width: 70px;
  height: 70px;
  float: left;
  overflow: hidden;
}

/* 表格头部和单元格样式 */
th,
td {
  border: 1px solid #ddd; /* 边框样式 */
  padding: 8px 8px 8px 8px; /* 内边距 */
  text-align: left; /* 文本左对齐 */
  font-size: 20px; /* 字体大小 */
  font-weight: bold;
  height: 80px; /* 单元格高度 */
  align-items: center; /* 垂直居中 */
}
td:first-of-type {
  width: 7%;
  text-align: center; /* 文本左对齐 */
}
th:nth-of-type(2) {
  width: 40%;
  padding: 8px;
}
td:nth-of-type(2) {
  width: 40%;
  padding: 8px;
}
td:nth-of-type(3) {
  width: 10%;
  color: #67696e;
}
td:nth-of-type(4) {
  width: 16%;

  color: #666666;
}

td:nth-of-type(5) {
  width: 10%;
  font-weight: bold;
  color: #666666;
}
td:nth-of-type(6) {
  width: 16%;
}

/* 删除按钮样式 */
buttonX {
  background: none; /* 无背景 */
  border: none; /* 无边框 */
  cursor: pointer; /* 鼠标指针样式 */
  color: red; /* 红色文字 */
}
/* 重置默认样式，消除浏览器默认的内外边距等影响 */

EnterCouponCode {
  width: 350px;
  height: 60px;
  background: #f2f3f6;
  border-top-left-radius: 10px; /* 左上角圆角 */
  border-bottom-left-radius: 10px; /* 左下角圆角 */
  padding: 0 15px; /* 内边距，让文字和边框有间距 */
  font-size: 16px; /* 字体大小 */
}

button {
  position: relative;
  height: 38px;
  border: none;
  background-color: #f67d10;
  color: white;
  border-radius: 30px; /* 统一设置为高度的一半（60px/2=30px） */
  padding: 0 20px;
  font-size: 16px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
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
  transform: translateY(-2px); /* 轻微上浮效果 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影增强立体感 */
}

/* Wishlistfoot底部属性  */
/* 整体大容器样式 */

.main-container {
  position: relative;
  background-color: #222429;
  color: white;

  padding: 20px;
  font-family: Arial, sans-serif;
  padding: 80px 200px 0px 200px;
}

/* 上半部分容器样式 */
.upper-container {
  display: flex;
  justify-content: space-between;

  margin-bottom: 55px;
}

/* 左侧第一个容器样式 */
.left-container {
  text-align: center;
  flex: 1;
}

.logo {
  width: 150px;
  margin-bottom: 10px;
}

.description {
  line-height: 1.6;
  margin-bottom: 15px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.icon {
  color: white;
  font-size: 20px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.icon:hover {
  color: #ff7e1d;
}

/* Solutions、Company、Latest News容器通用样式 */
.solutions-container,
.company-container,
.news-container {
  flex: 1;
  margin-left: 20px;
  z-index: 1;
}
.news-container {
  position: relative;
}
.section-title {
  margin-bottom: 15px;
  font-size: 20px;
}

.section-links {
  list-style-type: none;
  padding: 0;
}

.section-links li {
  margin-bottom: 10px;
}

.section-links a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.section-links a:hover {
  color: white;
}
.FootBackGround {
  transform: scaleX(-1); /* 水平镜像 */
  left: 73%;
  top: 28%;
  width: 28%;
  height: 50%;
  bottom: 0;
  position: absolute;
  background-image: url('@/assets/LoginView/FootBackground.jpg');
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 83%;
  pointer-events: none;
  filter: contrast(1.5); // 对比度增强为 1.5 倍，可根据需要调整
  z-index: 0; /* 确保背景图在最底层 */
}

/* Latest News容器内新闻项样式 */
.news-item {
  display: flex;
  align-items: center;
}

.news-image {
  width: 80px;
  height: 80px;
  border-radius: 5px;
  margin-right: 15px;
}

.news-details {
  flex: 1;
}

.news-number {
  position: relative;
  right: 50px;
  background-color: #ff7e1d;
  color: white;
  padding: 3px 8px;
  border-radius: 50%;
  display: flex;
  width: 32px; // 固定宽度
  height: 32px; // 固定高度
  align-items: center; // 垂直居中
  justify-content: center; // 水平居中
  font-size: 16px;
  transform: translate(50%, -20%);
}

.news-title {
  font-size: 16px;
  margin-bottom: 5px;
}

.news-date {
  color: #ccc;
  font-size: 14px;
}

/* 下半部分容器样式 */
.lower-container2 {
  height: 60px;
}
.lower-container {
  display: flex;
  /*  justify-content: space-around;
  border-top: 1px solid #444;*/
  background-color: #1c1e22;
  border-bottom: 1px solid #444;
  padding: 20px 0;
  height: 130px;
  position: relative;
  z-index: 1; /* 确保背景图在最底层 */
}

/* 地址、邮箱、电话容器通用样式 */
.address-container,
.email-container,
.phone-container {
  display: flex;
  flex-direction: column;
  align-items: center; // 水平居中
  justify-content: center; // 垂直居中
  text-align: center;
  margin-left: 150px;
  height: 100%; // 确保容器有高度用于垂直居中
}

.address-container i,
.email-container i,
.phone-container i {
  font-size: 30px;
  margin-bottom: 10px;
  color: #ff7e1d;
}
</style>

<script setup>

import { ref } from 'vue'
const products = ref([
  {
    name: 'Red Chili Ground',
    price: 12.99,
    quantity: 1,
    Availability: 'In Stock',
    image: 'src/assets/CratImage/Bottle1.png', // 需替换为实际图片地址
  },
  {
    name: 'Black Pepper Shaker',
    price: 9.99,
    quantity: 1,
    Availability: 'In Stock',
    image: 'src/assets/CratImage/Bottle2.png', // 需替换为实际图片地址
  },
  {
    name: 'Cumin Ground',
    price: 13.99,
    quantity: 1,

    Availability: 'Out of Stock',
    image: 'src/assets/CratImage/Bottle3.png', // 需替换为实际图片地址
  },
])

const newsList = [
  {
    image: 'https://picsum.photos/id/1080/300/200',
    number: '12',
    title: 'Red Rocks Hickory Smoke Seasoning',
    date: 'June 4, 2022',
  },
  {
    image: 'https://picsum.photos/id/1081/300/200',
    number: '9',
    title: 'This is a test to try out how things work',
    date: 'January 4, 2022',
  },
]
</script>

<style scoped lang="scss"></style>
