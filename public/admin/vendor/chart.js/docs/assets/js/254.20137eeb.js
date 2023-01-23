;(window.webpackJsonp = window.webpackJsonp || []).push([
  [254],
  {
    583: function (t, n, s) {
      'use strict'
      s.r(n)
      var a = s(6),
        e = Object(a.a)(
          {},
          function () {
            var t = this,
              n = t.$createElement,
              s = t._self._c || n
            return s(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                s('h1', { attrs: { id: 'basic' } }, [
                  s(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#basic' } },
                    [t._v('#')]
                  ),
                  t._v(' Basic')
                ]),
                t._v(' '),
                s('p', [t._v('This sample shows basic usage of subtitle.')]),
                t._v(' '),
                s('chart-editor', {
                  attrs: {
                    code: "// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    plugins: {\n      title: {\n        display: true,\n        text: 'Chart Title',\n      },\n      subtitle: {\n        display: true,\n        text: 'Chart Subtitle',\n        color: 'blue',\n        font: {\n          size: 12,\n          family: 'tahoma',\n          weight: 'normal',\n          style: 'italic'\n        },\n        padding: {\n          bottom: 10\n        }\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  config: config,\n};\n"
                  }
                }),
                s('h2', { attrs: { id: 'docs' } }, [
                  s(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#docs' } },
                    [t._v('#')]
                  ),
                  t._v(' Docs')
                ]),
                t._v(' '),
                s('ul', [
                  s(
                    'li',
                    [
                      s(
                        'RouterLink',
                        { attrs: { to: '/general/data-structures.html' } },
                        [
                          t._v('Data structures ('),
                          s('code', [t._v('labels')]),
                          t._v(')')
                        ]
                      )
                    ],
                    1
                  ),
                  t._v(' '),
                  s(
                    'li',
                    [
                      s('RouterLink', { attrs: { to: '/charts/line.html' } }, [
                        t._v('Line')
                      ])
                    ],
                    1
                  ),
                  t._v(' '),
                  s(
                    'li',
                    [
                      s(
                        'RouterLink',
                        { attrs: { to: '/configuration/title.html' } },
                        [t._v('Title')]
                      )
                    ],
                    1
                  ),
                  t._v(' '),
                  s(
                    'li',
                    [
                      s(
                        'RouterLink',
                        { attrs: { to: '/configuration/subtitle.html' } },
                        [t._v('Subtitle')]
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
