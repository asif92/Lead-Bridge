
<style lang="scss" scoped>
  .progress {
    position: fixed;
    top: 0px;
    left: 'auto'; // '0px';
    right: 0px;
    height: 5px;
    width: 0%;
    opacity: 1;
    transition: width 0.1s, opacity 0.4s;
    z-index: 999999;
    @apply bg-primary-muted-400;

    .progress-notransition {
      transition: none;
    }
  }

  .progress-failed {
    @apply bg-primary-300;
  }
</style>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator'

  @Component({ name: 'layout-loading' })
  export default class extends Vue {
    percent = 0
    skipTimerCount = 0
    left = 0
    throttle = 200
    duration = 3000

    show = false
    canSucceed = true
    reversed = false
    continuous = false

    _cut = 10000 / 3000
    _timer: NodeJS.Timeout | null = null
    _throttle: NodeJS.Timeout | null = null

    render(h: any) {
      let el = h(false)
      if (this.show) {
        el = h('div', {
          staticClass: 'progress',
          class: {
            'progress-notransition': this.skipTimerCount > 0,
            'progress-failed': !this.canSucceed,
          },
          style: {
            width: this.percent + '%',
            left: this.left,
          },
        })
      }
      return el
    }

    clear() {
      if (this._timer !== null) {
        clearInterval(this._timer)
        this._timer = null
      }
      if (this._throttle !== null) {
        clearTimeout(this._throttle)
        this._throttle = null
      }
    }

    start() {
      this.clear()
      this.percent = 0
      this.reversed = false
      this.skipTimerCount = 0
      this.canSucceed = true
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle)
      } else {
        this.startTimer()
      }
      return this
    }

    set(num: number) {
      this.show = true
      this.canSucceed = true
      this.percent = Math.min(100, Math.max(0, Math.floor(num)))
      return this
    }

    get() {
      return this.percent
    }

    increase(num: number) {
      this.percent = Math.min(100, Math.floor(this.percent + num))
      return this
    }

    decrease(num: number) {
      this.percent = Math.max(0, Math.floor(this.percent - num))
      return this
    }

    pause() {
      if (this._timer !== null) {
        clearInterval(this._timer)
      }
      return this
    }

    resume() {
      this.startTimer()
      return this
    }

    finish() {
      this.percent = this.reversed ? 0 : 100
      this.hide()
      return this
    }

    hide() {
      this.clear()
      setTimeout(() => {
        this.show = false
        this.$nextTick(() => {
          this.percent = 0
          this.reversed = false
        })
      }, 500)
      return this
    }

    /*eslint-disable */
    fail(error: Error) {
      this.canSucceed = false
      return this
    }
    /* eslint-enable */

    startTimer() {
      if (!this.show) {
        this.show = true
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--
          return
        }

        if (this.reversed) {
          this.decrease(this._cut)
        } else {
          this.increase(this._cut)
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1
            this.reversed = !this.reversed
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1
            this.reversed = !this.reversed
          }
        }
      }, 100)
    }
  }
</script>
