<template>
  <vue-speedometer :ring-width="4" :segments="10" :max-segment-labels="0" :fluid-width="true" :needle-height-ratio="0.3" :needle-transition-duration="3333" needle-transition="easeElastic" :value="toggle ? 250 : 500" value-text-font-size="12" value-text-font-weight="normal" needle-color="#68bd04" />
</template>

<script>
  import { Component, Vue } from 'nuxt-property-decorator'
  // import the component
  import VueSpeedometer from 'vue-speedometer'
  // and use it in your component like
  export default {
    components: { VueSpeedometer },
    data() {
      return {
        toggle: false,
        styles: {
          width: '200px',
          height: '100px',
        },
      }
    },
    created() {
      window.setInterval(() => {
        this.toggle = !this.toggle
      }, 3000)
    },
  }
</script>
