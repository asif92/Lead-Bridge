<template>
  <div class="flex items-center justify-center h-full px-4 py-12 sm:px-6 lg:px-8">
    <div class="md:col-span-2">
      <div class="py-3">
        <h2 class="text-3xl font-extrabold text-center text-gray-900">Create New Organization</h2>
        <p class="mt-2 text-sm text-center text-gray-600">Write information for your organization</p>
      </div>
      <form action="#" method="POST">
        <div class="px-4 py-5 overflow-hidden bg-white shadow-lg sm:rounded-md sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label for="slug" class="block mb-1 font-medium text-gray-700">Slug</label>
              <input id="slug" type="text" name="slug" class="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="name" class="block mb-1 font-medium text-gray-700">Name</label>
              <input id="name" type="text" name="name" class="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="owner_id" class="block mb-1 font-medium text-gray-700">Owner ID</label>
              <input id="owner_id" type="text" name="owner_id" class="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm border-light-300 focus:primary-500 focus:border-primary-500 md:text-lg" />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="time_zone" class="block mb-1 font-medium text-gray-700">Time Zone</label>
              <select id="time_zone" name="time_zone" class="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-md shadow-sm border-light-300 focus:outline-none focus:primary-500 focus:border-primary-500 md:text-lg">
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
            <v-link tag="button" class="inline-flex justify-center px-5 py-2 text-lg font-bold border rounded-md shadow-md text-primary-700 border-primary-600 focus:outline-none hover:bg-primary-700 hover:text-primary-100" :to="{ name: 'organizations' }">Cancel</v-link>
            <v-link tag="button" class="inline-flex justify-center px-5 py-2 text-lg font-bold text-white border rounded-md shadow-md border-primary-600 focus:outline-none bg-primary-600 hover:bg-primary-700" :to="{ name: 'organizations' }">Save</v-link>

            <!-- <button type="submit" class="inline-flex justify-center px-5 py-2 text-lg font-bold text-white border rounded-md shadow-md border-primary-600 bg-primary-600 hover:bg-primary-700">
                  Save
                </button> -->
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
    name: 'organizations-new',
    layout: 'basic',
  })
  export default class extends Vue {}
</script>
