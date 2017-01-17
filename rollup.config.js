import alias from 'rollup-plugin-alias'
import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
// import uglify from 'rollup-plugin-uglify'
// import { minify } from 'uglify-js'
// import livereload from 'rollup-plugin-livereload'
// import serve from 'rollup-plugin-serve'
import babelrc from 'babelrc-rollup'

const plugins = [
  alias({
    vue$: 'vue/dist/vue.common.js'
  }),
  nodeResolve({
    extensions: [ '.js', '.json', '.vue' ]
  }),
  vue(),
  buble(babelrc()),
  // buble({
  //   objectAssign: 'Object.assign'
  // }),
  nodeResolve({
    jsnext: true,
    main: true,
    browser: true
  }),
  commonjs()
]

const config = {
  entry: './lib/index.js',
  dest: './dest/vuikit.last.js',
  sourceMap: true,
  plugins: plugins
}

const isProduction = true
// const isProduction = process.env.NODE_ENV === `production`
// const isDevelopment = process.env.NODE_ENV === `development`

if (isProduction) {
  config.sourceMap = false
  // config.plugins.push(uglify({}, minify))
}

// if (isDevelopment) {
//   config.plugins.push(livereload())
//   config.plugins.push(serve({
//     contentBase: './public/',
//     port: 8080,
//     open: true
//   }))
// }

export default config
