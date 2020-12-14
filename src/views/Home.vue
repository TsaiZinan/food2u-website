<template>
  <div class="home">
    <div
      class="homepage"
      :style="{ backgroundImage: `url(${background_image})` }"
    >
      <!-- <img class="hideimg" :style="{ backgroundImage: `url(${background_image})` }"/> -->
      <vs-row>
        <!-- <img src="../assets/home/background.png" style="visibility: hidden;" /> -->
        <!-- <vs-row vs-w="0" vs-xs="12">
          <img src="../assets/home/background.png"/>
        </vs-row> -->

        <vs-col class="left" vs-w="5.5" vs-xs="12">
          <div class="menu-block">
            <div class="menu" >
              <router-link :to="{ name: 'Event' }" style="font-weight: normal; ">Events</router-link>
            </div>
            <br />
            <div class="menu">
              <router-link :to="{ name: 'Wedding' }" style="font-weight: normal; ">Weddings</router-link>
            </div>
            <br />
            <div class="menu">
              <router-link :to="{ name: 'Corporate' }" style="font-weight: normal; ">Corporate</router-link>
            </div>
            <br />
            <div class="menu">
              <router-link :to="{ name: 'Private' }"
              style="font-weight: normal; "
                >Private Functions</router-link
              >
            </div>
          </div>
        </vs-col>

        <vs-col
          vs-type="flex"
          vs-justify="flex-start"
          vs-align="space-around"
          vs-w="6"
          vs-xs="12"
        >
          <!-- {{content}} -->
          <!-- <p class="text" v-html="text"></p> -->
          <div class="text">
            <p v-html="para" v-for="para in content" :key="para"></p>
          </div>

          <!-- <div v-for="para in content" :key="para">
            <p class="text" v-html="para" v-for="para in content" :key="para"></p>

          </div> -->
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import home from "@/data/Home.js";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      // ass: "https://i.imgur.com/oRmrfQ0.jpg",
      background_image: home.image,
      content: home.paras,
      text:
        "food2u is a working gourmet kitchen creating delicious food made from the highest quality ingredients: free-range eggs, hormone free chicken and meat, couverture chocolate, real butter, seasonal fruit and fresh vegetables. <br><br> We provide catering for Christmas functions, corporate lunches and dinners, breakfast catering, dinner parties, events, product launches, weddings, functions, morning and afternoon teas and parties. We are happy to cater for dietary requirements such as vegetarian, vegan, gluten free, and paleo. <br><br> Working with you, food2u will provide samples of prospective menus to ensure that we meet your expectations."
    };
  }
};
</script>

<style scoped>
.homepage {
  /* background-image: url("https://i.imgur.com/oRmrfQ0.jpg"); */
  background-repeat: no-repeat;
  background-size: 100%;
}

.left {
  text-align: left;
}

.right {
  text-align: right;
}

.text {
  background-color: #fffbeb;
  font-size: 26px;
  padding: 15px;
  margin-top: 430px;
}

.menu-block {
  margin-top: 200px;
}

.menu {
  background-color: #fffbeb;
  display: inline-block;
  font-size: 45px;
  text-decoration: underline;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px 14px 5px 14px;
}

a:link {
  color: #000000;
  text-decoration: underline;
}

a:visited {
  color: #000000;
  text-decoration: underline;
}

div >>> u {
  text-decoration: underline;
}

div >>> a {
  color: #000000;
  text-decoration: underline;
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  .menu-block {
    margin-top: 10px;
  }
  .text {
    margin-top: 10px;
  }
  .hideimg {
    /* content: url("https://i.imgur.com/oRmrfQ0.jpg"); */
    max-width: 100%;
  }
  .homepage {
    background-image: none;
    height: 100%;
  }
  .menu {
    font-size: 25px;
    text-decoration: underline;
    margin-top: 4px;
    margin-bottom: 4px;
    padding: 3px 5px 3px 5px;
    background-color: #fffbeb;
  }
}
</style>
