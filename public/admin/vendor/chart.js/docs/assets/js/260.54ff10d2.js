;(window.webpackJsonp = window.webpackJsonp || []).push([
  [260],
  {
    590: function (t, n, o) {
      'use strict'
      o.r(n)
      var i = o(6),
        s = Object(i.a)(
          {},
          function () {
            var t = this,
              n = t.$createElement,
              o = t._self._c || n
            return o(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                o('h1', { attrs: { id: 'position' } }, [
                  o(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#position' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Position')
                ]),
                t._v(' '),
                o('p', [
                  t._v(
                    'This sample shows how to use the tooltip position mode setting.'
                  )
                ]),
                t._v(' '),
                o('chart-editor', {
                  attrs: {
                    code: "// <block:actions:3>\nconst actions = [\n  {\n    name: 'Position: average',\n    handler(chart) {\n      chart.options.plugins.tooltip.position = 'average';\n      chart.update();\n    }\n  },\n  {\n    name: 'Position: nearest',\n    handler(chart) {\n      chart.options.plugins.tooltip.position = 'nearest';\n      chart.update();\n    }\n  },\n  {\n    name: 'Position: bottom (custom)',\n    handler(chart) {\n      chart.options.plugins.tooltip.position = 'bottom';\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n// <block:setup:2>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n    },\n  ]\n};\n// </block:setup>\n\n// <block:positioner:1>\n// Create a custom tooltip positioner to put at the bottom of the chart area\ncomponents.Tooltip.positioners.bottom = function(items) {\n  const pos = components.Tooltip.positioners.average(items);\n\n  // Happens when nothing is found\n  if (pos === false) {\n    return false;\n  }\n\n  const chart = this.chart;\n\n  return {\n    x: pos.x,\n    y: chart.chartArea.bottom,\n    xAlign: 'center',\n    yAlign: 'bottom',\n  };\n};\n\n// </block:positioner>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    interaction: {\n      intersect: false,\n      mode: 'index',\n    },\n    plugins: {\n      title: {\n        display: true,\n        text: (ctx) => 'Tooltip position mode: ' + ctx.chart.options.plugins.tooltip.position,\n      },\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"
                  }
                }),
                o('h2', { attrs: { id: 'docs' } }, [
                  o(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#docs' } },
                    [t._v('#')]
                  ),
                  t._v(' Docs')
                ]),
                t._v(' '),
                o('ul', [
                  o(
                    'li',
                    [
                      o(
                        'RouterLink',
                        { attrs: { to: '/general/data-structures.html' } },
                        [
                          t._v('Data structures ('),
                          o('code', [t._v('labels')]),
                          t._v(')')
                        ]
                      )
                    ],
                    1
                  ),
                  t._v(' '),
                  o(
                    'li',
                    [
                      o('RouterLink', { attrs: { to: '/charts/line.html' } }, [
                        t._v('Line')
                      ])
                    ],
                    1
                  ),
                  t._v(' '),
                  o(
                    'li',
                    [
                      o(
                        'RouterLink',
                        { attrs: { to: '/configuration/tooltip.html' } },
                        [t._v('Tooltip')]
                      ),
                      t._v(' '),
                      o('ul', [
                        o(
                          'li',
                          [
                            o(
                              'RouterLink',
                              {
                                attrs: {
                                  to: '/configuration/tooltip.html#position-modes'
                                }
                              },
                              [t._v('Position Modes')]
                            )
                          ],
                          1
                        ),
                        t._v(' '),
                        o(
                          'li',
                          [
                            o(
                              'RouterLink',
                              {
                                attrs: {
                                  to: '/configuration/tooltip.html#custom-position-modes'
                                }
                              },
                              [t._v('Custom Position Modes')]
                            )
                          ],
                          1
                        )
                      ])
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
      n.default = s.exports
    }
  }
])
