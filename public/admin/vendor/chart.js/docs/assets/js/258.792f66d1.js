;(window.webpackJsonp = window.webpackJsonp || []).push([
  [258],
  {
    587: function (n, t, a) {
      'use strict'
      a.r(t)
      var e = a(6),
        o = Object(e.a)(
          {},
          function () {
            var n = this,
              t = n.$createElement,
              a = n._self._c || t
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': n.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'interaction-modes' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#interaction-modes' }
                    },
                    [n._v('#')]
                  ),
                  n._v(' Interaction Modes')
                ]),
                n._v(' '),
                a('p', [
                  n._v(
                    'This sample shows how to use the tooltip position mode setting.'
                  )
                ]),
                n._v(' '),
                a('chart-editor', {
                  attrs: {
                    code: "// <block:actions:2>\nconst actions = [\n  {\n    name: 'Mode: index',\n    handler(chart) {\n      chart.options.interaction.axis = 'xy';\n      chart.options.interaction.mode = 'index';\n      chart.update();\n    }\n  },\n  {\n    name: 'Mode: dataset',\n    handler(chart) {\n      chart.options.interaction.axis = 'xy';\n      chart.options.interaction.mode = 'dataset';\n      chart.update();\n    }\n  },\n  {\n    name: 'Mode: point',\n    handler(chart) {\n      chart.options.interaction.axis = 'xy';\n      chart.options.interaction.mode = 'point';\n      chart.update();\n    }\n  },\n  {\n    name: 'Mode: nearest, axis: xy',\n    handler(chart) {\n      chart.options.interaction.axis = 'xy';\n      chart.options.interaction.mode = 'nearest';\n      chart.update();\n    }\n  },\n  {\n    name: 'Mode: nearest, axis: x',\n    handler(chart) {\n      chart.options.interaction.axis = 'x';\n      chart.options.interaction.mode = 'nearest';\n      chart.update();\n    }\n  },\n  {\n    name: 'Mode: nearest, axis: y',\n    handler(chart) {\n      chart.options.interaction.axis = 'y';\n      chart.options.interaction.mode = 'nearest';\n      chart.update();\n    }\n  },\n  {\n    name: 'Mode: x',\n    handler(chart) {\n      chart.options.interaction.mode = 'x';\n      chart.update();\n    }\n  },\n  {\n    name: 'Mode: y',\n    handler(chart) {\n      chart.options.interaction.mode = 'y';\n      chart.update();\n    }\n  },\n  {\n    name: 'Toggle Intersect',\n    handler(chart) {\n      chart.options.interaction.intersect = !chart.options.interaction.intersect;\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n    },\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    interaction: {\n      intersect: false,\n      mode: 'index',\n    },\n    plugins: {\n      title: {\n        display: true,\n        text: (ctx) => {\n          const {axis = 'xy', intersect, mode} = ctx.chart.options.interaction;\n          return 'Mode: ' + mode + ', axis: ' + axis + ', intersect: ' + intersect;\n        }\n      },\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"
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
                      a(
                        'RouterLink',
                        { attrs: { to: '/general/data-structures.html' } },
                        [
                          n._v('Data structures ('),
                          a('code', [n._v('labels')]),
                          n._v(')')
                        ]
                      )
                    ],
                    1
                  ),
                  n._v(' '),
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
                        { attrs: { to: '/configuration/tooltip.html' } },
                        [n._v('Tooltip')]
                      )
                    ],
                    1
                  ),
                  n._v(' '),
                  a(
                    'li',
                    [
                      a(
                        'RouterLink',
                        { attrs: { to: '/configuration/interactions.html' } },
                        [n._v('Interactions')]
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
      t.default = o.exports
    }
  }
])
