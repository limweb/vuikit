import Vue from 'vue/dist/vue.common.js'
import Vuikit from 'distwp/vuikit.common.js'
// import Himalaya from 'himalaya'
// import dom2json from 'dom2json'
const html2json = require('html2json').html2json

// set to production to avoid Vue dev env warning
// process.env.NODE_ENV = 'production'

Vue.use(Vuikit)

let id = 0

const createElm = function () {
  const elm = document.createElement('div')

  elm.id = 'app' + ++id
  document.body.appendChild(elm)

  return elm
}

const getComponentTag = function (vm) {
  return vm.$options && vm.$options._componentTag
}

/**
 * @param  {Object} vm
 */
export function destroyVM (vm) {
  vm &&
  vm.$el &&
  vm.$el.parentNode &&
  vm.$el.parentNode.removeChild(vm.$el)
}

/**
 * @param  {Object|String}  Compo
 * @param  {Boolean=false} mounted
 * @return {Object} vm
 */
export function createVue (Compo, mounted = false) {
  const elm = createElm()

  if (Object.prototype.toString.call(Compo) === '[object String]') {
    Compo = { template: Compo }
  }
  return new Vue(Compo).$mount(mounted === false ? null : elm)
}

/**
 * @link http://vuejs.org/guide/unit-testing.html#Writing-Testable-Components
 * @param  {Object}  Compo
 * @param  {Object}  propsData
 * @param  {Boolean=false} mounted
 * @return {Object} vm
 */
export function createTest (Compo, propsData = {}, mounted = false) {
  if (propsData === true || propsData === false) {
    mounted = propsData
    propsData = {}
  }
  const elm = createElm()
  const Ctor = Vue.extend(Compo)
  return new Ctor({ propsData }).$mount(mounted === false ? null : elm)
}

/**
 * mouseenter, mouseleave, mouseover, keyup, change, click
 * @param  {Element} elm
 * @param  {String} name
 * @param  {*} opts
 */
export function triggerEvent (elm, name, bubbles = true, cancelable = true) {
  let eventName

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents'
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent'
  } else {
    eventName = 'HTMLEvents'
  }
  const evt = document.createEvent(eventName)

  evt.initEvent(name, bubbles, cancelable)
  elm.dispatchEvent
    ? elm.dispatchEvent(evt)
    : elm.fireEvent('on' + name, evt)

  return elm
}

/**
 * esc = 27
 * @param  {Element} elm
 * @param  {String} keyCode
 */
export function triggerKeyEvent (elm, keyCode) {
  const evt = document.createEvent('Events')

  evt.initEvent('keyup', true, true)
  evt.keyCode = keyCode
  elm.dispatchEvent(evt)
}

/**
 Returns all child components filtered by their dom tag
 */
export function queryByTagAll (vm, name) {
  let result = []
  for (let i = 0; i < vm.$children.length; i++) {
    const child = vm.$children[i]

    if (getComponentTag(child) === name) {
      result.push(child)
    }

    if (child.$children && child.$children.length) {
      result = [...result, ...queryByTagAll(child, name)]
    }
  }
  return result
}

/**
 Returns child component filtered by it dom tag
 */
export function queryByTag (vm, name) {
  for (let i = 0; i < vm.$children.length; i++) {
    const child = vm.$children[i]

    if (getComponentTag(child) === name) {
      return child
    }

    if (child.$children && child.$children.length) {
      return queryByTag(child, name)
    }
  }
  return false
}

/**
 Compiles the component rendered dom to JSON
 */
export function toJSON (vm) {
  let json = html2json(vm.$el.outerHTML)
  json = JSON.stringify(json)
    .replace(/"text": ?"(.*)"/g, match => {
      return match.replace(/(\\n| )*/g, '')
    })
  return JSON.parse(json)
}
