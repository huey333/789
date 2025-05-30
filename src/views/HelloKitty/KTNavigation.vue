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
import {  ref } from 'vue'

const isMenuOpen =ref(false)
const isMenuOpenTow =ref(false)
const isMenuOpenThree = ref(false)

function isMenuOpenThree1() {
  isMenuOpenThree.value = true
  setTimeout(() => {
    isMenuOpenThree.value = false
  }, 500)
}
function openMenuTow() {
  isMenuOpenTow.value = true
  setTimeout(() => {
    isMenuOpenTow.value = false
  }, 500)
}


function closeMenu() {
  isMenuOpen.value = false
  openMenuTow()
  isMenuOpenThree1()

}
</script>
<template>


  <div class="NavMainContainer" :class="{ drawerOpen: isMenuOpen || isMenuOpenTow,
    D: isMenuOpenTow}">
    <div class="NavCenterContainer">
      <div class="HamburgerMenu" v-if="!isMenuOpen">
        <div class="hamburger" @click="isMenuOpen='ture'" :class="{Img:isMenuOpenThree}">

          <img src="../../assets/KTNar/Nav.jpg" class="ImgD" >
        </div>
      </div>
      <div class="NavNavbar">
        <div class="NavContainer">
          <a href="#" @click.prevent class="NavTitle" style="">Home</a>
        </div>
        <div class="NavContainer">
          <a href="#"@click.prevent class="NavTitle has-dropdown">Flavors</a>
          <ul class="NavFdroplist">
            <li v-for="flavor in NavFlavors" :key="flavor" style="width: 120px">
              <a href="#" >{{ flavor }}</a>
            </li>
          </ul>
        </div>
        <div class="NavContainer">
          <a href="#" @click.prevent class="NavTitle has-dropdown">Product</a>
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
          <a href="#"@click.prevent class="NavTitle has-dropdown">Pages</a>
          <ul class="NavGdroplist">
            <li v-for="section in NavPages" :key="section" style="margin: 20px 0">
              <a href="#">{{ section }}</a>
            </li>
          </ul>
        </div>
        <div class="NavContainer">
          <a href="#" @click.prevent class="NavTitle has-dropdown">Blog</a>
          <ul class="NavBdroplist">
            <li v-for="section in NavBlog" :key="section" style="margin: 20px 0">
              <a href="#">{{ section }}</a>
            </li>
          </ul>
        </div>
        <div class="NavContainer" @click.prevent>
          <a href="#" class="NavTitle">About Us</a>

        </div >
        <div v-if="isMenuOpen" class="NavContainer" @click="closeMenu">
          <a href="#" class="NavTitle">Shut</a>

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

  .NavFdroplist,
  .NavPdroplist,
  .NavGdroplist,
  .NavBdroplist {
    position: absolute;


    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition:
      max-height 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55),
      opacity 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55),
      transform 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    transform:translateX(-50%) scaleY(0.1);
    transform-origin: top;
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
    flex-wrap: wrap;
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
.NavContainer:hover .NavFdroplist,
.NavContainer:hover .NavPdroplist,
.NavContainer:hover .NavGdroplist,
.NavContainer:hover .NavBdroplist {
  max-height: 500px;
  opacity: 1;
  transform: scaleY(1);
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
@media (min-width: 604px) {

  .hamburger{
    display: none
  }
}

@media (max-width: 604px) {

  .Img{

   opacity: 0!important;
  }
  .ImgD{
    height: 90px;
    width: 70px;
  }
  .NavCenterContainer{
    justify-content: flex-start;
     width: 100%;
    padding-left: 8%;
}


  .NavMainContainer{
    width: 100%;
    transform: scaleY(0.5);
    transition:
      transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);

    transform-origin:center;

    .NavNavbar{
      display: none;
    }
  }

    .drawerOpen
 {
   transform: scaleY(1);
      transition:
        transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      display: flex;
    flex-direction: column;
  justify-content: flex-start ;
   width: 40%;
   height: 80vh;
    .NavCenterContainer{
      padding: 40% 0 50% 5%;

      justify-content:flex-start;

      border-radius: 20px;
      background-repeat: repeat-y;
      background-size: 100%;

      width: 100%;
      position: relative;
      z-index: 1;
      background-color: rgb(242, 165, 212,0.5);
      &::after {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url("src/assets/KTNar/QQ20250530-201847_副本.png");
        background-size: 100%;
        border-radius: 60px;
        background-repeat: repeat-y;
        opacity: 0.7; // 图片透明度
        z-index: -1;
      }
    }
   .NavNavbar{
     display: flex;
     flex-direction: column;
     gap: 30px;

     .NavFdroplist,
     .NavPdroplist,
     .NavGdroplist,
     .NavBdroplist {
       max-height: 0px;
       overflow-y: auto;
       overflow-x: auto;

     }
     .NavContainer:hover .NavPdroplist{
       height: 500px;
       width: 260px;
     }
     .NavContainer:hover .NavFdroplist,
     .NavContainer:hover .NavPdroplist{
       max-height: 500px;
       width: 260px;
     }
     .NavContainer:hover .NavGdroplist,
     .NavContainer:hover .NavBdroplist {
       max-height: 500px;
       width: 200px;
     }

   }
 }
}
.D{
  transform: scaleY(0);
  transition:
    transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  display: flex;
  flex-direction: column;
  justify-content: flex-start ;
  width: 40%;
  height: 80vh;
  .NavCenterContainer{
    padding: 40% 0 50% 5%;

    justify-content:flex-start;

    border-radius: 20px;
    background-repeat: repeat-y;
    background-size: 100%;

    width: 100%;
    position: relative;
    z-index: 1;
    background-color: rgb(242, 165, 212,0.5);
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-image: url("src/assets/KTNar/QQ20250530-201847_副本.png");
      background-size: 100%;
      border-radius: 60px;
      background-repeat: repeat-y;
      opacity: 0.7; // 图片透明度
      z-index: 1;
    }
  }
  .NavNavbar{
    display: flex;
    flex-direction: column;
    gap: 30px;

    .NavFdroplist,
    .NavPdroplist,
    .NavGdroplist,
    .NavBdroplist {
      max-height: 0px;
      overflow-y: auto;
      overflow-x: auto;

    }
    .NavContainer:hover .NavPdroplist{
      height: 500px;
      width: 260px;
    }
    .NavContainer:hover .NavFdroplist,
    .NavContainer:hover .NavPdroplist{
      max-height: 500px;
      width: 260px;
    }
    .NavContainer:hover .NavGdroplist,
    .NavContainer:hover .NavBdroplist {
      max-height: 500px;
      width: 200px;
    }




  }
}


</style>
