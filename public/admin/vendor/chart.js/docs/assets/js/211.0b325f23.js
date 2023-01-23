;(window.webpackJsonp = window.webpackJsonp || []).push([
  [211],
  {
    541: function (t, n, e) {
      'use strict'
      e.r(n)
      var o = e(6),
        l = Object(o.a)(
          {},
          function () {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n
            return e(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                e('h1', { attrs: { id: 'point-style' } }, [
                  e(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#point-style' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Point Style')
                ]),
                t._v(' '),
                e('p', [
                  t._v(
                    'This sample show how to use the dataset point style in the legend instead of a rectangle to identify each dataset..'
                  )
                ]),
                t._v(' '),
                e('chart-editor', {
                  attrs: {
                    code: "// <block:actions:2>\nconst actions = [\n  {\n    name: 'Toggle Point Style',\n    handler(chart) {\n      chart.options.plugins.legend.labels.usePointStyle = !chart.options.plugins.legend.labels.usePointStyle;\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n      borderWidth: 1,\n      pointStyle: 'rectRot',\n      pointRadius: 5,\n      pointBorderColor: 'rgb(0, 0, 0)'\n    },\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    plugins: {\n      legend: {\n        labels: {\n          usePointStyle: true,\n        },\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"
                  }
                }),
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
                      e(
                        'RouterLink',
                        { attrs: { to: '/general/data-structures.html' } },
                        [
                          t._v('Data structures ('),
                          e('code', [t._v('labels')]),
                          t._v(')')
                        ]
                      )
                    ],
                    1
                  ),
                  t._v(' '),
                  e(
                    'li',
                    [
                      e('RouterLink', { attrs: { to: '/charts/line.html' } }, [
                        t._v('Line')
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
                        { attrs: { to: '/configuration/legend.html' } },
                        [t._v('Legend')]
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
                                  to: '/configuration/legend.html#legend-label-configuration'
                                }
                              },
                              [t._v('Legend Label Configuration')]
                            ),
                            t._v(' '),
                            e('ul', [
                              e('li', [e('code', [t._v('usePointStyle')])])
                            ])
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
                        { attrs: { to: '/configuration/elements.html' } },
                        [t._v('Elements')]
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
                                  to: '/configuration/elements.html#point-configuration'
                                }
                              },
                              [t._v('Point Configuration')]
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
                              {
                                attrs: {
                                  to: '/configuration/elements.html#point-styles'
                                }
                              },
                              [t._v('Point Styles')]
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
      n.default = l.exports
    }
  }
])
