<template>
  <div class="grid grid-cols-8 gap-0 text-gray-700">
    <div class="col-span-8 md:col-span-4 xl:col-span-2">
      <div class="min-h-screen py-3 px-6 flex flex-col">
        <header class="flex w-full content-center justify-center">
          <v-logo class="w-2/4 mt-3" />
        </header>
        <nuxt class="flex-grow" />
        <footer class="w-full">
          <copyright class="block text-center text-xs w-full mt-2" />
        </footer>
      </div>
    </div>
    <div class="col-span-0 md:col-span-4 xl:col-span-6 media"></div>
  </div>
</template>

<style lang="scss" scoped>
  .media {
    background: url('~assets/media/stock/background.jpg') center center no-repeat;
    background-size: cover;
  }
</style>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator'

  import Copyright from '~/components/footer/copyright.vue'
  import Logo from '~/components/layout/logo.vue'

  @Component({
    name: 'simple-aside-layout',
    components: {
      copyright: Copyright,
      'v-logo': Logo,
    },
  })
  export default class extends Vue {}
</script>
