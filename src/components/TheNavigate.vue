<template>
  <div class="thenav">
    <!-- <div style="background-color: #f6e066"> 
      <br >
    </div> -->
    <!-- active-text-color="#d8b700" -->

    <!-- <input class="input-color" v-model="colorx" type="color" name="" value=""> -->
    <!-- active-text-color="rgba(255,255,255,1)" -->
    <vs-navbar
      v-model="indexActive"
      text-color="#000000"
      active-text-color="#000000"
      class="myNavbar"
    >
      <!-- <div slot="title">
        <vs-navbar-title style="font-size: 30px; padding: 10px">
          food2u Catering
        </vs-navbar-title>
      </div> -->

      <vs-navbar-item index="0">
        <router-link :style="navbar" to="/">Home</router-link>
      </vs-navbar-item>
      <!-- <p class="space"></p>
      <vs-navbar-item index="1">
        <router-link :style="navbar" :to="{ name: 'About' }">About</router-link>
      </vs-navbar-item> -->
      <p class="space"></p>

      <!-- <vs-navbar-item index="2" >
        
        
        <vs-dropdown vs-trigger-click vs-icon="none">
        
          <vs-button id="navbutton" :color="colorx" text-color="#000000">Menu</vs-button>

          <vs-dropdown-menu>
            <vs-dropdown-item>
              <router-link  :to="{ name: 'Corporate' }">Corporate</router-link>
            </vs-dropdown-item>
            <vs-dropdown-item>
              <router-link  :to="{ name: 'Private' }">Private Functions</router-link>
            </vs-dropdown-item>
            <vs-dropdown-item>
              <router-link  :to="{ name: 'Menu' }">Weddings</router-link>
            </vs-dropdown-item>
            <vs-dropdown-item>
              <router-link  :to="{ name: 'Event' }">Events</router-link>
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>

      </vs-navbar-item> -->

      <vs-navbar-item index="2.1">
        <router-link :style="navbar" :to="{ name: 'Event' }"
          >Events</router-link
        >
      </vs-navbar-item>
      <p class="space"></p>
      <vs-navbar-item index="2.2">
        <router-link :style="navbar" :to="{ name: 'Wedding' }"
          >Wedding</router-link
        >
      </vs-navbar-item>
      <p class="space"></p>
      <vs-navbar-item index="2.3">
        <router-link :style="navbar" :to="{ name: 'Corporate' }"
          >Corporate</router-link
        >
      </vs-navbar-item>
      <!-- <vs-navbar-item index="2.8">
        <router-link :style="navbar" :collapse="true" :to="{ name: 'Menu' }">Menu</router-link>
      </vs-navbar-item> -->
      <p class="space"></p>
      <vs-navbar-item index="3">
        <router-link :style="navbar" :to="{ name: 'Private' }"
          >PrivateFunctions</router-link
        >
      </vs-navbar-item>
      <p class="space"></p>
      <vs-navbar-item index="4">
        <router-link :style="navbar" :to="{ name: 'Faq' }">Faq</router-link>
      </vs-navbar-item>
      <p class="space"></p>
      <vs-navbar-item index="5">
        <router-link :style="navbar" :to="{ name: 'Testimonials' }"
          >Testimonials</router-link
        >
      </vs-navbar-item>
      <!-- <p class="space"></p>
      <vs-navbar-item index="1">
        <router-link :style="navbar" :to="{ name: 'About' }">About</router-link>
      </vs-navbar-item> -->

      <!-- <vs-navbar-item index="6">
        <router-link :style="navbar" :to="{ name: 'Details' }">Details</router-link>
      </vs-navbar-item> -->
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    // colorx:'#f6e066',
    colorx: "#fffbeb",
    indexActive: 0,
    navbar: "font-size: 34px;"
  })
};
</script>

<style lang="stylus" scoped>
.thenav
  padding 10px 0px 20px 0px

.input-color
  // margin-bottom 10px
  // position relative
  // display block

.myNavbar
  box-shadow none

.vs-navbar {
  justify-content: flex-start;
}

.vs-navbar--item a {
    padding: 0px 0px 0px 0px;
    font-family: 'Dosis', Avenir, Helvetica, Arial, sans-serif;
}

.space {
  padding 10px
}







// .vs-navbar--title
//   position: absolute;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 270px;
//   text-align center

// .vuesax-app-is-ltr .vs-dropdown--item {
//   text-align: center;
//   font-family: 'Dosis';
//   color: "#d8b700";
//   background-color: "#d8b700";
// }

// div.vs-dropdown--menu--after{
//   height 0px !important;
// }
</style>

<style scoped>
@media screen and (max-width: 768px) {
  .vs-navbar--header {
    justify-content: flex-end;
  }
}
</style>
