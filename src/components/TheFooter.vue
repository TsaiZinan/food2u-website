<template>
  <div class="footer">
    <vs-row>
      <vs-col class="icons" vs-type="flex" vs-w="4" vs-xs="12">
        <a href="https://www.facebook.com/food2utas">
          <img
            class="icon"
            :src="require(`@/assets/icons/facebook-black-24dp.svg`)"
          />
        </a>

        <router-link :style="navbar" :to="{ name: 'About' }">
          <img
            class="icon"
            :src="require(`@/assets/icons/email-black-24dp.svg`)"
          />
        </router-link>

        <router-link class="daisy" :style="navbar" :to="{ name: 'Daisy' }">
          <img
            class="icon"
            :src="require(`@/assets/icons/email-black-24dp.svg`)"
          />
        </router-link>
      </vs-col>

      <vs-col class="text" vs-type="flex" vs-w="8" vs-xs="12">
        © Copyright 2020 | All Rights Reserved
      </vs-col>
    </vs-row>
  </div>
</template>

<style lang="stylus" scoped>

.text
  font-size 28px
  justify-content flex-end

  @media screen and (max-width: 768px)
    font-size 22px
    justify-content flex-start

.icon
  height 36px

.icons
  justify-content flex-start

.daisy
  opacity 0
</style>
