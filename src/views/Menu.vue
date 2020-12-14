<template>
  <div class="menu">
    
    <vs-row vs-w="12">
      <div class="title" v-html="menu.title"></div>
    </vs-row>
    
    <vs-row vs-w="12">
      <vs-col
        vs-type="flex"
        vs-align="start"
        vs-w="3"
        vs-sm="5"
        vs-xs="12"
      >
        <div class="description" v-html="menu.description"></div>
      </vs-col>

      <vs-col
        vs-type="flex"
        vs-align="center"
        vs-w="3"
        vs-sm="0"
        vs-xs="12"
      ></vs-col>

      <vs-col
          class="content-block"
          vs-type="flex"
          vs-align="center"
          vs-w="6"
          vs-sm="7"
          vs-xs="12"
        >

        <div class="content">

          <div v-for="content in menu.submenu" :key="content">

            <div class="subtitle" v-html="content.name"></div>
            
            <div class="recipe" v-html="recipe" v-for="recipe in content.recipes" :key="recipe">

            </div>
          </div>
        </div>

        </vs-col>
    </vs-row>
    
  </div>
</template>

<script>
import allmenu from "@/data/AllMenu.js";

export default {
  data () {
    return {
      menuId: this.$route.params.id,
      // content: menu.submenu,
      // aaa: menu.title,
    }
  },
  computed: {
    menu(){
      return allmenu.content.find(
        menu => menu.id === this.menuId
      )
    }
  }
}
</script>

<style scoped>
.menu {
  background-image: url("../assets/home/bgcompress.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
}

.title {
  background-color: #fffbeb;
  font-weight: bold;
  font-size: 30px;
  text-decoration: underline;
  margin: 30px 0 30px 0;
  padding: 5px 20px 5px 10px;
}

.description {
  background-color: #fffbeb;
  font-size: 30px;
  padding: 15px;
}

.content-block {
  background-color: #fffbeb;
  padding: 15px 25px 25px 25px;
}

.subtitle {
  font-size: 30px;
  text-decoration: underline;
  font-weight: bold;
  padding: 10px;
}

.recipe {
  font-size: 25px;
  padding: 0px 0px 0px 20px;
}

@media screen and (max-width: 768px) {
  .menu {
    background-image: none;
  }

  .content-block {
    border-style: solid;
  }
}
</style>
