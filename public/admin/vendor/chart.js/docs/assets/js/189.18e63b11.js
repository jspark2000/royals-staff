;(window.webpackJsonp = window.webpackJsonp || []).push([
  [189],
  {
    519: function (t, n, e) {
      'use strict'
      e.r(n)
      var o = e(6),
        r = Object(o.a)(
          {},
          function () {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n
            return e(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                e('h1', { attrs: { id: 'programmatic-event-triggers' } }, [
                  e(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#programmatic-event-triggers' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Programmatic Event Triggers')
                ]),
                t._v(' '),
                e('chart-editor', {
                  attrs: {
                    code: "// <block:hover:0>\nfunction triggerHover(chart) {\n  if (chart.getActiveElements().length > 0) {\n    chart.setActiveElements([]);\n  } else {\n    chart.setActiveElements([\n      {\n        datasetIndex: 0,\n        index: 0,\n      }, {\n        datasetIndex: 1,\n        index: 0,\n      }\n    ]);\n  }\n  chart.update();\n}\n// </block:hover>\n\n// <block:tooltip:1>\nfunction triggerTooltip(chart) {\n  const tooltip = chart.tooltip;\n  if (tooltip.getActiveElements().length > 0) {\n    tooltip.setActiveElements([], {x: 0, y: 0});\n  } else {\n    const chartArea = chart.chartArea;\n    tooltip.setActiveElements([\n      {\n        datasetIndex: 0,\n        index: 2,\n      }, {\n        datasetIndex: 1,\n        index: 2,\n      }\n    ],\n    {\n      x: (chartArea.left + chartArea.right) / 2,\n      y: (chartArea.top + chartArea.bottom) / 2,\n    });\n  }\n\n  chart.update();\n}\n// </block:tooltip>\n\n// <block:actions:2>\nconst actions = [\n  {\n    name: 'Trigger Hover',\n    handler: triggerHover\n  },\n  {\n    name: 'Trigger Tooltip',\n    handler: triggerTooltip\n  }\n];\n// </block:actions>\n\n// <block:setup:4>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\n\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n      hoverBorderWidth: 5,\n      hoverBorderColor: 'green',\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n      hoverBorderWidth: 5,\n      hoverBorderColor: 'green',\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:3>\nconst config = {\n  type: 'bar',\n  data: data,\n  options: {\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"
                  }
                }),
                e('h2', { attrs: { id: 'api' } }, [
                  e(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#api' } },
                    [t._v('#')]
                  ),
                  t._v(' API')
                ]),
                t._v(' '),
                e('ul', [
                  e(
                    'li',
                    [
                      e(
                        'RouterLink',
                        { attrs: { to: '/api/classes/Chart.html' } },
                        [t._v('Chart')]
                      ),
                      t._v(' '),
                      e('ul', [
                        e(
                          'li',
                          [
                            e(
                              'RouterLink',
                              {
                                attrs: {
                                  to: '/api/classes/Chart.html#setactiveelements'
                                }
                              },
                              [e('code', [t._v('setActiveElements')])]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  t._v(' '),
                  e(
                    'li',
                    [
                      e(
                        'RouterLink',
                        { attrs: { to: '/api/interfaces/TooltipModel.html' } },
                        [t._v('TooltipModel')]
                      ),
                      t._v(' '),
                      e('ul', [
                        e(
                          'li',
                          [
                            e(
                              'RouterLink',
                              {
                                attrs: {
                                  to: '/api/interfaces/TooltipModel.html#setactiveelements'
                                }
                              },
                              [e('code', [t._v('setActiveElements')])]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ]),
                t._v(' '),
                e('h2', { attrs: { id: 'docs' } }, [
                  e(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#docs' } },
                    [t._v('#')]
                  ),
                  t._v(' Docs')
                ]),
                t._v(' '),
                e('ul', [
                  e(
                    'li',
                    [
                      e('RouterLink', { attrs: { to: '/charts/bar.html' } }, [
                        t._v('Bar')
                      ]),
                      t._v(' '),
                      e('ul', [
                        e(
                          'li',
                          [
                            e(
                              'RouterLink',
                              {
                                attrs: { to: '/charts/bar.html#interactions' }
                              },
                              [
                                t._v('Interactions ('),
                                e('code', [t._v('hoverBorderColor')]),
                                t._v(')')
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  t._v(' '),
                  e(
                    'li',
                    [
                      e(
                        'RouterLink',
                        { attrs: { to: '/configuration/interactions.html' } },
                        [t._v('Interactions')]
                      )
                    ],
                    1
                  ),
                  t._v(' '),
                  e(
                    'li',
                    [
                      e(
                        'RouterLink',
                        { attrs: { to: '/configuration/tooltip.html' } },
                        [t._v('Tooltip')]
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
      n.default = r.exports
    }
  }
])
