<template>
  <div class="wedding">
    <div>
      <vs-row vs-type="flex">
        <vs-col vs-w="4" vs-xs="12">
          <div id="detail-image">
            <img :src="require(`@/assets/details/immi.jpg`)" />
          </div>
        </vs-col>

        <vs-col id="text" vs-w="8" vs-xs="12">
          <div id="detail-text" v-for="content in wedding" :key="content">
            <div id="wedding-title" v-html="content.title"></div>
            <div
              id="wedding-text"
              v-html="paragraph.para"
              v-for="paragraph in content.paras"
              :key="paragraph"
            ></div>
          </div>
        </vs-col>
      </vs-row>
    </div>

    <div>
      <vs-row vs-type="flex">
        <vs-col vs-w="4" vs-xs="12">
          <div id="detail-image">
            <img :src="require(`@/assets/details/wedding.jpg`)" />
          </div>
        </vs-col>

        <vs-col id="text" vs-w="8" vs-xs="12">
          <div id="detail-text" v-for="content in wedding" :key="content">
            <div id="wedding-title" v-html="content.title"></div>
            <div
              id="wedding-text"
              v-html="paragraph.para"
              v-for="paragraph in content.paras"
              :key="paragraph"
            ></div>
          </div>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import wedding from "@/data/Details.js";

export default {
  name: "Wedding",
  components: {},
  data() {
    return {
      wedding: wedding.content,
      imagesdetail: ["details/immi.jpg", "details/wedding.jpg"],
      type: "margin"
    };
  }
};
</script>

<style scoped>
img {
  width: 100%;
}

#detail-text {
  padding-bottom: 5%;
  margin: auto;
}

#wedding-title {
  padding: 5% 10% 1% 10%;
  color: #ce942a;
  font-weight: normal;
  font-size: 1.5em;
  line-height: 1.2;
  margin: 0;
  text-align: left;
}

#wedding-text {
  padding: 1% 10% 1% 10%;
  text-align: left;
  color: #4c4c4d;
  line-height: 1.1;
}
</style>
