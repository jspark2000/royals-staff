;(window.webpackJsonp = window.webpackJsonp || []).push([
  [241],
  {
    571: function (n, t, a) {
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
                a('h1', { attrs: { id: 'linear-scale-min-max' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#linear-scale-min-max' }
                    },
                    [n._v('#')]
                  ),
                  n._v(' Linear Scale - Min-Max')
                ]),
                n._v(' '),
                a('chart-editor', {
                  attrs: {
                    code: "// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};\n\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: [10, 30, 50, 20, 25, 44, -10],\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.CHART_COLORS.red,\n    },\n    {\n      label: 'Dataset 2',\n      data: [100, 33, 22, 19, 11, 49, 30],\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.CHART_COLORS.blue,\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      title: {\n        display: true,\n        text: 'Min and Max Settings'\n      }\n    },\n    scales: {\n      y: {\n        min: 10,\n        max: 50,\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  config: config,\n};\n"
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
                                a('code', [n._v('min')]),
                                n._v(','),
                                a('code', [n._v('max')]),
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
      t.default = s.exports
    }
  }
])
