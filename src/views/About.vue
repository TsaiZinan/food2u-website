<template>
  <div class="about">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->

    <div v-for="content in about" :key="content">
      <vs-row vs-type="flex" vs-justify="center">
        <vs-col vs-justify="center" vs-align="center" vs-w="5" vs-xs="12">
          <div class="about-title-div">
            <h3 class="about-title">{{ content.title }}</h3>
          </div>

          <div class="about-text-div">
            <p v-for="paragraph in content.paras" :key="paragraph">
              {{ paragraph.para }}
            </p>
          </div>
        </vs-col>

        <vs-col vs-w="5" vs-xs="12">
          <div class="about-images">
            <vs-images :hover="hover">
              <vs-image :src="require(`@/assets/${content.images[0]}`)" />
              <vs-image :src="require(`@/assets/${content.images[1]}`)" />
              <vs-image :src="require(`@/assets/${content.images[3]}`)" />
              <vs-image :src="require(`@/assets/${content.images[2]}`)" />
            </vs-images>
          </div>

          <!-- <img :src="require(`@/assets/${content.images[0]}`)" alt="home.slug" />
          <img :src="require(`@/assets/${content.images[1]}`)" alt="home.slug" />
          <img :src="require(`@/assets/${content.images[3]}`)" alt="home.slug" />
          <br />
          <img :src="require(`@/assets/${content.images[2]}`)" alt="home.slug" /> -->
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import about from "@/data/About.js";

export default {
  name: "About",
  components: {},
  data() {
    return {
      about: about.content,
      hover: "scale"
    };
  }
};
</script>

<style lang="stylus">
.about-images
  max-height 1000px;
  padding: 8% 5% 5% 5%;


.vs-image {



}

.about-title-div{
    margin: 0em;
    padding: 6% 5% 2% 5%;
    font-size: 1.8em;
    background-color: transparent;
}

.about-text-div{
    margin: 0em;
    padding: 3% 5% 5% 5%;
    font-size: 1.2em;
    line-height: 1.4;
    letter-spacing: 0.05em;
    text-align:left;
    background-color: transparent;
}
</style>
