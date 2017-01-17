/*!
 * Vuikit v0.7.0
 * (c) 2016-present Miljan Aleksic
 * Released under the MIT License.
 */
'use strict';

var Button = {render: function(){var _vm=this;return _vm._c('button',{staticClass:"uk-button",class:( obj = { 'uk-active': _vm.active }, obj[("uk-button-" + (_vm.color))] = _vm.color, obj[("uk-button-" + (_vm.size))] = _vm.size, obj[("uk-width-" + (_vm.width))] = _vm.width, obj ),attrs:{"type":_vm.type,"disabled":_vm.disabled},on:{"click":function (e) { return _vm.$emit('click', e); }}},[_vm._t("default")],2)
var obj;},staticRenderFns: [],
  name: 'VkButton',
  props: {
    value: {},
    type: {
      type: String,
      default: 'button'
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    }
  }
};

var Tab = {render: function(){var _vm=this;return _vm._c('li',{class:{ 'uk-active': _vm.active, 'uk-disabled': _vm.disabled }},[_vm._c('a',{on:{"click":function($event){$event.preventDefault();(!_vm.disabled && !_vm.active) && _vm.$parent.$emit('change', _vm.alias);}}},[_vm._t("header",[_vm._v(_vm._s(_vm.label))])],2)])},staticRenderFns: [],
  name: 'VkTab',
  props: {
    label: String,
    alias: {
      type: [String, Number],
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};

/**
 * Utility functions
 */

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */




/**
 * Check if value is plain string
 */


/**
 * Check if value is plain integer
 */


/**
 * Check if value is plain function
 */


/**
 * Check if value is plain array
 */


/**
 * Check if value is in array
 */


/**
* Convert an Array-like object or value to Array
*/


/**
 * Returns an array range
 */






/**
 * Warn about errors only in no production
 */

var warn;

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  warn = function (msg, vm) {
    if (hasConsole) {
      console.error('[Vuikit warn]: ' + msg);
    }
  };
}

var core = {
  components: {
    TabContent: {
      functional: true,
      render: function render (h, ref) {
        var vm = ref.parent;

        var activeTabSlot = vm.tabs.find(function (tab) { return vm.getTabAlias(tab) === vm.activeTab; });
        var content = activeTabSlot && activeTabSlot.componentOptions.children;
        if (activeTabSlot && content) {
          return (React.createElement( 'div', null, content ))
        } else if (warn) {
          warn(("VkTabs: No tab found with with identifier '" + (vm.activeTab) + "'"));
        }
      }
    }
  },
  props: {
    activeTab: [String, Number],
    // align tabs right and in reversed order
    flip: {
      type: Boolean,
      default: false
    },
    // center the tabs
    center: {
      type: Boolean,
      default: false
    },
    // place the tabs at the bottom
    bottom: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'vk-tabs-transition'
    }
  },
  computed: {
    tabs: {
      get: function get () {
        return this.$slots.default.filter(function (c) { return c.componentOptions && c.componentOptions.tag === 'vk-tab'; }
        )
      },
      cache: false
    }
  },
  beforeMount: function beforeMount () {
    this._updateTabs();
  },
  beforeUpdate: function beforeUpdate () {
    this._updateTabs();
  },
  methods: {
    getTabAlias: function getTabAlias (tab) {
      return tab.componentOptions.propsData.alias || this.tabs.indexOf(tab) + 1
    },
    _updateTabs: function _updateTabs () {
      var this$1 = this;

      this.tabs.forEach(function (tab, index) {
        var alias = this$1.getTabAlias(tab);
        var active = this$1.activeTab === alias;
        var props = tab.componentOptions.propsData;
        props.active = active;
        props.alias = alias;
      });
    }
  }
};

var Tabs = {render: function(){var _vm=this;return _vm._c('div',{class:{ 'uk-flex uk-flex-column-reverse': _vm.bottom }},[_vm._c('div',{class:{ 'uk-tab-center': _vm.center, 'uk-tab-center-bottom': _vm.center && _vm.bottom }},[_vm._c('ul',{staticClass:"uk-tab",class:{ 'uk-tab-grid': _vm.width, 'uk-tab-flip': _vm.flip, 'uk-tab-bottom': _vm.bottom }},[_vm._t("default")],2)]),_vm._c('transition',{attrs:{"name":_vm.transition,"mode":"out-in"}},[_vm._c('div',{key:_vm.activeTab,staticClass:"uk-margin"},[_vm._c('tabcontent')],1)])],1)},staticRenderFns: [],
  name: 'VkTabs',
  extends: core,
  props: {
    // tabs width using UIkit grid
    width: {
      type: String,
      default: ''
    }
  },
  beforeMount: function beforeMount () {
    this.updateTabs();
  },
  beforeUpdate: function beforeUpdate () {
    this.updateTabs();
  },
  methods: {
    updateTabs: function updateTabs () {
      var this$1 = this;

      this.$slots.default.filter(function (c) { return c.tag; }).forEach(function (tab, index) {
        if (this$1.width) {
          tab.data.staticClass = "uk-width-" + (this$1.width);
        }
      });
    }
  }
};

var TabsVertical = {render: function(){var _vm=this;return _vm._c('div',{staticClass:"uk-grid",class:{ 'uk-flex uk-flex-row-reverse': _vm.flip }},[_vm._c('div',{class:("uk-width-medium-" + (_vm.width))},[_vm._c('ul',{staticClass:"uk-tab",class:[_vm.flip ? 'uk-tab-right' : 'uk-tab-left' ]},[_vm._t("default")],2)]),_vm._c('div',{class:("uk-width-medium-" + (_vm.contentWidth))},[_vm._c('transition',{attrs:{"name":_vm.transition,"mode":"out-in"}},[_vm._c('div',{key:_vm.activeTab},[_vm._c('tab-content')],1)])],1)])},staticRenderFns: [],
  name: 'VkTabsVertical',
  extends: core,
  props: {
    // tabs width using UIkit grid
    width: {
      type: String,
      default: ''
    },
    contentWidth: {
      type: String,
      default: '2-3'
    }
  }
};

// import Breadcrumb from './Breadcrumb/Breadcrumb'
// import BreadcrumbItem from './Breadcrumb/Item'
// import ButtonCheckbox from './ButtonCheckbox'
// import ButtonRadio from './ButtonRadio'
// import Datepicker from './Datepicker'
// import Notify from './Notify'
// import NotifyMessage from './NotifyMessage'
// import Dropdown from './Dropdown'
// import Modal from './Modal'
// import Offcanvas from './Offcanvas'
// import Pagination from './Pagination'
// import Subnav from './Subnav/Subnav'
// import SubnavItem from './Subnav/Item'
// import Table from './Table'
// import TableColumn from './Table/columns/Default'
// import TableColumnSelect from './Table/columns/Select'
// import TableColumnSort from './Table/columns/Sort'
// import Tooltip from './Tooltip'
// import Upload from './Upload'

var Vuikit = {
  // Breadcrumb,
  // BreadcrumbItem,
  Button: Button,
  // ButtonCheckbox,
  // ButtonRadio,
  // Datepicker,
  // Notify,
  // NotifyMessage,
  // Dropdown,
  // Modal,
  // Offcanvas,
  // Pagination,
  // Subnav,
  // SubnavItem,
  // Table,
  // TableColumn,
  // TableColumnSelect,
  // TableColumnSort,
  Tab: Tab,
  Tabs: Tabs,
  TabsVertical: TabsVertical,
  // Tooltip,
  // Upload,
  install: function install (Vue) {
    var this$1 = this;

    var keys = Object.keys(this);
    keys.pop(); // remove 'install' from keys
    var i = keys.length;
    while (i--) {
      if (this$1[keys[i]].bind) {
        Vue.directive(("Vk" + (keys[i])), this$1[keys[i]]);
      } else {
        Vue.component(("Vk" + (keys[i])), this$1[keys[i]]);
      }
    }
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuikit);
}

module.exports = Vuikit;

//# sourceMappingURL=/repos/vuikit/vuikit/dist/vuikit.common.js