;(window.webpackJsonp = window.webpackJsonp || []).push([
  [212],
  {
    542: function (n, t, o) {
      'use strict'
      o.r(t)
      var a = o(6),
        s = Object(a.a)(
          {},
          function () {
            var n = this,
              t = n.$createElement,
              o = n._self._c || t
            return o(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': n.$parent.slotKey } },
              [
                o('h1', { attrs: { id: 'position' } }, [
                  o(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#position' }
                    },
                    [n._v('#')]
                  ),
                  n._v(' Position')
                ]),
                n._v(' '),
                o('p', [
                  n._v(
                    'This sample show how to change the position of the chart legend.'
                  )
                ]),
                n._v(' '),
                o('chart-editor', {
                  attrs: {
                    code: "// <block:actions:2>\nconst actions = [\n  {\n    name: 'Position: top',\n    handler(chart) {\n      chart.options.plugins.legend.position = 'top';\n      chart.update();\n    }\n  },\n  {\n    name: 'Position: right',\n    handler(chart) {\n      chart.options.plugins.legend.position = 'right';\n      chart.update();\n    }\n  },\n  {\n    name: 'Position: bottom',\n    handler(chart) {\n      chart.options.plugins.legend.position = 'bottom';\n      chart.update();\n    }\n  },\n  {\n    name: 'Position: left',\n    handler(chart) {\n      chart.options.plugins.legend.position = 'left';\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"
                  }
                }),
                o('h2', { attrs: { id: 'docs' } }, [
                  o(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#docs' } },
                    [n._v('#')]
                  ),
                  n._v(' Docs')
                ]),
                n._v(' '),
                o('ul', [
                  o(
                    'li',
                    [
                      o(
                        'RouterLink',
                        { attrs: { to: '/general/data-structures.html' } },
                        [
                          n._v('Data structures ('),
                          o('code', [n._v('labels')]),
                          n._v(')')
                        ]
                      )
                    ],
                    1
                  ),
                  n._v(' '),
                  o(
                    'li',
                    [
                      o('RouterLink', { attrs: { to: '/charts/line.html' } }, [
                        n._v('Line')
                      ])
                    ],
                    1
                  ),
                  n._v(' '),
                  o(
                    'li',
                    [
                      o(
                        'RouterLink',
                        { attrs: { to: '/configuration/legend.html' } },
                        [n._v('Legend')]
                      ),
                      n._v(' '),
                      o('ul', [
                        o(
                          'li',
                          [
                            o(
                              'RouterLink',
                              {
                                attrs: {
                                  to: '/configuration/legend.html#position'
                                }
                              },
                              [n._v('Position')]
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
      t.default = s.exports
    }
  }
])
