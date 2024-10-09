<template>
  <div class="h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="md:col-span-2">
      <div class="py-3">
        <h2 class="text-center text-3xl font-extrabold text-gray-900">Edit Organization Information</h2>
      </div>
      <form action="#" method="POST">
        <div class="shadow-lg overflow-hidden sm:rounded-md px-4 py-5 bg-white sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label for="slug" class="block mb-1 font-medium text-gray-700">Slug</label>
              <input id="slug" v-model="org.slug" type="text" name="slug" autocomplete="given-name" class="mt-1 py-2 px-3 border border-light-300 focus:primary-500 focus:border-primary-500 block w-full shadow-sm text-sm md:text-lg border-gray-300 rounded-md" />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="name" class="block mb-1 font-medium text-gray-700">Name</label>
              <input id="name" v-model="org.name" type="text" name="name" autocomplete="family-name" class="mt-1 py-2 px-3 border border-light-300 focus:primary-500 focus:border-primary-500 block w-full shadow-sm text-sm md:text-lg border-gray-300 rounded-md" />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="owner_id" class="block mb-1 font-medium text-gray-700">Owner ID</label>
              <input id="owner_id" v-model="org.owner_id" type="text" name="owner_id" autocomplete="email" class="mt-1 py-2 px-3 border border-light-300 focus:primary-500 focus:border-primary-500 block w-full shadow-sm text-sm md:text-lg border-gray-300 rounded-md" />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="time_zone" class="block mb-1 font-medium text-gray-700">Time Zone</label>
              <select id="time_zone" v-model="org.time_zone" name="time_zone" autocomplete="time_zone" class="mt-1 py-2 px-3 block w-full border border-light-300 bg-white rounded-md shadow-sm focus:outline-none focus:primary-500 focus:border-primary-500 text-sm md:text-lg">
                <option>Hawaii Standard Time</option>
                <option>Alaska Standard Time</option>
                <option>Pacific Standard Time</option>
                <option>Mountain Standard Time</option>
                <option>Central Standard Time</option>
                <option>Eastern Standard Time</option>
              </select>
            </div>
          </div>

          <div class="pt-4 text-right">
            <v-link tag="button" class="inline-flex justify-center py-2 px-5 shadow-md text-lg font-bold rounded-md text-primary-700 border border-primary-600 focus:outline-none hover:bg-primary-700 hover:text-primary-100" :to="{ name: 'organizations' }">Cancel</v-link>
            <v-link tag="button" class="inline-flex justify-center py-2 px-5 shadow-md text-lg font-bold rounded-md text-white border border-primary-600 focus:outline-none bg-primary-600 hover:bg-primary-700" :to="{ name: 'organizations' }">Update</v-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator'

  @Component({
    name: 'organizations-id-edit',
    layout: 'basic',
  })
  export default class extends Vue {
    private org = ''

    mounted() {
      this.org = this.$route.params.org
    }
  }
</script>
