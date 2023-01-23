;(window.webpackJsonp = window.webpackJsonp || []).push([
  [179],
  {
    509: function (t, s, a) {
      'use strict'
      a.r(s)
      var n = a(6),
        e = Object(n.a)(
          {},
          function () {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'getting-started' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#getting-started' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Getting Started')
                ]),
                t._v(' '),
                a('p', [t._v("Let's get started using Chart.js!")]),
                t._v(' '),
                a(
                  'p',
                  [
                    t._v(
                      "First, we need to have a canvas in our page. It's recommended to give the chart its own container for "
                    ),
                    a(
                      'RouterLink',
                      { attrs: { to: '/configuration/responsive.html' } },
                      [t._v('responsiveness')]
                    ),
                    t._v('.')
                  ],
                  1
                ),
                t._v(' '),
                a('div', { staticClass: 'language-html extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                    a('code', [
                      a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('<')]
                          ),
                          t._v('div')
                        ]),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('<')]
                          ),
                          t._v('canvas')
                        ]),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token attr-name' } },
                          [t._v('id')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token attr-value' } },
                          [
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token punctuation attr-equals'
                                }
                              },
                              [t._v('=')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('"')]
                            ),
                            t._v('myChart'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('</')]
                          ),
                          t._v('canvas')
                        ]),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('</')]
                          ),
                          t._v('div')
                        ]),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v(
                    'Now that we have a canvas we can use, we need to include Chart.js in our page.'
                  )
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-html extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                    a('code', [
                      a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('<')]
                          ),
                          t._v('script')
                        ]),
                        t._v(' '),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token attr-name' } },
                          [t._v('src')]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token attr-value' } },
                          [
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token punctuation attr-equals'
                                }
                              },
                              [t._v('=')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('"')]
                            ),
                            t._v('https://cdn.jsdelivr.net/npm/chart.js'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token script' } }),
                      a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('</')]
                          ),
                          t._v('script')
                        ]),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v(
                    'Now, we can create a chart. We add a script to our page:'
                  )
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-html extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                    a('code', [
                      a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('<')]
                          ),
                          t._v('script')
                        ]),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token script' } }, [
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token language-javascript' }
                          },
                          [
                            t._v('\n  '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('const')]
                            ),
                            t._v(' labels '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('[')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'January'")]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'February'")]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'March'")]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'April'")]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'May'")]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'June'")]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n  '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(']')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(';')]
                            ),
                            t._v('\n\n  '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('const')]
                            ),
                            t._v(' data '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('{')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
                              },
                              [t._v('labels')]
                            ),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v(':')]
                            ),
                            t._v(' labels'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
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
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('[')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('{')]
                            ),
                            t._v('\n      '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
                              },
                              [t._v('label')]
                            ),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v(':')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'My First dataset'")]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n      '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
                              },
                              [t._v('backgroundColor')]
                            ),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v(':')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'rgb(255, 99, 132)'")]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n      '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
                              },
                              [t._v('borderColor')]
                            ),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v(':')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'rgb(255, 99, 132)'")]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n      '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
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
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('[')]
                            ),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token number' } },
                              [t._v('0')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
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
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token number' } },
                              [t._v('5')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
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
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token number' } },
                              [t._v('20')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token number' } },
                              [t._v('30')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token number' } },
                              [t._v('45')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(']')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('}')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(']')]
                            ),
                            t._v('\n  '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('}')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(';')]
                            ),
                            t._v('\n\n  '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('const')]
                            ),
                            t._v(' config '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('{')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
                              },
                              [t._v('type')]
                            ),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v(':')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'line'")]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
                              },
                              [t._v('data')]
                            ),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v(':')]
                            ),
                            t._v(' data'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n    '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
                              },
                              [t._v('options')]
                            ),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v(':')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('{')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('}')]
                            ),
                            t._v('\n  '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('}')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(';')]
                            ),
                            t._v('\n')
                          ]
                        )
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('</')]
                          ),
                          t._v('script')
                        ]),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v('Finally, render the chart using our configuration:')
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-html extra-class' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                    a('code', [
                      a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('<')]
                          ),
                          t._v('script')
                        ]),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token script' } }, [
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token language-javascript' }
                          },
                          [
                            t._v('\n  '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('const')]
                            ),
                            t._v(' myChart '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('new')]
                            ),
                            t._v(' '),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token class-name' } },
                              [t._v('Chart')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('(')]
                            ),
                            t._v('\n    document'),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('.')]
                            ),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token function' } },
                              [t._v('getElementById')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('(')]
                            ),
                            a(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'myChart'")]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(')')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n    config\n  '),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(')')]
                            ),
                            a(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(';')]
                            ),
                            t._v('\n')
                          ]
                        )
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('</')]
                          ),
                          t._v('script')
                        ]),
                        a(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      t._v('\n')
                    ])
                  ])
                ]),
                a('p', [
                  t._v(
                    "It's that easy to get started using Chart.js! From here you can explore the many options that can help you customise your charts with scales, tooltips, labels, colors, custom actions, and much more."
                  )
                ]),
                t._v(' '),
                a('p', [
                  t._v(
                    'Here the sample above is presented with our sample block:'
                  )
                ]),
                t._v(' '),
                a('chart-editor', {
                  attrs: {
                    code: "// <block:setup:1>\nconst labels = [\n  'January',\n  'February',\n  'March',\n  'April',\n  'May',\n  'June',\n];\nconst data = {\n  labels: labels,\n  datasets: [{\n    label: 'My First dataset',\n    backgroundColor: 'rgb(255, 99, 132)',\n    borderColor: 'rgb(255, 99, 132)',\n    data: [0, 10, 5, 2, 20, 30, 45],\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {}\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"
                  }
                }),
                a('div', { staticClass: 'custom-block tip' }, [
                  a('p', { staticClass: 'custom-block-title' }, [t._v('Note')]),
                  t._v(' '),
                  a('p', [
                    t._v(
                      'As you can see, some of the boilerplate needed is not visible in our sample blocks, as the samples focus on the configuration options.'
                    )
                  ])
                ]),
                t._v(' '),
                a(
                  'p',
                  [
                    t._v('All our examples are '),
                    a('RouterLink', { attrs: { to: '/samples/' } }, [
                      t._v('available online')
                    ]),
                    t._v('.')
                  ],
                  1
                ),
                t._v(' '),
                a('p', [
                  t._v(
                    'To run the samples locally you first have to install all the necessary packages using the '
                  ),
                  a('code', [t._v('npm ci')]),
                  t._v(' command, after this you can run '),
                  a('code', [t._v('npm run docs:dev')]),
                  t._v(
                    ' to build the documentation. As soon as the build is done, you can go to '
                  ),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'http://localhost:8080/samples/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('http://localhost:8080/samples/'), a('OutboundLink')],
                    1
                  ),
                  t._v(' to see the samples.')
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
      s.default = e.exports
    }
  }
])
