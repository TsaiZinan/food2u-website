<template>
  <div class="test-main">
    <br />

    <vs-row vs-w="12">
      <div class="testimonials-title">Testimonials</div>
    </vs-row>

    <vs-row vs-w="12">
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
        vs-w="9"
        vs-sm="12"
        vs-xs="12"
      >
        <div class="testimonials">
          <div v-for="content in testimonials" :key="content">
            <vs-card class="single-block">
              <div class="text" v-html="content.description"></div>

              <br />
              <b>
                <p class="name">– {{ content.name }}</p>
              </b>
            </vs-card>
          </div>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
// @ is an alias to /src
import testimonials from "@/data/Testimonials.js";

export default {
  name: "Testimonials",
  components: {},
  data() {
    return {
      testimonials: testimonials.content
    };
  }
};
</script>

<style scoped>
.test-main {
  background-image: url("../assets/home/bgcompress.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
}

.testimonials-title {
  background-color: #fffbeb;
  font-weight: bold;
  font-size: 50px;
  text-decoration: underline;
  margin: 30px 0 30px 0;
  padding: 5px 20px 5px 10px;
}

.testimonials {
  background-color: #fffbeb;
  padding: 30px 40px 30px 40px;
  column-count: 4;
  column-gap: 30px;
}

.single-block {
  background-color: #fffbeb;
  border-style: solid;
  padding: 10px 10px 0px 10px;
  margin: 15px 0px 15px 0px;
  display: inline-block;
  width: 100%;
}

.text {
  font-size: 20px;
}

.name {
  font-size: 20px;
}

/* no shadow */
.con-vs-card {
  border-radius: 0px;
  -webkit-box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0);
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0);
}

@media screen and (max-width: 1500px) {
  .testimonials {
    column-count: 3;
  }
}

@media screen and (max-width: 1000px) {
  .testimonials {
    column-count: 2;
  }
}

@media screen and (max-width: 600px) {
  .testimonials {
    column-count: 1;
  }
  .test-main {
    background-image: none;
  }
  .testimonials-title {
    margin: 0;
  }
}
</style>
