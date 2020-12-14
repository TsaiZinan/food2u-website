<template>
  <div id="app" :style="{ fontFamily: currentFamily }">
    <vs-row vs-justify="space-around">
      <vs-col
        class="wholepage"
        vs-justify="space-around"
        vs-align="center"
        vs-w="11"
        vs-xs="11"
      >
        <div id="content-wrap">
          <TheBanner />

          <TheNavigate />

          <router-view
            @daisychange="changefont"
            v-bind:currentFontFamily="currentFamily"
          />
        </div>

        <br />

        <div id="footer">
          <!-- <br><br><br> -->
          <TheFooter />
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import TheNavigate from "@/components/TheNavigate";
import TheFooter from "@/components/TheFooter";
import TheBanner from "@/components/TheBanner";

// import wholemenu from "@/data/AllMenu.js";

// import TheMenu from "@/components/TheMenu";

export default {
  components: {
    TheNavigate,
    TheFooter,
    TheBanner
    // TheMenu,
  },
  data() {
    return {
      currentFamily: "Dosis",
      message: "Where are you, my Child?"
      // WholeMenu: wholemenu.content,
    };
  },
  methods: {
    changefont(font) {
      this.currentFamily = font;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@500;650&display=swap");

#app {
  font-family: "Dosis", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #fffbeb;
  /* background-image: url("assets/home/texture.png"); */
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 68px; /* Footer height */
}

#footer {
  position: absolute;
  bottom: 0;
  width: 91.5%;
  height: 68px; /* Footer height */
}
</style>
