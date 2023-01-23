;(window.webpackJsonp = window.webpackJsonp || []).push([
  [246],
  {
    593: function (n, t, a) {
      'use strict'
      a.r(t)
      var e = a(6),
        s = Object(e.a)(
          {},
          function () {
            var n = this,
              t = n.$createElement,
              a = n._self._c || t
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': n.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'time-scale' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#time-scale' }
                    },
                    [n._v('#')]
                  ),
                  n._v(' Time Scale')
                ]),
                n._v(' '),
                a('chart-editor', {
                  attrs: {
                    code: "// <block:actions:2>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data.forEach(function(dataObj, j) {\n          const newVal = Utils.rand(0, 100);\n\n          if (typeof dataObj === 'object') {\n            dataObj.y = newVal;\n          } else {\n            dataset.data[j] = newVal;\n          }\n        });\n      });\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};\n\nconst data = {\n  labels: [ // Date Objects\n    Utils.newDate(0),\n    Utils.newDate(1),\n    Utils.newDate(2),\n    Utils.newDate(3),\n    Utils.newDate(4),\n    Utils.newDate(5),\n    Utils.newDate(6)\n  ],\n  datasets: [{\n    label: 'My First dataset',\n    backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    borderColor: Utils.CHART_COLORS.red,\n    fill: false,\n    data: Utils.numbers(NUMBER_CFG),\n  }, {\n    label: 'My Second dataset',\n    backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n    borderColor: Utils.CHART_COLORS.blue,\n    fill: false,\n    data: Utils.numbers(NUMBER_CFG),\n  }, {\n    label: 'Dataset with point data',\n    backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),\n    borderColor: Utils.CHART_COLORS.green,\n    fill: false,\n    data: [{\n      x: Utils.newDateString(0),\n      y: Utils.rand(0, 100)\n    }, {\n      x: Utils.newDateString(5),\n      y: Utils.rand(0, 100)\n    }, {\n      x: Utils.newDateString(7),\n      y: Utils.rand(0, 100)\n    }, {\n      x: Utils.newDateString(15),\n      y: Utils.rand(0, 100)\n    }],\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    plugins: {\n      title: {\n        text: 'Chart.js Time Scale',\n        display: true\n      }\n    },\n    scales: {\n      x: {\n        type: 'time',\n        time: {\n          // Luxon format string\n          tooltipFormat: 'DD T'\n        },\n        title: {\n          display: true,\n          text: 'Date'\n        }\n      },\n      y: {\n        title: {\n          display: true,\n          text: 'value'\n        }\n      }\n    },\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"
                  }
                }),
                a('h2', { attrs: { id: 'docs' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#docs' } },
                    [n._v('#')]
                  ),
                  n._v(' Docs')
                ]),
                n._v(' '),
                a('ul', [
                  a(
                    'li',
                    [
                      a('RouterLink', { attrs: { to: '/charts/line.html' } }, [
                        n._v('Line')
                      ])
                    ],
                    1
                  ),
                  n._v(' '),
                  a(
                    'li',
                    [
                      a(
                        'RouterLink',
                        { attrs: { to: '/axes/cartesian/time.html' } },
                        [n._v('Time Cartesian Axis')]
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      t.default = s.exports
    }
  }
])
