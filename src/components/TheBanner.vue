<template>
  <div class="banner">
    <vs-row>
      <vs-col
        class="bannerleft"
        vs-type="flex"
        vs-justify="flex-start"
        vs-align="center"
        vs-w="6"
        vs-xs="12"
      >
        <b>food2u Catering</b>
      </vs-col>
      <vs-col
        class="bannerright"
        vs-type="flex"
        vs-justify="flex-end"
        vs-align="flex-end"
        vs-w="6"
        vs-xs="12"
      >
        88 Central Avenue, Moonah, Tasmania, Australia
        <br />
        03 6272 9940
      </vs-col>
    </vs-row>
  </div>
</template>

<style scoped>
.banner {
  padding: 40px 0px 0px 0px;
}

.bannerleft {
  font-size: 80px;
}

.bannerright {
  text-align: right;
  font-size: 30px;
}

@media screen and (max-width: 768px) {
  .banner {
    padding: 10px 0px 0px 0px;
  }
  .bannerright {
    text-align: left;
  }
}
</style>
