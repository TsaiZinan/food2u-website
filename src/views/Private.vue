<template>
  <div class="private" :style="{ backgroundImage: `url(${background_image})` }">
    <img class="hideimg" :style="{ content: `url(${background_image})` }" />
    <div>
      <vs-row vs-type="flex">
        <vs-col class="text" vs-w="5" vs-xs="12">
          
            <div class="text-title" v-html="title"></div>
            <br />
            <div
              id="wedding-text"
              v-html="para"
              v-for="para in content"
              :key="para"
            ></div>
          
        </vs-col>

        <vs-col class="menu" vs-w="7" vs-xs="12">
          <div class="menu-block" v-for="id in index" :key="id">
            <TheMenu v-bind:menuNumber="id" v-bind:menuFile="TheMenu" />
          </div>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import privateJS from "@/data/Private.js";
import allmenu from "@/data/AllMenu.js";

import TheMenu from "@/components/TheMenu";

export default {
  name: "Private",
  props: {
    WholeMenu: {
      type: String
    },
    id: {
      type: String
    }
  },
  components: {
    TheMenu
  },
  data() {
    return {
      title: privateJS.title,
      content: privateJS.paras,
      background_image: privateJS.image,
      TheMenu: allmenu.content,
      index: [3, 4, 9, 10, 5, 11, 12, 1, 6, 13]
    };
  }
};
</script>
<style scoped>
.private {
  background-repeat: no-repeat;
  background-size: 100%;
}

.hideimg {
  display: none;
}

.text {
  background-color: #fffbeb;
  font-size: 25px;
  padding: 15px;
  margin-top: 80px;
}

.text-title {
  font-size: 46px;
}

.menu {
  margin-top: 60px;
  padding-left: 450px;
}

div >>> u {
  text-decoration: underline;
}

div >>> a {
  color: #000000;
  text-decoration: underline;
  font-weight: bold;
}

@media screen and (max-width: 1280px) {
  .menu {
    margin-top: 60px;
    padding-left: 200px;
  }
}

@media screen and (max-width: 768px) {
  .menu {
    margin-top: 0px;
    padding-left: 0px;
  }
  .private {
    background-image: none;
    height: 100%;
  }
  .hideimg {
    display: inline;
    max-width: 100%;
  }
  .text {
    margin-top: 0px;
  }
  .menu-block {
    border-style: solid;
    margin-bottom: 30px;
  }
}
</style>
