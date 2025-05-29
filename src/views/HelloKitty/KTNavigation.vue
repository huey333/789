<script setup>
const flavors = [
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
const Product = [
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
const Pages = [
  'Ice Cream Menu',
  'Testimonial',
  'Team',
  'FAQ',
  'Log In',
  'Sign Up',
  '404 Error Page',
]
const Blog = [
  'Blog Grid',
  'Blog Slider',
  'Blog Left Sidebar',
  'Blog Right Sidebar',
  'Blog Details Left Sidebar',
  'Blog Details Right Sidebar',
]

</script>
<template>

  <div class="mainContainer">
    <div class="centerContainer">

      <div class="navbar">
        <div class="container">
          <a href="#" class="title" style="">Home</a>
        </div>
        <div class="container">
          <a href="#" class="title has-dropdown">Flavors</a>
          <ul class="Fdroplist">
            <li v-for="flavor in flavors" :key="flavor" style="width: 120px">
              <a href="#">{{ flavor }}</a>
            </li>
          </ul>
        </div>
        <div class="container">
          <a href="#" class="title has-dropdown">Product</a>
          <div class="Pdroplist">
            <div v-for="section in Product" :key="section.category">
              <a href="#">{{ section.category }}</a>

              <ul>
                <li v-for="item in section.items" style="margin: 20px 0">
                  <a href="#">{{ item }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container">
          <a href="#" class="title has-dropdown">Pages</a>
          <ul class="Gdroplist">
            <li v-for="section in Pages" style="margin: 20px 0">
              <a href="#">{{ section }}</a>
            </li>
          </ul>
        </div>
        <div class="container">
          <a href="#" class="title has-dropdown">Blog</a>
          <ul class="Bdroplist">
            <li v-for="section in Blog" style="margin: 20px 0">
              <a href="#">{{ section }}</a>
            </li>
          </ul>
        </div>
        <div class="container">
          <a href="#" class="title">About Us</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.Txte{
  color: #7559a4;
}
.mainContainer{

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;

  z-index: 2000;

}
.centerContainer{
  display: flex;
  width: 80%;
  max-width: 1300px;
  max-height: 700px;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
}
.navbar{
  align-items: center;
  display: flex;
  gap: 30px;
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
    color: #181818;
  }
  .container{
    text-align: center;
    position: relative;

  }
  .Fdroplist a,
  .Pdroplist a,
  .Gdroplist a,
  .Bdroplist a {
    color: #7559a4; // 你想要的颜色
    font-family: 'fontLovely_2', sans-serif;
   font-weight: bold;

  }
  .Fdroplist a:hover,
  .Pdroplist a:hover,
  .Gdroplist a:hover,
  .Bdroplist a:hover {
    background-color: white; /* 选中背景色 */
    color: #fd8caf;
    border-radius: 8px;
    transition: background 0.2s;
  }
  .Fdroplist,
  .Pdroplist,
  .Gdroplist,
  .Bdroplist {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 2s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.9s;
    z-index: 2100;


  }
    /* 其他样式保持不变 */
  .Fdroplist{
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    width: 0px;
    gap: 20px;

    padding-left:38px ;

  }
 .Pdroplist{
   display: flex;
  width: 0px;
   height: 230px;
   gap: 20px;
   text-align: left;
   opacity: 0;



   padding-left:40px ;
  }
  .Gdroplist{

    text-align: left;
    width: 0px;

  }
  .Bdroplist{

    text-align: left;
    width: 0px;

  }
}
.container:hover .Fdroplist,
.container:hover .Pdroplist,
.container:hover .Gdroplist,
.container:hover .Bdroplist {
  max-height: 500px;
  opacity: 1;
  border: #9fb5dc solid 3px;

}

.container:hover .Fdroplist { width: 600px;
  background-image: url("../../assets/KTNar/FNav.png");
  background-size: 100%;
  background-position: center;
}
.container:hover .Pdroplist { width: 800px;
  background-image: url("../../assets/KTNar/PNav.jpg");
  background-size: 100%;
  background-position: center;

}
.container:hover .Gdroplist{
  width: 200px;
  background-image: url("../../assets/KTNar/GNav.png");
  background-size: 100%;
  background-position: center;}
.container:hover .Bdroplist {
  width: 200px;
  background-image: url("../../assets/KTNar/BNav.png");
  background-size: 100%;
  background-position: center;
}

.title {
  position: relative;
  display: inline-block;
  border: #9fb5dc 3px solid;
  border-radius:50px ;
  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  color: #7559a4!important;
  font-family: 'fontLovely', sans-serif;


  &:hover,
  &:active {
    transform: translateY(-6px) scale(1.04);
  }
}

.title.has-dropdown {
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
</style>
