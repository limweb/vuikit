import { warn } from '../../../helpers/util'
import Core from './core.js'
import Checkbox from './checkbox'

export default {
  name: 'VkTableColumnSelect',
  extends: Core,
  props: {
    trackBy: {
      type: String
    },
    selection: {
      type: Object,
      default: () => ({})
    },
    headerClass: {
      type: String
    },
    cellClass: {
      type: String
    }
  },
  created () {
    this.$parent.$on('clickRow', row => {
      this.$emit('selectRow', this.getRowId(row), row)
    })
  },
  methods: {
    getRowId (row) {
      if (warn && this.trackBy && row[this.trackBy] === undefined) {
        warn(`VkTable - The selection of the rows could fail as some
          data rows are missing the trackBy field.`)
      }
      return this.trackBy
        ? row[this.trackBy]
        : this.$parent.data.indexOf(row)
    },
    isAllSelected () {
      return this.$parent.data.length && this.$parent.data.every(row => this.isSelected(row))
    },
    isSelected (row) {
      return this.selection[this.getRowId(row)]
    }
  },
  headerRender (h) {
    const _parent = this.$parent
    const scopedSlot = this.$scopedSlots && this.$scopedSlots.header
    return (<th staticClass={ this.headerClass } class="uk-form uk-text-center vk-table-width-minimum">{
      scopedSlot
        ? scopedSlot()
        : h(Checkbox, {
          props: {
            checked: this.isAllSelected()
          },
          on: {
            click: e => {
              this.$emit('selectAll', _parent.data.map(row => this.getRowId(row)), _parent.data)
            }
          }
        })
    }</th>)
  },
  cellRender (h, { row }) {
    const scopedSlot = this.$scopedSlots && this.$scopedSlots.cell
    return (<td staticClass={ this.cellClass } class="uk-form uk-text-center vk-table-width-minimum">{
      scopedSlot
      ? scopedSlot({ rowId: this.getRowId(row), row })
      : h(Checkbox, {
        props: {
          checked: this.isSelected(row)
        },
        on: {
          click: e => {
            this.$emit('select', this.getRowId(row), row)
          }
        }
      })
    }</td>)
  }
}
