import Breadcrumb from './breadcrumb/breadcrumb'
import BreadcrumbItem from './breadcrumb/breadcrumb-item'
import Button from './button/button'
import ButtonCheckbox from './button/button-checkbox'
import ButtonRadio from './button/button-radio'
import Datepicker from './Datepicker'
import Notify from './Notify'
import NotifyMessage from './NotifyMessage'
import Dropdown from './Dropdown'
import Modal from './Modal'
import Offcanvas from './Offcanvas'
import Pagination from './pagination/pagination'
import PaginationFirst from './pagination/pagination-first'
import PaginationLast from './pagination/pagination-last'
import PaginationPrev from './pagination/pagination-prev'
import PaginationNext from './pagination/pagination-next'
import PaginationPages from './pagination/pagination-pages'
import Subnav from './subnav/subnav'
import SubnavItem from './subnav/subnav-item'
import Table from './Table'
import TableColumn from './Table/columns/Default'
import TableColumnSelect from './Table/columns/Select'
import TableColumnSort from './Table/columns/Sort'
import Tab from './tabs/tabs-tab'
import Tabs from './tabs/tabs'
import TabsVertical from './tabs/tabs-vertical'
import Tooltip from './Tooltip'
import Upload from './Upload'

const Vuikit = {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonCheckbox,
  ButtonRadio,
  Datepicker,
  Notify,
  NotifyMessage,
  Dropdown,
  Modal,
  Offcanvas,
  Pagination,
  PaginationFirst,
  PaginationLast,
  PaginationPrev,
  PaginationNext,
  PaginationPages,
  Subnav,
  SubnavItem,
  Table,
  TableColumn,
  TableColumnSelect,
  TableColumnSort,
  Tab,
  Tabs,
  TabsVertical,
  Tooltip,
  Upload,
  install (Vue) {
    const keys = Object.keys(this)
    keys.pop() // remove 'install' from keys
    let i = keys.length
    while (i--) {
      if (this[keys[i]].bind) {
        Vue.directive(`Vk${keys[i]}`, this[keys[i]])
      } else {
        Vue.component(`Vk${keys[i]}`, this[keys[i]])
      }
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuikit)
}

export default Vuikit
