<template>
  <div class="faq">
    <vs-row vs-w="12">
      <div class="faq-name" v-html="faq.title"></div>
    </vs-row>

    <vs-row vs-w="12">
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="start"
        vs-w="3"
        vs-sm="5"
        vs-xs="12"
      >
        <div class="faq-description" v-html="faq.description"></div>
      </vs-col>

      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="3"
        vs-sm="0"
        vs-xs="12"
      ></vs-col>

      <vs-col
        class="questions-block"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="6"
        vs-sm="7"
        vs-xs="12"
      >
        <vs-collapse :type="type">
          <div v-for="question in faq.questions" :key="question">
            <vs-collapse-item>
              <div
                class="questions"
                v-html="question.title"
                slot="header"
              ></div>

              <div v-for="text in question.texts" :key="text">
                <div class="answers" v-html="text"></div>
              </div>
            </vs-collapse-item>
          </div>
          <br /><br />
        </vs-collapse>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
// @ is an alias to /src
import faq from "@/data/Faq.js";

export default {
  name: "Faq",
  components: {},
  data() {
    return {
      faq: faq.content,
      type: "margin",
      test: "dasda"
    };
  }
};
</script>

<style scoped>
.faq {
  background-image: url("../assets/home/bgcompress.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
}

.faq-name {
  background-color: #fffbeb;
  font-weight: bold;
  font-size: 50px;
  text-decoration: underline;
  margin: 30px 0 30px 0;
  padding: 5px 20px 5px 10px;
}

.faq-description {
  background-color: #fffbeb;
  font-size: 30px;
  padding: 6px 6px 6px 6px;
}

.questions-block {
  background-color: #fffbeb;
  padding: 0px 30px 0px 30px;
}

.questions {
  /* text-align:center; */
  padding-right: 25px;
  font-size: 30px;
  /* font-weight: bold; */
}

.vs-collapse {
  padding: 0px;
}

.answers {
  font-size: 20px;
}

.vs-collapse-item {
  background-color: #fefdf7;
  border-radius: 0px;
}

.vs-collapse.margin .vs-collapse-item {
  background-color: #fffbeb;
  margin-top: 30px;
  /* no shadow */
  -webkit-box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0);
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0);
  border-radius: 0px;
  border-style: solid;
}

.vs-collapse-item:last-child {
  border-bottom: 3px solid rgba(0, 0, 0) !important;
}

div >>> a {
  color: #000000;
  text-decoration: underline;
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  .faq {
    background-image: none;
  }
}

/* .aaa >>> .b {
    color: red;
    text-align:center;
  } */

/* .leftitem >>> .vs-list--slot {
    margin-left: 0px;
  } */

/* .ooo >>> .list-titles {
    text-align:center;
  } */
</style>
