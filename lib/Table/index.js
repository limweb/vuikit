export default {
  name: 'VkTable',
  render (h) {
    return h('table', {
      staticClass: 'uk-table',
      class: {
        'uk-table-striped': this.striped,
        'uk-table-condensed': this.condensed,
        'uk-table-hover': this.hover
      }
    }, [
      this.$slots.default,
      h('thead', [
        h('tr', [
          this._l(this.columns, col =>
            col._headerRender && col._headerRender.call(col._renderProxy, h)
          )
        ])
      ]),
      h('tbody', [
        this._l(this.data, (row, rowIndex) =>
          h('tr', {
            class: this.getRowClass(row, rowIndex),
            on: {
              click: e => {
                if (e.target.tagName === 'TR' || e.target.tagName === 'TD') {
                  this.$emit('clickRow', row)
                }
              }
            }
          }, [
            this._l(this.columns, col =>
              col._cellRender && col._cellRender.call(col._renderProxy, h, { row, rowIndex })
            )
          ])
        )
      ])
    ])
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    condensed: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    sortedBy: {
      type: Object,
      default: () => ({}) // { field: [asc|desc] }
    },
    rowClass: [String, Function]
  },
  data: () => ({
    columns: []
  }),
  created () {
    this.columns = this.$children
  },
  methods: {
    getRowClass (row, index) {
      return (typeof this.rowClass === 'function')
        ? this.rowClass(row, index)
        : this.rowClass
    }
  }
}