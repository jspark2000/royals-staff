;(window.webpackJsonp = window.webpackJsonp || []).push([
  [228],
  {
    558: function (t, n, a) {
      'use strict'
      a.r(n)
      var s = a(6),
        e = Object(s.a)(
          {},
          function () {
            var t = this,
              n = t.$createElement,
              a = t._self._c || n
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'radar-skip-points' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#radar-skip-points' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Radar skip points')
                ]),
                t._v(' '),
                a('chart-editor', {
                  attrs: {
                    code: "// <block:actions:2>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach((dataset, i) => {\n        const data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100});\n\n        if (i === 0) {\n          data[0] = null;\n        } else if (i === 1) {\n          data[Number.parseInt(data.length / 2, 10)] = null;\n        } else {\n          data[data.length - 1] = null;\n        }\n\n        dataset.data = data;\n      });\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};\n\nconst labels = Utils.months({count: 7});\nconst dataFirstSkip = Utils.numbers(NUMBER_CFG);\nconst dataMiddleSkip = Utils.numbers(NUMBER_CFG);\nconst dataLastSkip = Utils.numbers(NUMBER_CFG);\n\ndataFirstSkip[0] = null;\ndataMiddleSkip[Number.parseInt(dataMiddleSkip.length / 2, 10)] = null;\ndataLastSkip[dataLastSkip.length - 1] = null;\n\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Skip first dataset',\n      data: dataFirstSkip,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n    {\n      label: 'Skip mid dataset',\n      data: dataMiddleSkip,\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n    },\n    {\n      label: 'Skip last dataset',\n      data: dataLastSkip,\n      borderColor: Utils.CHART_COLORS.green,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'radar',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      title: {\n        display: true,\n        text: 'Chart.js Radar Skip Points Chart'\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config\n};\n"
                  }
                }),
                a('h2', { attrs: { id: 'docs' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#docs' } },
                    [t._v('#')]
                  ),
                  t._v(' Docs')
                ]),
                t._v(' '),
                a('ul', [
                  a(
                    'li',
                    [
                      a('RouterLink', { attrs: { to: '/charts/radar.html' } }, [
                        t._v('Radar')
                      ])
                    ],
                    1
                  ),
                  t._v(' '),
                  a(
                    'li',
                    [
                      a(
                        'RouterLink',
                        { attrs: { to: '/general/data-structures.html' } },
                        [
                          t._v('Data structures ('),
                          a('code', [t._v('labels')]),
                          t._v(')')
                        ]
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
      n.default = e.exports
    }
  }
])
