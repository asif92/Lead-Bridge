<template>
  <main class="flex flex-col min-h-screen">
    <!-- header -->
    <layout-header :home="false">
      <template #left>
        <button class="mr-2" aria-label="Open Menu" @click="drawer">
          <svg fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </template>
      <template #right></template>
    </layout-header>

    <div class="flex w-full h-full bg-primary-muted-500">
      <!-- sidebar -->
      <layout-sidebar class="z-30 h-full overflow-auto transition-all duration-300 ease-in-out transform bg-white" :class="isOpen ? 'translate-x-0 lg:w-1/6' : '-translate-x-full w-0'"></layout-sidebar>

      <!-- main content -->
      <div class="flex flex-col w-full transition-all duration-300 ease-in-out transform bg-secondary">
        <nuxt class="content-start flex-grow px-5 my-4" />

        <!-- footer -->
        <layout-footer class="w-full"></layout-footer>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator'

  import Header from '~/components/header/layout.vue'
  import Footer from '~/components/footer/layout.vue'
  import Sidebar from '~/components/aside/navigation.vue'

  @Component({
    name: 'basic-layout',
    components: {
      'layout-header': Header,
      'layout-sidebar': Sidebar,
      'layout-footer': Footer,
    },
  })
  export default class extends Vue {
    private isOpen: boolean = true
    public drawer(): void {
      this.isOpen = !this.isOpen
    }
  }
</script>
