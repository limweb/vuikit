<template>
  <transition
    enter-to-class="uk-open"
    leave-class="uk-open"
    @beforeEnter="beforeEnter"
    @afterEnter="afterEnter"
    @afterLeave="afterLeave">
    <div class="uk-modal"
      v-show="show"
      style="display: block;"
      :class="{
        'uk-modal-lightbox': lightbox,
        'uk-modal-container': container,
        'uk-modal-full': full
      }">
        <vk-modal-content />
    </div>
  </transition>
</template>

<script>
import { on, offAll, hasClass, addClass, removeClass, css } from 'helpers/dom'
import debounce from 'lodash-es/debounce'

const html = document.documentElement
const body = document.body
const lngDir = html.getAttribute('dir') === 'rtl'
  ? 'right'
  : 'left'
const paddingDir = 'padding-' + (lngDir === 'left'
  ? 'right'
  : 'left')

let active
let activeCount

// init global events
const events = ['resize', 'orientationchange']
for (let i = 0; i < events.length; ++i) {
  on(window, events[i], debounce(e =>
    active && active.resize(),
  150))
}

on(document, 'keyup', e => {
  if (active && e.keyCode === 27) {
    e.preventDefault()
    active.$emit('keyEsc')
  }
})

export default {
  name: 'VkModal',
  components: {
    'vk-modal-content': {
      functional: true,
      render (h, { parent: vm }) {
        return vm.dialogIsOverriden
          ? vm.$slots.default
          : h('vk-modal-dialog', vm.$slots.default)
      }
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    container: {
      type: Boolean,
      default: false
    },
    lightbox: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    blank: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dialogIsOverriden () {
      // if dialog is passed as slot is considered overriden
      return this.$slots.default[0] && this.$slots.default[0].data.staticClass === 'uk-modal-dialog'
    }
  },
  mounted () {
    // set refs programatically
    this.$refs.dialog = this.$el.querySelector('.uk-modal-dialog')
    this.$refs.close = this.$el.querySelector('button.uk-close')

    // place close-top outside the dialog
    if (hasClass(this.$refs.close, 'vk-modal-close-top')) {
      removeClass(this.$refs.close, 'vk-modal-close-top')
      const bar = document.createElement('div')
      addClass(bar, 'uk-modal-bar')
      addClass(bar, 'uk-position-top')
      bar.appendChild(this.$refs.close)
      this.$el.appendChild(bar)
    }

    // place caption bottom outside the dialog
    const caption = this.$el.querySelector('.vk-modal-caption-bottom')
    if (caption) {
      addClass(caption, 'uk-modal-bar')
      addClass(caption, 'uk-position-bottom')
      removeClass(caption, 'vk-modal-caption-bottom')
      this.$el.appendChild(caption)
    }

    // update close style if full
    if (this.full) {
      removeClass(this.$refs.close, 'uk-modal-close-default')
      addClass(this.$refs.close, 'uk-modal-close-full')
    }

    // init events
    const clickHandler = event => {
      const dialog = this.$refs.dialog

      // click in/out modal dialog
      if (event.target === dialog || dialog.contains(event.target)) {
        this.$emit('clickIn', event)
      } else {
        this.$emit('clickOut', event)
      }
    }

    on(this.$el, 'click', clickHandler, this._uid)
    if ('ontouchstart' in document.documentElement) {
      on(this.$el, 'touchstart', clickHandler, this._uid)
    }

    // execute transition hooks if visible on load
    if (this.show) {
      this.beforeEnter()
      this.afterEnter()
    }

    // move dom to body
    document.body.appendChild(this.$el)
  },
  beforeDestroy () {
    offAll(this._uid)
    if (this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  methods: {
    beforeEnter () {
      this.$nextTick(() => {
        addClass(html, 'uk-modal-page')
        this.resize()
      })
    },
    afterEnter () {
      addClass(this.$el, 'uk-open')
      // if any previous modal active
      // emit event for further actions
      if (active) {
        active.$emit('inactive')
      }
      // change current active modal
      active = this
      activeCount++
    },
    afterLeave () {
      activeCount--
      // if no active modals left
      if (!activeCount) {
        removeClass(html, 'uk-modal-page')
        body.style[paddingDir] = ''
      }
      if (active === this) {
        active = null
      }
    },
    resize () {
      if (css(this.$el, 'display') === 'block' && this.center) {
        removeClass(this.$el, 'uk-flex uk-flex-center uk-flex-middle')

        const dialog = this.$refs.dialog
        const dh = dialog.offsetHeight
        const marginTop = css(dialog, 'margin-top')
        const marginBottom = css(dialog, 'margin-bottom')
        const pad = parseInt(marginTop, 10) + parseInt(marginBottom, 10)

        if (window.innerHeight > (dh + pad)) {
          addClass(this.$el, 'uk-flex uk-flex-center uk-flex-middle')
        } else {
          removeClass(this.$el, 'uk-flex uk-flex-center uk-flex-middle')
        }
        this.$el.style.display = hasClass(this.$el, 'uk-flex') ? '' : 'block'
      }
    }
  }
}
</script>
