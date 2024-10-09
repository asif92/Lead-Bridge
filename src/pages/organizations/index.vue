<template>
  <div class="flex flex-col">
    <ul>
      <li v-for="(organization, id) in organizations" :key="id" class="float-left w-full p-2 lg:w-1/3 md:w-1/3">
        <v-link class="flex items-center content-center p-2 rounded bg-primary-muted-200" :to="{ name: 'organization-org-dashboard', params: { org: organization.id } }">
          <div class="flex items-center content-center h-16 truncate">
            <div class="flex-shrink-0 w-16 h-16 mr-4 rounded">
              <v-letter-avatar class="avi" :text="organization.name" />
            </div>
            <span class="h-16 mx-auto mt-3 text-lg font-semibold truncate leading-12">
              {{ organization.name }}
            </span>
          </div>
        </v-link>
      </li>
      <li class="float-left w-full p-2 lg:w-1/3 md:w-1/3">
        <v-link class="flex items-center content-center p-2 rounded bg-primary-muted-200" :to="{ name: 'organizations-new' }">
          <div class="flex items-center content-center h-16 truncate">
            <div class="flex items-center content-center flex-shrink-0 w-16 h-16 mr-4 rounded bg-primary-muted-600">
              <i class="mx-auto text-4xl text-white fas fa-plus" />
            </div>
            <span class="h-16 mx-auto mt-3 text-lg font-semibold truncate leading-12">Create New Organization</span>
          </div>
        </v-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .letter-avatar {
    --letter-avatar-color-rect: #000;
    --letter-avatar-color-text: #fff;
  }
</style>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator'

  @Component({
    name: 'organizations',
    layout: 'basic',
    async fetch({ app, route, error }) {
      await app.$accessor.user.organization.fetch()
    },
  })
  export default class extends Vue {
    get organizations() {
      // var organizations_list = [
      //   {id: 1, name:"Organization 1", slug: "Organization Slug 1", owner_id: 1, time_zone: "Alaska Standard Time"},
      //   {id: 2, name:"Organization 2", slug: "Organization Slug 2", owner_id: 2, time_zone: "Pacific Standard Time"},
      //   {id: 3, name:"Organization 3", slug: "Organization Slug 3", owner_id: 3, time_zone: "Mountain Standard Time"},
      //   {id: 4, name:"Organization 4", slug: "Organization Slug 4", owner_id: 4, time_zone: "Central Standard Time"},
      //   {id: 5, name:"Organization 5", slug: "Organization Slug 5", owner_id: 5, time_zone: "Eastern Standard Time"},
      // ];
      // return organizations_list
      return this.$accessor.user.organization.list
    }
  }
</script>
