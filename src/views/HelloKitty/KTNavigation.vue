<script setup>
const NavFlavors = [
  'Chocolate',
  'Strawberry',
  'Vanilla',
  'Mango',
  'Blueberry',
  'Orange',
  'Yogurt',
  'Banana',
  'Lemon',
  'Dual',
  'Coffee',
  'Malted',
  'Butter',
  'Ambrosia',
  'Red Velvet',
]
const NavProduct = [
  {
    category: 'Shop',
    items: ['Shop', 'Shop Details', 'Cart', 'Checkout'],
  },
  {
    category: 'Stick & Cake',
    items: ['Regular', 'Premium', 'Sandwitch', 'Value Added'],
  },
  {
    category: 'Cup & Cone',
    items: ['Regular', 'Premium', 'Frozen Products', 'Daily Products'],
  },
  {
    category: '1 Liter',
    items: ['Regular', 'Desert', 'Double Sundae', 'Ripple Cake'],
  },
  {
    category: '2 Liter',
    items: ['Regular', 'Desert', 'Premium', 'Vanilla'],
  },
]
const NavPages = [
  'Ice Cream Menu',
  'Testimonial',
  'Team',
  'FAQ',
  'Log In',
  'Sign Up',
  '404 Error Page',
]
const NavBlog = [
  'Blog Grid',
  'Blog Slider',
  'Blog Left Sidebar',
  'Blog Right Sidebar',
  'Blog Details Left Sidebar',
  'Blog Details Right Sidebar',
]

</script>
<template>

  <div class="NavMainContainer">
    <div class="NavCenterContainer">

      <div class="NavNavbar">
        <div class="NavContainer">
          <a href="#" class="NavTitle" style="">Home</a>
        </div>
        <div class="NavContainer">
          <a href="#" class="NavTitle has-dropdown">Flavors</a>
          <ul class="NavFdroplist">
            <li v-for="flavor in NavFlavors" :key="flavor" style="width: 120px">
              <a href="#">{{ flavor }}</a>
            </li>
          </ul>
        </div>
        <div class="NavContainer">
          <a href="#" class="NavTitle has-dropdown">Product</a>
          <div class="NavPdroplist">
            <div v-for="section in NavProduct" :key="section.category">
              <a href="#">{{ section.category }}</a>

              <ul>
                <li v-for="item in section.items" :key="item" style="margin: 20px 0">
                  <a href="#">{{ item }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="NavContainer">
          <a href="#" class="NavTitle has-dropdown">Pages</a>
          <ul class="NavGdroplist">
            <li v-for="section in NavPages" :key="section" style="margin: 20px 0">
              <a href="#">{{ section }}</a>
            </li>
          </ul>
        </div>
        <div class="NavContainer">
          <a href="#" class="NavTitle has-dropdown">Blog</a>
          <ul class="NavBdroplist">
            <li v-for="section in NavBlog" :key="section" style="margin: 20px 0">
              <a href="#">{{ section }}</a>
            </li>
          </ul>
        </div>
        <div class="NavContainer">
          <a href="#" class="NavTitle">About Us</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.NavTxte {
  color: #7559a4;
}
.NavMainContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  z-index: 2000;

  position: fixed;
}
.NavCenterContainer {
  display: flex;
  width: 80%;
  max-width: 1300px;
  max-height: 700px;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
}
.NavNavbar {
  align-items: center;
  display: flex;
  gap: 30px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #181818;
  }
  .NavContainer {
    text-align: center;
    position: relative;
  }
  .NavFdroplist a,
  .NavPdroplist a,
  .NavGdroplist a,
  .NavBdroplist a {
    color: #7559a4; // 你想要的颜色
    font-family: 'fontLovely_2', sans-serif;
    font-weight: bold;
  }
  .NavFdroplist a:hover,
  .NavPdroplist a:hover,
  .NavGdroplist a:hover,
  .NavBdroplist a:hover {
    background-color: white; /* 选中背景色 */
    color: #fd8caf;
    border-radius: 8px;
    transition: background 0.2s;
  }
  .NavFdroplist,
  .NavPdroplist,
  .NavGdroplist,
  .NavBdroplist {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 2s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.4s;
    z-index: 2100;
  }
  /* 其他样式保持不变 */
  .NavFdroplist {
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    width: 0px;
    gap: 20px;
    padding-left: 38px;
  }
  .NavPdroplist {
    display: flex;
    width: 0px;
    height: 230px;
    gap: 20px;
    text-align: left;
    opacity: 0;
    padding-left: 40px;
  }
  .NavGdroplist {
    text-align: left;
    width: 0px;
  }
  .NavBdroplist {
    text-align: left;
    width: 0px;
  }
}
.NavContainer:hover .NavFdroplist,
.NavContainer:hover .NavPdroplist,
.NavContainer:hover .NavGdroplist,
.NavContainer:hover .NavBdroplist {
  max-height: 500px;
  opacity: 1;
  border: #9fb5dc solid 3px;
}

.NavContainer:hover .NavFdroplist {
  width: 600px;
  background-image: url("../../assets/KTNar/FNav.png");
  background-size: 100%;
  background-position: center;
}
.NavContainer:hover .NavPdroplist {
  width: 800px;
  background-image: url("../../assets/KTNar/PNav.jpg");
  background-size: 100%;
  background-position: center;
}
.NavContainer:hover .NavGdroplist {
  width: 200px;
  background-image: url("../../assets/KTNar/GNav.png");
  background-size: 100%;
  background-position: center;
}
.NavContainer:hover .NavBdroplist {
  width: 200px;
  background-image: url("../../assets/KTNar/BNav.png");
  background-size: 100%;
  background-position: center;
}

.NavTitle {
  position: relative;
  display: inline-block;
  border: #9fb5dc 3px solid;
  border-radius: 50px;
  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  color: #7559a4 !important;
  font-family: 'fontLovely', sans-serif;

  &:hover,
  &:active {
    transform: translateY(-6px) scale(1.04);
  }
}

.NavTitle.has-dropdown {
  &::after {
    content: "▼";
    position: static;
    font-size: 12px;
    color: #fd8caf;
    margin-left: 8px;
    transition: transform 0.3s;
    display: inline-block;
    vertical-align: middle;
    width: auto;
    height: auto;
    background: none;
  }
  &:hover::after {
    transform: rotate(180deg);
  }
}
@media (max-width: 680px) {
  .NavNavbar{
    gap: 9px;
  }
}
@media (max-width: 400px) {
  .NavMainContainer{display: none}
}
</style>
