<template>
  <section class="flex flex-col justify-center content-center flex-grow">
    <div class="flex flex-row justify-center content-center">
      <div class="bubble relative rounded-md p-5 bg-primary-muted-600 text-white">
        <div class="flex flex-row mx-auto">
          <div class="flex flex-col justify-center content-center mr-4">
            <span class="text-6xl text-center">{{ error.statusCode }}</span>
            <span class="text-2xl text-center">ERROR</span>
          </div>
          <div class="flex flex-col justify-center content-center">
            <span class="text-xl">{{ error.message }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bubble:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 80%;
  width: 0;
  height: 0;
  border: 45px solid transparent;
  border-bottom: 0;
  border-right: 0;
  margin-left: -22.5px;
  margin-bottom: -45px;

  @apply border-t-primary-muted-600;
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({
  name: "errors",
  layout: "basic",
})
export default class extends Vue {
  @Prop()
  error?: Error;
}
</script>
