<template>
  <main class="flex flex-col min-h-screen">
    <layout-header class="flex-shrink-0">
      <template #left>
        <li class="flex flex-col content-center justify-center w-16 h-16 text-center cursor-pointer hover:bg-primary-muted-600" @click="side = !side">
          <i class="text-3xl fas fa-bars" />
        </li>
      </template>
      <template #right>
        <header-help />
        <header-account />
      </template>
    </layout-header>
    <div class="flex flex-grow">
      <div class="grid flex-grow min-h-full grid-cols-8 gap-0">
        <aside v-if="side" class="min-h-full col-span-1 bg-primary-muted-700">
          <aside-widget-user />
          <aside-navigation />
        </aside>
        <nuxt class="flex flex-col min-h-full bg-secondary p-10" :class="[side ? 'col-span-7' : 'col-span-8']" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator'

  import Header from '~/components/header/layout.vue'
  import HeaderAccount from '~/components/header/account.vue'
  import HeaderHelp from '~/components/header/help.vue'

  import AsideWidgetUser from '~/components/aside/widget/user.vue'
  import AsideNavigation from '~/components/aside/navigation.vue'

  import Footer from '~/components/footer/layout.vue'

  @Component({
    name: 'dashboard-layout',
    components: {
      'layout-header': Header,
      'header-account': HeaderAccount,
      'header-help': HeaderHelp,
      'aside-widget-user': AsideWidgetUser,
      'aside-navigation': AsideNavigation,
      'layout-footer': Footer,
    },
  })
  export default class extends Vue {
    side = true
  }
</script>
