;(window.webpackJsonp = window.webpackJsonp || []).push([
  [198],
  {
    528: function (n, t, a) {
      'use strict'
      a.r(t)
      var e = a(6),
        r = Object(e.a)(
          {},
          function () {
            var n = this,
              t = n.$createElement,
              a = n._self._c || t
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': n.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'line-chart-datasets' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#line-chart-datasets' }
                    },
                    [n._v('#')]
                  ),
                  n._v(' Line Chart Datasets')
                ]),
                n._v(' '),
                a('chart-editor', {
                  attrs: {
                    code: "// <block:setup:2>\nconst inputs = {\n  min: 20,\n  max: 80,\n  count: 8,\n  decimals: 2,\n  continuity: 1\n};\n\nconst generateLabels = () => {\n  return Utils.months({count: inputs.count});\n};\n\nconst generateData = () => (Utils.numbers(inputs));\n\nUtils.srand(42);\n// </block:setup>\n\n// <block:data:0>\nconst data = {\n  labels: generateLabels(),\n  datasets: [\n    {\n      label: 'D0',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red),\n      hidden: true\n    },\n    {\n      label: 'D1',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.orange,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.orange),\n      fill: '-1'\n    },\n    {\n      label: 'D2',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.yellow,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.yellow),\n      hidden: true,\n      fill: 1\n    },\n    {\n      label: 'D3',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.green,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green),\n      fill: '-1'\n    },\n    {\n      label: 'D4',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue),\n      fill: '-1'\n    },\n    {\n      label: 'D5',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.grey,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.grey),\n      fill: '+2'\n    },\n    {\n      label: 'D6',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.purple,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.purple),\n      fill: false\n    },\n    {\n      label: 'D7',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red),\n      fill: 8\n    },\n    {\n      label: 'D8',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.orange,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.orange),\n      fill: 'end',\n      hidden: true\n    },\n    {\n      label: 'D9',\n      data: generateData(),\n      borderColor: Utils.CHART_COLORS.yellow,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.yellow),\n      fill: {above: 'blue', below: 'red', target: {value: 350}}\n    }\n  ]\n};\n// </block:data>\n\n// <block:actions:3>\nlet smooth = false;\nlet propagate = false;\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = generateData();\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Propagate',\n    handler(chart) {\n      propagate = !propagate;\n      chart.options.plugins.filler.propagate = propagate;\n      chart.update();\n    }\n  },\n  {\n    name: 'Smooth',\n    handler(chart) {\n      smooth = !smooth;\n      chart.options.elements.line.tension = smooth ? 0.4 : 0;\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:config:1>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    scales: {\n      y: {\n        stacked: true\n      }\n    },\n    plugins: {\n      filler: {\n        propagate: false\n      },\n      'samples-filler-analyser': {\n        target: 'chart-analyser'\n      }\n    },\n    interaction: {\n      intersect: false,\n    },\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"
                  }
                }),
                a('div', {
                  staticClass: 'analyser',
                  attrs: { id: 'chart-analyser' }
                }),
                n._v(' '),
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
                      a('RouterLink', { attrs: { to: '/charts/area.html' } }, [
                        n._v('Area')
                      ]),
                      n._v(' '),
                      a('ul', [
                        a(
                          'li',
                          [
                            a(
                              'RouterLink',
                              {
                                attrs: { to: '/charts/area.html#filling-modes' }
                              },
                              [n._v('Filling modes')]
                            )
                          ],
                          1
                        )
                      ])
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
                      a('RouterLink', { attrs: { to: '/axes/' } }, [
                        n._v('Axes scales')
                      ]),
                      n._v(' '),
                      a('ul', [
                        a(
                          'li',
                          [
                            a(
                              'RouterLink',
                              {
                                attrs: {
                                  to: '/axes/#common-options-to-all-axes'
                                }
                              },
                              [
                                n._v('Common options to all axes ('),
                                a('code', [n._v('stacked')]),
                                n._v(')')
                              ]
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
      t.default = r.exports
    }
  }
])
