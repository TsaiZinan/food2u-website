<template>
  <div class="themenu">
    <vs-row vs-justify="center">
      <vs-col vs-w="12" vs-sm="12" vs-xs="12">
        <vs-collapse :type="type">
          <vs-collapse-item>
            <div id="menu-name" v-html="menu[number].title" slot="header"></div>

            <div id="menu-description" v-html="menu[number].description"></div>

            <div v-for="submenu in menu[number].submenu" :key="submenu">
              <vs-list class="ooo">
                <vs-list-header
                  class="submenu-name"
                  :title="submenu.name"
                ></vs-list-header>

                <div v-for="recipe in submenu.recipes" :key="recipe">
                  <vs-list-item class="leftitem">
                    <div v-html="recipe"></div>
                  </vs-list-item>
                </div>
              </vs-list>
            </div>
          </vs-collapse-item>
        </vs-collapse>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import menu from "@/data/Menu.js";
// import allmenu from "@/data/AllMenu.js";

export default {
  name: "Menu",
  props: {
    menuNumber: {
      type: String
    },
    menuFile: {
      type: String
    }
  },
  components: {},
  data() {
    return {
      menu: this.menuFile,
      number: this.menuNumber,
      type: "margin"
      // contentt: '<a class="b">Test</a>',
    };
  }
};
</script>

<style scoped>
.vs-collapse {
  padding: 0px;
}

.vs-collapse-item {
  background-color: #fefdf7;
  border-radius: 6px;
  /* background-image: url("../assets/home/texture.png"); */
}

.vs-header-list-primary {
  color: #000000;
  /* background-color:#fcf4cc; */
  border-radius: 4px;
  border-style: solid;
}

.vs-collapse.margin .vs-collapse-item {
  background-color: #fffbeb;
  -webkit-box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0);
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0);
}

.vs-list--header {
  padding: 8px;
  justify-content: center;
  font-size: 18px;
}

.vs-list--item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  font-size: 16px;
  line-height: 150%;
}

#menu-name {
  text-align: left;
  font-size: 25px;
  text-decoration: underline;
  padding-right: 35px;
}

#menu-description {
  padding: 10px;
  font-size: 23px;
}

.vs-collapse.margin .vs-collapse-item {
  border-radius: 0px;
}

/* .aaa >>> .b {
    color: red;
    text-align:center;
  } */

.leftitem >>> .vs-list--slot {
  margin-left: 0px;
}

/* .ooo >>> .list-titles {
    text-align:center;
  } */
</style>
