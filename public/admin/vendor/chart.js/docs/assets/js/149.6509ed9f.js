;(window.webpackJsonp = window.webpackJsonp || []).push([
  [149],
  {
    477: function (t, e, a) {
      'use strict'
      a.r(e)
      var r = a(6),
        n = Object(r.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'radar-chart' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#radar-chart' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Radar Chart')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'A radar chart is a way of showing multiple data points and the variation between them.'
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'They are often useful for comparing the points of two or more different data sets.'
                  )
                ]),
                t._v(' '),
                a('chart-editor', {
                  attrs: {
                    code: "// <block:setup:1>\nconst data = {\n  labels: [\n    'Eating',\n    'Drinking',\n    'Sleeping',\n    'Designing',\n    'Coding',\n    'Cycling',\n    'Running'\n  ],\n  datasets: [{\n    label: 'My First Dataset',\n    data: [65, 59, 90, 81, 56, 55, 40],\n    fill: true,\n    backgroundColor: 'rgba(255, 99, 132, 0.2)',\n    borderColor: 'rgb(255, 99, 132)',\n    pointBackgroundColor: 'rgb(255, 99, 132)',\n    pointBorderColor: '#fff',\n    pointHoverBackgroundColor: '#fff',\n    pointHoverBorderColor: 'rgb(255, 99, 132)'\n  }, {\n    label: 'My Second Dataset',\n    data: [28, 48, 40, 19, 96, 27, 100],\n    fill: true,\n    backgroundColor: 'rgba(54, 162, 235, 0.2)',\n    borderColor: 'rgb(54, 162, 235)',\n    pointBackgroundColor: 'rgb(54, 162, 235)',\n    pointBorderColor: '#fff',\n    pointHoverBackgroundColor: '#fff',\n    pointHoverBorderColor: 'rgb(54, 162, 235)'\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'radar',\n  data: data,\n  options: {\n    elements: {\n      line: {\n        borderWidth: 3\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"
                  }
                }),
                a('h2', { attrs: { id: 'dataset-properties' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#dataset-properties' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Dataset Properties')
                ]),
                t._v(' '),
                a('p', [t._v('Namespaces:')]),
                t._v(' '),
                a('ul', [
                  a('li', [
                    a('code', [t._v('data.datasets[index]')]),
                    t._v(' - options for this dataset only')
                  ]),
                  t._v(' '),
                  a('li', [
                    a('code', [t._v('options.datasets.line')]),
                    t._v(' - options for all line datasets')
                  ]),
                  t._v(' '),
                  a(
                    'li',
                    [
                      a('code', [t._v('options.elements.line')]),
                      t._v(' - options for all '),
                      a(
                        'RouterLink',
                        {
                          attrs: {
                            to: '/configuration/elements.html#line-configuration'
                          }
                        },
                        [t._v('line elements')]
                      )
                    ],
                    1
                  ),
                  t._v(' '),
                  a(
                    'li',
                    [
                      a('code', [t._v('options.elements.point')]),
                      t._v(' - options for all '),
                      a(
                        'RouterLink',
                        {
                          attrs: {
                            to: '/configuration/elements.html#point-configuration'
                          }
                        },
                        [t._v('point elements')]
                      )
                    ],
                    1
                  ),
                  t._v(' '),
                  a('li', [
                    a('code', [t._v('options')]),
                    t._v(' - options for the whole chart')
                  ])
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'The radar chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the colour of a line is generally set this way.'
                  )
                ]),
                t._v(' '),
                a('table', [
                  a('thead', [
                    a('tr', [
                      a('th', [t._v('Name')]),
                      t._v(' '),
                      a('th', [t._v('Type')]),
                      t._v(' '),
                      a(
                        'th',
                        { staticStyle: { 'text-align': 'center' } },
                        [
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/general/options.html#scriptable-options'
                              }
                            },
                            [t._v('Scriptable')]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      a(
                        'th',
                        { staticStyle: { 'text-align': 'center' } },
                        [
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/general/options.html#indexable-options'
                              }
                            },
                            [t._v('Indexable')]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      a('th', [t._v('Default')])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#line-styling' } }, [
                          a('code', [t._v('backgroundColor')])
                        ])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        [
                          a(
                            'RouterLink',
                            { attrs: { to: '/general/colors.html' } },
                            [a('code', [t._v('Color')])]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v("'rgba(0, 0, 0, 0.1)'")])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#line-styling' } }, [
                          a('code', [t._v('borderCapStyle')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v("'butt'")])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#line-styling' } }, [
                          a('code', [t._v('borderColor')])
                        ])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        [
                          a(
                            'RouterLink',
                            { attrs: { to: '/general/colors.html' } },
                            [a('code', [t._v('Color')])]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v("'rgba(0, 0, 0, 0.1)'")])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#line-styling' } }, [
                          a('code', [t._v('borderDash')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number[]')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('[]')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#line-styling' } }, [
                          a('code', [t._v('borderDashOffset')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('0.0')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#line-styling' } }, [
                          a('code', [t._v('borderJoinStyle')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [
                        a('code', [t._v("'round'")]),
                        t._v('|'),
                        a('code', [t._v("'bevel'")]),
                        t._v('|'),
                        a('code', [t._v("'miter'")])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v("'miter'")])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#line-styling' } }, [
                          a('code', [t._v('borderWidth')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('3')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#line-styling' } }, [
                          a('code', [t._v('hoverBackgroundColor')])
                        ])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        [
                          a(
                            'RouterLink',
                            { attrs: { to: '/general/colors.html' } },
                            [a('code', [t._v('Color')])]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('undefined')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#line-styling' } }, [
                          a('code', [t._v('hoverBorderCapStyle')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('undefined')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#line-styling' } }, [
                          a('code', [t._v('hoverBorderColor')])
                        ])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        [
                          a(
                            'RouterLink',
                            { attrs: { to: '/general/colors.html' } },
                            [a('code', [t._v('Color')])]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('undefined')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#line-styling' } }, [
                          a('code', [t._v('hoverBorderDash')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number[]')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('undefined')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#line-styling' } }, [
                          a('code', [t._v('hoverBorderDashOffset')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('undefined')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#line-styling' } }, [
                          a('code', [t._v('hoverBorderJoinStyle')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [
                        a('code', [t._v("'round'")]),
                        t._v('|'),
                        a('code', [t._v("'bevel'")]),
                        t._v('|'),
                        a('code', [t._v("'miter'")])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('undefined')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#line-styling' } }, [
                          a('code', [t._v('hoverBorderWidth')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('undefined')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#general' } }, [
                          a('code', [t._v('clip')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [
                        a('code', [t._v('number')]),
                        t._v('|'),
                        a('code', [t._v('object')]),
                        t._v('|'),
                        a('code', [t._v('false')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('undefined')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#data-structure' } }, [
                          a('code', [t._v('data')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number[]')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('strong', [t._v('required')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#line-styling' } }, [
                          a('code', [t._v('fill')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [
                        a('code', [t._v('boolean')]),
                        t._v('|'),
                        a('code', [t._v('string')])
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('false')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#general' } }, [
                          a('code', [t._v('label')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('string')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v("''")])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#general' } }, [
                          a('code', [t._v('order')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('0')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#line-styling' } }, [
                          a('code', [t._v('tension')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('0')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#point-styling' } }, [
                          a('code', [t._v('pointBackgroundColor')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Color')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v("'rgba(0, 0, 0, 0.1)'")])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#point-styling' } }, [
                          a('code', [t._v('pointBorderColor')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Color')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v("'rgba(0, 0, 0, 0.1)'")])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#point-styling' } }, [
                          a('code', [t._v('pointBorderWidth')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('1')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#point-styling' } }, [
                          a('code', [t._v('pointHitRadius')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('1')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#interactions' } }, [
                          a('code', [t._v('pointHoverBackgroundColor')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Color')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('undefined')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#interactions' } }, [
                          a('code', [t._v('pointHoverBorderColor')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('Color')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('undefined')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#interactions' } }, [
                          a('code', [t._v('pointHoverBorderWidth')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('1')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#interactions' } }, [
                          a('code', [t._v('pointHoverRadius')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('4')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#point-styling' } }, [
                          a('code', [t._v('pointRadius')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('3')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#point-styling' } }, [
                          a('code', [t._v('pointRotation')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('number')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('0')])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#point-styling' } }, [
                          a('code', [t._v('pointStyle')])
                        ])
                      ]),
                      t._v(' '),
                      a(
                        'td',
                        [
                          a(
                            'RouterLink',
                            {
                              attrs: {
                                to: '/configuration/elements.html#types'
                              }
                            },
                            [a('code', [t._v('pointStyle')])]
                          )
                        ],
                        1
                      ),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('Yes')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v("'circle'")])])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [
                        a('a', { attrs: { href: '#line-styling' } }, [
                          a('code', [t._v('spanGaps')])
                        ])
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('boolean')])]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', { staticStyle: { 'text-align': 'center' } }, [
                        t._v('-')
                      ]),
                      t._v(' '),
                      a('td', [a('code', [t._v('undefined')])])
                    ])
                  ])
                ]),
                t._v(' '),
                a('p', [
                  t._v('All these values, if '),
                  a('code', [t._v('undefined')]),
                  t._v(', fallback to the scopes described in '),
                  a('a', { attrs: { href: '../general/options' } }, [
                    t._v('option resolution')
                  ])
                ]),
                t._v(' '),
                a('h3', { attrs: { id: 'general' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#general' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' General')
                ]),
                t._v(' '),
                a('table', [
                  a('thead', [
                    a('tr', [
                      a('th', [t._v('Name')]),
                      t._v(' '),
                      a('th', [t._v('Description')])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', [a('code', [t._v('clip')])]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. '
                        ),
                        a('code', [t._v('0')]),
                        t._v(
                          ' = clip at chartArea. Clipping can also be configured per side: '
                        ),
                        a('code', [
                          t._v(
                            'clip: {left: 5, top: false, right: -2, bottom: 0}'
                          )
                        ])
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('label')])]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'The label for the dataset which appears in the legend and tooltips.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('order')])]),
                      t._v(' '),
                      a(
                        'td',
                        [
                          t._v(
                            'The drawing order of dataset. Also affects order for tooltip and legend. '
                          ),
                          a(
                            'RouterLink',
                            {
                              attrs: { to: '/charts/mixed.html#drawing-order' }
                            },
                            [t._v('more')]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                t._v(' '),
                a('h3', { attrs: { id: 'point-styling' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#point-styling' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Point Styling')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'The style of each point can be controlled with the following properties:'
                  )
                ]),
                t._v(' '),
                a('table', [
                  a('thead', [
                    a('tr', [
                      a('th', [t._v('Name')]),
                      t._v(' '),
                      a('th', [t._v('Description')])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', [a('code', [t._v('pointBackgroundColor')])]),
                      t._v(' '),
                      a('td', [t._v('The fill color for points.')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('pointBorderColor')])]),
                      t._v(' '),
                      a('td', [t._v('The border color for points.')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('pointBorderWidth')])]),
                      t._v(' '),
                      a('td', [
                        t._v('The width of the point border in pixels.')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('pointHitRadius')])]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'The pixel size of the non-displayed point that reacts to mouse events.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('pointRadius')])]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'The radius of the point shape. If set to 0, the point is not rendered.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('pointRotation')])]),
                      t._v(' '),
                      a('td', [t._v('The rotation of the point in degrees.')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('pointStyle')])]),
                      t._v(' '),
                      a('td', [
                        t._v('Style of the point. '),
                        a(
                          'a',
                          {
                            attrs: {
                              href: '../configuration/elements#point-styles'
                            }
                          },
                          [t._v('more...')]
                        )
                      ])
                    ])
                  ])
                ]),
                t._v(' '),
                a(
                  'p',
                  [
                    t._v('All these values, if '),
                    a('code', [t._v('undefined')]),
                    t._v(
                      ', fallback first to the dataset options then to the associated '
                    ),
                    a(
                      'RouterLink',
                      {
                        attrs: {
                          to: '/configuration/elements.html#point-configuration'
                        }
                      },
                      [a('code', [t._v('elements.point.*')])]
                    ),
                    t._v(' options.')
                  ],
                  1
                ),
                t._v(' '),
                a('h3', { attrs: { id: 'line-styling' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#line-styling' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Line Styling')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'The style of the line can be controlled with the following properties:'
                  )
                ]),
                t._v(' '),
                a('table', [
                  a('thead', [
                    a('tr', [
                      a('th', [t._v('Name')]),
                      t._v(' '),
                      a('th', [t._v('Description')])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', [a('code', [t._v('backgroundColor')])]),
                      t._v(' '),
                      a('td', [t._v('The line fill color.')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('borderCapStyle')])]),
                      t._v(' '),
                      a('td', [
                        t._v('Cap style of the line. See '),
                        a(
                          'a',
                          {
                            attrs: {
                              href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap',
                              target: '_blank',
                              rel: 'noopener noreferrer'
                            }
                          },
                          [t._v('MDN'), a('OutboundLink')],
                          1
                        ),
                        t._v('.')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('borderColor')])]),
                      t._v(' '),
                      a('td', [t._v('The line color.')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('borderDash')])]),
                      t._v(' '),
                      a('td', [
                        t._v('Length and spacing of dashes. See '),
                        a(
                          'a',
                          {
                            attrs: {
                              href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash',
                              target: '_blank',
                              rel: 'noopener noreferrer'
                            }
                          },
                          [t._v('MDN'), a('OutboundLink')],
                          1
                        ),
                        t._v('.')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('borderDashOffset')])]),
                      t._v(' '),
                      a('td', [
                        t._v('Offset for line dashes. See '),
                        a(
                          'a',
                          {
                            attrs: {
                              href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset',
                              target: '_blank',
                              rel: 'noopener noreferrer'
                            }
                          },
                          [t._v('MDN'), a('OutboundLink')],
                          1
                        ),
                        t._v('.')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('borderJoinStyle')])]),
                      t._v(' '),
                      a('td', [
                        t._v('Line joint style. See '),
                        a(
                          'a',
                          {
                            attrs: {
                              href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin',
                              target: '_blank',
                              rel: 'noopener noreferrer'
                            }
                          },
                          [t._v('MDN'), a('OutboundLink')],
                          1
                        ),
                        t._v('.')
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('borderWidth')])]),
                      t._v(' '),
                      a('td', [t._v('The line width (in pixels).')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('fill')])]),
                      t._v(' '),
                      a(
                        'td',
                        [
                          t._v('How to fill the area under the line. See '),
                          a(
                            'RouterLink',
                            { attrs: { to: '/charts/area.html' } },
                            [t._v('area charts')]
                          ),
                          t._v('.')
                        ],
                        1
                      )
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('tension')])]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'Bezier curve tension of the line. Set to 0 to draw straight lines.'
                        )
                      ])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('spanGaps')])]),
                      t._v(' '),
                      a('td', [
                        t._v(
                          'If true, lines will be drawn between points with no or null data. If false, points with '
                        ),
                        a('code', [t._v('null')]),
                        t._v(' data will create a break in the line.')
                      ])
                    ])
                  ])
                ]),
                t._v(' '),
                a(
                  'p',
                  [
                    t._v('If the value is '),
                    a('code', [t._v('undefined')]),
                    t._v(', the values fallback to the associated '),
                    a(
                      'RouterLink',
                      {
                        attrs: {
                          to: '/configuration/elements.html#line-configuration'
                        }
                      },
                      [a('code', [t._v('elements.line.*')])]
                    ),
                    t._v(' options.')
                  ],
                  1
                ),
                t._v(' '),
                a('h3', { attrs: { id: 'interactions' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#interactions' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Interactions')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'The interaction with each point can be controlled with the following properties:'
                  )
                ]),
                t._v(' '),
                a('table', [
                  a('thead', [
                    a('tr', [
                      a('th', [t._v('Name')]),
                      t._v(' '),
                      a('th', [t._v('Description')])
                    ])
                  ]),
                  t._v(' '),
                  a('tbody', [
                    a('tr', [
                      a('td', [a('code', [t._v('pointHoverBackgroundColor')])]),
                      t._v(' '),
                      a('td', [t._v('Point background color when hovered.')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('pointHoverBorderColor')])]),
                      t._v(' '),
                      a('td', [t._v('Point border color when hovered.')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('pointHoverBorderWidth')])]),
                      t._v(' '),
                      a('td', [t._v('Border width of point when hovered.')])
                    ]),
                    t._v(' '),
                    a('tr', [
                      a('td', [a('code', [t._v('pointHoverRadius')])]),
                      t._v(' '),
                      a('td', [t._v('The radius of the point when hovered.')])
                    ])
                  ])
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'scale-options' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#scale-options' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Scale Options')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'The radar chart supports only a single scale. The options for this scale are defined in the '
                  ),
                  a('code', [t._v('scales.r')]),
                  t._v(' property, which can be referenced from the '),
                  a('a', { attrs: { href: '../axes/radial/linear' } }, [
                    t._v('Linear Radial Axis page')
                  ]),
                  t._v('.')
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-javascript extra-class' }, [
                  a(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      a('code', [
                        t._v('options '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('scales')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('r')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n            '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('angleLines')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('display')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token boolean' } },
                          [t._v('false')]
                        ),
                        t._v('\n            '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n            '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('suggestedMin')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('50')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n            '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('suggestedMax')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('100')]
                        ),
                        t._v('\n        '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                a('h2', { attrs: { id: 'default-options' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#default-options' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Default Options')
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'It is common to want to apply a configuration setting to all created radar charts. The global radar chart settings are stored in '
                  ),
                  a('code', [t._v('Chart.overrides.radar')]),
                  t._v(
                    '. Changing the global options only affects charts created after the change. Existing charts are not changed.'
                  )
                ]),
                t._v(' '),
                a('h2', { attrs: { id: 'data-structure' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#data-structure' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Data Structure')
                ]),
                t._v(' '),
                a('p', [
                  t._v('The '),
                  a('code', [t._v('data')]),
                  t._v(
                    ' property of a dataset for a radar chart is specified as an array of numbers. Each point in the data array corresponds to the label at the same index.'
                  )
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-javascript extra-class' }, [
                  a(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      a('code', [
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('data')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('[')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('20')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('10')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(']')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                a('p', [
                  t._v(
                    'For a radar chart, to provide context of what each point means, we include an array of strings that show around each point in the chart.'
                  )
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-javascript extra-class' }, [
                  a(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      a('code', [
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('data')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('labels')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('[')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'Running'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'Swimming'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'Eating'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'Cycling'")]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(']')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('datasets')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('[')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('data')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('[')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('20')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('10')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('4')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('2')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(']')]
                        ),
                        t._v('\n    '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(']')]
                        ),
                        t._v('\n'),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                a('h2', { attrs: { id: 'internal-data-format' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#internal-data-format' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Internal data format')
                ]),
                t._v(' '),
                a('p', [a('code', [t._v('{x, y}')])])
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
      e.default = n.exports
    }
  }
])
