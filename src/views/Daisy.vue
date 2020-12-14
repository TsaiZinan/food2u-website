<template>
  <div id="Daisy">
    <div class="fontChange">
      <b>Font Change</b>
      <br /><br />
      <span
        >Current Font: <b>{{ currentFont }}</b></span
      >
      <br /><br />

      <div>
        <label v-for="font in fontOptions" :key="font">
          <input
            type="radio"
            :value="font"
            v-model="currentFont"
            @change="$emit('daisychange', font)"
          />
          {{ font }}
          <br />
        </label>
      </div>
    </div>

    <br><br>
    <a href='/menu/menu-event'>sssss</a>

    <div class="singleMenu">
      <p :style="{fontSize: 60 + 'px'}">Single Menu</p>
      <div v-for="singlemenu in TheMenu" :key="singlemenu">
        <!-- {{singlemenu}} -->
        <router-link :to="{ name: 'Menu', params: {id: singlemenu.id} }" v-html="singlemenu.title">  </router-link>
        &lt;a href='/menu/{{singlemenu.id}}'&gt;&lt;/a&gt;
      </div>
    </div>

    <!-- change font size -->
    <!-- <div>
      <vs-button color="dark" type="border" @click="changeFont(-changeSize)">-</vs-button>
      <vs-button color="dark" type="border" @click="changeFont(changeSize)">+</vs-button>
      <br>

      <div class="display" :style="{ fontSize: size, color: aa, fontFamily: currentFont }">
        Test
        {{displaySize}}
      </div>
    </div> -->
    <!-- change font size -->

    <!-- modify the menu component -->
    <vs-row>
      <vs-col class="menu" vs-w="7" vs-xs="12">
        <div class="menu-block" v-for="id in index" :key="id">
          <TheMenu v-bind:menuNumber="id" v-bind:menuFile="TheMenu" />
        </div>
      </vs-col>
    </vs-row>
    <!-- modify the menu component -->
  </div>
</template>

<script>
import allmenu from "@/data/AllMenu.js";

import TheMenu from "@/components/TheMenu";

export default {
  name: "Daisy",
  props: {
    displaySize: {
      type: Number,
      default: 50
    },
    changeSize: {
      type: Number,
      default: 10
    },
    currentFontFamily: {
      type: String
    }
  },
  components: {
    TheMenu
  },
  data() {
    return {
      // aa: "blue",
      // bb: "Arial",
      currentFont: this.currentFontFamily,
      fontOptions: ["Dosis", "Avenir", "Helvetica"],
      TheMenu: allmenu.content,
      index: [11],
      menuTest: "menu-conference",
    };
  },
  computed: {
    size() {
      return this.displaySize + "px";
    }
  },
  methods: {
    addFont: function() {
      // alert('Submit Form')
      this.displaySize = this.displaySize + 10;
    },
    changeFont: function(x) {
      // alert('Submit Form')
      this.displaySize = this.displaySize + Number(x);
    }
  }
};
</script>

<style scoped>
.display {
  font-family: "Dosis";
}

.fontChange {
  border-style: solid;
  font-size: 30px;
  padding: 20px;
  display: inline-block;
}

.menu {
  margin-top: 60px;
  padding-left: 450px;
}

.menu-block {
  border-style: solid;
}
</style>
