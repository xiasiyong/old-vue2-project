const path = require('path')
const withVue2 = require('@efox/emp-vue2')
module.exports = withVue2(({config}) => {
  const projectName = 'vue2Base'
  const port = 8009
  config.output.publicPath(`http://localhost:${port}/`)
  config.devServer.port(port)
  config.resolve.alias
    .set('@', path.resolve('./', 'src'))
  config.plugin('mf').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        name: projectName,
        library: {type: 'var', name: projectName},
        filename: 'emp.js',
        remotes: {
          // 远程项目别名:远程引入的项目名
          '@emp/vue2Project': 'vue2Project',
        },
        exposes: {
          './HellowWorld.vue': './src/components/HelloWorld.vue',
        },
        // shared: ['vue/dist/vue.esm.js'],
      },
    }
    return args
  })

  config.plugin('html').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        title: 'EMP Vue2 Base',
        files: {
          js: ['http://localhost:8007/emp.js']
        },
      },
    }
    return args
  })
})