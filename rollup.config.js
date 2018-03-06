import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import builtins from 'rollup-plugin-node-builtins'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import pkg from './package.json'

// see https://github.com/rollup/rollup-starter-lib/blob/buble/rollup.config.js
export default [

  // browser friendly UMD
  {
    input: 'src/index.js',
    output: {
      name: 'VueMapboxMap',
      file: pkg.browser,
      format: 'umd',
      globals: {
        'mapbox-gl': 'mapboxgl',
        '@mapbox/mapbox-gl-geocoder': 'MapboxGeocoder'
      }
    },
    plugins: [
      resolve({
        preferBuiltins: true
      }), // for finding dependencies?
      commonjs(),
      builtins(),
      vue({
        // compileTemplate: true // true by default
      }),
      buble({
        exclude: ['node_modules/**']
      }),
      uglify()
    ]
  },
  // browser friendly UMD
  {
    input: 'src/index.js',
    external: [ 'mapbox-gl', '@mapbox/mapbox-gl-geocoder' ], // suppresses warnings about external modules
    output: [
      {
        name: 'VueMapboxMap',
        file: pkg.main,
        format: 'cjs',
        globals: {
          'mapbox-gl': 'mapboxgl',
          '@mapbox/mapbox-gl-geocoder': 'MapboxGeocoder'
        }
      },
      {
        name: 'VueMapboxMap',
        file: pkg.module,
        format: 'es',
        globals: {
          'mapbox-gl': 'mapboxgl',
          '@mapbox/mapbox-gl-geocoder': 'MapboxGeocoder'
        }
      }
    ],
    plugins: [
      vue({
        // compileTemplate: true // true by default
      }),
      buble({
        exclude: ['node_modules/**']
      }),
      uglify()
    ]
  }
]
