export default [
  {
    path: '/',
    redirect: '/button'
  },
  {
    name: 'Button',
    path: '/button',
    component: require('./pages/Button')
  },
  {
    name: 'Button Checkbox',
    path: '/button-checkbox',
    component: require('./pages/ButtonCheckbox')
  },
  {
    name: 'Button Radio',
    path: '/button-radio',
    component: require('./pages/ButtonRadio')
  },
  {
    name: 'Breadcrumb',
    path: '/breadcrumb',
    component: require('./pages/Breadcrumb')
  },
  }
  // // NAVIGATION
  // {
  //   name: 'Tabs',
  //   path: '/tabs',
  //   component: require('./pages/Tabs'),
  //   meta: {
  //     section: 'Navigation'
  //   }
  // },
  // {
  //   name: 'Subnav',
  //   path: '/subnav',
  //   component: require('./pages/Subnav'),
  //   meta: {
  //     section: 'Navigation'
  //   }
  // },
  // {
  //   name: 'Pagination',
  //   path: '/pagination',
  //   component: require('./pages/Pagination'),
  //   meta: {
  //     section: 'Navigation'
  //   }
  // },
  // {
  //   name: 'Breadcrumb',
  //   path: '/breadcrumb',
  //   component: require('./pages/Breadcrumb'),
  //   meta: {
  //     section: 'Navigation'
  //   }
  // },
  // // DATA
  // {
  //   name: 'Table',
  //   path: '/table',
  //   component: require('./pages/Table'),
  //   meta: {
  //     section: 'Data'
  //   }
  // },
  // {
  //   name: 'Datepicker',
  //   path: '/datepicker',
  //   component: require('./pages/Datepicker'),
  //   meta: {
  //     section: 'Data'
  //   }
  // },
  // // DISPLAY
  // {
  //   name: 'Modal',
  //   path: '/modal',
  //   component: require('./pages/Modal'),
  //   meta: {
  //     section: 'Display'
  //   }
  // },
  // {
  //   name: 'Offcanvas',
  //   path: '/offcanvas',
  //   component: require('./pages/Offcanvas'),
  //   meta: {
  //     section: 'Display'
  //   }
  // },
  // {
  //   name: 'Dropdown',
  //   path: '/dropdown',
  //   component: require('./pages/Dropdown'),
  //   meta: {
  //     section: 'Display'
  //   }
  // },
  // {
  //   name: 'Tooltip',
  //   path: '/tooltip',
  //   component: require('./pages/Tooltip'),
  //   meta: {
  //     section: 'Display'
  //   }
  // },
  // {
  //   name: 'Notify',
  //   path: '/notify',
  //   component: require('./pages/Notify'),
  //   meta: {
  //     section: 'Display'
  //   }
  // },
  // // OTHERS
  // {
  //   name: 'Upload',
  //   path: '/upload',
  //   component: require('./pages/Upload'),
  //   meta: {
  //     section: 'Others'
  //   }
  // },
  // // EXAMPLES
  // {
  //   name: 'Datepicker in Dropdown',
  //   path: '/example-datepicker-dropdown',
  //   component: require('./pages/example/DatepickerDropdown'),
  //   meta: {
  //     section: 'Examples'
  //   }
  // },
  // {
  //   name: 'Modal as Confirm',
  //   path: '/example-modal-confirm',
  //   component: require('./pages/example/ModalConfirm'),
  //   meta: {
  //     section: 'Examples'
  //   }
  // },
  // {
  //   name: 'Pickable Data',
  //   path: '/example-pickable-table',
  //   component: require('./pages/example/PickableTable'),
  //   meta: {
  //     section: 'Examples'
  //   }
  // },
  // // default
  // {
  //   path: '*',
  //   name: 'Not Found',
  //   component: require('./pages/404')
  // }
]
